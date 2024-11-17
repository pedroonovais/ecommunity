"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    login: yup.string().required("Campo obrigatório"),
    password: yup
        .string()
        .required("Campo obrigatório")
        .min(6, "Mínimo de 6 caracteres"),
});

export default function Login() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const apiUrl = process.env.NEXT_PUBLIC_API_BACKEND_URL;

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${apiUrl}/usuario/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    login: data.login,
                    senha: data.password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.msg || "Erro de login");
                return;
            }

            const { token } = await response.json();
            console.log("Token JWT:", token);

            localStorage.setItem("token", token);
            setErrorMessage("");

            router.push("/home");
        } catch (error) {
            console.error("Erro de login:", error);
            setErrorMessage("Erro ao conectar ao servidor. Tente novamente mais tarde.");
        }
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
                {errorMessage && (
                    <div className="mb-4 text-red-500 text-center font-semibold">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Login"
                            {...register("login")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.login && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.login.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Senha"
                            {...register("password")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-verdeFolha bg-white rounded hover:bg-cinzaPedregulho transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-4 text-center text-white">
                    Não tem uma conta?{" "}
                    <a href="/cadastro" className="font-semibold text-verdeFolha">
                        Cadastre-se
                    </a>
                </p>
            </div>
        </div>
    );
}
