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
            <h5 class="mb-1">Pacientes</h5>
            <p class="mb-0 text-sm font-weight-bold">Lista de Pacientes cadastrados</p>
          </div>
        </div>
        <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <router-link
                  to="/patients/create"
                  class="px-0 py-1 mb-0 nav-link active cursor-pointer"
                >
                  <i class="fa fa-plus-square-o pe-2 text-success" aria-hidden="true"></i>
                  <span class="ms-1 fw-bold text-success">Cadastrar novo paciente</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
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

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

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
