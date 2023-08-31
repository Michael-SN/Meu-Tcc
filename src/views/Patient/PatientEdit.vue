<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Cadastrar um novo paciente</h6>
    </div>
    <div class="card-body">
      <form role="form" @submit.prevent="handleUpdate">
        <div class="row">
          <div class="col-6">
            <soft-input
              id="name"
              type="text"
              placeholder="Nome completo"
              aria-label="Name"
              v-model:value="patientDataUpdate.fullName"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="cpf"
              type="text"
              placeholder="CPF"
              aria-label="CPF"
              v-model:value="patientDataUpdate.cpf"
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
              v-model:value="patientDataUpdate.email"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="dateOfBirth"
              type="date"
              aria-label="Data de Nacimento"
              v-model:value="patientDataUpdate.dateOfBirth"
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
              v-model:value="patientDataUpdate.telephone"
            />
          </div>
          <div class="col-6">
            <soft-input
              id="phoneNumber"
              type="text"
              placeholder="(DDD) 99999-9999"
              aria-label="(DDD) 99999-9999"
              v-model:value="patientDataUpdate.phoneNumber"
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
              v-model:value="patientDataUpdate.address"
            />
          </div>
        </div>

        <div class="text-center">
          <soft-button
            color="dark"
            full-width
            variant="gradient"
            class="my-4 mb-2"
            >Atualizar Dados do paciente</soft-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");

import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";

import { onToastify } from "@/helpers";

export default {
  name: "PatientEdit",
  data() {
    return {
      patientDataUpdate: {
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
  computed: {
    ...mapState(["patient"]),
  },
  async created() {
    const patientId = this.$route.params.id;
    const { success } = await this.patientData(patientId);

    if (success) {
      this.patientDataUpdate = this.patient;
    }
  },
  components: {
    SoftInput,
    SoftButton,
  },
  methods: {
    ...mapActions(["patientData", "patientUpdate"]),

    async handleUpdate() {
      const { success, error, data } = await this.patientUpdate(
        this.patientDataUpdate
      );

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
};
</script>
