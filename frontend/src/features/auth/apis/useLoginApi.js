import apiClient from "../../../services/apiClient";

export const login = async (formData) => {
  const response = await apiClient.post("/auth/login", formData);
  return response.data;
};

