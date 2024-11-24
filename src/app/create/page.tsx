import { unstable_noStore as noStore } from "next/cache"
import ReserveForm from "./reserve-form"

export default function Create() {
    noStore()

    return (
        <ReserveForm />
    )
}
