import { Module } from '@nestjs/common';
import { DomainService } from '../service/domain.service';
import { DomainController } from '../controller/domain.controller';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [DomainController],
  providers: [DomainService, PrismaService],
})
export class DomainModule {} 