import { Link, useNavigate } from 'react-router-dom'

export default function NavBar () {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="nav_l">
                <Link to={"/"} className="nav-link" id="logo"><i className="fa-solid fa-circle-check"></i> Munera</Link>
            </div>
            <div className="nav_r">
                <Link to={"#about"} className="nav-link" id="logo">Sobre Nosotros</Link>
                <Link to={"#tools"} className="nav-link" id="logo">Herramientas</Link>
                <Link to={"#pricing"} className="nav-link" id="logo">Precios</Link>
                <button onClick={()=>navigate("/login")} type="button" className="nav_link">Iniciar Sesión</button>
            </div>
        </nav>
    )
}
