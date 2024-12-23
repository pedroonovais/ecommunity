import { Hero } from "@/components/Hero/Hero";
import { FiSearch, FiMapPin, FiHeart } from "react-icons/fi";
import { FaLeaf, FaRecycle, FaWater } from "react-icons/fa";
import Link from "next/link";
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Footer } from "@/components/Footer/Footer";
import { Parceiros } from "@/components/Parceiros/Parceiros";
import AvisoCookies from "@/components/AvisoCookies/AvisoCookies";

export default function Home() {
    return (
        <>
            <AvisoCookies />
            <Hero bgImg="/hero-home2.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Conecte-se a um mundo mais sustentável
                    </h1>
                    <p>
                        Descubra lugares, produtos e práticas que fazem a
                        diferença. Pequenas escolhas, grandes mudanças.
                    </p>
                    <Link href={"/pesquisa-local"}>
                        <button className="bg-verdeFolha text-brancoNeve px-3 py-2 rounded-lg font-sans hover:bg-verdeClaro transition duration-300 mt-2">
                            Explore agora
                        </button>
                    </Link>
                </div>
            </Hero>
            <main>
                <section data-aos="zoom-in-up" className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                            Como Funciona?
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            {/* Passo 1 */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-16 max-w-xs">
                                <FiSearch className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    1. Encontre
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Busque lojas, restaurantes e pontos
                                    sustentáveis próximos a você.
                                </p>
                            </div>

                            {/* Passo 2 */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-16 max-w-xs">
                                <FiMapPin className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    2. Conecte-se
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Explore locais com práticas sustentáveis e
                                    conheça mais sobre suas iniciativas.
                                </p>
                            </div>

                            {/* Passo 3 */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-16 max-w-xs">
                                <FiHeart className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    3. Aja
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Faça escolhas conscientes e ajude a criar um
                                    futuro mais verde.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-down" className="bg-verdeClaro py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-brancoNeve mb-10">
                            Benefícios para o Planeta
                        </h2>
                        <p className="text-brancoNeve text-lg mb-12">
                            Descubra os impactos positivos que escolhas
                            sustentáveis trazem para o nosso planeta.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            {/* Benefício 1 */}
                            <div data-aos="flip-right" className="bg-white shadow-lg rounded-lg p-16 max-w-xs">
                                <FaLeaf className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Redução de Emissões
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Minimizar a pegada de carbono ajuda a
                                    combater as mudanças climáticas.
                                </p>
                            </div>

                            {/* Benefício 2 */}
                            <div data-aos="flip-right" className="bg-white shadow-lg rounded-lg p-16 max-w-xs">
                                <FaRecycle className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Economia de Recursos
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Reduzir o desperdício e reaproveitar
                                    materiais economiza recursos naturais.
                                </p>
                            </div>

                            {/* Benefício 3 */}
                            <div data-aos="flip-right" className="bg-white shadow-lg rounded-lg p-16 max-w-xs">
                                <FaWater className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Preservação de Água
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Consumir menos água e produtos sustentáveis
                                    preserva esse recurso essencial.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-up" className="bg-gray-100 py-16 flex items-center">
                    <div className="flex flex-col md:flex-row items-center mx-auto max-w-7xl px-6">
                        {/* Seção de texto */}
                        <div className="max-w-3xl text-center md:text-right md:mb-0 mb-8">
                            <h2 className="text-4xl font-bold text-verdeFolha mb-6">
                                Nossas Notícias / Dicas Sustentáveis
                            </h2>
                            <p className="text-cinzaPedregulho text-lg mb-8">
                                Inspire-se com dicas e práticas sustentáveis para
                                incorporar no seu dia a dia. Aprenda maneiras de
                                contribuir para um futuro mais verde!
                            </p>
                            <Link
                                href="/noticias"
                                className="bg-verdeFolha text-brancoNeve px-6 py-3 rounded-lg font-semibold hover:bg-verdeClaro transition duration-300"
                            >
                                Saiba mais
                            </Link>
                        </div>

                        {/* Seção de imagem */}
                        <div className="max-w-3xl md:ml-6">
                            <Image 
                                src="/blog.jpg"
                                alt="Descrição da imagem"
                                width={500}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                <Parceiros />

                <section data-aos="zoom-in-down" className="bg-verdeFolha py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center text-brancoNeve">
                        <h2 className="text-4xl font-bold mb-6">
                            Seja um Colaborador
                        </h2>
                        <p className="text-lg mb-8">
                            Sua empresa também pode fazer a diferença! Junte-se
                            a nós e contribua para um futuro mais sustentável.
                            Mostre aos seus clientes o impacto positivo que
                            vocês estão gerando.
                        </p>

                        <Link
                            href="/cadastro"
                            className="bg-brancoNeve text-verdeFolha px-6 py-3 rounded-lg font-semibold hover:bg-cinzaPedregulho hover:text-brancoNeve transition duration-300"
                        >
                            Cadastre sua Empresa
                        </Link>
                    </div>
                </section>

                
            </main>
            <Footer />
        </>
    );
}
