<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

##디렉토리 구조 
src/
├── main.ts                    # 애플리케이션 진입점
├── app.module.ts              # 루트 모듈
├── common/                    # 공통 모듈
│   ├── app.controller.ts      # 루트 컨트롤러
│   ├── app.service.ts         # 루트 서비스
│   ├── app.controller.spec.ts # 테스트 파일
│   └── util/                  # 유틸리티 함수들
│       ├── bigint.util.ts
│       ├── common.util.ts
│       └── index.ts
├── researcher/                # 연구자 도메인
│   ├── controller/
│   ├── service/
│   ├── dto/
│   └── module/
├── domain/                    # 도메인 모듈
├── ipc/                       # IPC 모듈
├── journal/                   # 저널 모듈
├── keyword/                   # 키워드 모듈
├── patent/                    # 특허 모듈
└── publication/               # 출판 모듈


## Database Schema (Prisma)

This project uses a PostgreSQL database managed via Prisma ORM. Below is a summary of the main tables (models) and their fields/relationships:

### researcher
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| researcher_id        | BigInt   | PK, auto-increment         |
| name                 | String   | Name of researcher         |
| affiliation          | String   | Affiliation                |
| email                | String   | Email address              |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- researcher_patents (N:M with patent)
- researcher_domains (N:M with domain)
- researcher_publications (N:M with publication)

### patent
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| patent_id            | BigInt   | PK, auto-increment         |
| title                | String   | Patent title               |
| application_number   | String   | Application number         |
| registration_number  | String   | Registration number        |
| publication_number   | String   | Publication number         |
| country              | String   | Country code (max 10)      |
| applicant_name       | String   | Applicant name             |
| application_title    | String   | Application title          |
| applicant            | String   | Applicant                  |
| application_date     | DateTime | Application date           |
| registration_date    | DateTime | Registration date          |
| publication_date     | DateTime | Publication date           |
| summary              | String   | Summary                    |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- patent_ipcs (N:M with ipc)
- patent_keywords (N:M with keyword)
- researcher_patents (N:M with researcher)

### journal
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| journal_id           | BigInt   | PK, auto-increment         |
| name                 | String   | Journal name               |
| publisher            | String   | Publisher                  |
| issn                 | String   | ISSN                       |
| impact_factor        | Decimal  | Impact factor              |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- publications (1:N with publication)
- journal_keywords (N:M with keyword)

### publication
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| publication_id       | BigInt   | PK, auto-increment         |
| title                | String   | Publication title          |
| abstract             | String   | Abstract                   |
| publication_date     | DateTime | Publication date           |
| journal_id           | BigInt   | FK to journal              |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- publication_keywords (N:M with keyword)
- researcher_publications (N:M with researcher)

### domain
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| domain_id            | BigInt   | PK, auto-increment         |
| name                 | String   | Domain name                |
| description          | String   | Description                |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- researcher_domains (N:M with researcher)

### keyword
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| keyword_id           | BigInt   | PK, auto-increment         |
| keyword_name         | String   | Keyword name               |
| description          | String   | Description                |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- patent_keywords (N:M with patent)
- journal_keywords (N:M with journal)
- publication_keywords (N:M with publication)

### ipc
| Field                | Type     | Description                |
|----------------------|----------|----------------------------|
| ipc_id               | BigInt   | PK, auto-increment         |
| ipc_code             | String   | IPC code                   |
| description          | String   | Description                |
| cno                  | BigInt   | Custom number (optional)   |
| user_no              | BigInt   | User number (optional)     |
| insert_timestamp     | DateTime | Created at                 |
| update_timestamp     | DateTime | Updated at                 |
| is_deleted           | Boolean  | Soft delete flag           |

**Relations:**
- patent_ipcs (N:M with patent)

## Project setup

```bash
$ npm install
```