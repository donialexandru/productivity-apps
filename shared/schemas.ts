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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateCounterSchema = CounterSchema.pick({
  name: true,
  targetCount: true,
});
export type CreateCounterInput = z.infer<typeof CreateCounterSchema>;

export const UpdateCounterSchema = CounterSchema.partial().omit({ id: true });
export const DeleteCounterSchema = CounterSchema.pick({ id: true });

export const CounterSchemaArray = z.array(CounterSchema);

export type Counter = z.infer<typeof CounterSchema>;
