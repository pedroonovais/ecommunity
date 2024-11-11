import { Hero } from "@/components/Hero/Hero";

export default function Home() {
    return (
        <>
            <Hero>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-shadow-md">
                        Conecte-se a um mundo mais sustentável
                    </h1>
                    <p>
                        Descubra lugares, produtos e práticas que fazem a diferença. Pequenas escolhas, grandes mudanças.
                    </p>
                    <button className="bg-verdeFolha text-brancoNeve px-3 py-2 rounded-lg font-sans hover:bg-verdeClaro transition duration-300 mt-2">
                        Explore agora
                    </button>
                </div>
            </Hero>
            <main>
                <h1>home</h1>
            </main>
        </>
    );
}
