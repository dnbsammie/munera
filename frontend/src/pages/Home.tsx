import NavBar from "../components/NavBar";
import Hero from "../sections/Hero.tsx";
import Tools from "../sections/Tools.tsx";
import Pricing from "../sections/Pricing.tsx";
import Footer from "../components/Footer";

export default function Home () {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Tools />
                <Pricing />
            </main>
            <Footer />
        </>
    );
};
