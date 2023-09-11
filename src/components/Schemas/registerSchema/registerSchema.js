import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(3, "O nome precisa conter pelo menos 3 caracteres"),
    email: z
      .string()
      .email("O e-mail não é válido")
      .nonempty("O email é obrigatório"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "A senha  precisa de no mínimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário um caracter especial"),
    confirm: z
      .string()
      .nonempty("Confirmar senha é obrigatório")
      .min(8, "Precisa de no mínimo 8 caracteres"),
    bio: z
      .string()
      .nonempty("Este campo é obrigatório")
      .min(5, "Este campo precisa ter no minimo 5 caracteres"),
    contact: z
      .string()
      .nonempty("Contato é obrigatório")
      .min(5, "Este campo precisa ter no minimo 5 caracteres"),
    course_module: z
      .string()
      .nonempty("Seleção é obrigatória")
      .min(1, "Selecione uma opção"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"],
  });
