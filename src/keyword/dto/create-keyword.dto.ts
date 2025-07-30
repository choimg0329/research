import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKeywordDto {
  @ApiProperty({ description: 'Keyword name', required: false })
  @IsString()
  @IsOptional()
  keyword_name?: string;

  @ApiProperty({ description: 'Description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Company number', required: false })
  @IsNumber()
  @IsOptional()
  cno?: number;

  @ApiProperty({ description: 'User number', required: false })
  @IsNumber()
  @IsOptional()
  user_no?: number;
} 