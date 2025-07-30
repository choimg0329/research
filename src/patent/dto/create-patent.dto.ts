import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePatentDto {
  @ApiProperty({ description: 'Patent title', required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'Application number', required: false })
  @IsString()
  @IsOptional()
  application_number?: string;

  @ApiProperty({ description: 'Registration number', required: false })
  @IsString()
  @IsOptional()
  registration_number?: string;

  @ApiProperty({ description: 'Publication number', required: false })
  @IsString()
  @IsOptional()
  publication_number?: string;

  @ApiProperty({ description: 'Country', required: false })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({ description: 'Applicant name', required: false })
  @IsString()
  @IsOptional()
  applicant_name?: string;

  @ApiProperty({ description: 'Application title', required: false })
  @IsString()
  @IsOptional()
  application_title?: string;

  @ApiProperty({ description: 'Applicant', required: false })
  @IsString()
  @IsOptional()
  applicant?: string;

  @ApiProperty({ description: 'Application date', required: false })
  @IsDateString()
  @IsOptional()
  application_date?: Date;

  @ApiProperty({ description: 'Registration date', required: false })
  @IsDateString()
  @IsOptional()
  registration_date?: Date;

  @ApiProperty({ description: 'Publication date', required: false })
  @IsDateString()
  @IsOptional()
  publication_date?: Date;

  @ApiProperty({ description: 'Summary', required: false })
  @IsString()
  @IsOptional()
  summary?: string;

  @ApiProperty({ description: 'Company number', required: false })
  @IsNumber()
  @IsOptional()
  cno?: number;

  @ApiProperty({ description: 'User number', required: false })
  @IsNumber()
  @IsOptional()
  user_no?: number;
} 