import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { JournalService } from '../service/journal.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';

@ApiTags('journals')
@Controller('research/journals')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new journal' })
  @ApiResponse({ status: 201, description: 'Journal created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createJournalDto: CreateJournalDto) {
    return this.journalService.create(createJournalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all journals' })
  @ApiResponse({ status: 200, description: 'Return all journals' })
  findAll() {
    return this.journalService.findAll();
  }

  @Get(':journal_id')
  @ApiOperation({ summary: 'Get a journal by ID' })
  @ApiParam({ name: 'journal_id', description: 'Journal ID' })
  @ApiResponse({ status: 200, description: 'Return the journal' })
  @ApiResponse({ status: 404, description: 'Journal not found' })
  findOne(@Param('journal_id') journal_id: string) {
    return this.journalService.findOne(parseInt(journal_id));
  }

  @Put(':journal_id')
  @ApiOperation({ summary: 'Update a journal' })
  @ApiParam({ name: 'journal_id', description: 'Journal ID' })
  @ApiResponse({ status: 200, description: 'Journal updated successfully' })
  @ApiResponse({ status: 404, description: 'Journal not found' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('journal_id') journal_id: string, @Body() updateJournalDto: UpdateJournalDto) {
    return this.journalService.update(parseInt(journal_id), updateJournalDto);
  }

  @Delete(':journal_id')
  @ApiOperation({ summary: 'Delete a journal' })
  @ApiParam({ name: 'journal_id', description: 'Journal ID' })
  @ApiResponse({ status: 200, description: 'Journal deleted successfully' })
  @ApiResponse({ status: 404, description: 'Journal not found' })
  remove(@Param('journal_id') journal_id: string) {
    return this.journalService.remove(parseInt(journal_id));
  }
} 