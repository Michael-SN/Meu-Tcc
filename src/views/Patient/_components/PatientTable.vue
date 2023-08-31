<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Tabela de Pacientes</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nome Completo
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Telefone
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Endereço
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Data de Aniversário
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="patient in patients" :key="patient.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ patient.fullName }}</h6>
                    <p class="text-xs text-secondary mb-0">{{ patient.email }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">{{ patient.telephone }}</p>
                <p class="text-xs text-secondary mb-0">{{ patient.phoneNumber }}</p>
              </td>
              <td class="align-middle text-sm">
                <p class="text-xs font-weight-bold mb-0">{{ patient.address }}</p>
                <!-- <soft-badge color="success" variant="gradient" size="sm"
                  >Online</soft-badge
                > -->
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  patient.dateOfBirth
                }}</span>
              </td>
              <td class="align-middle">
                <router-link
                  :to="`/patients/${patient.id}/details`"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Visualizar</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import SoftAvatar from "@/components/SoftAvatar.vue";

import SoftBadge from "@/components/SoftBadge.vue";

export default {
  name: "authors-table",
  props: {
    patients: {
      type: Array,
      required: true,
    },
  },
  components: {
    // SoftAvatar,
    // eslint-disable-next-line vue/no-unused-components
    SoftBadge,
  },
};
</script>
