import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PatentService } from '../service/patent.service';
import { CreatePatentDto } from '../dto/create-patent.dto';
import { UpdatePatentDto } from '../dto/update-patent.dto';

@Controller('research/patents')
export class PatentController {
  constructor(private readonly patentService: PatentService) {}

  @Post()
  create(@Body() createPatentDto: CreatePatentDto) {
    return this.patentService.create(createPatentDto);
  }

  @Get()
  findAll() {
    return this.patentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patentService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePatentDto: UpdatePatentDto) {
    return this.patentService.update(+id, updatePatentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patentService.remove(+id);
  }
} 