import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { apistatus } from "@/consts/apistatus";
import { apimessages } from "@/consts/apimessages";
import { registerSchema } from "@/validate/register";

const prisma = new PrismaClient();

const BCRYPT_SALT_ROUNDS = 10;
const OTP_EXPIRY_MINUTES = 5; // مدت اعتبار کد تایید به دقیقه

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // اعتبارسنجی اطلاعات ورودی با Zod
    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: apimessages.VALIDATION_ERROR, // "اطلاعات وارد شده معتبر نیست. لطفاً بررسی کنید."
          details: result.error.errors,
        },
        { status: apistatus.BAD_REQUEST }
      );
    }

    const { phone, password, name } = result.data;

    // بررسی اینکه شماره موبایل قبلاً ثبت نشده باشد
    const existingUser = await prisma.user.findFirst({
      where: { phone : phone },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: apimessages.USER_EXISTS }, // "این شماره موبایل قبلاً ثبت شده است."
        { status: apistatus.CONFLICT }
      );
    }

    // هش کردن رمز عبور برای امنیت بیشتر
    const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    const currentDate = new Date();

    // تولید کد تایید 6 رقمی
    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpExpiry = new Date(
      currentDate.getTime() + OTP_EXPIRY_MINUTES * 60000
    );

    // ایجاد کاربر جدید در دیتابیس با کد تایید و تاریخ انقضا
    const newUser = await prisma.user.create({
      data: {
        phone,
        password: hashedPassword,
        name: name.trim(),
        is_validate: false, // هنوز تایید نشده
        is_delete: false,
        create_date: currentDate,
        otp,
        otp_expire_date: otpExpiry,
      },
    });

    // در محیط توسعه، کد تایید را در کنسول نمایش می‌دهیم (در محیط واقعی باید پیامک شود)
    console.log(`کد تایید برای شماره ${phone}: ${otp}`);

    // پاسخ موفقیت‌آمیز با پیام فارسی و اطلاعات کاربر
    const response = NextResponse.json(
      {
        message: apimessages.OTP_SENT, // "کد تایید به شماره موبایل شما ارسال شد."
        user: {
          id: newUser.id,
        },
        otpExpiry: otpExpiry.toISOString(),
      },
      { status: apistatus.SUCCESS }
    );

    return response;
  } catch (error) {
    console.error("خطا در ثبت‌نام:", error);

    let errorMessage = apimessages.SERVER_ERROR;
    if (error instanceof Error) {
      // اگر پیام خطا مشخص بود، آن را نمایش بده
      errorMessage = error.message || apimessages.SERVER_ERROR;
    }

    return NextResponse.json(
      {
        error: errorMessage,
        code: "REGISTRATION_ERROR",
      },
      { status: apistatus.SERVER_ERROR }
    );
  }
}
