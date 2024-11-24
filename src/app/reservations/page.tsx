"use client"

import Main from "@/modules/reservations/Main"
import { unstable_noStore as noStore } from "next/cache"

export default function Reservations() {
    noStore()
    
    return (
        <Main />
    )
}
