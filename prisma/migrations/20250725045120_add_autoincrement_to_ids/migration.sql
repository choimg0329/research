-- AlterTable
CREATE SEQUENCE domain_domain_id_seq;
ALTER TABLE "domain" ALTER COLUMN "domain_id" SET DEFAULT nextval('domain_domain_id_seq');
ALTER SEQUENCE domain_domain_id_seq OWNED BY "domain"."domain_id";

-- AlterTable
CREATE SEQUENCE ipc_ipc_id_seq;
ALTER TABLE "ipc" ALTER COLUMN "ipc_id" SET DEFAULT nextval('ipc_ipc_id_seq');
ALTER SEQUENCE ipc_ipc_id_seq OWNED BY "ipc"."ipc_id";

-- AlterTable
CREATE SEQUENCE journal_journal_id_seq;
ALTER TABLE "journal" ALTER COLUMN "journal_id" SET DEFAULT nextval('journal_journal_id_seq');
ALTER SEQUENCE journal_journal_id_seq OWNED BY "journal"."journal_id";

-- AlterTable
CREATE SEQUENCE keyword_keyword_id_seq;
ALTER TABLE "keyword" ALTER COLUMN "keyword_id" SET DEFAULT nextval('keyword_keyword_id_seq');
ALTER SEQUENCE keyword_keyword_id_seq OWNED BY "keyword"."keyword_id";

-- AlterTable
CREATE SEQUENCE patent_patent_id_seq;
ALTER TABLE "patent" ALTER COLUMN "patent_id" SET DEFAULT nextval('patent_patent_id_seq');
ALTER SEQUENCE patent_patent_id_seq OWNED BY "patent"."patent_id";

-- AlterTable
CREATE SEQUENCE publication_publication_id_seq;
ALTER TABLE "publication" ALTER COLUMN "publication_id" SET DEFAULT nextval('publication_publication_id_seq');
ALTER SEQUENCE publication_publication_id_seq OWNED BY "publication"."publication_id";

-- AlterTable
CREATE SEQUENCE researcher_researcher_id_seq;
ALTER TABLE "researcher" ALTER COLUMN "researcher_id" SET DEFAULT nextval('researcher_researcher_id_seq');
ALTER SEQUENCE researcher_researcher_id_seq OWNED BY "researcher"."researcher_id";
