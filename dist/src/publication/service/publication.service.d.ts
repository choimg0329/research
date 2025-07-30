import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';
export declare class PublicationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPublicationDto: CreatePublicationDto): Promise<{
        publication_id: bigint;
        title: string | null;
        abstract: string | null;
        publication_date: Date | null;
        journal_id: bigint | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    findAll(): Promise<{
        publication_id: bigint;
        title: string | null;
        abstract: string | null;
        publication_date: Date | null;
        journal_id: bigint | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        publication_id: bigint;
        title: string | null;
        abstract: string | null;
        publication_date: Date | null;
        journal_id: bigint | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(id: number, updatePublicationDto: UpdatePublicationDto): Promise<{
        publication_id: bigint;
        title: string | null;
        abstract: string | null;
        publication_date: Date | null;
        journal_id: bigint | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(id: number): Promise<{
        publication_id: bigint;
        title: string | null;
        abstract: string | null;
        publication_date: Date | null;
        journal_id: bigint | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
}
