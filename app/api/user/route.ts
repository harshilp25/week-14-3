import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET() {
  const user = await client.user.findFirst();
  return NextResponse.json({ user });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // db call

  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return NextResponse.json({
    message: "signed up",
  });
}
