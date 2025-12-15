import styles from "../styles/sections/Tools.module.css";

export default function Tools() {
    return (
        <section className={styles.tools} id="tools">
            <hr />
            <h3>Herramientas para una Vida Balanceada</h3>
            <p>Todo lo que necesitas para administrar tu trabajo, vida y salud en un lugar.</p>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <i className="fa-solid fa-calendar-days"></i>
                    <h5>Horario inteligente</h5>
                    <small>Horario basado en IA que se adapta automáticamente a tus niveles de energía y a tus bloques de tiempo disponibles.</small>
                </div>
                <div className={styles.card}>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <h5>Modo Concentración</h5>
                    <small>Temporizador Pomodoro integrado, diseñado para ayudarte a entrar en un estado de fluidez y concentrarte plenamente en lo que importa.
                    </small>
                </div>
                <div className={styles.card}>
                    <i className="fa-solid fa-heart-circle-bolt"></i>
                    <h5>Monitor de bienestar</h5>
                    <small>Registros diarios, registros de hidratación y recordatorios de descansos para prevenir el agotamiento antes de que comience.</small>
                </div>
            </div>
            <div className={styles.impact}>
                <div className={styles.imp_l}>
                    <h4>Experimenta el flujo de trabajo</h4>
                    <p>Descubre cómo Taskmaster se adapta a tu estilo de trabajo</p>
                </div>
                <div className={styles.status}>
                    <i></i>
                    <h5>1000+</h5>
                    <small>Usuarios Activos</small>
                </div>
                <div className={styles.status}>
                    <i></i>
                    <h5>1.2k</h5>
                    <small>Tareas Gestionadas</small>
                </div>
                <div className={styles.status}>
                    <i></i>
                    <h5>15%</h5>
                    <small>Horas Ahorradas</small>
                </div>
            </div>
        </section>
    )
}