# 서버 배포 가이드

## 환경별 서버 시작 방법

### 1. 개발 환경 (Development)
```bash
# 개발 서버 시작
npm run start:dev

# 개발 모드 (파일 변경 감지)
npm run dev:start

# PM2로 관리
npm run pm2:start:dev
```

### 2. 로컬 환경 (Local)
```bash
# 로컬 서버 시작
npm run start:local

# 로컬 개발 모드
npm run dev:local

# PM2로 관리
npm run pm2:start:local
```

### 3. 스테이징 환경 (SS)
```bash
# 스테이징 서버 시작
npm run start:ss

# 스테이징 개발 모드
npm run dev:ss

# PM2로 관리
npm run pm2:start:ss
```

### 4. 프로덕션 환경 (Production)
```bash
# 프로덕션 서버 시작
npm run start:prod

# PM2로 관리 (멀티 인스턴스)
npm run pm2:start:prod
```

## PM2 관리 명령어

### 서버 시작
```bash
# 특정 환경 서버 시작
npm run pm2:start:dev
npm run pm2:start:prod
npm run pm2:start:local
npm run pm2:start:ss
```

### 서버 중지
```bash
# 특정 환경 서버 중지
npm run pm2:stop:dev
npm run pm2:stop:prod
npm run pm2:stop:local
npm run pm2:stop:ss
```

### 서버 재시작
```bash
# 특정 환경 서버 재시작
npm run pm2:restart:dev
npm run pm2:restart:prod
npm run pm2:restart:local
npm run pm2:restart:ss
```

### 로그 확인
```bash
# 특정 환경 로그 확인
npm run pm2:logs:dev
npm run pm2:logs:prod
npm run pm2:logs:local
npm run pm2:logs:ss
```

### 상태 확인
```bash
# 모든 서버 상태 확인
npm run pm2:status
```

## 배포 전 체크리스트

1. **환경변수 확인**
   ```bash
   # 각 환경별 .env 파일 확인
   cat config/.dev.env
   cat config/.prod.env
   cat config/.local.env
   cat config/.ss.env
   ```

2. **빌드 확인**
   ```bash
   npm run build
   ```

3. **데이터베이스 마이그레이션**
   ```bash
   # 개발 환경
   npm run prisma:migrate:dev
   
   # 프로덕션 환경
   npm run prisma:migrate:prod
   ```

4. **Prisma 클라이언트 생성**
   ```bash
   npm run prisma:generate:dev
   ```

## 서버 모니터링

### PM2 모니터링
```bash
# 실시간 모니터링
pm2 monit

# 로그 실시간 확인
pm2 logs
```

### 시스템 리소스 확인
```bash
# CPU, 메모리 사용량
pm2 status
pm2 show research-backend-prod
```

## 문제 해결

### 서버가 시작되지 않는 경우
1. 환경변수 파일 확인
2. 데이터베이스 연결 확인
3. 포트 충돌 확인
4. 로그 확인: `npm run pm2:logs:dev`

### 메모리 부족 시
1. PM2 설정에서 `max_memory_restart` 조정
2. 인스턴스 수 조정
3. 시스템 리소스 확인 