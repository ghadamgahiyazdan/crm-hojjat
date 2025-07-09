import { apimessages } from "@/consts/apimessages";
import { apistatus } from "@/consts/apistatus";
import { PrismaClient } from "@/generated/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json(
            { error: "توکن یافت نشد" },
            { status: 400 }
        );
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("JWT_SECRET تعریف نشده است");

        const decoded = jwt.verify(token, secret) as { id?: number; phone?: string };

        const { id, phone } = decoded;

        if (!id || !phone) {
            return NextResponse.json(
                { error: apimessages.INVALID_OTP },
                { status: apistatus.BAD_REQUEST }
            );
        }

        const user = await prisma.user.findFirst({
            where: { id }
        });

        if (!user) {
            return NextResponse.json(
                { error: apimessages.USER_NOT_FOUND },
                { status: apistatus.NOT_ACCEPTABLE }
            );
        }

        return NextResponse.json(
            { user: { phone, name: user.name } },
            { status: apistatus.SUCCESS });
    } catch (error) {
        console.error("خطا در اعتبارسنجی توکن:", error);
        return NextResponse.json(
            { error: apimessages.SERVER_ERROR },
            { status: apistatus.SERVER_ERROR }
        );
    }
}
