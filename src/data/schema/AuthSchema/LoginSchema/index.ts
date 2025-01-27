import { z } from 'zod';

const loginSchema:z.Schema = z.object({
  email: z.string().trim().email('Valid email is required'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters long'),
});

export type TLoginFormSchema = z.infer<typeof loginSchema>;

 const registrationSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required'),
  lastName: z.string().trim().min(1, 'Last name is required'),
  email: z.string().trim().email('Valid email is required'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters long'),
});

export type TRegistrationFormSchema = z.infer<typeof registrationSchema>;

export { loginSchema ,registrationSchema};


