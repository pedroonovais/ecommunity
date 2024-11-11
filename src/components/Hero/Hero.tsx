import { Menu } from "../Menu/Menu";

interface HeroProps {
    children: React.ReactNode
}

export const Hero = ({children}:HeroProps) => {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <Menu />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                {children}
            </div>
        </section>
    );
};
