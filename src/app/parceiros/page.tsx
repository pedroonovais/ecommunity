import { Hero } from "@/components/Hero/Hero";
import { FiSearch, FiMapPin, FiHeart } from "react-icons/fi";
import { FaLeaf, FaRecycle, FaWater } from "react-icons/fa";
import Link from "next/link";
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Footer } from "@/components/Footer/Footer";
import AvisoCookies from "@/components/AvisoCookies/AvisoCookies";
import { Parceiros } from "@/components/Parceiros/Parceiros";

export default function Parceiro() {
    return (
        <>
            <Hero bgImg="/parceiro-banner.jpg">
                <div data-aos="slide-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Parceiros
                    </h1>
                    <p>
                        Conheça os parceiros do Ecommunity
                    </p>
                </div>
            </Hero>
            <main>
                <Parceiros />
            </main>
            <Footer />
        </>
    );
}
