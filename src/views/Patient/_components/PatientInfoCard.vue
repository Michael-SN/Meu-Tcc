<template>
  <div class="card h-100">
    <div class="p-4 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
        <div class="col-md-4 text-end">
          <ul class="d-flex justify-content-end list-unstyled gap-4 mb-0">
            <li class="">
              <router-link
                class="btn btn-sm btn-outline-info mb-0 px-4"
                :to="`/patients/${patient?.id}/edit`"
              >
                <i
                  class="text-sm fas fa-user-edit text-info"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  :title="action.tooltip"
                ></i>
              </router-link>
            </li>
            <li>
              <button
                class="btn btn-sm btn-outline-danger mb-0 px-4"
                @click="handleDelete"
              >
                <i
                  class="text-sm fas fa-trash text-danger"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  :title="action.tooltip"
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="p-4 card-body">
      <hr class="my-2 horizontal gray-light" />
      <ul class="list-group">
        <li class="pt-0 text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Nome Compleo:</strong> &nbsp;
          {{ patient?.fullName }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Data de Nascimento:</strong> &nbsp;
          {{ patient?.dateOfBirth }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Email:</strong>&nbsp; {{ patient?.email }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Telefone:</strong> &nbsp;
          {{ patient?.telephone }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Celular:</strong> &nbsp;
          {{ patient?.phoneNumber }}
        </li>
        <li class="text-sm border-0 list-group-item ps-0">
          <strong class="text-dark">Endereço:</strong> &nbsp;
          {{ patient?.address }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("patients");
import { onToastify } from "@/helpers";

export default {
  name: "PatientInfoCard",
  components: {
    //
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    action: {
      type: Object,
      route: String,
      tooltip: String,
      default: () => ({
        route: "javascript:;",
      }),
    },
  },
  computed: {
    ...mapState(["patient"]),
  },
  methods: {
    ...mapActions(["patientDelete"]),
    async handleDelete() {
      const confirm = window.confirm("Do you want this ?"); // PROVISORIo
      if (confirm) {
        const { success, error } = await this.patientDelete(this.patient?.id);

        if (success) {
          this.$router.push("/patients/list");
        } else {
          const {
            response: { data: message },
          } = error;

          onToastify(message);
        }
      }
    },
  },
};
</script>
