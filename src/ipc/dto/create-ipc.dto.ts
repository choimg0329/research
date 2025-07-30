import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIpcDto {
  @ApiProperty({ description: 'IPC code', required: false })
  @IsString()
  @IsOptional()
  ipc_code?: string;

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