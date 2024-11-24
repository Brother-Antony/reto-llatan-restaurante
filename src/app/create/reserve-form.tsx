"use client"

import { createReservation, updateRerservation } from '@/actions/reserve-actions'
import { faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Reservation } from '@prisma/client'
import Link from 'next/link'

export const status = [
    { key: 'confirmed', label: 'Confirmed' },
    { key: 'canceled', label: 'Canceled' },
    { key: 'pending', label: 'Pending' },
]

export default function ReserveForm({ reserve }: { reserve?: Reservation }) {
    const functionAction = reserve?.id ? updateRerservation : createReservation

    return (
        <form action={functionAction}>
            <input type="hidden" name='id' value={reserve?.id} />
            <div className="text-2xl font-semibold">{reserve?.id ? 'Reservation Edit' : 'Reservation Create'}</div>
            <div className="inline-flex items-center gap-2 mt-4">
                <Link href="/">
                    <Button isIconOnly color="default" radius='sm' variant='ghost' className="font-semibold">
                        <FontAwesomeIcon icon={faArrowLeft} width={12} />
                    </Button>
                </Link>
                <Button color="primary" radius='sm' className="font-semibold" type="submit">
                    <FontAwesomeIcon icon={faFloppyDisk} width={12} />
                    Save
                </Button>
            </div>

            <div className="flex w-full flex-wrap gap-4 mt-7">
                <Input
                    type="text"
                    variant='bordered'
                    label="Nombre completo"
                    className='flex-1 min-w-80'
                    name="name"
                    defaultValue={reserve?.name || ""}
                />
                {reserve?.id && (
                    <Select
                        items={status}
                        variant="bordered"
                        label="Status"
                        placeholder="Select a status"
                        className="max-w-xs"
                        name="status"
                        defaultSelectedKeys={[reserve?.status]}
                    >
                        {status.map((item) => (
                            <SelectItem key={item.key}>{item.label}</SelectItem>
                        ))}
                    </Select>
                )}
                <input
                    type="date"
                    className='relative inline-flex shadow-sm px-3 border-medium border-default-200 hover:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium h-14 py-2'
                    name="startDate"
                    defaultValue={reserve?.startDate ? reserve.startDate.toISOString().split('T')[0] : ""}
                />
                <input
                    type="time"
                    className="relative inline-flex shadow-sm px-3 border-medium border-default-200 hover:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium h-14 py-2"
                    name="startTime"
                    defaultValue={reserve?.startTime || ""}
                />
                <Input
                    type="text"
                    label="Número de personas"
                    variant='bordered'
                    className='max-w-[200px] min-w-[200px] flex-[200px]'
                    name="numberOfGuests"
                    defaultValue={reserve?.numberOfGuests || ""}
                />
            </div>
        </form>
    )
}
