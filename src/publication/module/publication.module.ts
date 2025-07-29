import { Module } from '@nestjs/common';
import { PublicationService } from '../service/publication.service';
import { PublicationController } from '../controller/publication.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [PublicationController],
  providers: [PublicationService, PrismaService],
})
export class PublicationModule {} 