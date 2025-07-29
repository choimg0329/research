import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResearchServiceService } from '../service/research_service.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';

@Controller('research/researcher')
export class ResearchControllerController {
  constructor(private readonly researchService: ResearchServiceService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createResearcherDto: CreateResearcherDto) {
    return this.researchService.create(createResearcherDto);
  }
}
