import { z } from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("O e-mail é obrigatório"),
  password: z.string().nonempty("Senha é obrigatória"),
});
