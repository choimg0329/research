import { PrismaService } from '../../../prisma/prisma.service';
import { CreateKeywordDto } from '../dto/create-keyword.dto';
import { UpdateKeywordDto } from '../dto/update-keyword.dto';
export declare class KeywordService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createKeywordDto: CreateKeywordDto): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    findAll(): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }[]>;
    findOne(id: number): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(id: number, updateKeywordDto: UpdateKeywordDto): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(id: number): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
}
