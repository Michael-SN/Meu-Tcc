<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-200 border-radius-xl bg-dark"
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
          <div class="h-100 py-2">
            <h5 class="mb-1">Registrar Medidas</h5>
            <small>Registrar medidas realizadas durante a consulta</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 container-fluid">
    <div class="card" style="padding: 2.5rem">
      <form role="form" @submit.prevent="handleCreate">
        <!-- Medidas Físicas -->
        <fieldset class="card" :style="boxShadowStyle">
          <div class="card-header pb-0">
            <h6>Medidas Físicas</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <label for="name">Altura</label>
                <soft-input
                  id="height"
                  type="number"
                  :min="0"
                  v-model:value="measure.height"
                />
              </div>
              <div class="col-6">
                <label for="weight">Peso</label>
                <soft-input
                  id="weight"
                  type="number"
                  :min="0"
                  v-model:value="measure.weight"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="head">Cabeça</label>
                <soft-input
                  id="head"
                  type="number"
                  :min="0"
                  v-model:value="measure.head"
                />
              </div>

              <div class="col-6">
                <label for="neck">Pescoço</label>
                <soft-input
                  id="neck"
                  type="number"
                  :min="0"
                  v-model:value="measure.neck"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="shoulders">Ombros</label>
                <soft-input
                  id="shoulders"
                  type="number"
                  :min="0"
                  v-model:value="measure.shoulders"
                />
              </div>
              <div class="col-6">
                <label for="chest">Peitoral</label>
                <soft-input
                  id="chest"
                  type="number"
                  :min="0"
                  v-model:value="measure.chest"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="left_arm">Braço Esquerdo</label>
                <soft-input
                  id="left_arm"
                  type="number"
                  :min="0"
                  v-model:value="measure.left_arm"
                />
              </div>
              <div class="col-6">
                <label for="right_arm">Braço Direito</label>
                <soft-input
                  id="right_arm"
                  type="number"
                  :min="0"
                  v-model:value="measure.right_arm"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="waist">Cintura</label>
                <soft-input
                  id="waist"
                  type="number"
                  :min="0"
                  v-model:value="measure.waist"
                />
              </div>
              <div class="col-6">
                <label for="hips">Quadril</label>
                <soft-input
                  id="hips"
                  type="number"
                  :min="0"
                  v-model:value="measure.hips"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="left_thigh">Coxa Esquerda</label>
                <soft-input
                  id="left_thigh"
                  type="number"
                  :min="0"
                  v-model:value="measure.left_thigh"
                />
              </div>
              <div class="col-6">
                <label for="right_thigh">Coxa Direito</label>
                <soft-input
                  id="right_thigh"
                  type="number"
                  :min="0"
                  v-model:value="measure.right_thigh"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="left_calf">Penturrilha Esquerda</label>
                <soft-input
                  id="left_calf"
                  type="number"
                  :min="0"
                  v-model:value="measure.left_calf"
                />
              </div>
              <div class="col-6">
                <label for="right_calf">Penturrilha Direito</label>
                <soft-input
                  id="right_calf"
                  type="number"
                  :min="0"
                  v-model:value="measure.right_calf"
                />
              </div>
            </div>
          </div>
        </fieldset>

        <div class="text-center" v-show="!showCardImpedant">
          <soft-button
            type="button"
            color="light"
            variant="transparent"
            class="my-4 mb-2"
            @click="showCardImpedant = true"
          >
            <i class="fa fa-plus-square-o pe-2 text-dark" aria-hidden="true"></i>
            <span> Adicionar Medidades de Bioimpedancia </span>
          </soft-button>
        </div>
        <!-- Bioimepedancia -->
        <fieldset v-if="showCardImpedant" class="card mt-5" :style="boxShadowStyle">
          <div class="card-header pb-0">
            <h6>Medidas de Bioimepedância</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <label for="fat_mass_index">Índice de Massa Gorda (IMG)</label>
                <soft-input
                  id="fat_mass_index"
                  type="number"
                  v-model:value="measure.fat_mass_index"
                />
              </div>
              <div class="col-3">
                <label for="lean_mass_index">Índice de Massa Magra (IMM)</label>
                <soft-input
                  id="lean_mass_index"
                  type="number"
                  v-model:value="measure.lean_mass_index"
                />
              </div>
              <div class="col-3">
                <label for="muscle_mass">Massa Muscular (MM)</label>
                <soft-input
                  id="muscle_mass"
                  type="number"
                  v-model:value="measure.muscle_mass"
                />
              </div>
              <div class="col-3">
                <label for="water_level">Nível de Água</label>
                <soft-input
                  id="water_level"
                  type="number"
                  v-model:value="measure.water_level"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <label for="bone_density">Densidade Óssea</label>
                <soft-input
                  id="bone_density"
                  type="number"
                  v-model:value="measure.bone_density"
                />
              </div>
              <div class="col-3">
                <label for="visceral_fat">Gordura Visceral</label>
                <soft-input
                  id="visceral_fat"
                  type="number"
                  v-model:value="measure.visceral_fat"
                />
              </div>
              <div class="col-6">
                <label for="basal_metabolic_rate">Taxa de Metabolismo Basal (TMB)</label>
                <soft-input
                  id="basal_metabolic_rate"
                  type="number"
                  v-model:value="measure.basal_metabolic_rate"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="text-end">
          <soft-button color="dark" size="lg" variant="gradient" class="my-4 mb-2">
            <i class="fa fa-plus-square-o pe-2 text-white" aria-hidden="true"></i>
            <span> Cadastrar </span>
          </soft-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import register from "@/views/Measure/_store/register";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("measures");

import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import { onToastify } from "@/helpers";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "measureCreate",
  data() {
    return {
      measure: {
        height: 0,
        weight: 0,
        head: 0,
        neck: 0,
        shoulders: 0,
        chest: 0,
        left_arm: 0,
        right_arm: 0,
        waist: 0,
        hips: 0,
        left_thigh: 0,
        right_thigh: 0,
        left_calf: 0,
        right_calf: 0,
        fat_mass_index: 0,
        lean_mass_index: 0,
        muscle_mass: 0,
        water_level: 0,
        bone_density: 0,
        visceral_fat: 0,
        basal_metabolic_rate: 0,
      },
      boxShadowStyle: "box-shadow: 0 3px 10px 6px rgb(243, 242, 242);",
      showCardImpedant: false,
    };
  },
  components: {
    SoftInput,
    SoftButton,
  },
  methods: {
    ...mapActions(["measureCreate"]),

    async handleCreate() {
      const patientId = this.$route.params.patientId;

      const { success, error } = await this.measureCreate({
        payload: this.measure,
        patientId,
      });

      if (!success) {
        const {
          response: { data: message },
        } = error;

        onToastify(message);
      }
      this.$router.push(`/patients/${patientId}/details`);
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip(this.$store.state.bootstrap);
  },
  beforeMount() {
    this.$store.state.isAbsolute = false;
  },
  created() {
    register(this.$store);
  },
};
</script>
