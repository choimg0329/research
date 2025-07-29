import { PrismaService } from '../../../prisma/prisma.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';
export declare class PublicationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPublicationDto: CreatePublicationDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        title: string | null;
        publication_date: Date | null;
        abstract: string | null;
        journal_id: bigint | null;
        publication_id: bigint;
    }>;
    findAll(): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        title: string | null;
        publication_date: Date | null;
        abstract: string | null;
        journal_id: bigint | null;
        publication_id: bigint;
    }[]>;
    findOne(id: number): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        title: string | null;
        publication_date: Date | null;
        abstract: string | null;
        journal_id: bigint | null;
        publication_id: bigint;
    } | null>;
    update(id: number, updatePublicationDto: UpdatePublicationDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        title: string | null;
        publication_date: Date | null;
        abstract: string | null;
        journal_id: bigint | null;
        publication_id: bigint;
    }>;
    remove(id: number): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        title: string | null;
        publication_date: Date | null;
        abstract: string | null;
        journal_id: bigint | null;
        publication_id: bigint;
    }>;
}
