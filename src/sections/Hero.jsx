import videoBackground from "../assets/videobg.mp4";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 animate-fadeIn"
      >
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70 z-10 bg-linear-to-b from-transparent to-slate-900"></div>

      <div className="relative z-20 max-w-4xl text-center space-y-6 flex flex-col items-center justify-center ">
        <img src={logo} alt="Logo SIMONN TECH" className="w-56 md:w-80" />

        <h2 className="text-2xl md:text-3xl font-bold">
          Desenvolvimento Web{" "}
          <span className="text-purple-400">& Soluções Digitais</span>
        </h2>

        <p className="text-gray-300 max-w-2xl">
          Sites e sistemas modernos, rápidos e personalizados para empresas e
          profissionais, além de manutenção e suporte contínuo para garantir o
          sucesso do seu projeto.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#portfolio"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl shadow-lg transition"
          >
            Ver Projetos
          </a>

          <a
            href="#contact"
            className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-2xl transition"
          >
            Contato
          </a>
        </div>

        <a href="#about" className="mt-10 animate-bounce text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
