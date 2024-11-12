import { Menu } from "../Menu/Menu";

interface HeroProps {
    children: React.ReactNode
    bgImg: string
}

export const Hero = ({children, bgImg}:HeroProps) => {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <Menu />
            <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                {children}
            </div>
        </section>
    );
};
