import { IsString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class CreateResearcherDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  affiliation?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsNumber()
  @IsOptional()
  cno?: number;

  @IsNumber()
  @IsOptional()
  user_no?: number;
} 