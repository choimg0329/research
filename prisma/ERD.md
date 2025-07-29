# Research Database ERD

## Entity Relationship Diagram

```mermaid
erDiagram
    keyword {
        bigint keyword_id PK
        string keyword_name
        string description
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    ipc {
        bigint ipc_id PK
        string ipc_code
        string description
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    patent {
        bigint patent_id PK
        string title
        string application_number
        string registration_number
        string publication_number
        varchar country
        string applicant_name
        string application_title
        string applicant
        datetime application_date
        datetime registration_date
        datetime publication_date
        string summary
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    journal {
        bigint journal_id PK
        string name
        string publisher
        string issn
        decimal impact_factor
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    publication {
        bigint publication_id PK
        string title
        string abstract
        datetime publication_date
        bigint journal_id FK
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    researcher {
        bigint researcher_id PK
        string name
        string affiliation
        string email
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    domain {
        bigint domain_id PK
        string name
        string description
        bigint cno
        bigint user_no
        datetime insert_timestamp
        datetime update_timestamp
        boolean is_deleted
    }
    
    patent_ipc {
        bigint patent_id PK,FK
        bigint ipc_id PK,FK
    }
    
    patent_keyword {
        bigint patent_id PK,FK
        bigint keyword_id PK,FK
    }
    
    journal_keyword {
        bigint journal_id PK,FK
        bigint keyword_id PK,FK
    }
    
    publication_keyword {
        bigint publication_id PK,FK
        bigint keyword_id PK,FK
    }
    
    researcher_patent {
        bigint researcher_id PK,FK
        bigint patent_id PK,FK
    }
    
    researcher_domain {
        bigint researcher_id PK,FK
        bigint domain_id PK,FK
    }
    
    researcher_publication {
        bigint researcher_id PK,FK
        bigint publication_id PK,FK
    }
    
    %% Relationships
    patent ||--o{ patent_ipc : "has"
    ipc ||--o{ patent_ipc : "categorizes"
    
    patent ||--o{ patent_keyword : "has"
    keyword ||--o{ patent_keyword : "tags"
    
    journal ||--o{ journal_keyword : "has"
    keyword ||--o{ journal_keyword : "categorizes"
    
    publication ||--o{ publication_keyword : "has"
    keyword ||--o{ publication_keyword : "tags"
    
    researcher ||--o{ researcher_patent : "invents"
    patent ||--o{ researcher_patent : "invented_by"
    
    researcher ||--o{ researcher_domain : "specializes_in"
    domain ||--o{ researcher_domain : "has_researchers"
    
    researcher ||--o{ researcher_publication : "publishes"
    publication ||--o{ researcher_publication : "authored_by"
    
    journal ||--o{ publication : "contains"
```

## 주요 엔티티 설명

### 핵심 엔티티
- **patent**: 특허 정보
- **publication**: 논문 정보  
- **researcher**: 연구자 정보
- **journal**: 저널 정보
- **keyword**: 키워드 정보
- **ipc**: IPC 분류 정보
- **domain**: 연구 분야 정보

### 관계 테이블
- **patent_ipc**: 특허와 IPC 분류 연결
- **patent_keyword**: 특허와 키워드 연결
- **journal_keyword**: 저널과 키워드 연결
- **publication_keyword**: 논문과 키워드 연결
- **researcher_patent**: 연구자와 특허 연결
- **researcher_domain**: 연구자와 연구분야 연결
- **researcher_publication**: 연구자와 논문 연결

### 공통 필드
모든 테이블에 다음 필드가 포함됩니다:
- `cno`: 회사 번호
- `user_no`: 사용자 번호
- `insert_timestamp`: 생성 시간
- `update_timestamp`: 수정 시간
- `is_deleted`: 삭제 여부 (소프트 삭제) 