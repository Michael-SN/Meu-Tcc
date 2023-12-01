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
        <div class="mx-auto mt-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="p-1 bg-transparent nav align-items-center justify-content-end"
              role="tablist"
            >
              <li class="nav-item px-2">
                <router-link
                  class="nav-link mb-0 text-dark"
                  :to="`/measure/${patient?.id}/create`"
                >
                  <span class="ms-1">Registrar medidas</span>
                </router-link>
              </li>
              <li
                v-if="anamnesis === undefined || anamnesis === null"
                class="nav-item px-2"
              >
                <router-link
                  class="nav-link mb-0 text-dark"
                  :to="`/anamnesis/${patient?.id}/create`"
                >
                  <span class="ms-1">Realizar anamnese</span>
                </router-link>
              </li>
              <li v-else class="nav-item px-2">
                <router-link
                  class="nav-link mb-0 text-dark"
                  :to="`/anamnesis/${patient?.id}/details`"
                >
                  <span class="ms-1">Visualizar Anamnese</span>
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
        <MeasureTable
          v-if="measures.length !== 0"
          :measures="measures"
          :patient="patient"
        />
        <h4 v-else class="text-md text-center">
          O Paciente ainda não teve suas medidas registradas
        </h4>
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
} = createNamespacedHelpers("measures");

const {
  mapState: mapStateAnamnesis,
  mapActions: mapActionsAnamnesis,
} = createNamespacedHelpers("anamnesis");

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
    ...mapStateAnamnesis(["anamnesis"]),
  },
  methods: {
    ...mapActionsPatient(["patientData"]),
    ...mapActionsMeasure(["measureList", "measureCreate"]),
    ...mapActionsAnamnesis(["anamnesisList"]),
  },
  async created() {
    const patientId = this.$route.params.id;

    const [patientResponse, measureResponse, anamnesisResponse] = await Promise.all([
      this.patientData(patientId),
      this.measureList(patientId),
      this.anamnesisList(patientId),
    ]);

    if (!patientResponse.success || !measureResponse.success || !anamnesisResponse) {
      const {
        response: { data: message },
      } = patientResponse.error || measureResponse.error || anamnesisResponse.error;

      onToastify(message);
    }
  },
};
</script>
