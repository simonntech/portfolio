function Portfolio() {
  const projects = [
    {
      name: "Sistema de Denúncias",
      description:
        "Sistema web para cadastro e acompanhamento de denúncias com banco de dados.",
      tech: "Node.js, Express, SQLite"
    },
    {
      name: "Lista de Compras",
      description:
        "Aplicação web para gerenciamento de itens com cadastro e exclusão.",
      tech: "Node.js, MySQL"
    },
    {
      name: "API com JWT",
      description:
        "API segura com autenticação utilizando JSON Web Token.",
      tech: "TypeScript, PostgreSQL"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900">
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

              <p className="text-gray-300 mb-3">
                {project.description}
              </p>

              <span className="text-sm text-purple-400">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;