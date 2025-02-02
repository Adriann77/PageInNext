import SignUpForm from '@/components/SignUpForm';
import { verifySession } from '@/lib/server-utils';
import { redirect } from 'next/navigation';

export default async function SignUp() {
  const session = await verifySession();
  if (session) redirect('/');
  return (
    <section className='px-4 sm:px-8'>
      <h1 className='text-gray-200 text-4xl mb-4 text-center font-semibold'>
        Rejestracja 🔑
      </h1>
      <p className='text-gray-200 text-center mb-8 text-lg'>
        Zacznij swoj 30-dniowy okres probny.
      </p>
      <SignUpForm></SignUpForm>
    </section>
  );
}
