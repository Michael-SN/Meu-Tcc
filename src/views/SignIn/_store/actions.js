import axiosInstance from "@/axios";
import * as mutation from './mutation-types'


export default {

  signIn: async ({ commit }, { email, password, remember }) => {
    try {
      commit(mutation.SIGN_IN_REQUEST)
      const { data } = await axiosInstance.post('/auth/login', { email, password, remember })

      localStorage.setItem('token', `Bearer ${data.token}`)

      if (remember) localStorage.setItem('email_remember', email)
      else localStorage.removeItem('email_remember')

      commit(mutation.SIGN_IN_SUCCESS)

    } catch ({ message }) {

      commit(mutation.SIGN_IN_FAILURE, { message })
    }
  }
}

