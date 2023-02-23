import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

type Box = 'inbox' | 'outbox' | 'archived'

@Injectable()
export class ProcessService {
  constructor(private readonly prismaService: PrismaService) { }

  async getUserProcessesByBox(userId: number, box: Box) {
    const query = {
      where: {},
      include: {
        owner: true,
        possession: true,
        theme: true
      }
    } as any

    if (box == 'archived') {
      query.where.archived = true
      query.where.ownerId = userId
    } else if (box == 'inbox') {
      query.where.possessionId = userId
      query.where.archived = false
    } else if (box == 'outbox') {
      query.where.ownerId = userId
      query.where.possessionId = {
        not: userId
      }
      query.where.archived = false
    }

    const processes = await this
      .prismaService
      .judicialProcess
      .findMany(query)

    return processes
  }

  async transactProcessTo(
    id: number,
    fromUserId: number,
    toUserId: number
  ) {
    const process = await this.prismaService.judicialProcess.findUnique({
      where: { id }
    })

    if (process.possessionId != fromUserId) {
      throw new ForbiddenException(`User has no rights over this process`)
    }

    const updatedProcess = await this.prismaService.judicialProcess.update({
      where: { id },
      data: {
        possessionId: toUserId
      }
    })

    return updatedProcess
  }

  async toggleArchiveProcess(id: number, userId: number) {
    const process = await this.prismaService.judicialProcess.findUnique({
      where: { id },
    })

    if (process.ownerId != userId) {
      throw new ForbiddenException('User has no rights over this process')
    }

    await this.prismaService.judicialProcess.update({
      where: { id },
      data: {
        archived: !process.archived
      }
    })
  }
}
