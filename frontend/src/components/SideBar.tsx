import styles from '../styles/components/Sidebar.module.css';
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function SideBar() {
    const navigate = useNavigate();

    return (
        <div className={styles.sidebar} id="sidebar">
            <div className={styles.logo}>
                <Link to={"/"} className="nav-link" id="logo"><i className="fa-solid fa-circle-check"></i> Munera</Link>
            </div>
            <ul className={styles.sitemap}>
                <li><Link to={"/dashboard"} className="nav-link"><i className="fa-solid fa-sitemap"></i> Dashboard</Link></li>
                <li><Link to={"/projects"} className="nav-link"><i className="fa-solid fa-folder-tree"></i> Proyectos</Link></li>
                <li><Link to={"/tasks"} className="nav-link"><i className="fa-solid fa-list"></i> Tareas</Link></li>
                <li><Link to={"/calendar"} className="nav-link"><i className="fa-regular fa-calendar"></i> Calendario</Link></li>
                <li><Link to={"/profile"} className="nav-link"><i className="fa-regular fa-user"></i> Perfil</Link></li>
            </ul>
            <div className={styles.bot}>
                <button
                    onClick={() => {
                        logout();
                        navigate("/", { replace: true });
                    }}
                >
                    Salir
                </button>
            </div>
        </div>
    )
}