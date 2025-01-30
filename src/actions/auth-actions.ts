'use server';


import { redirect } from 'next/navigation';

import {
  createSession,
  createVerificationToken,
  generateCode,
  getUserByEmail,
  getUserByID,
  getVerificationTokenByUserID,
  updateUserEmailVerifiedByID,
  upsertUser,
} from '@/lib/server-utils';
import { signupSchema, verifyEmailSchema } from '@/lib/zod';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail, sendWelcome } from '@/lib/resend';

export async function signupAction(data: unknown) {
  const validation = signupSchema.safeParse(data);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { succes: false, errors, message: '' };
  }

  const { name, email, password } = validation.data;

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
      await sendVerificationEmail(verificationToken.code);
    }
  } catch {
    const message = 'Coś poszło nie tak, spróbuj ponownie';
    return { succes: false, errors: {}, message };
  }

  redirect(`/signup/verify-email?userid=${user.id}`);
}

export async function verifyEmailAction(data: unknown, userID: string | null) {
  const validation = verifyEmailSchema.safeParse(data);
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { succes: false, errors, message: '' };
  }

  const { code } = validation.data;

  if (!userID) {
    const message = 'Coś poszło nie tak.. spróbuj ponownie';
    return { success: false, message, errors: {} };
  }

  try {
    const verificationToken = await getVerificationTokenByUserID(code, userID);
    if (!verificationToken) {
      const message = 'Coś poszło nie tak.. spróbuj ponownie';
      return { success: false, message, errors: {} };
    }

    const isActive = verificationToken.expiresAt > new Date();
    if (!isActive) {
      const message = 'Coś poszło nie tak.. spróbuj ponownie';
      return { success: false, message, errors: {} };
    }

    const user = await getUserByID(verificationToken.userID);

    if (!user) {
      const message = 'Coś poszło nie tak.. spróbuj ponownie';
      return { success: false, message, errors: {} };
    }

    const updatedUser = await updateUserEmailVerifiedByID(user.id);
    const newSession = await createSession(updatedUser.id)
    await sendWelcome(updatedUser.name);
  } catch (error) {
    const message = 'Coś poszło nie tak.. spróbuj ponownie';
    return { success: false, message, errors: {} };
  }


  redirect('/')
}
