import { PartialType } from '@nestjs/mapped-types';
import { CreateIpcDto } from './create-ipc.dto';

export class UpdateIpcDto extends PartialType(CreateIpcDto) {} 