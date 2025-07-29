import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateIpcDto {
  @IsString()
  @IsOptional()
  ipc_code?: string;

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