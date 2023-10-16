<template>
  <div class="mt-4 container-fluid">
    <div class="card" style="padding: 2.5rem">
      <form role="form" @submit.prevent="handleOnSubmit">
        <fieldset class="card" :style="boxShadowStyle">
          <div class="card-header pb-0">
            <h6>Dados pessoais</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <label for="name">Nome Completo</label>
                <soft-input
                  id="name"
                  type="text"
                  placeholder="Nome completo"
                  aria-label="Name"
                  v-model:value="patientLocal.fullName"
                />
              </div>
              <div class="col-6">
                <label for="email">E-mail</label>
                <soft-input
                  id="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  v-model:value="patientLocal.email"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="cpf">CPF</label>
                <soft-input
                  id="cpf"
                  type="text"
                  placeholder="CPF"
                  aria-label="CPF"
                  v-model:value="patientLocal.cpf"
                />
              </div>

              <div class="col-4">
                <label for="dateOfBirth">Data de nascimento</label>
                <soft-input
                  id="dateOfBirth"
                  type="date"
                  aria-label="Data de Nacimento"
                  v-model:value="patientLocal.dateOfBirth"
                />
              </div>
              <div class="col-4">
                <label for="gender">Gênero</label>
                <div class="row">
                  <div class="col-4">
                    <soft-radio
                      id="male"
                      name="gender"
                      checked
                      value="Masculino"
                      v-model:value="patientLocal.gender"
                      >Masculino</soft-radio
                    >
                  </div>
                  <div class="col-4">
                    <soft-radio
                      id="female"
                      name="gender"
                      value="Feminino"
                      v-model:value="patientLocal.gender"
                      >Feminino</soft-radio
                    >
                  </div>
                  <div class="col-4">
                    <soft-radio
                      id="others"
                      name="gender"
                      value="Outros"
                      v-model:value="patientLocal.gender"
                      >Outros</soft-radio
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="telephone">Telefone</label>
                <soft-input
                  id="telephone"
                  type="text"
                  placeholder="(DDD) 9999-9999"
                  aria-label="(DDD) 9999-9999"
                  v-model:value="patientLocal.telephone"
                />
              </div>
              <div class="col-6">
                <label for="phoneNumber">Celular</label>
                <soft-input
                  id="phoneNumber"
                  type="text"
                  placeholder="(DDD) 99999-9999"
                  aria-label="(DDD) 99999-9999"
                  v-model:value="patientLocal.phoneNumber"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset class="card mt-5" :style="boxShadowStyle">
          <div class="card-header pb-0">
            <h6>Endereço</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <label for="cep">CEP</label>
                <soft-input
                  id="cep"
                  type="text"
                  placeholder="CEP"
                  aria-label="CEP"
                  v-model:value="patientLocal.cep"
                  @keyup="getCEP"
                />
              </div>
              <div class="col-6">
                <label for="street">Rua</label>
                <soft-input
                  id="street"
                  type="text"
                  placeholder="Ex.: Rua da Dores"
                  aria-label="Ex.: Rua da Dores"
                  v-model:value="patientLocal.street"
                />
              </div>
              <div class="col-3">
                <label for="number">Número</label>
                <soft-input
                  id="number"
                  type="text"
                  placeholder="Ex.: 317"
                  aria-label="Ex.: 317"
                  v-model:value="patientLocal.number"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <label for="complement">Complemento (opcional)</label>
                <soft-input
                  id="complement"
                  type="text"
                  placeholder="Ex.: Bloco 3 Apt 300"
                  aria-label="Ex.: Bloco 3 Apt 300"
                  v-model:value="patientLocal.complement"
                />
              </div>
              <div class="col-3">
                <label for="district">Bairro</label>
                <soft-input
                  id="district"
                  type="text"
                  placeholder="Ex.: Santa Rosa"
                  aria-label="Ex.: Santa Rosa"
                  v-model:value="patientLocal.district"
                />
              </div>
              <div class="col-3">
                <label for="city">Cidade</label>
                <soft-input
                  id="city"
                  type="text"
                  placeholder="Ex.: Niterói"
                  aria-label="Ex.: Niterói"
                  v-model:value="patientLocal.city"
                  disabled
                />
              </div>
              <div class="col-2">
                <label for="state">Estado</label>
                <soft-input
                  id="state"
                  type="text"
                  placeholder="Ex.: RJ"
                  aria-label="Ex.: RJ"
                  v-model:value="patientLocal.state"
                  disabled
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="text-end">
          <soft-button color="dark" size="lg" variant="gradient" class="my-4 mb-2">
            <i class="fa fa-plus-square-o pe-2 text-white" aria-hidden="true"></i>
            <span v-if="action === 'Editar'"> Salvar </span>
            <span v-else>Cadastrar </span>
          </soft-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import SoftRadio from "@/components/SoftRadio.vue";
import { viaCEP } from "@/axios";

export default {
  name: "PatientCreate",
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    patientData: {
      type: Object,
    },
    action: {
      type: String,
    },
  },
  data() {
    return {
      patientLocal: {
        fullName: this.patientData?.fullName || "",
        cpf: this.patientData?.cpf || "",
        email: this.patientData?.email || "",
        dateOfBirth: this.patientData?.dateOfBirth || "",
        gender: this.patientData?.gender || "Masculino",
        telephone: this.patientData?.telephone || "",
        phoneNumber: this.patientData?.phoneNumber || "",
        cep: this.patientData?.cep || "",
        street: this.patientData?.street || "",
        number: this.patientData?.number || "",
        complement: this.patientData?.complement || "",
        district: this.patientData?.district || "",
        city: this.patientData?.city || "",
        state: this.patientData?.state || "",
      },
      boxShadowStyle: "box-shadow: 0 3px 10px 6px rgb(243, 242, 242);",
    };
  },
  components: {
    SoftInput,
    SoftButton,
    SoftRadio,
  },
  watch: {
    patientData(newValue) {
      if (newValue) {
        this.patientLocal = newValue;
      }
    },
  },
  methods: {
    async getCEP() {
      const cep = this.patientLocal.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        const { data } = await viaCEP(cep);
        this.patientLocal.street = data.logradouro;
        this.patientLocal.district = data.bairro;
        this.patientLocal.city = data.localidade;
        this.patientLocal.state = data.uf;
      }
    },
    handleOnSubmit() {
      this.onSubmit(this.patientLocal);
    },
  },
};
</script>
