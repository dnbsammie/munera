# 🏗️ System Architecture

## Overview
The Task & Digital Wellbeing Manager is a multi-platform application with:
- **Frontend Web**: React + TypeScript + Vite
- **Backend**: Spring Boot + Java + PostgreSQL/MySQL
- **Mobile (Android)**: Kotlin (Jetpack Compose)
- **Desktop**: (pending decision: JavaFX or Tauri)

## High-Level Diagram

```
[Frontend Web] <--> [Backend API] <--> [Database] 
|            | 
[Mobile App]        [Desktop App]
```

## Components
- **Frontend Web**
  - Provides task management UI and wellbeing dashboards.
  - Communicates with backend via REST API.
- **Backend**
  - Handles business logic, authentication, and data persistence.
  - Exposes REST endpoints secured with JWT.
- **Database**
  - Stores users, tasks, categories, and wellbeing statistics.
- **Mobile**
  - Native Android app with offline sync and push notifications.
- **Desktop**
  - Cross-platform client (JavaFX or Tauri) for desktop users.

## Data Flow
1. User interacts with frontend/mobile/desktop.
2. Client sends request to backend API.
3. Backend processes request, interacts with DB.
4. Response returned to client with updated data.
