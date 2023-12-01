<template>
  <div class="card mb-4">
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Nome Completo
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-1"
              >
                CPF
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 ps-2"
              >
                E-mail
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              >
                Data de Nascimento
              </th>
              <th
                class="text-uppercase text-secondary text-xs font-weight-bolder opacity-7"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="patient in patients" :key="patient.id">
              <td>
                <p class="text-sm mb-0 font-weight-bold ps-3">{{ patient.fullName }}</p>
              </td>
              <td>
                <p class="text-sm mb-0 font-weight-bold">{{ patient.cpf }}</p>
              </td>
              <td>
                <p class="text-sm mb-0 font-weight-bold">{{ patient.email }}</p>
              </td>
              <td>
                <p class="text-sm mb-0 font-weight-bold ps-3">
                  {{ formatterDate(patient.dateOfBirth) }}
                </p>
              </td>
              <td>
                <router-link
                  :to="`/patients/${patient?.id}/details`"
                  class="text-secondary font-weight-bold text-xs text-dark"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <span class="ms-2">Visualizar</span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { formatterDate } from "@/helpers";

export default {
  name: "authors-table",
  props: {
    patients: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatterDate,
  },
};
</script>
