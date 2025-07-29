import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateKeywordDto } from '../dto/create-keyword.dto';
import { UpdateKeywordDto } from '../dto/update-keyword.dto';

@Injectable()
export class KeywordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createKeywordDto: CreateKeywordDto) {
    const data = {
      ...createKeywordDto,
      cno: createKeywordDto.cno ? BigInt(createKeywordDto.cno) : null,
      user_no: createKeywordDto.user_no ? BigInt(createKeywordDto.user_no) : null,
    };
    
    return this.prisma.keyword.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.keyword.findMany();
  }

  async findOne(id: number) {
    return this.prisma.keyword.findUnique({
      where: { keyword_id: BigInt(id) },
    });
  }

  async update(id: number, updateKeywordDto: UpdateKeywordDto) {
    const data = {
      ...updateKeywordDto,
      cno: updateKeywordDto.cno ? BigInt(updateKeywordDto.cno) : undefined,
      user_no: updateKeywordDto.user_no ? BigInt(updateKeywordDto.user_no) : undefined,
    };
    
    return this.prisma.keyword.update({
      where: { keyword_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.keyword.delete({
      where: { keyword_id: BigInt(id) },
    });
  }
} 