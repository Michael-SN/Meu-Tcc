<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Cadastrar um novo paciente</h6>
    </div>
    <div class="card-body">
      <form role="form" @submit.prevent="handleCreate">
        <div class="row">
          <div class="col-6">
            <soft-input
              id="name"
              type="text"
              placeholder="Nome completo"
              aria-label="Name"
              v-model:value="patient.fullName"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="cpf"
              type="text"
              placeholder="CPF"
              aria-label="CPF"
              v-model:value="patient.cpf"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <soft-input
              id="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              v-model:value="patient.email"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="dateOfBirth"
              type="date"
              aria-label="Data de Nacimento"
              v-model:value="patient.dateOfBirth"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <soft-input
              id="telephone"
              type="text"
              placeholder="Telefone"
              aria-label="Telefone"
              v-model:value="patient.telephone"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="phoneNumber"
              type="text"
              placeholder="(DDD) 99999-9999"
              aria-label="(DDD) 99999-9999"
              v-model:value="patient.phoneNumber"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <soft-input
              id="address"
              type="text"
              placeholder="Endereço"
              aria-label="Endereço"
              v-model:value="patient.address"
            />
          </div>
        </div>

        <div class="text-center">
          <soft-button color="dark" full-width variant="gradient" class="my-4 mb-2"
            >Cadastrar</soft-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("patients");

import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";

import { onToastify } from "@/helpers";

export default {
  name: "PatientCreate",
  data() {
    return {
      patient: {
        fullName: "",
        cpf: "",
        email: "",
        dateOfBirth: "",
        telephone: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  components: {
    SoftInput,
    SoftButton,
  },
  methods: {
    ...mapActions(["patientCreate"]),

    async handleCreate() {
      const { success, error, data } = await this.patientCreate(this.patient);

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
};
</script>
