import { Module } from '@nestjs/common';
import { JournalService } from '../service/journal.service';
import { JournalController } from '../controller/journal.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [JournalController],
  providers: [JournalService, PrismaService],
})
export class JournalModule {} 