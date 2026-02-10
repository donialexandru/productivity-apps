import { z } from "zod";

export const TestSchema = z.object({
  name: z.string(),
});

export type Test = z.infer<typeof TestSchema>;
