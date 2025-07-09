import z from "zod"

export const loginSchema = z.object({
  phone: z
    .string()
    .min(11, "شماره موبایل معتبر نیست")
    .max(11, "شماره موبایل معتبر نیست")
    .startsWith('09',"شماره موبایل معتبر نیست"),
  password: z.string().min(6, "کلمه عبور باید حداقل ۶ کاراکتر باشد"),
})