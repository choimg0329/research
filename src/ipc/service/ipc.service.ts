import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';

@Injectable()
export class IpcService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createIpcDto: CreateIpcDto) {
    const data = {
      ...createIpcDto,
      cno: createIpcDto.cno ? BigInt(createIpcDto.cno) : null,
      user_no: createIpcDto.user_no ? BigInt(createIpcDto.user_no) : null,
    };
    
    return this.prisma.ipc.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.ipc.findMany();
  }

  async findOne(id: number) {
    return this.prisma.ipc.findUnique({
      where: { ipc_id: BigInt(id) },
    });
  }

  async update(id: number, updateIpcDto: UpdateIpcDto) {
    const data = {
      ...updateIpcDto,
      cno: updateIpcDto.cno ? BigInt(updateIpcDto.cno) : undefined,
      user_no: updateIpcDto.user_no ? BigInt(updateIpcDto.user_no) : undefined,
    };
    
    return this.prisma.ipc.update({
      where: { ipc_id: BigInt(id) },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.ipc.delete({
      where: { ipc_id: BigInt(id) },
    });
  }
} 