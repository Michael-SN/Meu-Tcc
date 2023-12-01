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
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Anamnese do Paciente</h5>
            <p class="mb-0 text-sm font-weight-bold">
              Informções sobre consumo, hábitos e costumes do paciente
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AnamnesisForm :onSubmit="handleCreate" />
</template>

<script>
import register from "@/views/Anamnesis/_store/register";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("anamnesis");

import AnamnesisForm from "./_components/AnamnesisForm.vue";

import { onToastify } from "@/helpers";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "AnamnesisCreate",
  components: {
    AnamnesisForm,
  },
  methods: {
    ...mapActions(["anamnesisCreate"]),

    async handleCreate(dataAnamnesis) {
      const patientId = this.$route.params.patientId;

      const { success, error } = await this.anamnesisCreate({
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
  created() {
    register(this.$store);
    console.log(this.$route.params);
  },
};
</script>
