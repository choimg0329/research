import { PublicationService } from '../service/publication.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
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
    findOne(id: string): Promise<{
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
    update(id: string, updatePublicationDto: UpdatePublicationDto): Promise<{
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
    remove(id: string): Promise<{
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
