import { Module } from '@nestjs/common';
import { KeywordService } from '../service/keyword.service';
import { KeywordController } from '../controller/keyword.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [KeywordController],
  providers: [KeywordService, PrismaService],
})
export class KeywordModule {} 