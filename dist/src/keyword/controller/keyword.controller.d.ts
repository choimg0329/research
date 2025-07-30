import { KeywordService } from '../service/keyword.service';
import { CreateKeywordDto } from '../dto/create-keyword.dto';
import { UpdateKeywordDto } from '../dto/update-keyword.dto';
export declare class KeywordController {
    private readonly keywordService;
    constructor(keywordService: KeywordService);
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
    findOne(keyword_id: string): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    } | null>;
    update(keyword_id: string, updateKeywordDto: UpdateKeywordDto): Promise<{
        keyword_id: bigint;
        keyword_name: string | null;
        description: string | null;
        cno: bigint | null;
        user_no: bigint | null;
        insert_timestamp: Date;
        update_timestamp: Date;
        is_deleted: boolean;
    }>;
    remove(keyword_id: string): Promise<{
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
