import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { apistatus } from "@/consts/apistatus";
import jwt from "jsonwebtoken";
import { apimessages } from "@/consts/apimessages";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { otp, id } = body;

    // Validate input presence
    if (!id || !otp) {
      return NextResponse.json(
        { error: apimessages.MISSING_PARAMETERS },
        { status: apistatus.BAD_REQUEST }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    // check user exist
    if (!user) {
      return NextResponse.json(
        { error: apimessages.USER_NOT_FOUND },
        { status: apistatus.UNAUTHORIZED }
      );
    }
    // check user not soft delete
    if (!user.create_date) {
      return NextResponse.json(
        { error: apimessages.USER_NOT_FOUND },
        { status: apistatus.UNAUTHORIZED }
      );
    }

    // validate otp existence
    if (!user.otp_expire_date) {
      return NextResponse.json(
        { error: apimessages.OTP_EXPIRED },
        { status: apistatus.VALIDATION_ERROR }
      );
    }

    if (user.otp != otp) {
      return NextResponse.json(
        { error: apimessages.INVALID_OTP },
        { status: apistatus.VALIDATION_ERROR }
      );
    }

    const now = Date.now(); // UTC timestamp in milliseconds
    const expiredTime = new Date(user.otp_expire_date).getTime();

    if (now > expiredTime) {
      return NextResponse.json(
        { error: apimessages.OTP_EXPIRED },
        { status: apistatus.VALIDATION_ERROR }
      );
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
    console.error("OTP verification error:", error);
    return NextResponse.json(
      { error: apimessages.SERVER_ERROR },
      { status: apistatus.SERVER_ERROR }
    );
  }
}
