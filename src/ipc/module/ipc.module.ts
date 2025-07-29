import { Module } from '@nestjs/common';
import { IpcService } from '../service/ipc.service';
import { IpcController } from '../controller/ipc.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [IpcController],
  providers: [IpcService, PrismaService],
})
export class IpcModule {} 