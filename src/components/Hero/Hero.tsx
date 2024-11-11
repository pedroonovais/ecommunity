import { Menu } from "../Menu/Menu";

export const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <Menu />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                    "Cuidar do planeta é cuidar de todos nós"
                </h1>
            </div>
        </section>
    );
};
