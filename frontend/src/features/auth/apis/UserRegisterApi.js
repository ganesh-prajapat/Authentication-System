import apiClient from "../../../services/apiClient";

export const signup = async (payload) => {
  const response = await apiClient.post("/auth/register", payload);
  return response.data;
};
