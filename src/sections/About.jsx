import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="py-15 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 items-center border-2 border-purple-400 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Foto de perfil"
            className="rounded-4xl w-48 h-48 md:w-64 md:h-110 object-cover"
          />
        </div>
        <div className="bg-slate-950 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Sobre Mim</h2>

          <p className="font-bold text-lg mb-2">
            Meu nome é Bruno Simon Ferreira
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Sou desenvolvedor web focado em criar aplicações modernas,
            funcionais e de fácil manutenção. Trabalho com tecnologias atuais
            para entregar soluções eficientes e escaláveis.
          </p>

          <div className="bg-slate-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Tecnologias
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
