import LoginForm from '@/components/LoginForm';

export default function Login() {
  return (
    <section className='px-4 sm:px-8'>
      <h1 className='text-gray-200 text-4xl mb-4 text-center font-semibold'>
        Logowanie 🔑
      </h1>
      <p className='text-gray-200 text-center mb-8 text-lg'>
        Zaloguj się aby wejść na swoje konto.
      </p>
      <LoginForm />
    </section>
  );
}
