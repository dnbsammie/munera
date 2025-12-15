import SideBar from "../components/SideBar.tsx";
import Schedule from "../sections/Schedule.tsx";

export default function Calendar() {
    return (
        <>
            <SideBar />
            <main className="logged">
                <Schedule />
            </main>
        </>
    )
}