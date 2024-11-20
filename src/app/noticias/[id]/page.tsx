"use client";
import { useEffect, useState } from "react";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "@/components/Footer/Footer";
import { useParams } from "next/navigation";

interface Noticia {
    id: number;
    titulo: string;
    texto: string;
    categoria: string;
    imagem: string;
    dataCriacao: string;
    dataUpdate: string;
}

export default function Detalhes() {
    const { id } = useParams();
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [erro, setErro] = useState(false);

    const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND_URL;

    const carregarNoticia = async () => {
        try {
            const res = await fetch(`${apiUrl}/materia/${id}`);
            if (!res.ok) {
                throw new Error("Erro ao carregar notícia");
            }

            const data = await res.json();
            const noticiaFormatada = {
                id: data.idMateria,
                titulo: data.tituloMateria,
                texto: data.textoMateria,
                categoria: data.ativo === "S" ? "Ativo" : "Inativo",
                imagem: data.imagem,
                dataCriacao: data.dtCriacao,
                dataUpdate: data.dtUpdate,
            };

            setNoticia(noticiaFormatada);
        } catch (error) {
            console.error("Erro ao carregar notícia:", error);
            setErro(true);
        }
    };

    useEffect(() => {
        if (id) {
            carregarNoticia();
        }
    }, [id]);

    if (erro) {
        return (
            <div className="text-center mt-10">Erro ao carregar notícia.</div>
        );
    }

    if (!noticia) {
        return <div className="text-center mt-10">Carregando...</div>;
    }

    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Menu />
                <div className="flex-1 my-5 container mx-auto px-4 py-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                    <h1 className="text-4xl font-bold text-center mb-8 text-white">
                        {noticia.titulo}
                    </h1>
                    <div className="mb-8 relative">
                        {/* <img
                            src={`/blog/${noticia.imagem}`}
                            alt={noticia.titulo}
                            className="w-full h-64 object-cover rounded-lg"
                        /> */}
                        <div className="text-gray-100 mt-6">
                            {noticia.texto}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
