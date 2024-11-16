"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Local {
    id: string;
    nome: string;
    categoria: string;
    logradouro: string;
    cep: string;
    cidade: string;
    estado: string;
    latitude: string;
    longitude: string;
}

export default function PesquisaLocais() {
    const [localizacao, setLocalizacao] = useState("");
    const [locais, setLocais] = useState<Local[]>([]);
    const [locaisFiltrados, setLocaisFiltrados] = useState<Local[]>([]); // Para armazenar os locais filtrados
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND_URL;

    const carregaLocais = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch(`${apiUrl}/local`);
            if (!res.ok) {
                throw new Error("Falha ao carregar os locais");
            }
            const data: Local[] = await res.json();
            setLocais(data);
            setLocaisFiltrados(data); // Inicialmente, exibe todos os locais
        } catch (err) {
            setError("Ocorreu um erro ao buscar os locais.");
        } finally {
            setLoading(false);
        }
    };

    const handlePesquisar = () => {
        if (!localizacao) {
            setError("Por favor, digite uma localização.");
            setLocaisFiltrados(locais); // Caso não haja pesquisa, mostra todos os locais
            return;
        }
        const locaisFiltrados = locais.filter(local =>
            local.cidade.toLowerCase().includes(localizacao.toLowerCase())
        );
        setLocaisFiltrados(locaisFiltrados);
        if (locaisFiltrados.length === 0) {
            setError("Nenhum local encontrado para essa cidade.");
        }
    };

    useEffect(() => {
        carregaLocais();
    }, []);

    return (
        <div
            className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 max-w-5xl w-full p-8 my-12 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
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

                <div className="relative z-10 mt-6 text-center">
                    <Link href="/" className="text-white underline hover:text-verdeClaro">
                        Retornar para página inicial
                    </Link>
                </div>

                {locaisFiltrados.length > 0 && (
                    <div className="mt-12 w-full">
                        {locaisFiltrados.map((local) => (
                            <div
                                key={local.id}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 mb-6"
                            >
                                <h3 className="text-xl font-semibold text-verdeFolha">
                                    {local.nome}
                                </h3>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.categoria}
                                </p>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.logradouro}
                                </p>
                                <p className="text-cinzaPedregulho mt-2">
                                    {local.cidade} - {local.estado}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
