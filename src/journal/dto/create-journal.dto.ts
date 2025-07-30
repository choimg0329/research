import { IsString, IsOptional, IsNumber, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJournalDto {
  @ApiProperty({ description: 'Journal name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Publisher', required: false })
  @IsString()
  @IsOptional()
  publisher?: string;

  @ApiProperty({ description: 'ISSN', required: false })
  @IsString()
  @IsOptional()
  issn?: string;

  @ApiProperty({ description: 'Impact factor', required: false })
  @IsNumber()
  @IsOptional()
  impact_factor?: number;

  @ApiProperty({ description: 'Company number', required: false })
  @IsNumber()
  @IsOptional()
  cno?: number;

  @ApiProperty({ description: 'User number', required: false })
  @IsNumber()
  @IsOptional()
  user_no?: number;
} 