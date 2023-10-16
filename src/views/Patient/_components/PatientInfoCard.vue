<template>
  <div class="card h-100">
    <div class="p-4 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
        <div class="col-md-4 text-end">
          <ul class="d-flex justify-content-end list-unstyled gap-4 mb-0">
            <li>
              <router-link
                class="btn btn-sm btn-success mb-0"
                style="
                  --bs-btn-padding-y: 0.25rem;
                  --bs-btn-padding-x: 0.5rem;
                  --bs-btn-font-size: 0.75rem;
                "
                :to="`/patients/${patient?.id}/edit`"
              >
                <i class="text-sm fa fa-user-edit text-white"></i>
              </router-link>
            </li>
            <li>
              <button
                class="btn btn-sm btn-danger mb-0"
                style="
                  --bs-btn-padding-y: 0.25rem;
                  --bs-btn-padding-x: 0.5rem;
                  --bs-btn-font-size: 0.75rem;
                "
                @click="handleDelete"
              >
                <i class="text-sm fa fa-trash text-white"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-4 card-body">
      <hr class="my-2 horizontal gray-light" />
      <div class="info-table">
        <div class="row">
          <div class="col-3">
            <strong class="text-dark">CPF:</strong> <br />
            {{ patient?.cpf }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Nome Compleo:</strong> <br />
            {{ patient?.fullName }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Data de Nascimento:</strong> <br />
            {{ formatterDate(patient?.dateOfBirth) }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Gênero:</strong> <br />
            {{ patient?.gender }}
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <strong class="text-dark">E-mail</strong> <br />
            {{ patient?.email }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Telefone:</strong> <br />
            {{ patient?.telephone }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Celular:</strong> <br />
            {{ patient?.phoneNumber }}
          </div>
          <div class="col-3">
            <strong class="text-dark">CEP:</strong> <br />
            {{ patient?.cep }}
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <strong class="text-dark">Rua:</strong> <br />
            {{ patient?.street }} - {{ patient?.number }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Complemento:</strong> <br />
            {{ patient?.complement }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Bairro:</strong> <br />
            {{ patient?.district }}
          </div>
          <div class="col-3">
            <strong class="text-dark">Cidade:</strong> <br />
            {{ patient?.city }}
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-3">
            <strong class="text-dark">Estado:</strong> <br />
            {{ patient?.state }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");
import { onToastify, formatterDate } from "@/helpers";

export default {
  name: "PatientInfoCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    action: {
      type: Object,
      route: String,
      tooltip: String,
      default: () => ({
        route: "javascript:;",
      }),
    },
  },
  computed: {
    ...mapState(["patient"]),
  },
  methods: {
    ...mapActions(["patientDelete"]),
    formatterDate,
    async handleDelete() {
      const confirm = window.confirm("Do you want this ?"); // PROVISORIo
      if (confirm) {
        const { success, error } = await this.patientDelete(this.patient?.id);

        if (success) {
          this.$router.push("/patients/list");
        } else {
          const {
            response: { data: message },
          } = error;

          onToastify(message);
        }
      }
    },
  },
};
</script>
