import { PrismaService } from '../../../prisma/prisma.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';
export declare class IpcService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createIpcDto: CreateIpcDto): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    findAll(): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(id: number, updateIpcDto: UpdateIpcDto): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(id: number): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
}
