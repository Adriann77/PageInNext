'use server';

import { VerificationToken } from './../../node_modules/.prisma/client/index.d';
import { redirect } from 'next/navigation';

import {
  createVerificationToken,
  generateCode,
  getUserByEmail,
  upsertUser,
} from '@/lib/server-utils';
import { signupSchema } from '@/lib/zod';
import bcrypt from 'bcryptjs';

export async function signupAction(data: unknown) {
  const validation = signupSchema.safeParse(data);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { succes: false, errors, message: '' };
  }

  const { name, email, password, passwordConfirm } = validation.data;

  let user;

  try {
    const userExist = await getUserByEmail(email);

    if (userExist && userExist?.emailVerified) {
      const message = 'Konto o podanym adresie email już istnieje';
      return { succes: false, errors: '', message };
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      user = await upsertUser(name, email, passwordHash, undefined);
      const code = generateCode();
      const verificationToken = await createVerificationToken(code, user.id);
      // await senfVerificationEmail(verificationToken.code)
    }
  } catch {
    const message = 'Coś poszło nie tak, spróbuj ponownie';
    return { succes: false, errors: {}, message };
  }

  redirect(`/signup/verify-email?userid=${user.id}`);
}
