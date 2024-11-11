export const Menu = () => {
    return (
        <header className="flex items-center justify-between p-3 bg-opacity-30 ">
            {/* Logo */}
            <div className="flex items-center w-52">
                <img
                    src="/logo-texto-branco.svg"
                    alt="Ícone do Menu"
                    className="w-full"
                />
            </div>

            {/* Nav centralizado */}
            <nav className="flex-grow flex justify-center space-x-4">
                <a href="#home" className="text-gray-100 hover:text-white">
                    Home
                </a>
                <a href="#about" className="text-gray-100 hover:text-white">
                    Sobre
                </a>
                <a href="#services" className="text-gray-100 hover:text-white">
                    Serviços
                </a>
                <a href="#contact" className="text-gray-100 hover:text-white">
                    Contato
                </a>
            </nav>

            {/* Botão de Login */}
            <div className="flex items-center w-52 justify-end">
                <button className="w-24 bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-verdeClaro hover:text-black transition-all duration-300 ease-in-out">
                    Login
                </button>
            </div>

        </header>
    );
};
