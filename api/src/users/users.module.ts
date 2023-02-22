import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, UsersService],
  controllers: [],
  exports: [UsersService]
})
export class UsersModule { }
