# 1. Diagrama de Flujo General del Usuario

```
    A[Inicio de sesión / Registro] --> B[Accede al Dashboard]
    B --> C{¿Crear proyecto?}
    C -->|Sí| D[Crear nuevo proyecto]
    C -->|No| E[Seleccionar proyecto existente]

    D --> F[Agregar tareas]
    E --> F

    F --> G{Clasificar tarea en matriz Eisenhower}
    G --> H1[Urgente / Importante]
    G --> H2[No urgente / Importante]
    G --> H3[Urgente / No importante]
    G --> H4[No urgente / No importante]

    H1 --> I[Iniciar sesión Pomodoro]
    H2 --> I
    H3 --> I
    H4 --> I

    I --> J[Marcar tarea como completada]
    J --> B
```

# 2. Flujo de la Matriz de Eisenhower

```
    A[Crear o recibir una tarea] --> B[Evaluar importancia]
    B --> C[Evaluar urgencia]
    C --> D{Clasificación}

    D -->|Urgente e Importante| E1[Hacer ahora]
    D -->|Importante, No urgente| E2[Planificar]
    D -->|Urgente, No importante| E3[Delegar / Resolver rápido]
    D -->|No urgente, No importante| E4[Descartar o posponer]

    E1 --> F[Registrar en Munera]
    E2 --> F
    E3 --> F
    E4 --> F

    F --> G[Seguimiento y actualización]
```

# 3. Flujo del Temporizador Pomodoro

```
    A[Seleccionar tarea] --> B[Iniciar Pomodoro 25 min]
    B --> C{¿Tiempo completado?}
    C -->|Sí| D[Pausa corta 5 min]
    C -->|No| B

    D --> E{¿4 Pomodoros completados?}
    E -->|Sí| F[Pausa larga 15–20 min]
    E -->|No| A

    F --> A

```

# 4. Arquitectura General del Sistema (Munera)

```
    A[Frontend - React + Vite + Tailwind] -->|HTTP/JSON| B[Backend - Spring Boot]
    B -->|Consultas SQL| C[Base de Datos - PostgreSQL]

    A --> D[Figma - Prototipos UX/UI]
    B --> E[Servicios REST]
    C --> F[Persistencia de datos]

    B --> G[Gestión de lógica de Eisenhower]
    B --> H[Gestión de Pomodoro]
    B --> I[Gestión de proyectos y tareas]

```

# 5. Arquitectura Lógica por Capas

```
    subgraph Presentación
        A1[React Components]
        A2[UI Tailwind]
        A3[Gestor de Estado]
    end

    subgraph Lógica de Negocio
        B1[Servicios Spring Boot]
        B2[Controladores REST]
        B3[Reglas Eisenhower]
        B4[Temporizador Pomodoro]
    end

    subgraph Persistencia
        C1[Repositorios JPA]
        C2[Entidades]
        C3[PostgreSQL]
    end

    A1 --> B2
    A3 --> B1
    B1 --> C1
    C1 --> C3

```

# 6. Diagrama UML de Clases – Munera

```

    class Usuario {
        +id: UUID
        +nombre: String
        +email: String
        +password: String
        +preferencias: Map
        +actualizarPerfil()
        +configurarPomodoro()
    }

    class Proyecto {
        +id: UUID
        +titulo: String
        +descripcion: String
        +fechaCreacion: Date
        +agregarTarea()
        +invitarUsuario()
    }

    class Tarea {
        +id: UUID
        +titulo: String
        +descripcion: String
        +fechaLimite: Date
        +estado: EstadoTarea
        +prioridad: Eisenhower
        +marcarComoCompleta()
    }

    class Eisenhower {
        <<enum>>
        URGENTE_IMPORTANTE
        IMPORTANTE_NO_URGENTE
        URGENTE_NO_IMPORTANTE
        NO_URGENTE_NO_IMPORTANTE
    }

    class Pomodoro {
        +id: UUID
        +duracionTrabajo: int
        +duracionDescanso: int
        +ciclos: int
        +iniciar()
        +pausar()
        +finalizar()
    }

    class Equipo {
        +id: UUID
        +nombre: String
        +agregarMiembro()
        +removerMiembro()
    }

    class EstadoTarea {
        <<enum>>
        PENDIENTE
        EN_PROGRESO
        COMPLETADA
    }

    %% Relaciones
    Usuario "1" -- "0..*" Proyecto : crea >
    Usuario "1" -- "0..*" Tarea : asignado >
    Proyecto "1" -- "0..*" Tarea : contiene >

    Usuario "0..*" -- "0..*" Equipo : participa >

    Usuario "1" -- "0..*" Pomodoro : inicia >
    Tarea "1" -- "0..*" Pomodoro : asociado >

```
