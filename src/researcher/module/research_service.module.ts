import { Module } from '@nestjs/common';
import { ResearchServiceService } from '../service/research_service.service';
import { ResearchControllerController } from '../controller/research_controller.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ResearchControllerController],
  providers: [ResearchServiceService, PrismaService],
})
export class ResearchServiceModule {} 