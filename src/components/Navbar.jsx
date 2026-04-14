import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#home" className="hover:text-purple-400">Início</a>
          <a href="#about" className="hover:text-purple-400">Sobre</a>
          <a href="#services" className="hover:text-purple-400">Serviços</a>
          <a href="#portfolio" className="hover:text-purple-400">Portfólio</a>
          <a href="#skills" className="hover:text-purple-400">Habilidades</a>
          <a href="#contact" className="hover:text-purple-400">Contato</a>
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
        <div className="md:hidden bg-slate-900 p-4 flex flex-col gap-4 divide-y divide-slate-700">

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

          <a href="#contact" onClick={toggleMenu}>
            Contato
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;