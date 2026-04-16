import { useState } from "react";
import whatsappIcon from "../assets/whatsapp.png";
import emailIcon from "../assets/email.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const telefone = "5518996756464"; 

    const texto = `
Olá, meu nome é ${formData.nome}.

Email: ${formData.email}

Mensagem:
${formData.mensagem}
    `;

    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    window.open(url, "_blank");
  };

  const handleEmailClick = () => {
    const email = "contato.simon.tech@gmail.com";

    const assunto = "Contato pelo portfólio";

    const corpo = `
Nome: ${formData.nome}

Email: ${formData.email}

Mensagem:
${formData.mensagem}
    `;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="bg-slate-800 py-16 px-6"
    >
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-8">
          Contato
        </h2>

        <form
          onSubmit={handleWhatsAppSubmit}
          className="
            bg-slate-950
            p-8
            rounded-2xl
            shadow-lg
            space-y-4
          "
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded
              bg-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded
              bg-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
            "
          />

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows="4"
            value={formData.mensagem}
            onChange={handleChange}
            required
            className="
              w-full
              p-3
              rounded
              bg-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              resize-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-green-600
              hover:bg-green-700
              p-3
              rounded-2xl
              font-semibold
              transition
            "
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-5 h-5"
            />

            Enviar pelo WhatsApp
          </button>

          <button
            type="button"
            onClick={handleEmailClick}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-purple-600
              hover:bg-purple-700
              p-3
              rounded-2xl
              font-semibold
              transition
            "
          >
            
            <img
              src={emailIcon}
              alt="E-mail"
              className="w-5 h-5"
            />

            Entrar em contato por E-mail
          </button>
        </form>

      </div>
    </section>
  );
}