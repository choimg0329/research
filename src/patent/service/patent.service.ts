import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePatentDto } from '../dto/create-patent.dto';
import { UpdatePatentDto } from '../dto/update-patent.dto';

@Injectable()
export class PatentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPatentDto: CreatePatentDto) {
    const data = {
      ...createPatentDto,
      cno: createPatentDto.cno ? BigInt(createPatentDto.cno) : null,
      user_no: createPatentDto.user_no ? BigInt(createPatentDto.user_no) : null,
    };
    
    return this.prisma.patent.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.patent.findMany();
  }

  async findOne(id: number) {
    return this.prisma.patent.findUnique({
      where: { patent_id: BigInt(id) },
    });
  }

  async update(id: number, updatePatentDto: UpdatePatentDto) {
    const data = {
      ...updatePatentDto,
      cno: updatePatentDto.cno ? BigInt(updatePatentDto.cno) : undefined,
      user_no: updatePatentDto.user_no ? BigInt(updatePatentDto.user_no) : undefined,
    };
    
    return this.prisma.patent.update({
      where: { patent_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.patent.delete({
      where: { patent_id: BigInt(id) },
    });
  }
} 