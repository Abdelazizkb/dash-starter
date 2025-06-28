import api from "@/app/api";
import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { IUser } from "./list";
import { toast } from "sonner";

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
    onSuccess: () =>
      toast.success("User created successfully!!", {
        style: {
          backgroundColor: "#ecfdf5",
          color: "#166534",
          border: "1px solid #86efac",
        },
      }),
    onError: () =>
      toast.error("User creation failed!!", {
        style: {
          backgroundColor: "#fef2f2",
          color: "#991b1b",
          border: "1px solid #fca5a5",
        },
      }),
    ...config,
  });
}

export function useUpdateUser(
  config?: UseMutationOptions<unknown, Error, IUser, unknown>
) {
  return useMutation({
    mutationFn: (data: IUser) => api.put(`users/update`, data),
    mutationKey: ["users", "update"],
    onSuccess: () =>
      toast.success("User updated successfully!!", {
        style: {
          backgroundColor: "#ecfdf5",
          color: "#166534",
          border: "1px solid #86efac",
        },
      }),
    onError: () =>
      toast.error("User creation failed!!", {
        style: {
          backgroundColor: "#fef2f2",
          color: "#991b1b",
          border: "1px solid #fca5a5",
        },
      }),
    ...config,
  });
}
