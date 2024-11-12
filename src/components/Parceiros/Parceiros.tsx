"use client"
import 'aos/dist/aos.css';
import Image from "next/image";
import { useState, useEffect } from "react";

const parceiros = [
    {
        name: "SAP",
        src: "/sap-logo.png",
        description:
            "Líder global em software empresarial, ajudando organizações a melhorar seus processos de negócio.",
    },
    {
        name: "FIA",
        src: "/fia-logo.png",
        description:
            "Fundação Instituto de Administração, uma referência em pesquisa e educação no Brasil.",
    },
    {
        name: "Mahindra",
        src: "/mahindra-logo.jpg",
        description:
            "Empresa multinacional com foco em agricultura e tecnologia sustentável.",
    },
    {
        name: "FIAP",
        src: "/fiap-logo.jpg",
        description:
            "Faculdade de tecnologia reconhecida pela inovação e formação de profissionais na área.",
    },
    {
        name: "Ultragaz",
        src: "/ultragaz-logo.jpg",
        description:
            "Pioneira em distribuição de gás no Brasil, promovendo sustentabilidade no setor energético.",
    },
    {
        name: "Ultracargo",
        src: "/ultracargo-logo.jpg",
        description:
            "Líder em armazenagem de produtos químicos e petroquímicos, comprometida com a sustentabilidade.",
    },
];

export const Parceiros = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % parceiros.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + parceiros.length) % parceiros.length
        );
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered, currentIndex]);

    return (
        <section data-aos="fade-down" className="py-16 bg-brancoNeve">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 ">Nossos Parceiros</h2>
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {parceiros.map((parceiro) => (
                                <div
                                    key={parceiro.name}
                                    className="flex-shrink-0 w-full px-4"
                                >
                                    <div className="flex flex-col items-center bg-white shadow-xl rounded-lg p-6 h-[400px]">
                                        <div className="flex items-center justify-center w-48 h-48 mb-6">
                                            <Image
                                                src={parceiro.src}
                                                alt={parceiro.name}
                                                width={192}
                                                height={192}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                                {parceiro.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {parceiro.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-verdeClaro text-white px-6 py-2 rounded-full shadow-lg hover:bg-amareloSolar transition"
                        onClick={prevSlide}
                        style={{ left: '-20px' }}
                    >
                        &#10094;
                    </button>
                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-verdeClaro text-white px-6 py-2 rounded-full shadow-lg hover:bg-amareloSolar transition"
                        onClick={nextSlide}
                        style={{ right: '-20px' }}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};
