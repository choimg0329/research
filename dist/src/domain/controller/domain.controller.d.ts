import { DomainService } from '../service/domain.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';
export declare class DomainController {
    private readonly domainService;
    constructor(domainService: DomainService);
    create(createDomainDto: CreateDomainDto): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    }>;
    findAll(): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    }[]>;
    findOne(id: string): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    } | null>;
    update(id: string, updateDomainDto: UpdateDomainDto): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    }>;
    remove(id: string): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    }>;
}
