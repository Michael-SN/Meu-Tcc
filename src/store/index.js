import { createStore } from "vuex";

import auth from '../views/SignIn/_store/index'
import patients from '../views/Patient/_store/index'

const modules = {
  auth,
  patients
}



export default createStore({
  modules,
})