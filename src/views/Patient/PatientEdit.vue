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
            <h5 class="mb-1">Editar dados do paciente</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PatientForm :patientData="patient" :onSubmit="handleUpdate" action="Editar" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import { onToastify } from "@/helpers";
import PatientForm from "./_components/PatientForm.vue";

export default {
  name: "PatientEdit",
  computed: {
    ...mapState(["patient"]),
  },

  components: {
    PatientForm,
  },
  methods: {
    ...mapActions(["patientData", "patientUpdate"]),

    async handleUpdate(dataPatient) {
      const { success, error, data } = await this.patientUpdate(dataPatient);

      if (success) {
        const {
          patientUpdate: { id },
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
  beforeMount() {
    this.$store.state.isAbsolute = false;
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);

    const patientId = this.$route.params.id;
    this.patientData(patientId);
  },
};
</script>
