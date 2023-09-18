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
          <div
            class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
          >
            <div class="nav-wrapper position-relative end-0">
              <ul
                class="p-1 bg-transparent nav nav-pills nav-fill"
                role="tablist"
              >
                <li class="nav-item">
                  <soft-button
                    color="dark"
                    variant="gradient"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    >Medidas</soft-button
                  >
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
          <MeasureTable :measures="patientMeasuresList" />
        </div>
      </div>
    </div>
    <!-- MODAL -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" id="staticBackdropLabel">Medidas</h2>
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Fechar
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <img
                  src="https://placehold.co/300x500"
                  alt="Human Body Measure"
                  class="w-100"
                />
              </div>
              <div class="col-6">
                <form @submit="handleSubmit">
                  <div class="row">
                    <div class="col-12">
                      <label for="">Altura (cm)</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Altura (cm)"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Peso (ex.: 80)</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Peso (ex.: 80)"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Pescoço</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Pescoço"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Braço Diereito</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Braço Diereito"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Braço Esquerdo</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Braço Esquerdo"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Perna Direito</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Perna Direito"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Perna Esquerda</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Perna Esquerda"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Cintura</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Cintura"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Quadril</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Quadril"
                        aria-label=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="">Peitoral</label>
                      <soft-input
                        id=""
                        type="number"
                        placeholder="Peitoral"
                        aria-label=""
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <soft-button color="dark" variant="gradient">Salvar</soft-button>
          </div>
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
import MeasureTable from "@/views/Patient/_components/MeasureTable.vue";

import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";

export default {
  name: "PatientDetails",
  components: {
    PatientInfoCard,
    MeasureTable,
    SoftInput,
    SoftButton,
  },
  computed: {
    ...mapState(["patient", "patientMeasuresList"]),
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
