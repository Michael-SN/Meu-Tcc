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
            <h5 class="mb-1">Cadastrar um novo paciente</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PatientForm :onSubmit="handleCreate" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("patients");

import { onToastify } from "@/helpers";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import PatientForm from "./_components/PatientForm.vue";

export default {
  name: "PatientCreate",
  components: {
    PatientForm,
  },
  methods: {
    ...mapActions(["patientCreate"]),
    async handleCreate(dataPatient) {
      const { success, error, data } = await this.patientCreate(dataPatient);

      if (success) {
        const {
          patient: { id },
        } = data;
        this.$router.push(`/patients/${id}/details`);
      } else {
        const {
          response: { data: message },
        } = error;

        onToastify(message);
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
};
</script>
