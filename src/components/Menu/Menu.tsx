"use client"
import 'aos/dist/aos.css';

export const Menu = () => {
    const handleClick = () => {
        console.log("Chegando");
    }

    return (
        <header className="flex items-center justify-between p-3 bg-opacity-30 ">
            {/* Logo */}
            <div data-aos="fade-up" className="flex items-center w-52">
                <img
                    src="/logo-texto-branco.svg"
                    alt="Ícone do Menu"
                    className="w-full"
                />
            </div>

            {/* Nav centralizado */}
            <nav data-aos="fade-up" className="flex-grow flex z-50 justify-center space-x-4">
                <a href="#home" className="text-gray-100 hover:text-amareloSolar">
                    Home
                </a>
                <a href="#about" className="text-gray-100 hover:text-amareloSolar">
                    Sobre
                </a>
                <a href="#contact" className="text-gray-100 hover:text-amareloSolar">
                    Contato
                </a>
            </nav>

            {/* Botão de Login */}
            <div data-aos="fade-up" className="flex items-center z-50 w-52 justify-end">
                <button onClick={handleClick} className="w-24 bg-transparent border border-white text-white px-4 py-2 rounded-full  hover:bg-brancoNeve hover:text-black transition duration-300">
                    Login
                </button>
            </div>

        </header>
    );
};
