<template>
  <div class="mt-4 container-fluid">
    <div class="card" style="padding: 2.5rem">
      <form role="form" @submit.prevent="handleOnSubmit">
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
                  v-model:value="measureLocal.height"
                />
              </div>
              <div class="col-6">
                <label for="weight">Peso</label>
                <soft-input
                  id="weight"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.weight"
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
                  v-model:value="measureLocal.head"
                />
              </div>

              <div class="col-6">
                <label for="neck">Pescoço</label>
                <soft-input
                  id="neck"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.neck"
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
                  v-model:value="measureLocal.shoulders"
                />
              </div>
              <div class="col-6">
                <label for="chest">Peitoral</label>
                <soft-input
                  id="chest"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.chest"
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
                  v-model:value="measureLocal.left_arm"
                />
              </div>
              <div class="col-6">
                <label for="right_arm">Braço Direito</label>
                <soft-input
                  id="right_arm"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.right_arm"
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
                  v-model:value="measureLocal.waist"
                />
              </div>
              <div class="col-6">
                <label for="hips">Quadril</label>
                <soft-input
                  id="hips"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.hips"
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
                  v-model:value="measureLocal.left_thigh"
                />
              </div>
              <div class="col-6">
                <label for="right_thigh">Coxa Direito</label>
                <soft-input
                  id="right_thigh"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.right_thigh"
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
                  v-model:value="measureLocal.left_calf"
                />
              </div>
              <div class="col-6">
                <label for="right_calf">Penturrilha Direito</label>
                <soft-input
                  id="right_calf"
                  type="number"
                  :min="0"
                  v-model:value="measureLocal.right_calf"
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
                  v-model:value="measureLocal.fat_mass_index"
                />
              </div>
              <div class="col-3">
                <label for="lean_mass_index">Índice de Massa Magra (IMM)</label>
                <soft-input
                  id="lean_mass_index"
                  type="number"
                  v-model:value="measureLocal.lean_mass_index"
                />
              </div>
              <div class="col-3">
                <label for="muscle_mass">Massa Muscular (MM)</label>
                <soft-input
                  id="muscle_mass"
                  type="number"
                  v-model:value="measureLocal.muscle_mass"
                />
              </div>
              <div class="col-3">
                <label for="water_level">Nível de Água</label>
                <soft-input
                  id="water_level"
                  type="number"
                  v-model:value="measureLocal.water_level"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <label for="bone_density">Densidade Óssea</label>
                <soft-input
                  id="bone_density"
                  type="number"
                  v-model:value="measureLocal.bone_density"
                />
              </div>
              <div class="col-3">
                <label for="visceral_fat">Gordura Visceral</label>
                <soft-input
                  id="visceral_fat"
                  type="number"
                  v-model:value="measureLocal.visceral_fat"
                />
              </div>
              <div class="col-6">
                <label for="basal_metabolic_rate">Taxa de Metabolismo Basal (TMB)</label>
                <soft-input
                  id="basal_metabolic_rate"
                  type="number"
                  v-model:value="measureLocal.basal_metabolic_rate"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div class="text-end">
          <soft-button color="dark" size="lg" variant="gradient" class="my-4 mb-2">
            <i class="fa fa-plus-square-o pe-2 text-white" aria-hidden="true"></i>
            <span v-if="action === 'Editar'"> Salvar Alteração </span>
            <span v-else> Cadastrar </span>
          </soft-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";

export default {
  name: "MeasureForm",
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    measureData: {
      type: Object,
    },
    action: {
      type: String,
    },
  },
  data() {
    return {
      measureLocal: {
        height: this.measureData?.height || 0,
        weight: this.measureData?.weight || 0,
        head: this.measureData?.head || 0,
        neck: this.measureData?.neck || 0,
        shoulders: this.measureData?.shoulders || 0,
        chest: this.measureData?.chest || 0,
        left_arm: this.measureData?.left_arm || 0,
        right_arm: this.measureData?.right_arm || 0,
        waist: this.measureData?.waist || 0,
        hips: this.measureData?.hips || 0,
        left_thigh: this.measureData?.left_thigh || 0,
        right_thigh: this.measureData?.right_thigh || 0,
        left_calf: this.measureData?.left_calf || 0,
        right_calf: this.measureData?.right_calf || 0,
        fat_mass_index: this.measureData?.fat_mass_index || 0,
        lean_mass_index: this.measureData?.lean_mass_index || 0,
        muscle_mass: this.measureData?.muscle_mass || 0,
        water_level: this.measureData?.water_level || 0,
        bone_density: this.measureData?.bone_density || 0,
        visceral_fat: this.measureData?.visceral_fat || 0,
        basal_metabolic_rate: this.measureData?.basal_metabolic_rate || 0,
      },
      showCardImpedant: false,
      boxShadowStyle: "box-shadow: 0 3px 10px 6px rgb(243, 242, 242);",
    };
  },
  components: {
    SoftInput,
    SoftButton,
  },
  watch: {
    measureData(newValue) {
      if (newValue) {
        this.measureLocal = newValue;
      }
    },
  },
  methods: {
    handleOnSubmit() {
      this.onSubmit(this.measureLocal);
    },
  },
};
</script>
