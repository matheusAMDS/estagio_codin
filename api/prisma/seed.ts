import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.role.createMany({
    data: [
      {
        title: 'Procurador'
      },
      {
        title: 'Procurador Chefe'
      }
    ]
  })

  await prisma.department.createMany({
    data: [
      {
        name: 'CCAC'
      },
      {
        name: 'CCVASP'
      }
    ]
  })

  await prisma.user.createMany({
    data: [
      {
        name: 'Jorge Costa',
        roleId: 1,
        departmentId: 1,
        statusActive: true
      },
      {
        name: 'João Silva',
        roleId: 2,
        departmentId: 1,
        statusActive: true
      },
      {
        name: 'Maria Santos',
        roleId: 1,
        departmentId: 2,
        statusActive: true
      },
    ]
  })
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async e => {
  console.log(e)

  await prisma.$disconnect()
})