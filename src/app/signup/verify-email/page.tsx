import VerifyEmailForm from "@/components/VerifyEmail-form";

export default function VerifyEmail() {
  return (
    <section className='px-4 sm:px-8'>
      <h1 className='text-gray-200 text-4xl mb-4 text-center font-semibold'>
        Weryfikacja konta 📤
      </h1>
      <p className='text-gray-200 text-center mb-8 text-lg'>
        Na podany adres e-mail został wysłany 6-cyfrowy kod.
      </p>
      <VerifyEmailForm/>
    </section>
  );
}
