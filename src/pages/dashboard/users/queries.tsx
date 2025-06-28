import api from "@/app/api";
import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { IUser } from "./list";
import { toast } from "@/components";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => api.get("users").then(({ data }) => data),
  });
}

export function useCreateUser(
  config?: UseMutationOptions<unknown, Error, IUser, unknown>
) {
  return useMutation({
    mutationFn: (data: IUser) => api.post(`users/create`, data),
    mutationKey: ["users", "create"],
    onSuccess: () => toast.success("User created successfully!!"),
    onError: () => toast.error("User creation failed!!"),
    ...config,
  });
}

export function useUpdateUser(
  config?: UseMutationOptions<unknown, Error, IUser, unknown>
) {
  return useMutation({
    mutationFn: (data: IUser) => api.put(`users/update`, data),
    mutationKey: ["users", "update"],
    onSuccess: () => toast.success("User updated successfully!!"),
    onError: () => toast.error("User creation failed!!"),
    ...config,
  });
}
