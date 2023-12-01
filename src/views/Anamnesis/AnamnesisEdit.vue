<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl bg-dark"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <!-- <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ patient?.fullName }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ patient?.email }}</p>
          </div>
        </div>
        <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link"
                  :to="`/anamnesis/${patient?.id}/edit`"
                >
                  <span class="ms-1">Editar questionário de anamnese</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
  </div>
  <AnamnesisForm :anamnesisData="anamnesis" :onSubmit="handleUpdate" action="Editar" />
</template>

<script>
import register from "@/views/Anamnesis/_store/register";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("anamnesis");

import AnamnesisForm from "./_components/AnamnesisForm.vue";
import { onToastify } from "@/helpers";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "AnamnesisEdit",
  components: {
    AnamnesisForm,
  },
  computed: {
    ...mapState(["anamnesis"]),
    getPatientId() {
      return this.$route.params.patientId;
    },
  },
  methods: {
    ...mapActions(["anamnesisList", "anamnesisUpdate"]),
    async handleUpdate(dataAnamnesis) {
      const patientId = this.$route.params.patientId;

      const { success, error } = await this.anamnesisUpdate({
        payload: dataAnamnesis,
        patientId,
      });

      if (!success) {
        const {
          response: { data: message },
        } = error;

        onToastify(message);
      } else {
        this.$router.push(`/anamnesis/${patientId}/details`);
      }
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeMount() {
    this.$store.state.isAbsolute = false;
  },
  async created() {
    register(this.$store);

    const { error, success } = await this.anamnesisList(this.getPatientId);

    if (!success) {
      const {
        response: { data: message },
      } = error;

      onToastify(message);
    }
  },
};
</script>
