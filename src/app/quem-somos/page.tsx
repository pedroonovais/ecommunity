import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { FiEye, FiUsers } from "react-icons/fi";
import { FaLeaf, FaHandshake, FaRecycle, FaUniversity } from "react-icons/fa";
import 'aos/dist/aos.css';

export default function QuemSomos() {
    return (
        <>
            <Hero bgImg="/hero-quem-somos.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Quem Somos
                    </h1>
                    <p className="text-lg mt-4">
                        Transformando escolhas em impacto positivo.
                    </p>
                </div>
            </Hero>

            <main>
                <section data-aos="zoom-in-up" className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="/sustentabilidade.jpg"
                                alt="eCommunity"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                                O que é o Ecommunity?
                            </h2>
                            <p className="text-lg text-cinzaPedregulho mb-6 leading-relaxed">
                                O eCommunity é uma plataforma inovadora que conecta pessoas a estabelecimentos sustentáveis, facilitando a escolha de produtos e serviços que impactam positivamente o meio ambiente. 
                                Nosso objetivo é fomentar um estilo de vida mais consciente e engajado com o futuro do nosso planeta, oferecendo uma maneira simples e prática de contribuir para um mundo mais sustentável.
                            </p>
                            <p className="text-lg text-cinzaPedregulho mb-6 leading-relaxed">
                                Além disso, oferecemos uma experiência gamificada, onde os usuários ganham pontos por suas ações e interações com os parceiros da plataforma. Esses pontos podem ser trocados por benefícios e descontos exclusivos, criando um ciclo positivo de engajamento e recompensa.
                            </p>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-down" className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                            Nossos Valores
                        </h2>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FaLeaf className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Sustentabilidade
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Atuamos para garantir que cada ação, por menor que seja, contribua para um planeta mais verde e saudável. A sustentabilidade está no coração do eCommunity.
                                </p>
                            </div>

                            <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FiEye className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Transparência
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Acreditamos que todos têm o direito de saber como suas escolhas impactam o mundo. Buscamos sempre oferecer informações claras e verdadeiras sobre os parceiros e práticas que promovemos.
                                </p>
                            </div>

                            <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FiUsers className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Colaboração
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    A força do eCommunity está na união de indivíduos e empresas comprometidos com um mesmo propósito. Juntos, podemos fazer a diferença.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-up" className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                            Nossa Missão e Visão
                        </h2>
                        <p className="text-lg text-cinzaPedregulho mb-12 leading-relaxed">
                            A nossa missão é conscientizar e incentivar as pessoas a tomarem decisões mais sustentáveis, ao mesmo tempo que apoiam negócios que compartilham os mesmos valores. Acreditamos que cada pequena ação conta, e nosso objetivo é criar um movimento em que todos podem contribuir, de forma simples e eficaz.
                        </p>
                    </div>
                </section>

                <section data-aos="zoom-in-up" className="bg-verdeClaro py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center text-brancoNeve">
                        <h2 className="text-4xl font-bold mb-10">
                            Benefícios para a Comunidade
                        </h2>
                        <p className="text-lg mb-12">
                            Unir-se ao eCommunity significa fazer parte de um movimento que gera mudanças reais.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FaHandshake className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Apoio ao Comércio Sustentável
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Promovemos empresas que trabalham de forma ética, com produtos e serviços que respeitam o meio ambiente.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FaRecycle className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Redução do Impacto Ambiental
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Encorajamos escolhas que reduzem o desperdício e as emissões, ajudando a minimizar o impacto ambiental.
                                </p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs min-h-[250px] flex flex-col justify-center text-center">
                                <FaUniversity className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Educação e Consciência
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Fornecemos informações e dicas para educar nossa comunidade sobre práticas sustentáveis e consumo consciente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
