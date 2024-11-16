"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import Link from "next/link";

const schema = yup.object().shape({
    nomeUsuario: yup.string().required("Campo obrigatório").max(180, "Máximo de 180 caracteres"),
    emailUsuario: yup.string().required("Campo obrigatório").email("Digite um email válido").max(150, "Máximo de 150 caracteres"),
    senha: yup.string().required("Campo obrigatório").min(6, "Mínimo de 6 caracteres").max(150, "Máximo de 150 caracteres"),
    confirmaSenha: yup
        .string()
        .required("Campo obrigatório")
        .oneOf([yup.ref("senha")], "As senhas não conferem"),
});

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-home2.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 max-w-md w-full p-8 bg-white bg-opacity-20 backdrop-blur-md rounded-lg">
                <Link href={"/"}>
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/logo-texto-branco.svg"
                            alt="Logo eCommunity"
                            width={200}
                            height={50}
                        />
                    </div>
                </Link>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Nome"
                            {...register("nomeUsuario")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.nomeUsuario && <p className="text-red-500 text-xs mt-1">{errors.nomeUsuario.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("emailUsuario")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.emailUsuario && <p className="text-red-500 text-xs mt-1">{errors.emailUsuario.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Senha"
                            {...register("senha")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Confirme a Senha"
                            {...register("confirmaSenha")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.confirmaSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmaSenha.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-verdeFolha bg-white rounded hover:bg-cinzaPedregulho transition duration-300"
                    >
                        Cadastrar
                    </button>
                </form>
                <p className="mt-4 text-center text-white">
                    Já tem uma conta? <Link href="/login" className="font-semibold text-verdeFolha">Entre</Link>
                </p>
            </div>
        </div>
    );
}
