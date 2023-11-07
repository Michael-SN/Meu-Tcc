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
            <h5 class="mb-1">{{ user?.fullName }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ user?.email }}</p>
          </div>
        </div>
        <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <router-link
                  class="px-0 py-1 mb-0 nav-link active"
                  :to="`/profile/${user?.id}/update`"
                >
                  <span class="ms-1">Alterar Informações</span>
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
        <div class="card h-100">
          <div class="p-4 card-body">
            <hr class="my-2 horizontal gray-light" />
            <div class="info-table">
              <div class="row">
                <p><strong>Nome:&nbsp;</strong>{{ user?.fullName }}</p>
              </div>
              <div class="row">
                <p><strong>CRN:&nbsp;</strong>{{ user?.crn }}</p>
              </div>
              <div class="row">
                <p><strong>E-mail:&nbsp;</strong>{{ user?.email }}</p>
              </div>
              <div class="row">
                <div class="col-3">
                  <p><strong>Telefone:&nbsp;</strong>{{ user?.telephone }}</p>
                </div>
                <div class="col-3">
                  <p><strong>Celular:&nbsp;</strong>{{ user?.phoneNumber }}</p>
                </div>
              </div>
              <div class="row">
                <p>
                  <strong>Endereço:&nbsp;</strong>{{ user?.street }}, {{ user?.number }} -
                  {{ user?.city }} - {{ user?.state }}
                </p>
              </div>
              <div class="row">
                <div class="col-3">
                  <p><strong>CEP:&nbsp;</strong>{{ user?.cep }}</p>
                </div>
                <div class="col-3">
                  <p><strong>Complemento:&nbsp;</strong>{{ user?.complement }}</p>
                </div>
                <div class="col-3">
                  <p><strong>Bairro:&nbsp;</strong>{{ user?.district }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import register from "./_store/register";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("profile");

export default {
  name: "ProfileInfo",
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
    register(this.$store);
    await this.userData(1);
  },
  methods: {
    ...mapActions(["userData"]),
  },
};
</script>
