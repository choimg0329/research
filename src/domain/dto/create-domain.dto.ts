import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateDomainDto {
  @IsString()
  @IsOptional()
  name?: string;

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