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
                Peitoral (cm)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Cintura (cm)
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Quadril (cm)
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
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.height }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.weight }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.chest }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.waist }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.hips }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.updatedAt }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "measures-table",
  props: {
    measures: {
      type: Array,
      required: true,
    },
  },
};
</script>
