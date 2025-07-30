import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PatentService } from '../service/patent.service';
import { CreatePatentDto } from '../dto/create-patent.dto';
import { UpdatePatentDto } from '../dto/update-patent.dto';

@ApiTags('patents')
@Controller('research/patents')
export class PatentController {
  constructor(private readonly patentService: PatentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new patent' })
  @ApiResponse({ status: 201, description: 'Patent created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createPatentDto: CreatePatentDto) {
    return this.patentService.create(createPatentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all patents' })
  @ApiResponse({ status: 200, description: 'Return all patents' })
  findAll() {
    return this.patentService.findAll();
  }

  @Get(':patent_id')
  @ApiOperation({ summary: 'Get a patent by ID' })
  @ApiParam({ name: 'patent_id', description: 'Patent ID' })
  @ApiResponse({ status: 200, description: 'Return the patent' })
  @ApiResponse({ status: 404, description: 'Patent not found' })
  findOne(@Param('patent_id') patent_id: string) {
    return this.patentService.findOne(parseInt(patent_id));
  }

  @Put(':patent_id')
  @ApiOperation({ summary: 'Update a patent' })
  @ApiParam({ name: 'patent_id', description: 'Patent ID' })
  @ApiResponse({ status: 200, description: 'Patent updated successfully' })
  @ApiResponse({ status: 404, description: 'Patent not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('patent_id') patent_id: string, @Body() updatePatentDto: UpdatePatentDto) {
    return this.patentService.update(parseInt(patent_id), updatePatentDto);
  }

  @Delete(':patent_id')
  @ApiOperation({ summary: 'Delete a patent' })
  @ApiParam({ name: 'patent_id', description: 'Patent ID' })
  @ApiResponse({ status: 200, description: 'Patent deleted successfully' })
  @ApiResponse({ status: 404, description: 'Patent not found' })
  remove(@Param('patent_id') patent_id: string) {
    return this.patentService.remove(parseInt(patent_id));
  }
} 