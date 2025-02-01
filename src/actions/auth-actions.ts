'use server';

import { redirect } from 'next/navigation';

import {
  createSession,
  createVerificationToken,
  deleteSessionByID,
  generateCode,
  getUserByEmail,
  getUserByID,
  getVerificationTokenByUserID,
  updateUserEmailVerifiedByID,
  upsertUser,
} from '@/lib/server-utils';
import { loginSchema, signupSchema, verifyEmailSchema } from '@/lib/zod';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail, sendWelcome } from '@/lib/resend';
import { cookies } from 'next/headers';

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
    const newSession = await createSession(updatedUser.id);
    await sendWelcome(updatedUser.name);
  } catch (error) {
    const message = 'Coś poszło nie tak.. spróbuj ponownie';
    return { success: false, message, errors: {} };
  }

  redirect('/');
}

export async function logoutAction() {
  const sessionID = (await cookies()).get('auth_token')?.value;

  if (!sessionID) return null;

  try {
    await deleteSessionByID(sessionID);
  } catch (error) {
    return null;
  }

  (await cookies()).delete('auth_token');
  redirect('/login');
}

export async function loginAction(data: unknown) {
  const validation = loginSchema.safeParse(data);
  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    return { success: false, errors, message: '' };
  }

  const { email, password } = validation.data;
  try {
    const user = await getUserByEmail(email);

    if (!user || !user.emailVerified) {
      const message = 'Nieprawidłowy email lub hasło';
      return { success: false, errors: {}, message };
    }

    if (!user.passwordHash) {
      const message = 'Spróbuj zalogować się za pomocą konta Google';
      return { success: false, errors: {}, message };
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      const message = 'Nieprawidłowy email lub hasło';
      return { success: false, errors: {}, message };
    }

    const newSession = await createSession(user.id);
   
  } catch (error) {
    const message = 'Nieprawidłowy email lub hasło';
    return { success: false, errors: {}, message };
  }

   redirect('/');
}
