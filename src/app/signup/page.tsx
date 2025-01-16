import SignUpForm from "@/components/SignUpForm";

export default function SignUp() {
  return <section className="px-4 sm:px-8">
    <h1 className="text-gray-200 text-4xl mb-4 text-center font-semibold" >Rejestracja 🔑</h1>
    <p className="text-gray-200 text-center mb-8 text-lg">Zacznij swoj 30-dniowy okres probny.</p>
    <SignUpForm></SignUpForm>
  </section>;
}
