import webSitesImg from "../../src/assets/websites.svg";
import webServicesImg from "../../src/assets/webservices.svg";
import updatingImg from "../../src/assets/updating.svg";

const services = [
  {
    title: "Criação de Sites",
    description:
      "Sites institucionais modernos, rápidos e responsivos para empresas. Personalizados para destacar sua marca e atrair clientes.",
    price: "À partir de R$ 399,90.",
    imgPath: webSitesImg,
  },
  {
    title: "Sistemas Web",
    description:
      "Desenvolvimento de sistemas personalizados para gestão e automação.",
    price: "Orçamento sob consulta.",
    imgPath: webServicesImg,
  },
  {
    title: "Manutenção",
    description: "Atualizações, melhorias e suporte contínuo para seu sistema.",
    price: "Mensalidade à partir de R$99,90.",
    imgPath: updatingImg,
  },
];

export default services;
