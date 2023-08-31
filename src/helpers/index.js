import AxiosInstance from "@/axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token')
  try {
    await AxiosInstance.post('/auth/validate', { token })
    return true
  } catch {
    return false
  }
}

export const resetState = (state, intialState) => {
  Object.keys(state).forEach((key) => {
    state[key] = intialState[key]
  })
}

export const onToastify = (message) => {
  Toastify({
    text: message || 'Error inesperado!',
  }).showToast();
}