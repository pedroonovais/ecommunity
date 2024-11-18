"use client";
import { Menu } from "@/components/Menu/Menu";
import { UserContext } from "@/contexts/UserContext";
import { useVerifyLogin } from "@/helpers/useVerifyLogin";
import { useState, useEffect, useContext } from "react";

interface Materia {
    id: number;
    titulo: string;
    resumo: string;
    categoria: string;
    dataCriacao: string;
    dataUpdate: string;
    idUsuario: number;
}

interface Local {
    id: number;
    nome: string;
    categoria: string;
    cidade: string;
    estado: string;
}

export default function Dashboard() {
    useVerifyLogin();
    const [materias, setMaterias] = useState<Materia[]>([]);
    const [locais, setLocais] = useState<Local[]>([]);
    const [abaAtiva, setAbaAtiva] = useState<"materias" | "locais">("materias");
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const formatDate = (date: Date) => {
        const d = new Date(date);
        return d.toISOString().split('T')[0] + 'T' + d.toTimeString().split(' ')[0];
    }  

    const [novoLocal, setNovoLocal] = useState({
        nome: "",
        categoria: "",
        logradouro: "",
        cep: "",
        cidade: "",
        estado: "",
        latitude: "0",
        longitude: "0",
    });

    const [novaMateria, setNovaMateria] = useState({
        tituloMateria: "",
        textoMateria: "",
        ativo: "S",
        dtCriacao: formatDate(new Date()),
        dtUpdate: formatDate(new Date()),
        idUsuario: user?.id,  
    });

    const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND_URL;

    const carregarDados = async () => {
        try {
            const [materiasRes, locaisRes] = await Promise.all([
                fetch(`${apiUrl}/materia`),
                fetch(`${apiUrl}/local`),
            ]);

            if (!materiasRes.ok || !locaisRes.ok) {
                throw new Error("Erro ao carregar dados");
            }

            const materiasData = await materiasRes.json();
            const locaisData = await locaisRes.json();

            setMaterias(
                materiasData.map((item: any) => ({
                    id: item.idMateria,
                    titulo: item.tituloMateria,
                    resumo: item.textoMateria,
                    categoria: item.ativo === "S" ? "Ativo" : "Inativo",
                    dataCriacao: item.dtCriacao,
                    dataUpdate: item.dtUpdate,
                }))
            );

            setLocais(
                locaisData.map((item: any) => ({
                    id: item.id,
                    nome: item.nome,
                    categoria: item.categoria,
                    cidade: item.cidade,
                    estado: item.estado,
                }))
            );
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        carregarDados();
    }, [user?.id]);

    const handleCadastrarLocal = async () => {
        try {
            const res = await fetch(`${apiUrl}/local/inserir`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoLocal),
            });

            if (!res.ok) {
                throw new Error("Erro ao cadastrar local");
            }

            setNovoLocal({
                nome: "",
                categoria: "",
                logradouro: "",
                cep: "",
                cidade: "",
                estado: "",
                latitude: "0",
                longitude: "0",
            });
            setMostrarFormulario(false);
            carregarDados();
        } catch (error) {
            console.error(error);
        }
    };

    const handleCadastrarMateria = async () => {
        try {

            setNovaMateria({
                ...novaMateria,
                idUsuario: user?.id,
            })

            console.log("iduausio? ",novaMateria.idUsuario);
            

            const res = await fetch(`${apiUrl}/materia/inserir`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaMateria),
            });

            if (!res.ok) {
                throw new Error("Erro ao cadastrar matéria");
            }

            setNovaMateria({
                tituloMateria: "",
                textoMateria: "",
                ativo: "S",
                dtCriacao: new Date().toISOString(),
                dtUpdate: new Date().toISOString(),
                idUsuario: user?.id,
            });
            setMostrarFormulario(false);
            carregarDados();
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleExcluirMateria = async (idMateria: number) => {
        try {
            const res = await fetch(`${apiUrl}/materia/deletar/${idMateria}`, {
                method: "DELETE",
            });
    
            if (!res.ok) {
                throw new Error("Erro ao excluir matéria");
            }
    
            carregarDados();
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleExcluirLocal = async (idLocal: number) => {
        try {
            const res = await fetch(`${apiUrl}/local/deletar/${idLocal}`, {
                method: "DELETE",
            });
    
            if (!res.ok) {
                throw new Error("Erro ao excluir local");
            }
    
            carregarDados();
        } catch (error) {
            console.error(error);
        }
    };

    const handleFormularioVisivel = () => {
        setMostrarFormulario(!mostrarFormulario);
    }

    return (
        <div
            className="relative flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 w-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                <Menu />
                <div className="container min-h-screen mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8 text-white">
                        Dashboard Administrativo
                    </h1>

                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setAbaAtiva("materias")}
                            className={`px-4 py-2 rounded-lg ${
                                abaAtiva === "materias"
                                    ? "bg-verdeFolha text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            Matérias
                        </button>
                        <button
                            onClick={() => setAbaAtiva("locais")}
                            className={`px-4 py-2 rounded-lg ${
                                abaAtiva === "locais"
                                    ? "bg-verdeFolha text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            Locais
                        </button>
                    </div>

                    <div className="flex justify-center mb-8">
                        <button
                            onClick={handleFormularioVisivel}
                            className="bg-verdeFolha text-white px-4 py-2 rounded-lg"
                        >
                            Adicionar Registro
                        </button>
                    </div>

                    {mostrarFormulario && abaAtiva === "locais" && (
                        <div className="p-4 bg-white rounded-lg shadow-md mb-8">
                            <h3 className="text-xl font-bold mb-4">Cadastrar Local</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCadastrarLocal();
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    value={novoLocal.nome}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            nome: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Categoria"
                                    value={novoLocal.categoria}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            categoria: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Logradouro"
                                    value={novoLocal.logradouro}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            logradouro: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="CEP"
                                    value={novoLocal.cep}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            cep: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    value={novoLocal.cidade}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            cidade: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Estado"
                                    value={novoLocal.estado}
                                    onChange={(e) =>
                                        setNovoLocal({
                                            ...novoLocal,
                                            estado: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-verdeFolha text-white px-4 py-2 rounded-lg"
                                    >
                                        Cadastrar Local
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {mostrarFormulario && abaAtiva === "materias" && (
                        <div className="p-4 bg-white rounded-lg shadow-md mb-8">
                            <h3 className="text-xl font-bold mb-4">Cadastrar Matéria</h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCadastrarMateria();
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Título"
                                    value={novaMateria.tituloMateria}
                                    onChange={(e) =>
                                        setNovaMateria({
                                            ...novaMateria,
                                            tituloMateria: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <textarea
                                    placeholder="Texto da Matéria"
                                    value={novaMateria.textoMateria}
                                    onChange={(e) =>
                                        setNovaMateria({
                                            ...novaMateria,
                                            textoMateria: e.target.value,
                                        })
                                    }
                                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                                />
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-verdeFolha text-white px-4 py-2 rounded-lg"
                                    >
                                        Cadastrar Matéria
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {abaAtiva === "materias" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {materias.map((materia) => (
                                <div key={materia.id} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold">{materia.titulo}</h3>
                                    <p className="text-gray-600">{materia.resumo}</p>
                                    <p className="text-sm text-gray-400">Criada em: {materia.dataCriacao}</p>

                                    <div className="mt-4 flex space-x-2">
                                        <button
                                            onClick={() => handleExcluirMateria(materia.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {abaAtiva === "locais" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {locais.map((local) => (
                                <div key={local.id} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold">{local.nome}</h3>
                                    <p className="text-gray-600">{local.categoria}</p>
                                    <p className="text-sm text-gray-400">
                                        {local.cidade} - {local.estado}
                                    </p>

                                    <div className="mt-4 flex space-x-2">
                                        <button
                                            onClick={() => handleExcluirLocal(local.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
