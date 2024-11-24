import ReserveForm from "@/app/create/reserve-form"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"

export default async function reservePageEdit({ params } : {
    params: {
        id: string
    }
}) {
    const reservation = await prisma.reservation.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })

    if (!reservation) redirect('/')

    return (
        <ReserveForm reserve={reservation} />
    )
}