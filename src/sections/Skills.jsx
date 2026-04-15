function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "Git"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-400">
          Habilidades
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-800 px-4 py-2 rounded-2xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;