import { JournalService } from '../service/journal.service';
import { CreateJournalDto } from '../dto/create-journal.dto';
import { UpdateJournalDto } from '../dto/update-journal.dto';
export declare class JournalController {
    private readonly journalService;
    constructor(journalService: JournalService);
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
    findOne(journal_id: string): Promise<{
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
    update(journal_id: string, updateJournalDto: UpdateJournalDto): Promise<{
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
    remove(journal_id: string): Promise<{
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
