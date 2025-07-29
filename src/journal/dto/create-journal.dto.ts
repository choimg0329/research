import { IsString, IsOptional, IsNumber, IsDecimal } from 'class-validator';

export class CreateJournalDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  publisher?: string;

  @IsString()
  @IsOptional()
  issn?: string;

  @IsNumber()
  @IsOptional()
  impact_factor?: number;

  @IsNumber()
  @IsOptional()
  cno?: number;

  @IsNumber()
  @IsOptional()
  user_no?: number;
} 