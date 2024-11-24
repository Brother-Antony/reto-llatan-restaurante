import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import prisma from '@/lib/db'
import { ReserveButtonDelete } from '../components/reserve-button-delete'

export default async function Reserve() {
    const data = await prisma.reservation.findMany()

    return (
        <div>
            <div className="text-2xl font-semibold">Reservations</div>
            <div className="inline-flex items-center gap-2 mt-4 mb-6">
                <Link href="/create">
                    <Button color="primary" radius='sm' className="font-semibold" type="submit">
                        <FontAwesomeIcon icon={faPlus} />
                        New
                    </Button>
                </Link>
            </div>

            <table className="table w-full" cellPadding={8}>
                <thead className="bg-slate-100 border-y border-gray">
                    <tr>
                        <th className="text-left">ID</th>
                        <th className="text-left">NAME</th>
                        <th className="text-center">GUEST(S)</th>
                        <th className="text-center">STATUS</th>
                        <th className="text-cener">TIME</th>
                        <th className="text-center">DATE</th>
                        <th style={{ width: 0 }}></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="text-left">{item.id}</td>
                                <td className="text-left">{item.name}</td>
                                <td className="text-center">{item.numberOfGuests}</td>
                                <td className="text-center">{item.status}</td>
                                <td className="text-center">{item.startTime}</td>
                                <td className="text-center">
                                    {format(new Date(item.startDate), "dd MMM yyyy")}
                                </td>
                                <td className='flex items-center gap-2'>
                                    <Link href={`/edit/${item.id}`}><Button color="secondary">Edit</Button></Link>
                                    <ReserveButtonDelete reserveId={item.id} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center">
                                No data found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
