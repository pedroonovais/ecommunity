"use client";
import { useState } from "react";
import Link from "next/link";

export default function AvisoCookies() {
    const [exibir, setExibir] = useState(true);

    if (!exibir) return null;

    return (
        <div
            data-aos="fade-up"
            className="fixed bottom-0 left-0 right-0 bg-verdeFolha text-brancoNeve py-4 px-6 shadow-lg z-50 flex flex-col md:flex-row items-center justify-between"
        >
            <p className="text-center text-sm md:text-base mb-4 md:mb-0">
                Utilizamos cookies para melhorar sua experiência e personalizar conteúdos. Ao continuar navegando, você concorda com nossa Política de Cookies.
            </p>
            <button
                className="bg-brancoNeve text-verdeFolha px-4 py-2 rounded-lg font-semibold hover:bg-cinzaPedregulho hover:text-brancoNeve transition duration-300"
                onClick={() => setExibir(false)}
            >
                Aceitar
            </button>
        </div>
    );
}
