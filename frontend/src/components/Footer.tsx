import { Link } from 'react-router-dom';
import styles from '../styles/components/Footer.module.css';

export default function Footer()  {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.ftl}>
                    <h4><i className="fa-solid fa-circle-check"></i> Munera</h4>
                    <small>Diseña tu vida para productividad y paz mental.</small>
                </div>
                <div className={styles.ftr}>
                    <div className={styles.ft_lists}>
                        <h6>Producto</h6>
                        <ul>
                            <li><Link to={"/"} className="nav_link">Funcionalidades</Link></li>
                            <li><Link to={"/functionalities"} className="nav_link">Precios</Link></li>
                            <li><Link to={"/login"} className="nav_link">Integraciones</Link></li>
                        </ul>
                    </div>
                    <div className={styles.ft_lists}>
                        <h6>Compañia</h6>
                        <ul>
                            <li><Link to={"/"} className="nav_link">Sobre Nosotros</Link></li>
                            <li><Link to={"/"} className="nav_link">Blog</Link></li>
                            <li><Link to={"/"} className="nav_link">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className={styles.ft_lists}>
                        <h6>Legal</h6>
                        <ul>
                            <li><Link to={"/"} className="nav_link">Terminos de Servicio</Link></li>
                            <li><Link to={"/"} className="nav_link">Politica de Privacidad</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.footer_bot}>
                <small className="copyright" aria-label="copyright">&copy; {currentYear} Munera Inc. Todos los Derechos Reservados.</small>
                <a href="https://github.com/dnbsammie/u1a1-academic" target={"_blank"} className={"fa-brands fa-github"}></a>
            </div>
        </footer>
    )
}