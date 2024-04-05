import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: 'f459d779-6660-4ebf-8827-a3feb41d809b',
      title: 'Unite Summite',
      slug: 'Unite Summite',
      details: 'Um evento p/ devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Databases seeded!')
  prisma.$disconnect()
})