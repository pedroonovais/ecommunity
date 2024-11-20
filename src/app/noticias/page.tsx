"use client";
import { Footer } from "@/components/Footer/Footer";
import { Menu } from "@/components/Menu/Menu";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Noticia {
    id: number;
    titulo: string;
    resumo: string;
    categoria: string;
    imagem: string;
    dataCriacao: string;
    dataUpdate: string;
}

export default function Noticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [filtro, setFiltro] = useState("");

    const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND_URL;

    const carregarNoticias = async () => {
        try {
            const res = await fetch(`${apiUrl}/materia`);
            if (!res.ok) {
                throw new Error("Erro ao carregar notícias");
            }
            const data = await res.json();

            const noticiasValidadas = data.map((item: any) => ({
                id: item.idMateria,
                titulo: item.tituloMateria,
                resumo: item.textoMateria,
                categoria: item.ativo === "S" ? "Ativo" : "Inativo",
                imagem: item.imagem,
                dataCriacao: item.dtCriacao,
                dataUpdate: item.dtUpdate,
            }));

            setNoticias(noticiasValidadas);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        carregarNoticias();
    }, []);

    const noticiasFiltradas = noticias.filter((noticia) =>
        noticia.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div
            className="relative  flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 w-full  bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                <Menu />

                <div className="container min-h-screen mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8 text-white">
                        Notícias
                    </h1>

                    <div className="mb-8 flex justify-center">
                        <input
                            type="text"
                            placeholder="Pesquisar por título..."
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            className="w-full max-w-md px-4 py-2 rounded-lg border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-verdeFolha"
                        />
                    </div>

                    {noticiasFiltradas.length > 0 && (
                        <div className="mb-8 relative">
                            <div className="relative bg-white bg-opacity-50 rounded-lg flex flex-col justify-end p-6">
                                <span className="text-sm text-white uppercase">
                                    {noticiasFiltradas[0].categoria}
                                </span>
                                <Link href={`/noticias/${noticiasFiltradas[0].id}`}>
                                    <h2 className="text-2xl font-bold text-white">
                                        {noticiasFiltradas[0].titulo}
                                    </h2>
                                </Link>
                                <p className="text-white mt-2">
                                    {noticiasFiltradas[0].resumo}
                                </p>
                            </div>
                        </div>
                    )}


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {noticiasFiltradas.slice(1).map((noticia) => (
                            <div
                                key={noticia.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                            >
                                <div className="p-4">
                                    <span className="text-sm text-gray-500 uppercase">
                                        {noticia.categoria}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                        <Link href={`/noticias/${noticia.id}`}>
                                            {noticia.titulo}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        {noticia.resumo}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
