import ReserveForm from "@/app/create/reserve-form"
import prisma from "@/lib/db"
import { redirect } from "next/navigation"

export default async function reservePageEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!reservation) redirect('/')

  return (
    <ReserveForm reserve={reservation} />
  )
}
