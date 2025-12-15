import {useNavigate} from 'react-router-dom'
import styles from '../styles/sections/Hero.module.css';
import banner from '../assets/img/banner.webp';

export default function Hero() {

    const navigate = useNavigate();
    const openDemo = () => {
        window.open("https://www.youtube.com/watch?v=Kga2lK3mZQM", "_blank");
    }
    return (
        <section id="hero" aria-labelledby={"hero-section"} className={styles.hero}>
            <div className={styles.hero_l}>
                <h1>La productividad se encuentra con <span className="text_accent">la paz interior</span></h1>
                <p>El espacio de trabajo integral para gestionar tareas, controlar el tiempo y mantener tu bienestar sin agotamiento.</p>
                <hr />
                <div id="cta">
                    <button onClick={() => navigate("/dashboard")} type="button" className="nav_link">Comenzar Ahora</button>
                    <button onClick={openDemo}>
                        <i className="fa-regular fa-circle-play"></i> Ver Demo
                    </button>
                </div>
                <small>No necesitas tarjeta de crédito. Prueba gratuita de 10 días.</small>
            </div>
            <div className={styles.hero_r}>
                <img src={banner} alt="hero_img"/>
            </div>
        </section>
    )
}