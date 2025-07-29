import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreatePublicationDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  abstract?: string;

  @IsOptional()
  publication_date?: Date;

  @IsNumber()
  @IsOptional()
  journal_id?: number;

  @IsNumber()
  @IsOptional()
  cno?: number;

  @IsNumber()
  @IsOptional()
  user_no?: number;
} 