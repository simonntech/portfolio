import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-950 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-purple-400 hover:underline">Início</a>
          <a href="#about" className="hover:text-purple-400 hover:underline">Sobre</a>
          <a href="#services" className="hover:text-purple-400 hover:underline">Serviços</a>
          <a href="#portfolio" className="hover:text-purple-400 hover:underline">Portfólio</a>
          <a href="#plus" className="hover:text-purple-400 hover:underline">Adicionais</a>
          <a href="#contact" className="hover:text-purple-400 hover:underline">Contato</a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-950 p-4 flex flex-col gap-4 divide-y divide-slate-700">

          <a href="#home" onClick={toggleMenu}>
            Início
          </a>

          <a href="#about" onClick={toggleMenu}>
            Sobre
          </a>

          <a href="#services" onClick={toggleMenu}>
            Serviços
          </a>

          <a href="#projects" onClick={toggleMenu}>
            Projetos
          </a>

          <a href="#plus" onClick={toggleMenu}>
            Adicionais
          </a>

          <a href="#contact" onClick={toggleMenu}>
            Contato
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;