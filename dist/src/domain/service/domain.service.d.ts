import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDomainDto } from '../dto/create-domain.dto';
import { UpdateDomainDto } from '../dto/update-domain.dto';
export declare class DomainService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    } | null>;
    update(id: number, updateDomainDto: UpdateDomainDto): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        description: string | null;
        domain_id: bigint;
    }>;
    remove(id: number): Promise<{
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
