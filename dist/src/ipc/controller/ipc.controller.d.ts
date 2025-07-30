import { IpcService } from '../service/ipc.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';
export declare class IpcController {
    private readonly ipcService;
    constructor(ipcService: IpcService);
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
    findOne(ipc_id: string): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(ipc_id: string, updateIpcDto: UpdateIpcDto): Promise<{
        ipc_id: bigint;
        ipc_code: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(ipc_id: string): Promise<{
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
