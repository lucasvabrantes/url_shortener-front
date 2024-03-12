import { z } from "zod";

export const formSchema = z.object({
    url: z.string().url().min(1, "URL inválida"),
});

export type TFormSchema = z.infer<typeof formSchema>;
