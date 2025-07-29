import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { IpcService } from '../service/ipc.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';

@Controller('research/ipc')
export class IpcController {
  constructor(private readonly ipcService: IpcService) {}

  @Post()
  create(@Body() createIpcDto: CreateIpcDto) {
    return this.ipcService.create(createIpcDto);
  }

  @Get()
  findAll() {
    return this.ipcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ipcService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIpcDto: UpdateIpcDto) {
    return this.ipcService.update(+id, updateIpcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipcService.remove(+id);
  }
} 