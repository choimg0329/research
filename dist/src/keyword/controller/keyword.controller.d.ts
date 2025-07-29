import { KeywordService } from '../service/keyword.service';
import { CreateKeywordDto } from '../dto/create-keyword.dto';
import { UpdateKeywordDto } from '../dto/update-keyword.dto';
export declare class KeywordController {
    private readonly keywordService;
    constructor(keywordService: KeywordService);
    create(createKeywordDto: CreateKeywordDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        keyword_name: string | null;
        description: string | null;
        keyword_id: bigint;
    }>;
    findAll(): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        keyword_name: string | null;
        description: string | null;
        keyword_id: bigint;
    }[]>;
    findOne(id: string): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        keyword_name: string | null;
        description: string | null;
        keyword_id: bigint;
    } | null>;
    update(id: string, updateKeywordDto: UpdateKeywordDto): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        keyword_name: string | null;
        description: string | null;
        keyword_id: bigint;
    }>;
    remove(id: string): Promise<{
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
        keyword_name: string | null;
        description: string | null;
        keyword_id: bigint;
    }>;
}
