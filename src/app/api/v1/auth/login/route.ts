import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { apistatus } from "@/consts/apistatus";
import jwt from "jsonwebtoken";
import { apimessages } from "@/consts/apimessages";
import { loginSchema } from "@/validate/login";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // اعتبارسنجی ورودی با Zod
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: apimessages.VALIDATION_ERROR,
          details: result.error.errors,
        },
        { status: apistatus.BAD_REQUEST }
      );
    }

    const { phone, password } = result.data;

    // جستجوی کاربر با شماره موبایل
    const user = await prisma.user.findFirst({
      where: { phone: phone },
    });

    if (!user) {
      return NextResponse.json(
        { error: apimessages.USER_NOT_FOUND },
        { status: apistatus.NOT_FOUND }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("کلید مخفی JWT تنظیم نشده است");
    }

    const password_match = bcrypt.compare(password,user.password)

    if(!password_match){
      return NextResponse.json(
        {error: apimessages.PASSWORD_NOT_MATCH},
        {status: apistatus.UNAUTHORIZED}
      )
    }
        // Generate permanent token
        const tokenData = {
          id: user.id,
          phone: user.phone,
        };
    
        if (!process.env.JWT_SECRET) {
          console.error("JWT_SECRET is not defined");
          throw new Error("JWT_SECRET must be defined");
        }
    
        const newToken = jwt.sign(tokenData, process.env.JWT_SECRET, {
          expiresIn: "10d",
          algorithm: "HS256",
        });
    
        // Prepare response
        const response = NextResponse.json(
          { message: apimessages.OTP_VERIFIED },
          { status: apistatus.SUCCESS }
        );
    
        // Set permanent cookie
        response.cookies.set("token", newToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 86400 * 10, // 10 days in seconds
        });
    
        return response;

  } catch (error) {
    console.error("خطا در ورود:", error);

    let errorMessage = apimessages.SERVER_ERROR;
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        error: errorMessage,
        code: "LOGIN_ERROR",
      },
      { status: apistatus.SERVER_ERROR }
    );
  }
}
