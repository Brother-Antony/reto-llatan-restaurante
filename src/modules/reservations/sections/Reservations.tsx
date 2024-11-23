import Button from "@/shared/components/Button"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

export default function Reservations() {
    const router = useRouter()

    return (
        <div>
            <div className="text-2xl font-semibold">Reservations</div>
            <div className="inline-block mt-4">
                <Button color="primary" isDisabled={false} onClick={() => router.push("/reservations/create")} className="font-semibold">
                    <FontAwesomeIcon icon={faPlus} />
                    New
                </Button>
            </div>
            
        </div>
    )
}
