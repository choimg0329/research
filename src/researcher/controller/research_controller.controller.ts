import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResearchServiceService } from '../service/research_service.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';

@ApiTags('researchers')
@Controller('research/researcher')
export class ResearchControllerController {
  constructor(private readonly researchService: ResearchServiceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new researcher' })
  @ApiResponse({ status: 201, description: 'Researcher created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createResearcherDto: CreateResearcherDto) {
    return this.researchService.create(createResearcherDto);
  }
}
