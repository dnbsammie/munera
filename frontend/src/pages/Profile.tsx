import { useNavigate } from 'react-router-dom';
import SideBar from "../components/SideBar.tsx";
import UnderConstruction from "../components/UnderConstruction.tsx";

export default function Profile() {
    const navigate = useNavigate();
    return (
        <>
            <SideBar />
            <main className="logged">
                <UnderConstruction
                    title="Módulo de Perfil"
                    actionLabel="Volver al inicio"
                    onAction={() => navigate("/dashboard")}
                />
            </main>
        </>
    )
}