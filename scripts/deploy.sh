#!/bin/bash

# 환경별 배포 스크립트
# 사용법: ./scripts/deploy.sh [dev|prod|local|ss]

set -e

ENV=${1:-dev}
APP_NAME="research-backend-${ENV}"

echo "🚀 Deploying to ${ENV} environment..."

# 1. 의존성 설치
echo "📦 Installing dependencies..."
npm ci

# 2. 빌드
echo "🔨 Building application..."
npm run build

# 3. Prisma 클라이언트 생성
echo "🗄️ Generating Prisma client..."
npm run prisma:generate:${ENV}

# 4. 데이터베이스 마이그레이션 (프로덕션만)
if [ "$ENV" = "prod" ]; then
    echo "🔄 Running database migrations..."
    npm run prisma:migrate:prod
fi

# 5. 기존 서버 중지
echo "⏹️ Stopping existing server..."
npm run pm2:stop:${ENV} || true

# 6. 새 서버 시작
echo "▶️ Starting new server..."
npm run pm2:start:${ENV}

# 7. 헬스체크
echo "🏥 Performing health check..."
for i in {1..30}; do
    if curl -f http://localhost:3000/health > /dev/null 2>&1; then
        echo "✅ Deployment successful!"
        exit 0
    fi
    echo "⏳ Waiting for server to start... (${i}/30)"
    sleep 2
done

echo "❌ Deployment failed - server not responding"
exit 1 