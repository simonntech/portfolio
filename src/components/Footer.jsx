import githubIcon from '../assets/github.png';

function Footer() {
  return (
    <footer className="bg-slate-950 text-center py-10 border-t border-slate-950">
      <p className="text-gray-300 text-sm">
        <span className="text-purple-400 font-bold"> © 2026 
           SIMONN TECH
        </span> - Todos os direitos reservados
      </p>
      <p className='p-2 flex justify-center'>
        <a href="https://github.com/simonntech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 flex items-center gap-1">
          <img src={githubIcon} alt="GitHub" className="inline-block w-5 h-5" /> GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;