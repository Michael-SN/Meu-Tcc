<template>
  <div
    class="modal fade"
    id="measureModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Todas as Medidas</h5>
          <button
            type="button"
            class="btn btn-dark btn-sm close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close text-sm"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6 text-center">
              <img
                v-if="gender === 'Feminino'"
                :src="female"
                alt="Woman Body Shape"
                class="img-fluid"
              />
              <img v-else :src="male" alt="Man Body Shape" class="img-fluid" />
            </div>
            <div class="col-6">
              <h6>Medidas físicas</h6>
              <ol class="list-group list-group-numbered list-group-flush">
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Altura:</strong>
                  <small>{{ measureInfo?.height }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Peso:</strong>
                  <small> {{ measureInfo?.weight }}&nbsp;kg</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Cabeça:</strong>
                  <small> {{ measureInfo?.head }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Pescoço:</strong>
                  <small> {{ measureInfo?.neck }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2"> Ombros:</strong>
                  <small>{{ measureInfo?.shoulders }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2"> Peitoral:</strong>
                  <small>{{ measureInfo?.chest }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Braço Esquerda:</strong>
                  <small>{{ measureInfo?.left_arm }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Braço Direito:</strong>
                  <small>{{ measureInfo?.right_arm }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2"> Cintura:</strong>
                  <small>{{ measureInfo?.waist }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2"> Quadril:</strong>
                  <small>{{ measureInfo?.hips }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Coxa Esquerda:</strong>
                  <small>{{ measureInfo?.left_thigh }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Coxa Direita:</strong>
                  <small>{{ measureInfo?.right_thigh }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Panturrilha Esquerda:</strong>
                  <small>{{ measureInfo?.left_calf }}&nbsp;cm</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Panturrilha Direita:</strong>
                  <small>{{ measureInfo?.right_calf }}&nbsp;cm</small>
                </li>
              </ol>
              <h6>Bioimpedância</h6>
              <ol class="list-group list-group-flush">
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Índice de massa gorda:</strong>
                  <small>{{
                    measureInfo?.fat_mass_index + "&nbsp;%" || "&nbsp;Não registrado"
                  }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Índice de massa magra:</strong>
                  <small>{{
                    measureInfo?.lean_mass_index + "&nbsp;%" || "&nbsp;Não registrado"
                  }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Índice de massa muscular:</strong>
                  <small>{{
                    measureInfo?.muscle_mass + "&nbsp;%" || "&nbsp;Não registrado"
                  }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Nível de água corporal:</strong>
                  <small>{{
                    measureInfo?.water_level + "&nbsp;%" || "&nbsp;Não registrado"
                  }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Densidade óssea:</strong>
                  <small>{{ measureInfo?.bone_density || "&nbsp;Não registrado" }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Gordura Visceral:</strong>
                  <small>{{ measureInfo?.visceral_fat || "&nbsp;Não registrado" }}</small>
                </li>
                <li class="list-group-item ps-0">
                  <strong class="text-sm pe-2">Taxa metabólica basal:</strong>
                  <small>{{
                    measureInfo?.basal_metabolic_rate + "&nbsp;kcal" ||
                    "&nbsp;Não registrado"
                  }}</small>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import female from "../../../assets/img/shapes/woman-shape.jpg";
import male from "../../../assets/img/shapes/man-shape.jpg";

export default {
  name: "MeasureModal",
  props: {
    measureInfo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    gender: {
      type: String,
      required: true,
      default: "null",
    },
  },
  data() {
    return {
      female,
      male,
    };
  },
};
</script>
