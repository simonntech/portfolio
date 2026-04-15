import profilePic from "../assets/profile.jpg";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import wordpressIcon from "../assets/wordpress.png";
import mySQLIcon from "../assets/mysql.png";

function About() {
  return (
    <section id="about" className="py-15 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 p-2 items-center border-2 border-purple-400 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Foto de perfil"
            className="rounded-2xl w-48 h-52 md:w-64 md:h-110 object-cover"
          />
        </div>
        <div className="bg-slate-950 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-purple-400">Sobre Mim</h2>

          <p className="font-bold text-lg mb-2">
            Bruno Simon Ferreira | <span className="italic font-thin text-purple-400">Desenvolvedor Web, Apaixonado por Arte e Tecnologia</span>
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Com uma história e bagagem do mundo da arte e design gráfico desde 2016, me encontrei no desenvolvimento de sites, sistemas e soluções digitais desde 2025. Minha paixão por tecnologia e criatividade me levou a explorar o mundo do desenvolvimento web, onde posso combinar minhas habilidades artísticas com a lógica da programação para criar experiências digitais únicas e impactantes.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Sou Desenvolvedor Web focado em criar aplicações modernas,
            funcionais e de fácil manutenção. Trabalho com tecnologias atuais
            para entregar soluções eficientes e escaláveis.
          </p>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-semibold mb-4 text-purple-400">
              Tecnologias
            </h3>

            <ul className="space-y-2 text-gray-300">
              <p>Utilizo tecnologias como <strong>React</strong> e <strong>Tailwind CSS</strong> no frontend, <strong>Node.js</strong> e <strong>TypeScript</strong> no backend para criar aplicações modernas e eficientes, e uma integração segura com bancos de dados local ou em nuvem.</p>
              <div className="flex justify-center space-x-4 my-8">
                <img src={reactIcon} alt="React" className="w-8 h-8" />
                <img src={nodeIcon} alt="Node.js" className="w-8 h-8" />
                <img src={wordpressIcon} alt="WordPress" className="w-8 h-8" />
                <img src={mySQLIcon} alt="MySQL" className="w-8 h-8" />
              </div>
              <p>Também trabalho com ferramentas de gerenciamento de conteúdo rápido, como <strong>Wordpress</strong> para soluções <strong>custo-benefício</strong>.</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
