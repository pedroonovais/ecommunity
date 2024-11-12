import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Integrantes() {
    return (
        <>
            <Hero bgImg="/hero-participantes.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md mb-3">
                        Integrantes
                    </h1>
                    <p>
                        Descubra quem está por tras da iniciativa Ecommunity.
                    </p>
                </div>
            </Hero>

            <section
                data-aos="zoom-in-up"
                className="bg-gray-100 py-10 flex items-center"
            >
                <h2 className="text-4xl font-bold text-verdeFolha mx-auto">
                    Conheça nossa equipe
                </h2>
            </section>

            <section
                data-aos="zoom-in-up"
                className="bg-gray-100 py-16 flex items-center"
            >
                <div className="flex flex-col md:flex-row items-center mx-auto max-w-7xl px-6">
                    {/* Seção de imagem */}
                    <div className="max-w-3xl md:ml-6" data-aos="fade-up-left">
                        <Image
                            src="/pedroNovais.jpg"
                            alt="Descrição da imagem"
                            width={500}
                            height={300}
                            className="rounded-xl"
                        />
                    </div>

                    {/* Seção de texto */}
                    <div
                        className="max-w-3xl text-center md:text-left md:mb-0 mb-8 md:ml-5"
                        data-aos="fade-up-right"
                    >
                        <h2 className="text-4xl font-bold text-verdeFolha mb-3">
                            Pedro Novais - 1TDSPX
                        </h2>
                        <p className="text-cinzaPedregulho text-lg mb-8">
                            Programador com 3 anos de experiência em tecnologias
                            como PHP, JavaScript, React, Oracle e .NET.
                            Atualmente cursando Análise e Desenvolvimento de
                            Sistemas na FIAP, Pedro é co-criador do eCommunity,
                            trazendo seu conhecimento em programação para dar
                            vida ao projeto.
                        </p>

                        {/* Div com ícones sociais */}
                        <div className="flex justify-center md:justify-start space-x-6 text-verdeFolha">
                            <a
                                href="https://www.linkedin.com/in/pedroonovais/"
                                target="_blank"
                            >
                                <FaLinkedin className="w-8 h-8 hover:text-verdeClaro transition-colors duration-300" />
                            </a>
                            <a
                                href="https://github.com/pedroonovais"
                                target="_blank"
                            >
                                <FaGithub className="w-8 h-8 hover:text-verdeClaro transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section
                data-aos="zoom-in-up"
                className="bg-gray-100 py-16 flex items-center"
            >
                <div className="flex flex-col md:flex-row items-center mx-auto max-w-7xl px-6">
                    {/* Seção de texto */}
                    <div
                        className="max-w-3xl text-center md:text-right md:mb-0 mb-8 md:ml-5"
                        data-aos="fade-up-right"
                    >
                        <h2 className="text-4xl font-bold text-verdeFolha mb-3">
                            Pedro Novais - 1TDSPX
                        </h2>
                        <p className="text-cinzaPedregulho text-lg mb-8">
                            Programador com 3 anos de experiência em tecnologias
                            como PHP, JavaScript, React, Oracle e .NET.
                            Atualmente cursando Análise e Desenvolvimento de
                            Sistemas na FIAP, Pedro é co-criador do eCommunity,
                            trazendo seu conhecimento em programação para dar
                            vida ao projeto.
                        </p>

                        {/* Div com ícones sociais */}
                        <div className="flex justify-center md:justify-end space-x-6 text-verdeFolha">
                            <a
                                href="https://www.linkedin.com/in/pedroonovais/"
                                target="_blank"
                            >
                                <FaLinkedin className="w-8 h-8 hover:text-verdeClaro transition-colors duration-300" />
                            </a>
                            <a
                                href="https://github.com/pedroonovais"
                                target="_blank"
                            >
                                <FaGithub className="w-8 h-8 hover:text-verdeClaro transition-colors duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Seção de imagem */}
                    <div className="max-w-3xl md:ml-6" data-aos="fade-up-left">
                        <Image
                            src="/pedroNovais.jpg"
                            alt="Descrição da imagem"
                            width={500}
                            height={300}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </section>

            <section data-aos="zoom-in-down" className="bg-verdeFolha py-16">
                <div className="max-w-7xl mx-auto px-6 text-center text-brancoNeve">
                    <h2 className="text-4xl font-bold mb-6">
                        Ficou interresado no projeto?
                    </h2>
                    <p className="text-lg mb-8">
                        Explore nosso projeto no GitHub para ver como ele
                        funciona por dentro. Sua contribuição pode fazer a
                        diferença!
                    </p>

                    <a
                        href="https://github.com/pedroonovais/ecommunity"
                        target="_blank"
                        className="bg-brancoNeve text-verdeFolha px-6 py-3 rounded-lg font-semibold hover:bg-cinzaPedregulho hover:text-brancoNeve transition duration-300"
                    >
                        Conheça o projeto
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
