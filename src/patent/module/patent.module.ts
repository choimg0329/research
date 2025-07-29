import { Module } from '@nestjs/common';
import { PatentService } from '../service/patent.service';
import { PatentController } from '../controller/patent.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PatentController],
  providers: [PatentService, PrismaService],
})
export class PatentModule {} 