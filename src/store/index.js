import { createStore } from "vuex";

import patients from '../views/Patient/_store/index'

const modules = {
  patients
}



export default createStore({
  modules,
})