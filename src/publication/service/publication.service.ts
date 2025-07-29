import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';

@Injectable()
export class PublicationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublicationDto: CreatePublicationDto) {
    const data = {
      ...createPublicationDto,
      journal_id: createPublicationDto.journal_id ? BigInt(createPublicationDto.journal_id) : null,
      cno: createPublicationDto.cno ? BigInt(createPublicationDto.cno) : null,
      user_no: createPublicationDto.user_no ? BigInt(createPublicationDto.user_no) : null,
    };
    
    return this.prisma.publication.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.publication.findMany();
  }

  async findOne(id: number) {
    return this.prisma.publication.findUnique({
      where: { publication_id: BigInt(id) },
    });
  }

  async update(id: number, updatePublicationDto: UpdatePublicationDto) {
    const data = {
      ...updatePublicationDto,
      journal_id: updatePublicationDto.journal_id ? BigInt(updatePublicationDto.journal_id) : undefined,
      cno: updatePublicationDto.cno ? BigInt(updatePublicationDto.cno) : undefined,
      user_no: updatePublicationDto.user_no ? BigInt(updatePublicationDto.user_no) : undefined,
    };
    
    return this.prisma.publication.update({
      where: { publication_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.publication.delete({
      where: { publication_id: BigInt(id) },
    });
  }
} 