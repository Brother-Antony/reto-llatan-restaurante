"use client"

import { unstable_noStore as noStore } from "next/cache"

export default function Home() {
  noStore()
  
  return (
    <div>Home</div>
  )
}
