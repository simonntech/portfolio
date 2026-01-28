function toggleMenu() {
    const nav = document.getElementById("nav_menu");
    nav.classList.toggle("show");
};

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav_menu').classList.remove('show');
    });
})

// === SISTEMA DE TRADUÇÃO ===
const translations = {
    pt: {
        // Navegação
        btn_lang: "English",
        nav_sobre: "Sobre",
        nav_tecnologias: "Tecnologias",
        nav_projetos: "Projetos",
        nav_contato: "Contato",
        nav_noticias: "Notícias Tech",

        // Sobre Mim (Com seu nome Bruno Simon)
        titulo_sobre: "SOBRE MIM",
        bio_intro: "Olá! Sou o <strong>Bruno Simon</strong>, um entusiasta da tecnologia trilhando o caminho do desenvolvimento WEB.",
        bio_background: "Minha jornada começou na arte, atuando como Designer Gráfico e Ilustrador. Hoje, trago essa bagagem visual para o <em>Front-end</em>, criando interfaces agregando valor.",
        bio_estudos: "Atualmente, sou aluno do curso de Engenharia de Software. Meu foco é me tornar um <em>Fullstack</em> completo, dominando o universo Javascript (React, Node.js) e bancos de dados.",
        bio_extra: "Também desenvolvo soluções ágeis utilizando WordPress para gerenciamento de conteúdo.",
        btn_github: "Confira meu Github",

        // Tecnologias
        titulo_tecnologias: "TECNOLOGIAS",
        tec_design: "Design Gráfico",

        // Projetos (Genéricos e Específicos)
        titulo_projetos: "PROJETOS",
        btn_acessar: "Acessar Projeto",
        btn_repo: "Repositório",
        btn_jogar: "Jogar Agora",

        // Descrições dos Projetos
        proj_figurinhas_titulo: "Figurinhas",
        proj_figurinhas_desc: "Gerador de figurinhas personalizadas para Whatsapp, com opção de salvar no dispositivo.",
        proj_figurinhas_foco: "Foco: Manipulação de DOM, CSS e bibliotecas externas.",

        proj_relogio_titulo: "Relógio Digital",
        proj_relogio_desc: "Relógio com interface dinâmica que muda a saudação e o fundo conforme o horário.",
        proj_relogio_foco: "Foco: Condicionais JS e estilização dinâmica.",

        proj_tempo_titulo: "Tempo Agora",
        proj_tempo_desc: "Consulte o clima em tempo real de qualquer cidade do mundo.",
        proj_tempo_foco: "Foco: Consumo de API (Fetch) e assincronismo.",
        
        proj_jokenpo_desc: "O clássico Pedra, Papel e Tesoura contra a máquina com resultados aleatórios.",
        proj_jokenpo_foco: "Foco: Lógica de jogo e interatividade.",

        proj_cats_desc: "Gerenciador de lista interativa (CRUD simples) com temática de gatos.",
        proj_cats_foco: "Foco: Manipulação de Arrays e eventos.",

        proj_dogs_desc: "Lista interativa para gerenciar nomes, similar ao myCATS.",
        proj_dogs_foco: "Foco: Reforço de lógica de manipulação de listas.",

        proj_loto_desc: "Gerador e gerenciador de números para loterias (Mega-Sena, Quina, etc) com salvamento local.",
        proj_loto_foco: "Foco: LocalStorage, funções modulares e lógica avançada.",

        proj_news_desc: "Portal de notícias tech. Um case de implementação rápida com Wordpress.",
        proj_news_foco: "Foco: Gerenciamento de CMS e temas customizados.",

        // Rodapé
        titulo_contato: "CONTATO",
        rodape: "Portfólio desenvolvido por BRUNO SIMON FERREIRA - 2026"
    },

    en: {
        // Navigation
        btn_lang: "Português-BR",
        nav_sobre: "About",
        nav_tecnologias: "Tech Stack",
        nav_projetos: "Projects",
        nav_contato: "Contact",
        nav_noticias: "Tech News",

        // About Me
        titulo_sobre: "ABOUT ME",
        bio_intro: "Hi! I'm <strong>Bruno Simon</strong>, a tech enthusiast walking the path of WEB development.",
        bio_background: "My journey started in arts as a Graphic Designer and Illustrator. Today, I bring this visual background to the <em>Front-end</em>, creating interfaces that add value.",
        bio_estudos: "I'm currently studying Software Engineering. My goal is to become a full <em>Fullstack Developer</em>, mastering the Javascript universe (React, Node.js) and databases.",
        bio_extra: "I also deliver agile solutions using WordPress for content management.",
        btn_github: "Check my Github",

        // Technologies
        titulo_tecnologias: "TECHNOLOGIES",
        tec_design: "Graphic Design",

        // Projects
        titulo_projetos: "PROJECTS",
        btn_acessar: "View Project",
        btn_repo: "Repository",
        btn_jogar: "Play Now",

        // Project Descriptions
        proj_figurinhas_titulo: "Stickers",
        proj_figurinhas_desc: "Custom WhatsApp sticker generator, with an option to save to the device.",
        proj_figurinhas_foco: "Focus: DOM manipulation, CSS, and external libraries.",

        proj_relogio_titulo: "Digital Clock",
        proj_relogio_desc: "A clock with a dynamic interface that changes the greeting and background based on time.",
        proj_relogio_foco: "Focus: JS conditionals and dynamic styling.",

        proj_tempo_titulo: "Current Weather",
        proj_tempo_desc: "Check real-time weather for any city in the world.",
        proj_tempo_foco: "Focus: API consumption (Fetch) and async logic.",
        
        proj_jokenpo_desc: "Classic Rock, Paper, Scissors against the machine with random results.",
        proj_jokenpo_foco: "Focus: Game logic and interactivity.",

        proj_cats_desc: "Interactive list manager (simple CRUD) with a cat theme.",
        proj_cats_foco: "Focus: Array manipulation and events.",

        proj_dogs_desc: "Interactive name manager list, similar to myCATS.",
        proj_dogs_foco: "Focus: Reinforcing list manipulation logic.",

        proj_loto_desc: "Lottery number generator and manager (Mega-Sena, etc.) with local save.",
        proj_loto_foco: "Focus: LocalStorage, modular functions, and advanced logic.",

        proj_news_desc: "Tech news portal. A case of fast implementation with WordPress.",
        proj_news_foco: "Focus: CMS management and custom themes.",

        // Footer
        titulo_contato: "CONTACT",
        rodape: "Portfolio developed by BRUNO SIMON FERREIRA - 2026"
    }
}

let currentLang = "pt";
const langToggleBtn = document.getElementById("langToggle");

langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    
    // Atualiza o texto do botão
    langToggleBtn.textContent = translations[currentLang].btn_lang;

    // Atualiza todos os textos com data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    })
});