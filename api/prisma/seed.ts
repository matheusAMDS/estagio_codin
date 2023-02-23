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

  await prisma.judicialProcessTheme.createMany({
    data: [
      {
        name: "ICMS"
      }
    ]
  })

  await prisma.box.createMany({
    data: [
      {
        title: "Entrada"
      },
      {
        title: "Saída"
      },
      {
        title: "Arquivado"
      }
    ]
  })

  await prisma.judicialProcess.createMany({
    data: [
      {
        number: "2023002548",
        archived: false,
        status: 'JULGADO',
        type: 'ADMINISTRATIVO',
        activeStatus: true,
        startDate: new Date('02/14/2023'),
        endDate: new Date('02/23/2023'),
        ownerId: 2,
        possessionId: 2,
        themeId: 1,
        boxId: 1
      }, {
        type: "ADMINISTRATIVO",
        number: "2023006597",
        themeId: 1,
        status: "EM_ANDAMENTO",
        startDate: new Date("02/16/2023"),
        endDate: new Date("02/21/2023"),
        ownerId: 1,
        possessionId: 1,
        archived: false,
        activeStatus: true,
        boxId: 1
      }, {
        type: "ADMINISTRATIVO",
        number: "2023006158",
        status: "EM_ANDAMENTO",
        startDate: new Date("02/12/2023"),
        endDate: new Date("02/18/2023"),
        ownerId: 3,
        possessionId: 3,
        archived: false,
        activeStatus: true,
        themeId: 1,
        boxId: 1
      }, {
        type: "ADMINISTRATIVO",
        number: "2023007615",
        status: "JULGADO",
        startDate: new Date("02/10/2023"),
        endDate: new Date("02/28/2023"),
        ownerId: 2,
        possessionId: 3,
        archived: false,
        activeStatus: true,
        themeId: 1,
        boxId: 2
      }, {
        type: "ADMINISTRATIVO",
        number: "2023001975",
        status: "EM_ANDAMENTO",
        startDate: new Date("02/04/2023"),
        endDate: new Date("02/13/2023"),
        ownerId: 1,
        possessionId: 1,
        archived: false,
        activeStatus: true,
        themeId: 1,
        boxId: 2
      }, {
        type: "ADMINISTRATIVO",
        number: "2023004687",
        status: "JULGADO",
        startDate: new Date("02/01/2023"),
        endDate: new Date("02/10/2023"),
        ownerId: 2,
        possessionId: 2,
        archived: true,
        activeStatus: true,
        themeId: 1,
        boxId: 3
      }
    ]
  })


}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async e => {
  console.log(e)

  await prisma.$disconnect()
})