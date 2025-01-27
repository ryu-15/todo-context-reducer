import { z } from 'zod';

const todoSchema = z.object({
  task: z.string().trim().nonempty('Task is required').max(100, 'Task must not exceed 100 characters'),
});

export type TTodoFormSchema = z.infer<typeof todoSchema>;

export default todoSchema

