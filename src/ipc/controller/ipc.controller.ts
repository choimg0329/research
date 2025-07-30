import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { IpcService } from '../service/ipc.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';

@ApiTags('ipc')
@Controller('research/ipc')
export class IpcController {
  constructor(private readonly ipcService: IpcService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new IPC' })
  @ApiResponse({ status: 201, description: 'IPC created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createIpcDto: CreateIpcDto) {
    return this.ipcService.create(createIpcDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all IPCs' })
  @ApiResponse({ status: 200, description: 'Return all IPCs' })
  findAll() {
    return this.ipcService.findAll();
  }

  @Get(':ipc_id')
  @ApiOperation({ summary: 'Get an IPC by ID' })
  @ApiParam({ name: 'ipc_id', description: 'IPC ID' })
  @ApiResponse({ status: 200, description: 'Return the IPC' })
  @ApiResponse({ status: 404, description: 'IPC not found' })
  findOne(@Param('ipc_id') ipc_id: string) {
    return this.ipcService.findOne(parseInt(ipc_id));
  }

  @Put(':ipc_id')
  @ApiOperation({ summary: 'Update an IPC' })
  @ApiParam({ name: 'ipc_id', description: 'IPC ID' })
  @ApiResponse({ status: 200, description: 'IPC updated successfully' })
  @ApiResponse({ status: 404, description: 'IPC not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('ipc_id') ipc_id: string, @Body() updateIpcDto: UpdateIpcDto) {
    return this.ipcService.update(parseInt(ipc_id), updateIpcDto);
  }

  @Delete(':ipc_id')
  @ApiOperation({ summary: 'Delete an IPC' })
  @ApiParam({ name: 'ipc_id', description: 'IPC ID' })
  @ApiResponse({ status: 200, description: 'IPC deleted successfully' })
  @ApiResponse({ status: 404, description: 'IPC not found' })
  remove(@Param('ipc_id') ipc_id: string) {
    return this.ipcService.remove(parseInt(ipc_id));
  }
} 