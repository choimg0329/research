import { IpcService } from '../service/ipc.service';
import { CreateIpcDto } from '../dto/create-ipc.dto';
import { UpdateIpcDto } from '../dto/update-ipc.dto';
export declare class IpcController {
    private readonly ipcService;
    constructor(ipcService: IpcService);
    create(createIpcDto: CreateIpcDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        ipc_code: string | null;
        ipc_id: bigint;
    }>;
    findAll(): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        ipc_code: string | null;
        ipc_id: bigint;
    }[]>;
    findOne(id: string): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        ipc_code: string | null;
        ipc_id: bigint;
    } | null>;
    update(id: string, updateIpcDto: UpdateIpcDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        ipc_code: string | null;
        ipc_id: bigint;
    }>;
    remove(id: string): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        ipc_code: string | null;
        ipc_id: bigint;
    }>;
}
