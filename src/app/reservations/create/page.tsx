import { Input } from "@nextui-org/react"
import { unstable_noStore as noStore } from "next/cache"

export default function Create() {
    noStore()
    
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="text" label="Nombre completo" />
        </div>
    )
}
