import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PublicationService } from '../service/publication.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';

@ApiTags('publications')
@Controller('research/publications')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new publication' })
  @ApiResponse({ status: 201, description: 'Publication created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationService.create(createPublicationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all publications' })
  @ApiResponse({ status: 200, description: 'Return all publications' })
  findAll() {
    return this.publicationService.findAll();
  }

  @Get(':publication_id')
  @ApiOperation({ summary: 'Get a publication by ID' })
  @ApiParam({ name: 'publication_id', description: 'Publication ID' })
  @ApiResponse({ status: 200, description: 'Return the publication' })
  @ApiResponse({ status: 404, description: 'Publication not found' })
  findOne(@Param('publication_id') publication_id: string) {
    return this.publicationService.findOne(parseInt(publication_id));
  }

  @Put(':publication_id')
  @ApiOperation({ summary: 'Update a publication' })
  @ApiParam({ name: 'publication_id', description: 'Publication ID' })
  @ApiResponse({ status: 200, description: 'Publication updated successfully' })
  @ApiResponse({ status: 404, description: 'Publication not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('publication_id') publication_id: string, @Body() updatePublicationDto: UpdatePublicationDto) {
    return this.publicationService.update(parseInt(publication_id), updatePublicationDto);
  }

  @Delete(':publication_id')
  @ApiOperation({ summary: 'Delete a publication' })
  @ApiParam({ name: 'publication_id', description: 'Publication ID' })
  @ApiResponse({ status: 200, description: 'Publication deleted successfully' })
  @ApiResponse({ status: 404, description: 'Publication not found' })
  remove(@Param('publication_id') publication_id: string) {
    return this.publicationService.remove(parseInt(publication_id));
  }
} 