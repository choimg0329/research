import { PublicationService } from '../service/publication.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { UpdatePublicationDto } from '../dto/update-publication.dto';
export declare class PublicationController {
    private readonly publicationService;
    constructor(publicationService: PublicationService);
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
    findOne(publication_id: string): Promise<{
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
    update(publication_id: string, updatePublicationDto: UpdatePublicationDto): Promise<{
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
    remove(publication_id: string): Promise<{
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
