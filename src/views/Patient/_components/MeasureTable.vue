<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Histórico de Medidas do Paciente</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0 text-center">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Altura (cm)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Peso (kg)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nível de água (%)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Gordura Visceral
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Taxa Metabólica Basal (TMB)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Histórico
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="measure in measures" :key="measure.id">
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">{{ measure.height }}&nbsp;cm</p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">{{ measure.weight }}&nbsp;kg</p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.water_level + "&nbsp;%" || "&nbsp;Não registrado" }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.visceral_fat + "&nbsp;" || "&nbsp;Não registrado" }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{
                    measure.basal_metabolic_rate + "&nbsp;Kcal" || "&nbsp;Não registrado"
                  }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ formatterISODate(measure.updatedAt) }}
                </p>
              </td>
              <td>
                <button
                  class="text-secondary font-weight-bold text-xs text-dark border border-0 bg-transparent"
                  data-toggle="tooltip"
                  data-original-title="View measure"
                  data-bs-toggle="modal"
                  data-bs-target="#measureModal"
                  @click="measureId = measure?.id"
                >
                  <i class="fa fa-eye text-sm" aria-hidden="true"></i>
                  <span class="ms-2">Visualizar</span>
                </button>
              </td>
              <td>
                <router-link
                  :to="`/measure/${patient?.id}/edit/${measure?.id}`"
                  class="text-secondary font-weight-bold text-xs text-dark"
                  data-toggle="tooltip"
                  data-original-title="Edit measure"
                >
                  <i class="fa fa-edit text-sm" aria-hidden="true"></i>
                  <span class="ms-2">Editar Medida</span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <MeasureModal :measureInfo="measureInfoModal" :gender="patient?.gender" />
</template>

<script>
import { formatterISODate } from "../../../helpers";
import MeasureModal from "../../Measure/_components/MeasureModal.vue";

export default {
  name: "measures-table",
  data() {
    return {
      measureId: null,
    };
  },
  props: {
    measures: {
      type: Array,
      required: true,
    },
    patient: {
      type: [null, Object],
      required: true,
      default: () => ({}),
    },
  },
  components: {
    MeasureModal,
  },
  computed: {
    measureInfoModal() {
      return this.measures.find((m) => m.id === this.measureId);
    },
  },
  methods: {
    formatterISODate,
  },
};
</script>
