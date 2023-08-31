<template>
  <div>
    <div class="container-fluid">
      <div class="mt-4 page-header min-height-150 border-radius-xl bg-dark">
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
                  <a
                    class="px-0 py-1 mb-0 nav-link active"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="true"
                  >
                    <span class="ms-1">Medidas</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="px-0 py-1 mb-0 nav-link"
                    data-bs-toggle="tab"
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                  >
                    <span class="ms-1">Anamnese</span>
                  </a>
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
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");
import { onToastify } from "@/helpers";
import PatientInfoCard from "@/views/Patient/_components/PatientInfoCard.vue";

export default {
  name: "PatientDetails",
  components: {
    PatientInfoCard,
  },
  computed: {
    ...mapState(["patient"]),
  },
  async created() {
    const patientId = this.$route.params.id;
    const { success, error } = await this.patientData(patientId);

    if (!success) {
      const {
        response: { data: message },
      } = error;

      onToastify(message);
    }
  },
  methods: {
    ...mapActions(["patientData"]),
  },
};
</script>
