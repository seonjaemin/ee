# Node.js 런타임 이미지를 베이스로 생성
FROM node:18-alpine


# 컨테이너 내의 작업 디렉토리를 설정
WORKDIR /app


# package.json과 package-lock.json을 작업 디렉토리에 복사
COPY package*.json ./


# 애플리케이션 의존성 설치
RUN npm install


# 나머지 애플리케이션 코드 복사
COPY . . 
COPY package*.json ./ 


# 애플리케이션 빌드
RUN npm run build


# 앱이 실행될 포트 노출
EXPOSE 3000


# 애플리케이션 시작
CMD [ "npm", "start" ]