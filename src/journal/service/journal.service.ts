import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';

@Injectable()
export class JournalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createJournalDto: CreateJournalDto) {
    const data = {
      ...createJournalDto,
      impact_factor: createJournalDto.impact_factor ? createJournalDto.impact_factor : null,
      cno: createJournalDto.cno ? BigInt(createJournalDto.cno) : null,
      user_no: createJournalDto.user_no ? BigInt(createJournalDto.user_no) : null,
    };
    
    return this.prisma.journal.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.journal.findMany();
  }

  async findOne(id: number) {
    return this.prisma.journal.findUnique({
      where: { journal_id: BigInt(id) },
    });
  }

  async update(id: number, updateJournalDto: UpdateJournalDto) {
    const data = {
      ...updateJournalDto,
      impact_factor: updateJournalDto.impact_factor ? updateJournalDto.impact_factor : undefined,
      cno: updateJournalDto.cno ? BigInt(updateJournalDto.cno) : undefined,
      user_no: updateJournalDto.user_no ? BigInt(updateJournalDto.user_no) : undefined,
    };
    
    return this.prisma.journal.update({
      where: { journal_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.journal.delete({
      where: { journal_id: BigInt(id) },
    });
  }
} 