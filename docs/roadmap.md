# 🗺️ Project Roadmap: Munera -Task & Digital Wellbeing Manager

This roadmap outlines the main phases and tasks for developing the project with the following stack:
- **Frontend Web**: React + TypeScript + Vite
- **Backend**: Spring Boot + Java + PostgreSQL/MySQL
- **Mobile (Android)**: Kotlin (Jetpack Compose)
- **Desktop**: (pending decision: JavaFX or Tauri)

---

## 📌 Phase 1 – Foundations

### Backend
- [ ] Set up base project with Spring Boot.
- [ ] Define core entities: User, Task, Category, Statistics.
- [ ] Implement basic REST API (CRUD for tasks, login/register).
- [ ] Configure security with Spring Security + JWT.
- [ ] Integrate relational database (PostgreSQL recommended).
- [ ] Create `docker-compose.yml` to run DB + backend.

### Frontend Web
- [ ] Initialize project with Vite + React + TS.
- [ ] Configure basic routes (login, register, dashboard).
- [ ] Connect to backend API (Axios/TanStack Query).
- [ ] Implement initial UI with Material UI/Tailwind.
- [ ] Configure development environment with ESLint + Prettier.

---

## 📌 Phase 2 – User Experience

### Frontend Web
- [ ] Add advanced task management (priorities, tags, reminders).
- [ ] Implement wellbeing statistics (productivity charts).
- [ ] Browser notifications.
- [ ] Improve responsive design.

### Backend
- [ ] Endpoints for metrics and reports.
- [ ] Optimize queries with DB indexes.
- [ ] Implement unit and integration tests (JUnit, Mockito).
- [ ] Document API with Swagger/OpenAPI.

---

## 📌 Phase 3 – Mobile (Android with Kotlin)

- [ ] Create Android project with Kotlin + Jetpack Compose.
- [ ] Implement login/register connected to backend.
- [ ] Main screens: task list, create/edit, statistics.
- [ ] Offline/online sync.
- [ ] Push notifications.
- [ ] Basic UI and logic tests.

---

## 📌 Phase 4 – Desktop (pending decision)

### Option JavaFX
- [ ] Create JavaFX project.
- [ ] Implement declarative UI with CSS.
- [ ] Connect to backend via REST.
- [ ] Integrate local notifications.

### Option Tauri
- [ ] Initialize Tauri project with React + TS.
- [ ] Connect to backend via REST.
- [ ] Package for Windows/Linux/macOS.
- [ ] Integrate OS APIs (notifications, local storage).

---

## 📌 Phase 5 – Scalability & CI/CD

- [ ] Configure GitHub Actions for build/test/deploy pipelines.
- [ ] Automate Docker builds for backend and frontend.
- [ ] Deploy with containers (Docker/Kubernetes optional).
- [ ] Monitoring with Prometheus/Grafana.
- [ ] Complete documentation in `docs/`.

---

## ✅ Final Deliverables

- Functional web application (React + Vite + TS).
- Robust backend API (Spring Boot + PostgreSQL).
- Native Android mobile app (Kotlin).
- Desktop version (JavaFX or Tauri).
- Technical and user documentation.
- CI/CD pipelines and automated deployment.
