"use client"
import AOS from 'aos';
import { UserProvider as UserContextProvider } from '@/contexts/UserContext';
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

    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 100,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <UserContextProvider>
            <html lang="pt-br">
                <head>
                    <title>Ecommunity - Conectando Pessoas Sustentáveis</title>
                    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                </head>
                <body className={font.className}>
                    {children}
                </body>
            </html>
        </UserContextProvider>
    );
}
