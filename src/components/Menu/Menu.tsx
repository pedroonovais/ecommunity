"use client";
import { useState } from "react";
import 'aos/dist/aos.css';

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center justify-between p-3 bg-opacity-30">
            <div data-aos="fade-up" className="flex items-center w-52 z-50">
                <img
                    src="/logo-texto-branco.svg"
                    alt="Ícone do Menu"
                    className="w-full"
                />
            </div>

            <button
                className="block md:hidden z-50 text-gray-100"
                onClick={handleMenuToggle}
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <nav
                data-aos="fade-up"
                className="hidden md:flex flex-grow justify-center space-x-4 z-50"
            >
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

            <div
                data-aos="fade-up"
                className="hidden md:flex items-center w-52 justify-end z-50"
            >
                <button
                    onClick={() => console.log("Chegando")}
                    className="w-24 bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-brancoNeve hover:text-black transition duration-300"
                >
                    Login
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center space-y-8">
                    <a
                        href="#home"
                        onClick={handleMenuToggle}
                        className="text-gray-100 text-2xl hover:text-amareloSolar"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={handleMenuToggle}
                        className="text-gray-100 text-2xl hover:text-amareloSolar"
                    >
                        Sobre
                    </a>
                    <a
                        href="#contact"
                        onClick={handleMenuToggle}
                        className="text-gray-100 text-2xl hover:text-amareloSolar"
                    >
                        Contato
                    </a>
                    <button
                        onClick={() => {
                            console.log("Chegando");
                            handleMenuToggle();
                        }}
                        className="w-24 bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-brancoNeve hover:text-black transition duration-300"
                    >
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};
