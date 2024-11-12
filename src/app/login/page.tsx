"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Digite um email válido"),
    password: yup.string().required("Campo obrigatório").min(6, "Mínimo de 6 caracteres"),
});

export default function Login() {
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
                <div className="flex justify-center mb-8">
                    <Image
                        src="/logo-texto-branco.svg"
                        alt="Logo eCommunity"
                        width={200}
                        height={50}
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Senha"
                            {...register("password")}
                            className="w-full px-4 py-2 mb-4 text-white bg-transparent border border-white rounded focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-verdeFolha bg-white rounded hover:bg-cinzaPedregulho transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-4 text-center text-white">
                    Não tem uma conta? <a href="/cadastro" className="font-semibold text-verdeFolha">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}
