import projects from "../data/projects";

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">
          Portfólio de Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>

              <img src={project.imgPath} alt={project.name} className="w-full h-auto mb-3" />

              <p className="text-gray-300 mb-3">
                {project.description}
              </p>

              <span className="text-sm text-purple-400">
                {project.tech}
              </span>

              <div className="mt-4 flex gap-4">
                <a href={project.link} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
                <a href={project.github} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">
                  Código Fonte
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;