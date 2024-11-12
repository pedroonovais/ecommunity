import { Hero } from "@/components/Hero/Hero";
import { Footer } from "@/components/Footer/Footer";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import 'aos/dist/aos.css';

export default function Contato() {
    return (
        <>
            <Hero bgImg="/hero-contato.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Fale Conosco
                    </h1>
                    <p className="text-lg mt-4">
                        Estamos aqui para ajudar. Entre em contato conosco para tirar dúvidas ou contribuir com o projeto.
                    </p>
                </div>
            </Hero>

            <main>
                <section data-aos="zoom-in-up" className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-10">
                            Como nos encontrar
                        </h2>
                        <p className="text-lg text-cinzaPedregulho mb-12">
                            Utilize qualquer um dos métodos abaixo para entrar em contato com nossa equipe.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            {/* Telefone */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-8 w-full md:w-1/3 min-h-[250px] flex flex-col justify-center text-center">
                                <FiPhone className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Telefone
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    +55 (11) 3385-8010
                                </p>
                            </div>

                            {/* Endereço */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-8 w-full md:w-1/3 min-h-[250px] flex flex-col justify-center text-center">
                                <FiMapPin className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Endereço
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000
                                </p>
                            </div>

                            {/* Email */}
                            <div data-aos="flip-left" className="bg-white shadow-2xl rounded-lg p-8 w-full md:w-1/3 min-h-[250px] flex flex-col justify-center text-center">
                                <FiMail className="text-verdeFolha text-4xl mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold text-verdeFolha mb-2">
                                    Email
                                </h3>
                                <p className="text-cinzaPedregulho">
                                    contato@ecommunity.com
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section data-aos="zoom-in-up" className="py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-verdeFolha mb-6">
                            Localização
                        </h2>
                        <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8421620072477!2d-46.65107532497334!3d-23.5633631846777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd73176b4b%3A0x6b0d6a1f680b5a51!2sAv.%20Paulista%2C%201106%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001311-000!5e0!3m2!1sen!2sbr!4v1635349123456!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                allowFullScreen={true}
                                loading="lazy"
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <section data-aos="zoom-in-down" className="bg-verdeFolha py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center text-brancoNeve">
                        <h2 className="text-4xl font-bold mb-6">
                            Envie uma Mensagem
                        </h2>
                        <p className="text-lg mb-8">
                            Deixe-nos uma mensagem e responderemos o mais breve possível.
                        </p>

                        <form className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-verdeFolha"
                                    placeholder="Seu Nome"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-verdeFolha"
                                    placeholder="Seu Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-verdeFolha"
                                    rows={4}
                                    placeholder="Sua Mensagem"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-verdeFolha text-brancoNeve px-6 py-3 rounded-lg font-semibold hover:bg-verdeClaro transition duration-300"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
