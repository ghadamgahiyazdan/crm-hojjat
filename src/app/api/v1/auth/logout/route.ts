import { NextResponse } from "next/server";

export async function GET() {
  try {
    
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    response.cookies.set({
      name: "token",
      value: "",
      path: "/",
      maxAge: 0,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true
    });

    return response;
  } catch{
    return NextResponse.json(
      { message: "Logout Failed Server Error" },
      { status: 500 }
    );
  }
}