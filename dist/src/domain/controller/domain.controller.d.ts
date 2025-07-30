import { DomainService } from '../service/domain.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';
export declare class DomainController {
    private readonly domainService;
    constructor(domainService: DomainService);
    create(createDomainDto: CreateDomainDto): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    findAll(): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }[]>;
    findOne(domain_id: string): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(domain_id: string, updateDomainDto: UpdateDomainDto): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(domain_id: string): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
}
