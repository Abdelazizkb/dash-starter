import api from "@/app/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => api.get("users").then(({ data }) => data),
  });
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (data) => api.post(`users/add`, data),
    mutationKey: ["users", "create"],
    onSuccess: (data) => console.log("success-create-user", data),
    onError: (error) => console.log("error-create-user", error),
  });
}

export function useUpdateUser() {
  return useMutation({
    mutationFn: (data) => api.put(`users/update`, data),
    mutationKey: ["users", "update"],
    onSuccess: (data) => console.log("success-update-user", data),
    onError: (error) => console.log("error-create-user", error),
  });
}
