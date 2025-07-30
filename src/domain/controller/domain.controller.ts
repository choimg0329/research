import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { DomainService } from '../service/domain.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';

@ApiTags('domains')
@Controller('research/domains')
export class DomainController {
  constructor(private readonly domainService: DomainService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new domain' })
  @ApiResponse({ status: 201, description: 'Domain created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createDomainDto: CreateDomainDto) {
    return this.domainService.create(createDomainDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all domains' })
  @ApiResponse({ status: 200, description: 'Return all domains' })
  findAll() {
    return this.domainService.findAll();
  }

  @Get(':domain_id')
  @ApiOperation({ summary: 'Get a domain by ID' })
  @ApiParam({ name: 'domain_id', description: 'Domain ID' })
  @ApiResponse({ status: 200, description: 'Return the domain' })
  @ApiResponse({ status: 404, description: 'Domain not found' })
  findOne(@Param('domain_id') domain_id: string) {
    return this.domainService.findOne(parseInt(domain_id));
  }

  @Put(':domain_id')
  @ApiOperation({ summary: 'Update a domain' })
  @ApiParam({ name: 'domain_id', description: 'Domain ID' })
  @ApiResponse({ status: 200, description: 'Domain updated successfully' })
  @ApiResponse({ status: 404, description: 'Domain not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('domain_id') domain_id: string, @Body() updateDomainDto: UpdateDomainDto) {
    return this.domainService.update(parseInt(domain_id), updateDomainDto);
  }

  @Delete(':domain_id')
  @ApiOperation({ summary: 'Delete a domain' })
  @ApiParam({ name: 'domain_id', description: 'Domain ID' })
  @ApiResponse({ status: 200, description: 'Domain deleted successfully' })
  @ApiResponse({ status: 404, description: 'Domain not found' })
  remove(@Param('domain_id') domain_id: string) {
    return this.domainService.remove(parseInt(domain_id));
  }
} 