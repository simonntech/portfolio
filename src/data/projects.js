import lotoGenImg from "../../src/assets/lotoGen.jpg";
import taxasVisaImg from "../../src/assets/taxasVisa.png";
import jhoKenPowImg from "../../src/assets/jhokenpow.jpg";
import blogImg from "../../src/assets/blog.jpg";

const projects = [
  {
    name: "Taxas VISA - Andradina/SP",
    description:
      "Sistema de consulta de valores de taxas para Licenças Sanitárias do Setor de Vigilância Sanitária de Andradina/SP, com interface web para fácil acesso e atualização dos dados, além de uma função para copiar o texto já formatado para gerar a taxa no sistema de emissão de taxas da prefeitura.",
    imgPath: taxasVisaImg,
    link: "https://simonntech.github.io/taxasVisa/",
    github: "https://github.com/simonntech/taxasVisa",
    tech: "HTML, CSS, JavaScript e Bootstrap",
  },
  {
    name: "Blog de Tecnologia",
    description:
      "Blog de tecnologia com notícias sobre tecnologias atuais, inteligência artificial, relatos de projetos e estudos. Construído e gerenciado com Wordpress.",
    imgPath: blogImg,
    link: "https://simonntechnews.rf.gd/",
    github: "#",
    tech: "Wordpress",
  },
  {
    name: "Loto Gen - Gerador de Números para Loterias",
    description: "Aplicação web para gerar números aleatórios para loterias, com opções de personalização para diferentes tipos de jogos, como Mega-Sena, Quina e Lotofácil. ",
    imgPath: lotoGenImg,
    link: "https://simonntech.github.io/lotoGen/",
    github: "https://github.com/simonntech/lotoGen/",
    tech: "HTML, CSS, JavaScript",
  },
  {
    name: "Jho Ken Pow - Jogo de Pedra, Papel e Tesoura",
    description:
      "Jogo de Pedra, Papel e Tesoura com interface web interativa, onde os usuários podem jogar contra o computador, sempre com resultados aleatórios. ",
    imgPath: jhoKenPowImg,
    link: "https://simonntech.github.io/jhoKenPow/",
    github: "https://github.com/simonntech/jhoKenPow/",
    tech: "HTML, CSS, JavaScript",
  },
];

export default projects;
