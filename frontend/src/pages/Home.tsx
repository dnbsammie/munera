import NavBar from "../components/NavBar";
import Hero from "../sections/Hero.tsx";
import About from "../sections/About.tsx";
import Tools from "../sections/Tools.tsx";
import Pricing from "../sections/Pricing.tsx";
import Footer from "../components/Footer";

export default function Home () {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Tools />
                <Pricing />
            </main>
            <Footer />
        </>
    );
};
