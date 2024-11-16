import Link from "next/link";
import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { FiSmile, FiBookOpen, FiGlobe } from "react-icons/fi";

export default function Gamificacao() {
    return (
        <>
            <Hero bgImg="/gamificacao-banner.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Gamificação: Educação Sustentável em Jogo
                    </h1>
                    <p>
                        Inspire crianças a aprender sobre sustentabilidade de
                        maneira divertida e interativa.
                    </p>
                </div>
            </Hero>
            <main>
                <section data-aos="fade-up" className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                            Por que Gamificação é Importante?
                        </h2>
                        <p className="text-cinzaPedregulho text-lg mb-8">
                            A gamificação usa elementos de jogos para
                            transformar o aprendizado em uma experiência
                            dinâmica e envolvente. Crianças aprendem melhor
                            quando estão motivadas e se divertindo!
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            {/* Benefício 1 */}
                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs">
                                <FiSmile className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Engajamento
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Jogos tornam o aprendizado divertido,
                                    mantendo as crianças motivadas e conectadas
                                    ao tema.
                                </p>
                            </div>
                            {/* Benefício 2 */}
                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs">
                                <FiBookOpen className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Memorização
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    A interação com elementos lúdicos facilita a
                                    fixação de conceitos de forma prática e
                                    intuitiva.
                                </p>
                            </div>
                            {/* Benefício 3 */}
                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs">
                                <FiGlobe className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Consciência
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Estimula a reflexão sobre o impacto das
                                    ações no meio ambiente e promove mudanças
                                    comportamentais positivas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="fade-up" className="bg-verdeClaro py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-brancoNeve mb-10">
                            Conheça mais!
                        </h2>
                        <p className="text-brancoNeve text-lg mb-8">
                            Educadores e pais podem usar a gamificação como uma
                            poderosa ferramenta para ensinar sustentabilidade.
                            Vamos juntos criar gerações mais conscientes e
                            engajadas!
                        </p>
                        <Link
                            href="https://climatekids.nasa.gov/menu/dream/"
                            target="_blank"
                            className="bg-brancoNeve text-verdeFolha px-6 py-3 rounded-lg font-semibold hover:bg-cinzaPedregulho hover:text-brancoNeve transition duration-300"
                        >
                            Explore os Jogos da NASA
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
