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
            <h5 class="mb-1">Questionoário de Anamnese</h5>
            <p class="mb-0 text-sm font-weight-bold">
              Questionário que visa registrar informações cotidianas sobre o paciente.
            </p>
          </div>
        </div>
        <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0">
            <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <router-link
                  :to="`/anamnesis/${patientId}/edit`"
                  class="px-0 py-1 mb-0 nav-link active cursor-pointer"
                >
                  <i class="fa fa-edit pe-2 text-success" aria-hidden="true"></i>
                  <span class="ms-1 fw-bold text-success">Editar Questionário</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 container-fluid">
    <div class="row">
      <div class="card" style="padding: 2.5rem">
        <div class="row" v-for="([key, value], index) in anamnesisQuiz" :key="index">
          <strong>{{ index + 1 }} : {{ quiz[key] }}</strong>
          <p>{{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import register from "@/views/Anamnesis/_store/register";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("anamnesis");

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import { onToastify } from "@/helpers";

export default {
  name: "Anamnesis",
  data() {
    return {
      patientId: null,
      anamnesisAnswered: null,
      quiz: {
        medicalHistory:
          "Você tem algum histórico médico relevante que eu deva conhecer? (ex: diabetes, hipertensão, problemas cardíacos)",
        medications:
          "Atualmente, você está tomando algum medicamento regularmente? Se sim, por favor, liste-os.",
        allergies: "Você possui alguma alergia alimentar ou outra alergia relevante?",
        surgeries: "Já passou por alguma cirurgia? Se sim, por favor, forneça detalhes.",
        exerciseHabits:
          "Como é a sua rotina de exercícios? Com que frequência e quais tipos de atividades físicas você pratica?",
        tobaccoConsumption:
          "Você consome produtos de tabaco regularmente? Se sim, qual a quantidade média por dia?",
        alcoholConsumption:
          "Qual é o seu padrão de consumo de álcool? Com que frequência e em que quantidade?",
        dietaryHabits:
          "Descreva seus hábitos alimentares diários. Isso inclui a quantidade de refeições, lanches, e a preferência por algum tipo específico de dieta.",
      },
    };
  },
  computed: {
    ...mapState(["anamnesis"]),
    anamnesisQuiz() {
      const cloneAnamnesis = Object.assign({}, this.anamnesis);
      const uselessKeys = ["id", "createdAt", "updatedAt", "patientId"];

      uselessKeys.forEach((key) => delete cloneAnamnesis[key]);
      return Object.entries(cloneAnamnesis);
    },
  },
  methods: {
    ...mapActions(["anamnesisList"]),
  },
  async created() {
    register(this.$store);

    this.patientId = this.$route.params.patientId;
    const { success, error } = await this.anamnesisList(this.patientId);

    if (!success) {
      const {
        response: { data: message },
      } = error;
      onToastify(message);
    }
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeMount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
