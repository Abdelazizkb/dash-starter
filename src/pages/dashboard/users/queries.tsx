import api from "@/app/api";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => api.get("users").then(({ data }) => data),
  });
}
