import { z } from "zod";

export const TestSchema = z.object({
  name: z.string(),
});

export type Test = z.infer<typeof TestSchema>;

export const CreateUserSchema = z.object({
  email: z.string().email(),
  username: z.string().max(50),
  password: z.string().min(8),
});
