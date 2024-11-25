const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.reservation.createMany({
    data: [
      {
        name: "Juan Pérez",
        startDate: new Date('2024-12-01').toISOString(),
        startTime: "10:00",
        numberOfGuests: "4",
        status: "pending",
      },
    ],
  })

  console.log('Seed data has been added!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
