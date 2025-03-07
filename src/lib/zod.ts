import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z.string().trim().min(1).max(32),
    email: z.string().email().trim().min(1).max(255),
    password: z.string().min(8).max(64),
    passwordConfirm: z.string().min(8).max(64),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords missmatch',
    path: ['passwordConfirm'],
  });

export const verifyEmailSchema = z.object({
  code: z.string().max(6),
});

export const loginSchema = z.object({
  email: z.string().trim().min(1).max(32),
  password: z.string().min(8).max(64),
});
