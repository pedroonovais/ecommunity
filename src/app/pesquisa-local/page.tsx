"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Local {
    ID_LOCAL: number;
    NOME_LOCAL: string;
    CATEGORIA: string;
    LOGRADOURO_NUMERO_LOCAL: string;
    CEP_LOCAL: string;
    CIDADE_LOCAL: string;
    ESTADO_LOCAL: string;
    LATITUDE_LOCAL: string;
    LONGITUDE_LOCAL: string;
}

export default function PesquisaLocais() {
    const [localizacao, setLocalizacao] = useState("");
    const [locais, setLocais] = useState<Local[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlePesquisar = async () => {
        if (!localizacao) {
            setError("Por favor, digite uma localização.");
            return;
        }
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`/api/locais?localizacao=${localizacao}`);
            if (!res.ok) {
                throw new Error("Falha na busca");
            }
            const data: Local[] = await res.json();
            setLocais(data);
        } catch (err) {
            setError("Ocorreu um erro ao buscar os locais.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 max-w-5xl w-full p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                <div className="flex justify-center mb-8">
                    <Link href="/">
                        <Image
                            src="/logo-texto-branco.svg"
                            alt="Logo eCommunity"
                            width={200}
                            height={50}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Encontre Locais Sustentáveis
                </h1>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <input
                        type="text"
                        value={localizacao}
                        onChange={(e) => setLocalizacao(e.target.value)}
                        className="w-full max-w-md px-4 py-2 text-black rounded-lg focus:outline-none"
                        placeholder="Digite sua cidade ou endereço"
                    />
                    <button
                        onClick={handlePesquisar}
                        className="bg-verdeFolha text-white px-6 py-2 rounded-lg font-semibold hover:bg-verdeClaro transition duration-300 flex items-center"
                    >
                        {loading ? (
                            "Buscando..."
                        ) : (
                            <>
                                <FaSearch className="mr-2" /> Pesquisar
                            </>
                        )}
                    </button>
                </div>
                {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                {locais.length > 0 && (
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {locais.map((local) => (
                            <div
                                key={local.ID_LOCAL}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                            >
                                <h3 className="text-xl font-semibold text-verdeFolha">
                                    {local.NOME_LOCAL}
                                </h3>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.CATEGORIA}
                                </p>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.LOGRADOURO_NUMERO_LOCAL}
                                </p>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.CIDADE_LOCAL} - {local.ESTADO_LOCAL}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative z-10 mt-6">
                <Link href="/" className="text-white underline hover:text-verdeClaro">
                    Retornar para página inicial
                </Link>
            </div>
        </div>
    );
}
