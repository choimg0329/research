import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateKeywordDto {
  @IsString()
  @IsOptional()
  keyword_name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  cno?: number;

  @IsNumber()
  @IsOptional()
  user_no?: number;
} 