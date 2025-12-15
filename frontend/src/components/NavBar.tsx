import { Link, useNavigate } from 'react-router-dom'

export default function NavBar () {
    const navigate = useNavigate();

    const scrollTo = (id:string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <nav>
            <div className="nav_l">
                <Link to={"/"} className="nav-link" id="logo"><i className="fa-solid fa-circle-check"></i> Munera</Link>
            </div>
            <div className="nav_r">
                <a href="#"
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo("tools");
                    }}
                >Herramientas</a>
                <a href="#"
                   className="nav-link"
                   onClick={(e) => {
                       e.preventDefault();
                       scrollTo("pricing");
                   }}
                >Precios</a>
                <button onClick={()=>navigate("/login")} type="button" className="nav_link">Iniciar Sesión</button>
            </div>
        </nav>
    )
}
