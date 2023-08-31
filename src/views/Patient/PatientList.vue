<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <router-link to="/patients/create" class="btn mb-0 btn-outline-success btn-sm">
          Cadastrar Novo Paciente</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <PatientTable :patients="patients" />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");

import { onToastify } from "@/helpers";

import PatientTable from "./_components/PatientTable.vue";

export default {
  name: "patients",
  components: {
    PatientTable,
  },
  computed: {
    ...mapState(["patients"]),
  },
  async created() {
    const { error, success } = await this.patientList();

    if (!success) {
      const {
        response: { data: message },
      } = error;

      onToastify(message);
    }
  },
  methods: {
    ...mapActions(["patientList"]),
  },
};
</script>
