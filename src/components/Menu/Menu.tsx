"use client";
import { useState } from "react";
import 'aos/dist/aos.css';
import Link from "next/link";
import Image from "next/image";

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center justify-between p-3 bg-opacity-30">
            <div data-aos="fade-up" className="flex items-center w-52 z-50">
                <Link href={"/"}>
                    <Image
                        src="/logo-texto-branco.svg"
                        alt="Ícone do Menu"
                        width={208}
                        height={52}
                    />
                </Link>
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
                <Link href={'/'} className="text-gray-100 hover:text-amareloSolar">Home</Link>
                <Link href={'/quem-somos'} className="text-gray-100 hover:text-amareloSolar">Quem Somos</Link>
                <Link href={'/gamificacao'} className="text-gray-100 hover:text-amareloSolar">Gamificação</Link>
                <Link href={'/noticias'} className="text-gray-100 hover:text-amareloSolar">Notícias</Link>
                <Link href={'/pesquisa-local'} className="text-gray-100 hover:text-amareloSolar">Locais Sustentáveis</Link>
                <Link href={'/integrantes'} className="text-gray-100 hover:text-amareloSolar">Integrantes</Link>
                <Link href={'/contato'} className="text-gray-100 hover:text-amareloSolar">Contato</Link>
            </nav>
            
            <div
                data-aos="fade-up"
                className="hidden md:flex items-center w-52 justify-end z-50"
            >
                <Link href={"/login"}>
                    <button
                        className="w-24 bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-brancoNeve hover:text-black transition duration-300"
                    >
                        Login
                    </button>
                </Link>
            </div>
        

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center space-y-8">
                    <Link href={'/'} onClick={handleMenuToggle} className="text-gray-100 hover:text-amareloSolar">Home</Link>
                    <Link href={'/quem-somos'} onClick={handleMenuToggle} className="text-gray-100 hover:text-amareloSolar">Quem Somos</Link>
                    <Link href={'/gamificacao'} className="text-gray-100 hover:text-amareloSolar">Gamificação</Link>
                    <Link href={'/noticias'} className="text-gray-100 hover:text-amareloSolar">Notícias</Link>
                    <Link href={'/pesquisa-local'} className="text-gray-100 hover:text-amareloSolar">Locais Sustentáveis</Link>
                    <Link href={'/integrantes'} onClick={handleMenuToggle} className="text-gray-100 hover:text-amareloSolar">Integrantes</Link>
                    <Link href={'/contato'} onClick={handleMenuToggle} className="text-gray-100 hover:text-amareloSolar">Contato</Link>
                    <button
                        onClick={() => {
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
