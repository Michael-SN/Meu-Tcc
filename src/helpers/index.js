import AxiosInstance from "@/axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const PUBLIC_API = process.env.VUE_APP_PUBLIC_API;

export const isAuthenticated = async () => {
  const token = localStorage.getItem("token");
  try {
    await AxiosInstance.post(`${PUBLIC_API}/auth/validate`, { token });
    return true;
  } catch {
    return false;
  }
};

export const resetState = (state, intialState) => {
  Object.keys(state).forEach((key) => {
    state[key] = intialState[key];
  });
};

export const onToastify = (message) => {
  Toastify({
    text: message || "Error inesperado!",
  }).showToast();
};

export const formatterDate = (data) => {
  if (!data) return "";
  const parts = data.split("-");
  if (parts.length !== 3) return data;

  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
};
