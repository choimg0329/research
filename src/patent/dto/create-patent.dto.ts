import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class CreatePatentDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  application_number?: string;

  @IsString()
  @IsOptional()
  registration_number?: string;

  @IsString()
  @IsOptional()
  publication_number?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  applicant_name?: string;

  @IsString()
  @IsOptional()
  application_title?: string;

  @IsString()
  @IsOptional()
  applicant?: string;

  @IsDateString()
  @IsOptional()
  application_date?: Date;

  @IsDateString()
  @IsOptional()
  registration_date?: Date;

  @IsDateString()
  @IsOptional()
  publication_date?: Date;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsNumber()
  @IsOptional()
  cno?: number;

  @IsNumber()
  @IsOptional()
  user_no?: number;
} 