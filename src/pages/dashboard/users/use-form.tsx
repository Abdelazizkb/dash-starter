import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const userSchema = z.object({
  id: z.string().min(1, "ID requis"),
  firstname: z.string().min(1, "Prénom requis"),
  lastname: z.string().min(1, "Nom requis"),
  email: z.string().min(1, "Email requis").email("Email invalide"),
  role: z.enum(["admin", "editor", "viewer"], {
    errorMap: () => ({ message: "Rôle invalide" }),
  }),
  comment: z.string().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;

export function useUserForm(defaultValues?: Partial<UserFormData>) {
  return useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });
}
