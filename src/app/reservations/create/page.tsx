import { Input } from "@nextui-org/react"

export default function page() {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="text" label="Nombre completo" />
        </div>
    )
}
