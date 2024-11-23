import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if (!user || user === null || !user.id) {
        throw new Error("Smoething went wrong, i am sorry...")
    }

    let dbUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    })

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                name: user.username ?? "",
            }
        })
    }

    return NextResponse.redirect("http://localhost:3000")
}