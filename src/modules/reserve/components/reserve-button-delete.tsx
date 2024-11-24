import { removeReservation } from "@/actions/reserve-actions";
import { Button } from "@nextui-org/react";

export function ReserveButtonDelete({ reserveId }: { reserveId: number }) {
    return (
        <form action={removeReservation}>
            <input type="hidden" name="reserveId" value={reserveId} />
            <Button color="danger" type="submit">Delete</Button>
        </form>
    )
}