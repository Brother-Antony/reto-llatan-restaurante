"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import prisma from "@/lib/db"

export async function createReservation(formData: FormData) {
    const name = formData.get("name") as string
    const startDate = formData.get("startDate") as string
    const startTime = formData.get("startTime") as string
    const numberOfGuests = formData.get("numberOfGuests") as string
    
    const startDateTime = new Date(`${startDate}T${startTime}`)

    if (!name || !startDate || !startTime || !numberOfGuests) return

    const data = await prisma.reservation.create({
      data: {
        name: name,
        startDate: startDateTime,
        startTime: startTime,
        // status: "pending",
        numberOfGuests: numberOfGuests,
      },
    })

    console.log(data)
  
    return redirect("/")
}

export async function removeReservation(formData: FormData) {
  "use server"
  const reserveId = formData.get("reserveId") as string
  
  if (!reserveId) return

  await prisma.reservation.delete({
    where: {
      id: parseInt(reserveId)
    }
  })

  revalidatePath("/")
}

export async function updateRerservation(formData: FormData) {
  const id = formData.get("id") as string
  const name = formData.get("name") as string
  const status = formData.get("status") as string
  const startDate = formData.get("startDate") as string
  const startTime = formData.get("startTime") as string
  const numberOfGuests = formData.get("numberOfGuests") as string

  const startDateTime = new Date(`${startDate}T${startTime}`)

  if (!id || !name || !status || !startDate || !startTime || !numberOfGuests) return

  await prisma.reservation.update({
    where: {
      id: parseInt(id)
    },
    data: {
      name: name,
      startDate: startDateTime,
      startTime: startTime,
      status: status,
      numberOfGuests: numberOfGuests,
    },
  })

  redirect("/")
}
