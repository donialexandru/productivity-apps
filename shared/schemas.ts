import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email(),
  username: z.string().max(50),
  password: z.string().min(8),
});

export const CounterSchema = z.object({
  id: z.string(),
  name: z.string(),
  currentCount: z.number(),
  targetCount: z.number(),
  createdAt: z.string(),
  updatedAt: z.date(),
});

export const CounterSchemaArray = z.array(CounterSchema);

export type Counter = z.infer<typeof CounterSchema>;
