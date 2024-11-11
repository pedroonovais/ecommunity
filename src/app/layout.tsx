"use client"
import Head from "next/head";
import AOS from 'aos';
import "./globals.css";
import { Open_Sans } from 'next/font/google';
import { useEffect } from "react";

const font = Open_Sans({
    weight: ['400'],
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    // Inicialização e configuração do Aos (Biblioteca de animação)
    useEffect(() => {
        AOS.init({
            duration: 700, // duração da animação em ms
            offset: 100, // distância do scroll para iniciar a animação
            easing: 'ease-in-out', // estilo de animação
            once: false, // se true, a animação ocorre apenas uma vez
        });
    }, []);

    return (
        <html lang="pt-br">
            <body className={font.className}>
                {children}
            </body>
        </html>
    );
}
