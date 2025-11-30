# ⚙️ Setup Guide

## Prerequisites
- **Java 21+**
- **Node.js 24+**
- **npm, pnpm or yarn**
- **PostgreSQL/MySQL**
- **Docker**

## Backend Setup
1. Navigate to `backend/`.
2. Configure `application.yml` with DB credentials.
3. Run:
   ```bash
   ./mvnw spring-boot:run

## Frontend Setup
1. Navigate to `frontend/`.
2. Install dependencies:
   ```bash
   npm install
3. Run development server:
   ```bash
   npm run dev
4. Front end will start at [http://localhost:5173/](http://localhost:5173)

## Mobile Setup (Android)
1. Open `mobile/`

## Desktop Setup 

## Docker Compose
1. To run backend + DB together:
   ```bash
  docker-compose up