"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { registerSchema } from "@/validate/register"
import { register as registerUser } from "@/service" // Renamed import
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


type RegisterFormValues = z.infer<typeof registerSchema>

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  const onSubmit = async (data: RegisterFormValues) => {
    registerUser(data) // Using the renamed import
      .then((res) => {
        const userId = (res.data.user.id)
        toast.success("✅ ثبت نام با موفقیت انجام شد!")
      router.push(`/otp?id=${userId}`);
      })
      .catch((e) => {
        console.log(e.response.data.error)
        toast.error(`❌ خطا`+`: ${e.response.data.error}`)
      })
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="bg-muted relative hidden md:block">
            <img
              src={"Register.svg"}
              alt="تصویر"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  به{" "}
                  <span className="text-secondary [text-shadow:1px_2px_3px_rgba(0,0,0,0.5)]">
                    همراه کارفرما
                  </span>{" "}
                  خوش آمدید
                </h1>
                <p>حساب کاربری خود را ایجاد کنید</p>
              </div>

              {/* Phone Field */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="phone">شماره موبایل</Label>
                <Input
                  className="bg-primary"
                  id="phone"
                  type="text"
                  placeholder="09*********"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Name Field */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="name">نام</Label>
                <Input
                  className="bg-primary"
                  id="name"
                  type="text"
                  dir="rtl"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="password">کلمه عبور</Label>
                <div className="relative">
                  <Input
                    className="bg-primary pr-10"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm text-right">{errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="grid gap-2">
                <Label dir="rtl" htmlFor="cpassword">تکرار کلمه عبور</Label>
                <div className="relative">
                  <Input
                    className="bg-primary pr-10"
                    id="cpassword"
                    type={showCPassword ? "text" : "password"}
                    {...register("cpassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCPassword(!showCPassword)}
                    className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
                    tabIndex={-1}
                  >
                    {showCPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.cpassword && (
                  <p className="text-red-500 text-sm">{errors.cpassword.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-chart-6 border-black rounded-md"
              >
                ثبت‌نام
              </Button>

              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-black relative z-10 px-2">یا</span>
              </div>

              <div className="text-center text-sm">
                حساب کاربری دارید؟{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-4 text-blue-500 hover:font-bold"
                >
                  ورود
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:font-bold text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        با کلیک روی ادامه، شما با{" "}
        <Link href="/term" className="text-blue-500">شرایط استفاده</Link> و{" "}
        <Link href="/term" className="text-blue-500">سیاست حفظ حریم خصوصی</Link> ما موافقت می‌کنید.
      </div>
    </div>
  )
}