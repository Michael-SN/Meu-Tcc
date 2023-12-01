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
            <h5 class="mb-1">Alterar informações do nutricionista</h5>
            <span
              >Operação possível caso haja alguma divergência com relação aos dados do
              profissional</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 container-fluid">
    <div class="card" style="padding: 2.5rem">
      <form role="form" @submit.prevent="handleUpdate">
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
                  v-model:value.lazy="userLocal.fullName"
                />
              </div>
              <div class="col-5">
                <label for="crn">CRN</label>
                <soft-input
                  id="crn"
                  type="text"
                  placeholder="CRN"
                  aria-label="CRN"
                  v-model:value="userLocal.crn"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <label for="email">E-mail</label>
                <soft-input
                  id="email"
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  v-model:value.lazy="userLocal.email"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <label for="telephone">Telefone</label>
                <soft-input
                  id="telephone"
                  type="text"
                  placeholder="(DDD) 9999-9999"
                  aria-label="(DDD) 9999-9999"
                  v-model:value="userLocal.telephone"
                />
              </div>
              <div class="col-5">
                <label for="phoneNumber">Celular</label>
                <soft-input
                  id="phoneNumber"
                  type="text"
                  placeholder="(DDD) 99999-9999"
                  aria-label="(DDD) 99999-9999"
                  v-model:value="userLocal.phoneNumber"
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
                  v-model:value="userLocal.cep"
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
                  v-model:value="userLocal.street"
                />
              </div>
              <div class="col-3">
                <label for="number">Número</label>
                <soft-input
                  id="number"
                  type="text"
                  placeholder="Ex.: 317"
                  aria-label="Ex.: 317"
                  v-model:value="userLocal.number"
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
                  v-model:value="userLocal.complement"
                />
              </div>
              <div class="col-3">
                <label for="district">Bairro</label>
                <soft-input
                  id="district"
                  type="text"
                  placeholder="Ex.: Santa Rosa"
                  aria-label="Ex.: Santa Rosa"
                  v-model:value="userLocal.district"
                />
              </div>
              <div class="col-3">
                <label for="city">Cidade</label>
                <soft-input
                  id="city"
                  type="text"
                  placeholder="Ex.: Niterói"
                  aria-label="Ex.: Niterói"
                  v-model:value="userLocal.city"
                />
              </div>
              <div class="col-2">
                <label for="state">Estado</label>
                <soft-input
                  id="state"
                  type="text"
                  placeholder="Ex.: RJ"
                  aria-label="Ex.: RJ"
                  v-model:value="userLocal.state"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="text-end">
          <soft-button color="dark" size="lg" variant="gradient" class="my-4 mb-2">
            <i class="fa fa-plus-square-o pe-2 text-white" aria-hidden="true"></i>
            <span>Salvar alteração </span>
          </soft-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("profile");

import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import { viaCEP } from "@/axios";
import { onToastify } from "@/helpers";

export default {
  name: "Profile",
  data() {
    return {
      userLocal: {
        fullName: this.user?.fullName || "",
        crn: this.user?.crn || "",
        email: this.user?.email || "",
        telephone: this.user?.telephone || "",
        phoneNumber: this.user?.phoneNumber || "",
        cep: this.user?.cep || "",
        street: this.user?.street || "",
        number: this.user?.number || "",
        complement: this.user?.complement || "",
        district: this.user?.district || "",
        city: this.user?.city || "",
        state: this.user?.state || "",
      },
      boxShadowStyle: "box-shadow: 0 3px 10px 6px rgb(243, 242, 242);",
    };
  },
  components: {
    SoftInput,
    SoftButton,
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
    ...mapState(["user"]),
  },
  async created() {
    await this.userData(1);
    this.userLocal = this.user;
  },
  methods: {
    ...mapActions(["userData", "userUpdate"]),
    async getCEP() {
      const cep = this.userLocal.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        const { data } = await viaCEP(cep);
        this.userLocal.street = data.logradouro;
        this.userLocal.district = data.bairro;
        this.userLocal.city = data.localidade;
        this.userLocal.state = data.uf;
      }
    },
    async handleUpdate() {
      const { success, error } = await this.userUpdate(this.userLocal);

      if (success) {
        this.$router.go(-1);
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
