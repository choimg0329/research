import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';

@Injectable()
export class DomainService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDomainDto: CreateDomainDto) {
    const data = {
      ...createDomainDto,
      cno: createDomainDto.cno ? BigInt(createDomainDto.cno) : null,
      user_no: createDomainDto.user_no ? BigInt(createDomainDto.user_no) : null,
    };
    
    return this.prisma.domain.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.domain.findMany();
  }

  async findOne(id: number) {
    return this.prisma.domain.findUnique({
      where: { domain_id: BigInt(id) },
    });
  }

  async update(id: number, updateDomainDto: UpdateDomainDto) {
    const data = {
      ...updateDomainDto,
      cno: updateDomainDto.cno ? BigInt(updateDomainDto.cno) : undefined,
      user_no: updateDomainDto.user_no ? BigInt(updateDomainDto.user_no) : undefined,
    };
    
    return this.prisma.domain.update({
      where: { domain_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.domain.delete({
      where: { domain_id: BigInt(id) },
    });
  }
} 