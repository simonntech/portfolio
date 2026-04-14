import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">
            Sobre Mim
          </h2>

          <img src={profilePic} alt="Foto de perfil" className="rounded-4xl mx-auto w-48 h-48 object-cover"/>

          <p className="font-bold text-lg mb-2">Meu nome é Bruno Simon Ferreira</p>
          <p className="text-gray-300 leading-relaxed">
            Sou desenvolvedor web focado em criar aplicações modernas,
            funcionais e de fácil manutenção. Trabalho com tecnologias atuais
            para entregar soluções eficientes e escaláveis.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Tecnologias</h3>

          <ul className="space-y-2 text-gray-300">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
