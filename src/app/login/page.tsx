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
        <div className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-home2.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-60" />
            
            <div className="relative z-10 bg-gray-900 bg-opacity-80 p-8 rounded-lg max-w-md w-full text-white shadow-lg">
                <div className="flex justify-center mb-6">
                    <Image src="/logo-texto-branco.svg" alt="eCommunity Logo" width={180} height={100} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-verdeFolha"
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="w-full p-3 bg-verdeFolha hover:bg-verdeClaro transition-colors rounded-md font-semibold">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
