import AxiosInstance from "@/axios";

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token')

  try {
    await AxiosInstance.post('/auth/validate', { token })
    return true
  } catch {
    return false
  }
}