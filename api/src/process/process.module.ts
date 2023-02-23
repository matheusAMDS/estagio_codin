import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';

@Module({
  providers: [PrismaService, ProcessService],
  controllers: [ProcessController]
})
export class ProcessModule { }
