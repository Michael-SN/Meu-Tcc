<template>
  <div class="mt-4 container-fluid">
    <div class="card" style="padding: 2.5rem">
      <form role="form" @submit.prevent="handleOnSubmit">
        <fieldset class="card" :style="boxShadowStyle">
          <div class="card-header pb-0">
            <h6>Formulário de Anamnese</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <soft-textarea
                  id="medicalHistory"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.medicalHistory"
                  >Você tem algum histórico médico relevante que eu deva conhecer? (ex:
                  diabetes, hipertensão, problemas cardíacos)
                </soft-textarea>
              </div>
              <div class="col-6">
                <soft-textarea
                  id="medications"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.medications"
                  >Atualmente, você está tomando algum medicamento regularmente? Se sim,
                  por favor, liste-os.
                </soft-textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <soft-textarea
                  id="allergies"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.allergies"
                  >Você possui alguma alergia alimentar ou outra alergia relevante?
                </soft-textarea>
              </div>
              <div class="col-6">
                <soft-textarea
                  id="surgeries"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.surgeries"
                  >Já passou por alguma cirurgia? Se sim, por favor, forneça detalhes.
                </soft-textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <soft-textarea
                  id="exerciseHabits"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.exerciseHabits"
                  >Como é a sua rotina de exercícios? Com que frequência e quais tipos de
                  atividades físicas você pratica?
                </soft-textarea>
              </div>
              <div class="col-6">
                <soft-textarea
                  id="tobaccoConsumption"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.tobaccoConsumption"
                  >Você consome produtos de tabaco regularmente? Se sim, qual a quantidade
                  média por dia?
                </soft-textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <soft-textarea
                  id="alcoholConsumption"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.alcoholConsumption"
                  >Qual é o seu padrão de consumo de álcool? Com que frequência e em que
                  quantidade?
                </soft-textarea>
              </div>
              <div class="col-6">
                <soft-textarea
                  id="dietaryHabits"
                  placeholder="Descreva aqui o relato do paciente..."
                  v-model:value="anamnesisLocal.dietaryHabits"
                  >Descreva seus hábitos alimentares diários. Isso inclui a quantidade de
                  refeições, lanches, e a preferência por algum tipo específico de dieta.
                </soft-textarea>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="text-end">
          <soft-button color="dark" size="lg" variant="gradient" class="my-4 mb-2">
            <i class="fa fa-plus-square-o pe-2 text-white" aria-hidden="true"></i>
            <span v-if="action === 'Editar'"> Salvar Alteração </span>
            <span v-else> Salvar </span>
          </soft-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SoftButton from "@/components/SoftButton.vue";
import SoftTextarea from "../../../components/SoftTextarea.vue";

export default {
  name: "AnamnesisForm",
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    anamnesisData: {
      type: Object,
    },
    action: {
      type: String,
    },
  },
  data() {
    return {
      anamnesisLocal: {
        medicalHistory: this.anamnesisData?.medicalHistory || "",
        medications: this.anamnesisData?.medications || "",
        allergies: this.anamnesisData?.allergies || "",
        surgeries: this.anamnesisData?.surgeries || "",
        exerciseHabits: this.anamnesisData?.exerciseHabits || "",
        tobaccoConsumption: this.anamnesisData?.tobaccoConsumption || "",
        alcoholConsumption: this.anamnesisData?.alcoholConsumption || "",
        dietaryHabits: this.anamnesisData?.dietaryHabits || "",
      },
      boxShadowStyle: "box-shadow: 0 3px 10px 6px rgb(243, 242, 242);",
    };
  },
  components: {
    SoftButton,
    SoftTextarea,
  },
  watch: {
    measureData(newValue) {
      if (newValue) {
        this.anamnesisLocal = newValue;
      }
    },
  },
  methods: {
    handleOnSubmit() {
      this.onSubmit(this.anamnesisLocal);
    },
  },
};
</script>
