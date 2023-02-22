import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      include: {
        department: true,
        role: true
      }
    })
  }

  async findByName(name: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        name
      }
    })
  }
}
