import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePublicationDto {
  @ApiProperty({ description: 'Publication title', required: true })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Publication abstract', required: false })
  @IsString()
  @IsOptional()
  abstract?: string;

  @ApiProperty({ description: 'Publication date', required: false })
  @IsOptional()
  publication_date?: Date;

  @ApiProperty({ description: 'Journal ID', required: false })
  @IsNumber()
  @IsOptional()
  journal_id?: number;

  @ApiProperty({ description: 'Company number', required: false })
  @IsNumber()
  @IsOptional()
  cno?: number;

  @ApiProperty({ description: 'User number', required: false })
  @IsNumber()
  @IsOptional()
  user_no?: number;
} 