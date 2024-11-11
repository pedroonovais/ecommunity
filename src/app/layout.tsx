import { Menu } from "@/components/Menu/Menu";
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>
                <Menu />
                <main>{children}</main>
            </body>
        </html>
    );
}
