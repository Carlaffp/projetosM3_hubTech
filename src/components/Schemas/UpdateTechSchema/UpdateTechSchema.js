import { z } from "zod";
export const UpdateTechSchema = z.object({ 
  status: z.string()
  .nonempty("Seleção é obrigatória")
  .min(1, "Selecione uma opção"),
});