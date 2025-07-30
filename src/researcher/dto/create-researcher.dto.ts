import { IsString, IsOptional, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResearcherDto {
  @ApiProperty({ description: 'Researcher name', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ description: 'Affiliation', required: false })
  @IsString()
  @IsOptional()
  affiliation?: string;

  @ApiProperty({ description: 'Email address', required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ description: 'Company number', required: false })
  @IsNumber()
  @IsOptional()
  cno?: number;

  @ApiProperty({ description: 'User number', required: true })
  @IsNumber()
  @IsNotEmpty()
  user_no: number;
} 