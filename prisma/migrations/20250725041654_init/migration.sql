-- CreateTable
CREATE TABLE "keyword" (
    "keyword_id" BIGINT NOT NULL,
    "keyword_name" TEXT,
    "description" TEXT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "keyword_pkey" PRIMARY KEY ("keyword_id")
);

-- CreateTable
CREATE TABLE "ipc" (
    "ipc_id" BIGINT NOT NULL,
    "ipc_code" TEXT,
    "description" TEXT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ipc_pkey" PRIMARY KEY ("ipc_id")
);

-- CreateTable
CREATE TABLE "patent" (
    "patent_id" BIGINT NOT NULL,
    "title" TEXT,
    "application_number" TEXT,
    "registration_number" TEXT,
    "publication_number" TEXT,
    "country" VARCHAR(10),
    "applicant_name" TEXT,
    "application_title" TEXT,
    "applicant" TEXT,
    "application_date" TIMESTAMP(3),
    "registration_date" TIMESTAMP(3),
    "publication_date" TIMESTAMP(3),
    "summary" TEXT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "patent_pkey" PRIMARY KEY ("patent_id")
);

-- CreateTable
CREATE TABLE "patent_ipc" (
    "patent_id" BIGINT NOT NULL,
    "ipc_id" BIGINT NOT NULL,

    CONSTRAINT "patent_ipc_pkey" PRIMARY KEY ("patent_id","ipc_id")
);

-- CreateTable
CREATE TABLE "patent_keyword" (
    "patent_id" BIGINT NOT NULL,
    "keyword_id" BIGINT NOT NULL,

    CONSTRAINT "patent_keyword_pkey" PRIMARY KEY ("patent_id","keyword_id")
);

-- CreateTable
CREATE TABLE "journal" (
    "journal_id" BIGINT NOT NULL,
    "name" TEXT,
    "publisher" TEXT,
    "issn" TEXT,
    "impact_factor" DECIMAL(65,30),
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "journal_pkey" PRIMARY KEY ("journal_id")
);

-- CreateTable
CREATE TABLE "publication" (
    "publication_id" BIGINT NOT NULL,
    "title" TEXT,
    "abstract" TEXT,
    "publication_date" TIMESTAMP(3),
    "journal_id" BIGINT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "publication_pkey" PRIMARY KEY ("publication_id")
);

-- CreateTable
CREATE TABLE "publication_keyword" (
    "publication_id" BIGINT NOT NULL,
    "keyword_id" BIGINT NOT NULL,

    CONSTRAINT "publication_keyword_pkey" PRIMARY KEY ("publication_id","keyword_id")
);

-- CreateTable
CREATE TABLE "journal_keyword" (
    "journal_id" BIGINT NOT NULL,
    "keyword_id" BIGINT NOT NULL,

    CONSTRAINT "journal_keyword_pkey" PRIMARY KEY ("journal_id","keyword_id")
);

-- CreateTable
CREATE TABLE "researcher" (
    "researcher_id" BIGINT NOT NULL,
    "name" TEXT,
    "affiliation" TEXT,
    "email" TEXT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "researcher_pkey" PRIMARY KEY ("researcher_id")
);

-- CreateTable
CREATE TABLE "researcher_patent" (
    "researcher_id" BIGINT NOT NULL,
    "patent_id" BIGINT NOT NULL,

    CONSTRAINT "researcher_patent_pkey" PRIMARY KEY ("researcher_id","patent_id")
);

-- CreateTable
CREATE TABLE "researcher_domain" (
    "researcher_id" BIGINT NOT NULL,
    "domain_id" BIGINT NOT NULL,

    CONSTRAINT "researcher_domain_pkey" PRIMARY KEY ("researcher_id","domain_id")
);

-- CreateTable
CREATE TABLE "researcher_publication" (
    "researcher_id" BIGINT NOT NULL,
    "publication_id" BIGINT NOT NULL,

    CONSTRAINT "researcher_publication_pkey" PRIMARY KEY ("researcher_id","publication_id")
);

-- CreateTable
CREATE TABLE "domain" (
    "domain_id" BIGINT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "cno" BIGINT,
    "user_no" BIGINT,
    "insert_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "domain_pkey" PRIMARY KEY ("domain_id")
);

-- AddForeignKey
ALTER TABLE "patent_ipc" ADD CONSTRAINT "patent_ipc_patent_id_fkey" FOREIGN KEY ("patent_id") REFERENCES "patent"("patent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patent_ipc" ADD CONSTRAINT "patent_ipc_ipc_id_fkey" FOREIGN KEY ("ipc_id") REFERENCES "ipc"("ipc_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patent_keyword" ADD CONSTRAINT "patent_keyword_patent_id_fkey" FOREIGN KEY ("patent_id") REFERENCES "patent"("patent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patent_keyword" ADD CONSTRAINT "patent_keyword_keyword_id_fkey" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("keyword_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publication" ADD CONSTRAINT "publication_journal_id_fkey" FOREIGN KEY ("journal_id") REFERENCES "journal"("journal_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publication_keyword" ADD CONSTRAINT "publication_keyword_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "publication"("publication_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publication_keyword" ADD CONSTRAINT "publication_keyword_keyword_id_fkey" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("keyword_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_keyword" ADD CONSTRAINT "journal_keyword_journal_id_fkey" FOREIGN KEY ("journal_id") REFERENCES "journal"("journal_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_keyword" ADD CONSTRAINT "journal_keyword_keyword_id_fkey" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("keyword_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_patent" ADD CONSTRAINT "researcher_patent_researcher_id_fkey" FOREIGN KEY ("researcher_id") REFERENCES "researcher"("researcher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_patent" ADD CONSTRAINT "researcher_patent_patent_id_fkey" FOREIGN KEY ("patent_id") REFERENCES "patent"("patent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_domain" ADD CONSTRAINT "researcher_domain_researcher_id_fkey" FOREIGN KEY ("researcher_id") REFERENCES "researcher"("researcher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_domain" ADD CONSTRAINT "researcher_domain_domain_id_fkey" FOREIGN KEY ("domain_id") REFERENCES "domain"("domain_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_publication" ADD CONSTRAINT "researcher_publication_researcher_id_fkey" FOREIGN KEY ("researcher_id") REFERENCES "researcher"("researcher_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "researcher_publication" ADD CONSTRAINT "researcher_publication_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "publication"("publication_id") ON DELETE RESTRICT ON UPDATE CASCADE;
