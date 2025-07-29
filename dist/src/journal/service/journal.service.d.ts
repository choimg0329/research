import { PrismaService } from '../../../prisma/prisma.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';
export declare class JournalService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createJournalDto: CreateJournalDto): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        journal_id: bigint;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        journal_id: bigint;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        journal_id: bigint;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
    } | null>;
    update(id: number, updateJournalDto: UpdateJournalDto): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        journal_id: bigint;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        name: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        journal_id: bigint;
        publisher: string | null;
        issn: string | null;
        impact_factor: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
