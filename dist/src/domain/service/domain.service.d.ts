import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';
export declare class DomainService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(id: number, updateDomainDto: UpdateDomainDto): Promise<{
        domain_id: bigint;
        name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(id: number): Promise<{
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
