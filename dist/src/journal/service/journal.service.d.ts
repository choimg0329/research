import { PrismaService } from '../../../prisma/prisma.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';
export declare class JournalService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createJournalDto: CreateJournalDto): Promise<{
        journal_id: bigint;
        name: string | null;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    findAll(): Promise<{
        journal_id: bigint;
        name: string | null;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        journal_id: bigint;
        name: string | null;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(id: number, updateJournalDto: UpdateJournalDto): Promise<{
        journal_id: bigint;
        name: string | null;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(id: number): Promise<{
        journal_id: bigint;
        name: string | null;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
}
