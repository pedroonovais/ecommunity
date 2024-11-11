import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';  // Se você quiser ícones sociais

export const Footer = () => {
    return (
        <footer data-aos="zoom-in-up" className="bg-brancoNeve text-verdeFolha py-12">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo e descrição */}
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-2xl font-semibold">EcoCommunity</h2>
                        <p className="mt-2 text-sm text-cinzaPedregulho">
                            Conectando pessoas a práticas e lugares sustentáveis.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                        <Link href="/sobre" className="hover:text-verdeClaro">Sobre</Link>
                        <Link href="/dicas" className="hover:text-verdeClaro">Dicas Sustentáveis</Link>
                        <Link href="/contato" className="hover:text-verdeClaro">Contato</Link>
                    </div>

                    {/* Redes sociais */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-verdeFolha hover:text-amareloSolar">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-verdeFolha hover:text-amareloSolar">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-verdeFolha hover:text-amareloSolar">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-verdeFolha hover:text-amareloSolar">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Direitos autorais */}
                <div className="mt-8 border-t border-cinzaPedregulho pt-6 text-sm text-cinzaPedregulho">
                    <p>&copy; 2024 Ecommunity. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}