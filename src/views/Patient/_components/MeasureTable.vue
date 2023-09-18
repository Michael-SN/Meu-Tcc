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
                Pescoço
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Braços
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Pernas
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Peitoral
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Torso
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
                  {{ measure.neck }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.arms }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.legs }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.chest }}
                </p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">
                  {{ measure.torso }}
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
import SoftBadge from "@/components/SoftBadge.vue";

export default {
  name: "authors-table",
  props: {
    measures: {
      type: Array,
      required: true,
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SoftBadge,
  },
};
</script>
