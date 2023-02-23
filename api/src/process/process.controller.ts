import { Body, Controller, Get, Param, Patch, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProcessService } from './process.service';

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('inbox')
  async getInbox(@Request() req) {
    const userId = req.user.userId

    return this.processService.getUserProcessesByBox(userId, 'inbox')
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('outbox')
  async getOutbox(@Request() req) {
    const userId = req.user.userId

    return this.processService.getUserProcessesByBox(userId, 'outbox')
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('archived')
  async getArchived(@Request() req) {
    const userId = req.user.userId

    return this.processService.getUserProcessesByBox(userId, 'archived')
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id/transact')
  async transactProcess(
    @Param('id') id: string,
    @Request() req,
    @Body() body
  ) {
    const fromUserId = parseInt(req.user.userId)
    const toUserId = parseInt(body.to)
    const processId = parseInt(id)

    return this
      .processService
      .transactProcessTo(processId, fromUserId, toUserId)
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async toggleArchiveProcess(@Param('id') id: string, @Request() req) {
    const userId = parseInt(req.user.userId)
    const processId = parseInt(id)

    return this.processService.toggleArchiveProcess(processId, userId)
  }
}
