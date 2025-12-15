import styles from "../styles/sections/Pricing.module.css";
import { useNavigate } from 'react-router-dom';
export default function Pricing() {
    const navigate = useNavigate();
    return (
        <section className={styles.pricing} id="pricing">
            <header className={styles.top}>
                <h2>Precios sencillos y transparentes</h2>
                <p>Empieza gratis y actualiza a medida que creces.</p>
            </header>

            <div className={styles.grid}>
                {/* Basic */}
                <article className={styles.card}>
                    <h3>Basic</h3>
                    <p className={styles.price}>
                        $0 <span>/mes</span>
                    </p>

                    <ul>
                        <li>7 Proyectos</li>
                        <li>Programador básico</li>
                        <li>Historial de 7 días</li>
                        <li>Pomodoro de 12 horas</li>
                    </ul>

                    <button onClick={() => navigate("/dashboard")} className={styles.secondary}>Comienza</button>
                </article>

                {/* Pro */}
                <article className={`${styles.card} ${styles.popular}`}>
                    <span className={styles.badge}>Más popular</span>

                    <h3>Pro</h3>
                    <p className={styles.price}>
                        $12 <span>/mes</span>
                    </p>

                    <ul>
                        <li>Proyectos ilimitados</li>
                        <li>Programador AI Pro</li>
                        <li>Historial ilimitado</li>
                        <li>Análisis de bienestar</li>
                    </ul>

                    <button onClick={() => navigate("/dashboard")} className={styles.primary}>Prueba gratis</button>
                </article>

                {/* Team */}
                <article className={styles.card}>
                    <h3>Equipo</h3>
                    <p className={styles.price}>
                        $28 <span>/mes</span>
                    </p>

                    <ul>
                        <li>Todo en Pro</li>
                        <li>Análisis de equipo</li>
                        <li>Espacios compartidos</li>
                        <li>Soporte prioritario</li>
                    </ul>

                    <button onClick={() => navigate("/dashboard")} className={styles.secondary}>Contacta con ventas</button>
                </article>
            </div>

            <footer className={styles.cta}>
                <h3>¿Listo para recuperar tu tiempo?</h3>
                <p>Únete a miles de usuarios que han encontrado su ritmo con Munera.</p>
                <button onClick={() => navigate("/dashboard")} className={styles.primary}>Comienza ahora</button>
            </footer>
        </section>
    )
}