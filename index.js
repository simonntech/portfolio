function toggleMenu() {
    const nav = document.getElementById("nav_menu");
    nav.classList.toggle("show");
};

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav_menu').classList.remove('show');
    });
})

// tradução interativa com botão

const translations = {
    pt: {
        eng: "English",
        sobre: "Sobre",
        tecnologias: "Tecnologias",
        projetos: "Projetos",
        contato: "Contato",
        noticias: "Notícias Tech",
        quem_sou: "QUEM SOU EU?",
        apresentacao: "Oi! Eu sou o Bruno, desenvolvedor WEB, estudante de Desenvolvimento de Sistemas na <a href='https://fundacaofat.org.br/' target='_blank'>Fundação FAT</a>, e Engenharia de Software na <a href='https://www.ampli.com.br/'>AMPLI</a>.",
        atuacao: "Atuei como Designer Gráfico Freelancer entre 2016 e 2021, e Ilustrador freelancer desde 2017 até 2022, e até então como hobbie. Com essa bagagem artística, meu foco no desenvolvimento é no <em>front-end</em>, trazendo conceitos do Design e da Arte, para deixar os sites e sistemas mais agradáveis.",
        backend: "Sigo com estudos dos conhecimentos de <em>back-end</em> e banco de dados para me tornar um <em>Desenvolver Fullstack</em> Javascript, através de bibliotecas e frameworks mais robustos, como <em>React JS, NODE JS</em> e etc...",
        wordpress: "Consigo também entregar soluções mais rápidas e completas através de sistemas alternativos como Wordpress para gerenciamento de conteúdos.",
        tecnologiasM: "TECNOLOGIAS",
        design: "Design Gráfico",
        projetosM: "PROJETOS",
        figurinhas: "Figurinhas",
        figdesc: "O usuário pode gerar uma figurinha para exportar e salvar no dispositivo e usar como figurinha de Whatsapp.",
        figfoco: "Foco do estudo: manipulação do DOM através do JS, CSS e importação de biblioteca JS para exportar o resultado.",
        link: "Link para acessar",
        github: "Repositório do Github",
        relogio_digital: "Relógio Digital",
        reldesc: "Um relógio digital simples, com fundo e mensagem de saudação interativos conforme o horário.",
        relfoco: "Foco do estudo: manipulação do DOM através do JS, CSS, e condicionais dentro do JS.",
        tempo: "Tempo Agora",
        temdesc: "Site para consultar o clima e tempo na cidade que o usuário digitar.",
        temfoco: "Foco do estudo: manipulação do DOM através do JS e CSS, e consumo de API de consulta de tempo na cidade consultada.",
        jokendesc: "Jogo interativo de pedra, papel e tesoura, onde o resultado sempre vai ser diferente, e o usuário pode ter chances reais de perdas e ganhos.",
        jokenfoco: "Foco do estudo: manipulação do DOM através do JS e CSS, com condicional como lógica no JS para gerar o sorteio de escolha que a máquina joga.",
        catsdesc: "Uma lista interativa estilo 'coisas à fazer', porém com nomes de gatos que podem ser excluídos e alterados.",
        catsfoco: "Foco do estudo: manipulação no DOM, e lógica de gerenciamento de listas através do JS.",
        dogsdesc: "Uma lista interativa estilo 'coisas à fazer', porém com nomes de cachorros que podem ser excluídos e alterados.",
        dogsfoco: "Foco do estudo: manipulação no DOM, e lógica de gerenciamento de listas através do JS.",
        lotodesc: "Sisteminha para criação e gerenciamento de números de jogos da Loteria mais famosos, como Mega-Sena, Quina e Lotomania. O usuário também pode salvar os jogos localmente no navegador.",
        lotofoco: "Foco do estudo: Javascript avançado, com modulação de funções, criação de listas e uso do método LocalStorage para armazenar conteúdo no próprio navegador do usuário, dispensando uso de API e banco de dados.",
        newsdesc: "Portal de notícias sobre tecnologia, com conteúdos periódicos. Case para gerenciamento de conteúdo rápido através de Wordpress.",
        newsfoco: "Foco do estudo: gerenciamento de conteúdo e temas de customização de Wordpress.",
        contatoM: "CONTATO",
        rodape: "Portfólio desenvolvido por BRUNO SIMON FERREIRA - 2025"
    },

    en: {
        eng: "Português-BR",
        sobre: "About",
        tecnologias: "Technologies",
        projetos: "Projects",
        contato: "Contact",
        noticias: "Tech News",
        quem_sou: "WHO AM I?",
        apresentacao: "Hi! I'm Bruno, a WEB developer, student of Systems Development at <a href='https://fundacaofat.org.br/' target='_blank'>Fundação FAT</a>, and Software Engineering at <a href='https://www.ampli.com.br/'>AMPLI</a>.",
        atuacao: "I worked as a Freelance Graphic Designer between 2016 and 2021, and as a freelance Illustrator from 2017 to 2022, and since then as a hobby. With this artistic background, my focus in development is on the <em>front-end</em>, bringing concepts from Design and Art to make websites and systems more pleasant.",
        backend: "I continue studying <em>back-end</em> and database knowledge to become a Javascript <em>Fullstack Developer</em>, using more robust libraries and frameworks such as <em>React JS, NODE JS</em>, etc.",
        wordpress: "I can also deliver faster and more complete solutions through alternative systems like WordPress for content management.",
        tecnologiasM: "TECHNOLOGIES",
        design: "Graphic Design",
        projetosM: "PROJECTS",
        figurinhas: "Stickers",
        figdesc: "The user can generate a sticker to export and save on the device to use as a WhatsApp sticker.",
        figfoco: "Study focus: DOM manipulation through JS, CSS, and importing a JS library to export the result.",
        link: "Access link",
        github: "GitHub repository",
        relogio_digital: "Digital Clock",
        reldesc: "A simple digital clock with an interactive background and greeting message based on the time of day.",
        relfoco: "Study focus: DOM manipulation through JS, CSS, and conditionals within JS.",
        tempo: "Current Weather",
        temdesc: "Website to check the weather in the city entered by the user.",
        temfoco: "Study focus: DOM manipulation through JS and CSS, and consumption of a weather API for the queried city.",
        jokendesc: "Interactive rock-paper-scissors game, where the result is always different, and the user has real chances of winning or losing.",
        jokenfoco: "Study focus: DOM manipulation through JS and CSS, with conditional logic in JS to generate the random choice played by the machine.",
        catsdesc: "An interactive 'to-do list' style list, but with cat names that can be deleted and edited.",
        catsfoco: "Study focus: DOM manipulation and list management logic through JS.",
        dogsdesc: "An interactive 'to-do list' style list, but with dog names that can be deleted and edited.",
        dogsfoco: "Study focus: DOM manipulation and list management logic through JS.",
        lotodesc: "A small system to create and manage lottery game numbers, such as Mega-Sena, Quina, and Lotomania. The user can also save the games locally in the browser.",
        lotofoco: "Study focus: Advanced JavaScript, with function modularization, list creation, and use of the LocalStorage method to store content in the user's own browser, eliminating the need for an API or database.",
        newsdesc: "News portal about technology, with periodic content. A case for fast content management through WordPress.",
        newsfoco: "Study focus: WordPress content management and theme customization.",
        contatoM: "CONTACT",
        rodape: "Portfolio developed by BRUNO SIMON FERREIRA - 2025"
    }
}

let currentLang = "pt";

document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[currentLang][key]
    })
})