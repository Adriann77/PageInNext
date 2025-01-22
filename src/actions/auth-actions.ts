'use server';

import { signupSchema } from '@/lib/zod';

export async function signupAction(data: unknown) {
  const validation = signupSchema.safeParse(data);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { succes: false, errors, message: '' };
  }

  let user;

  const { name, email, password, passwordConfirm } = validation.data;

  try {
    const userExist = await getUserByEmail(email);
  } catch (error) {}
}
