<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-200 border-radius-xl bg-dark"
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
          <div class="h-100 py-2">
            <h5 class="mb-1">Registrar Medidas</h5>
            <small>Registrar medidas realizadas durante a consulta</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MeasureForm
    :measureData="getMeasure(+getMeasureId)"
    :onSubmit="handleUpdate"
    action="Editar"
  />
</template>

<script>
import register from "@/views/Measure/_store/register";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("measures");

import MeasureForm from "./_components/MeasureForm.vue";

import { onToastify } from "@/helpers";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "MeasureEdit",
  components: {
    MeasureForm,
  },
  computed: {
    ...mapGetters(["getMeasure"]),
    getMeasureId() {
      return this.$route.params.measureId;
    },
    getPatientId() {
      return this.$route.params.patientId;
    },
  },
  methods: {
    ...mapActions(["measureList", "measureUpdate"]),

    async handleUpdate(dataMeasure) {
      const { success, error } = await this.measureUpdate({
        payload: dataMeasure,
        measureId: this.getMeasureId,
      });

      if (!success) {
        const {
          response: { data: message },
        } = error;

        onToastify(message);
      } else {
        this.$router.push(`/patients/${this.getPatientId}/details`);
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

    const { error, success } = await this.measureList(this.getPatientId);

    if (!success) {
      const {
        response: { data: message },
      } = error;

      onToastify(message);
    }
  },
};
</script>
