import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { KeywordService } from '../service/keyword.service';
import { CreateKeywordDto } from '../dto/create-keyword.dto';
import { UpdateKeywordDto } from '../dto/update-keyword.dto';

@ApiTags('keywords')
@Controller('research/keywords')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new keyword' })
  @ApiResponse({ status: 201, description: 'Keyword created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createKeywordDto: CreateKeywordDto) {
    return this.keywordService.create(createKeywordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all keywords' })
  @ApiResponse({ status: 200, description: 'Return all keywords' })
  findAll() {
    return this.keywordService.findAll();
  }

  @Get(':keyword_id')
  @ApiOperation({ summary: 'Get a keyword by ID' })
  @ApiParam({ name: 'keyword_id', description: 'Keyword ID' })
  @ApiResponse({ status: 200, description: 'Return the keyword' })
  @ApiResponse({ status: 404, description: 'Keyword not found' })
  findOne(@Param('keyword_id') keyword_id: string) {
    return this.keywordService.findOne(parseInt(keyword_id));
  }

  @Put(':keyword_id')
  @ApiOperation({ summary: 'Update a keyword' })
  @ApiParam({ name: 'keyword_id', description: 'Keyword ID' })
  @ApiResponse({ status: 200, description: 'Keyword updated successfully' })
  @ApiResponse({ status: 404, description: 'Keyword not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('keyword_id') keyword_id: string, @Body() updateKeywordDto: UpdateKeywordDto) {
    return this.keywordService.update(parseInt(keyword_id), updateKeywordDto);
  }

  @Delete(':keyword_id')
  @ApiOperation({ summary: 'Delete a keyword' })
  @ApiParam({ name: 'keyword_id', description: 'Keyword ID' })
  @ApiResponse({ status: 200, description: 'Keyword deleted successfully' })
  @ApiResponse({ status: 404, description: 'Keyword not found' })
  remove(@Param('keyword_id') keyword_id: string) {
    return this.keywordService.remove(parseInt(keyword_id));
  }
} 