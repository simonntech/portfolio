function Contact() {
  return (
    <section id="contact" className="py-10 px-4 bg-slate-900">
      <div className="max-w-xl mx-auto p-8 ">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Contato
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-800"
          />

          <textarea
            placeholder="Mensagem"
            rows="4"
            className="w-full p-3 rounded bg-slate-800"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-2xl"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}


export default Contact;