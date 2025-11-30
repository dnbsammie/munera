# 📡 API Specification

## Authentication
- **POST /auth/register**
  - Registers a new user.
- **POST /auth/login**
  - Authenticates user and returns JWT.

## Users
- **GET /users/{id}**
  - Retrieve user profile.
- **PUT /users/{id}**
  - Update user profile.

## Tasks
- **GET /tasks**
  - Retrieve all tasks for authenticated user.
- **POST /tasks**
  - Create a new task.
- **PUT /tasks/{id}**
  - Update task details.
- **DELETE /tasks/{id}**
  - Delete a task.

## Categories
- **GET /categories**
  - Retrieve all categories.
- **POST /categories**
  - Create a new category.

## Wellbeing Statistics
- **GET /stats/productivity**
  - Retrieve productivity metrics.
- **GET /stats/usage**
  - Retrieve app usage statistics.
