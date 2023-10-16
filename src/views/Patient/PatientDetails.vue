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
            <h5 class="mb-1">{{ patient?.fullName }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ patient?.email }}</p>
          </div>
        </div>
        <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active"
                  :to="`/patients/${patient?.id}/edit`"
                >
                  <span class="ms-1">Fazer Avalização</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12">
        <PatientInfoCard title="Informções pessoais do paciente" />
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12">
        <MeasureTable :measures="measures" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState: mapStatePatient,
  mapActions: mapActionsPatient,
} = createNamespacedHelpers("patients");
const {
  mapState: mapStateMeasure,
  mapActions: mapActionsMeasure,
} = createNamespacedHelpers("measurements");

import { onToastify } from "@/helpers";

import PatientInfoCard from "@/views/Patient/_components/PatientInfoCard.vue";
import MeasureTable from "@/views/Patient/_components/MeasureTable.vue";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "PatientDetails",
  components: {
    PatientInfoCard,
    MeasureTable,
  },
  data() {
    return {
      bodyMeasurements: {
        height: "0",
        weight: "0",
        head: "0",
        neck: "0",
        shoulders: "0",
        chest: "0",
        right_arm: "0",
        left_arm: "0",
        waist: "0",
        hips: "0",
        right_thigh: "0",
        left_thigh: "0",
        right_calf: "0",
        left_calf: "0",
      },
    };
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeMount() {
    this.$store.state.isAbsolute = false;
  },
  computed: {
    ...mapStatePatient(["patient"]),
    ...mapStateMeasure(["measures"]),
  },
  async created() {
    const patientId = this.$route.params.id;

    const [patientResponse, measureResponse] = await Promise.all([
      this.patientData(patientId),
      this.measureList(patientId),
    ]);

    if (!patientResponse.success || !measureResponse.success) {
      const {
        response: { data: message },
      } = patientResponse.error || measureResponse.error;

      onToastify(message);
    }
  },
  methods: {
    ...mapActionsPatient(["patientData"]),
    ...mapActionsMeasure(["measureList", "measureCreate"]),

    async handleSubmit() {
      console.log(this.patient.id);
      const { success, error } = await this.measureCreate(this.bodyMeasurements);

      if (success) {
        onToastify("Lalalala");
      } else {
        const {
          response: { data: message },
        } = error;

        onToastify(message);
      }
    },
  },
};
</script>
