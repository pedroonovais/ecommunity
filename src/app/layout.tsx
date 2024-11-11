import Head from "next/head";
import "./globals.css";
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({
    weight: ['400'],
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={font.className}>
                {children}
            </body>
        </html>
    );
}
