import { z } from "zod";
export const CreatTechSchema = z.object({
  title: z
    .string()
    .nonempty("O nome é obrigatório"), 
  status: z.string()
  .nonempty("Seleção é obrigatória")
  .min(1, "Selecione uma opção"),
});