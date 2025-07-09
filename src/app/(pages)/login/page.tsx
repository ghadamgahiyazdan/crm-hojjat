import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-primary flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
