import { JournalService } from '../service/journal.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';
export declare class JournalController {
    private readonly journalService;
    constructor(journalService: JournalService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updateJournalDto: UpdateJournalDto): Promise<{
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
    remove(id: string): Promise<{
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
