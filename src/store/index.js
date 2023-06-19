import { createStore } from "vuex";

import auth from '../views/SignIn/_store/index'

const modules = {
  auth
}


export default createStore({
  modules,
})