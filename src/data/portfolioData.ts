import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  about: {
    name: "Mateus Lucas",
    title: "Desenvolvedor Web",
    description:
      "Sou desenvolvedor com experiência em construção de aplicações web modernas. Apaixonado por criar soluções elegantes e eficientes.",
    avatar: "src\\assets\\eu.png",
  },

  experience: [
    {
      company: "Infinix Tech Tecnologia",
      role: "Estagiário Web",
      type: "Estágio",
      period: "dez/2025 – fev/2026",
      location: "remoto",
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Node",
        "Git",
        "Kanban",
        "Scrum",
        "CI/CD",
      ],
      description:
        "Aplicação mobile para o cidadão com informações oficiais e serviços do Governo do RJ.",
      highlights: [
        " Sistema de autenticação projetado com JWT.",
        "Estruturação do código seguindo princípios de Clean Code, priorizando legibilidade, reutilização e manutenção",
        "Organização do projeto baseada em Clean Architecture, com separação entre UI, serviços e regras de negócio",
        "Utilização de CI/CD para build, validação e entrega contínua da aplicação",
        "State management no front-end feito com Context API e React Hooks",
      ],
    },
    {
      company: "Club Pró+",
      role: "Desenvolvedor Web",
      type: "Freela",
      period: "mai/2025 – dez/2025",
      location: "remoto",
      technologies: [
        "React",
        "JavaScript",
        "Node",
        "Express",
        "AWS",
        "Docker",
        "Material-UI",
        "Git",
      ],
      description:
        "Sistema web para automatizar simulações de seguros e planos e processos operacionais internos.",
      highlights: [
        "Uso de AWS S3 para cache e reutilização de PDFs, garantindo performance, escalabilidade e acesso simultâneo ao sistema",
        "Versionamento e organização do código utilizando Git, garantindo rastreabilidade e manutenção",
        "Containerização da aplicação com Docker, garantindo padronização de ambiente, facilidade de deploy e escalabilidade",
        "Sistema de autenticação projetado com JWT",
      ],
    },
    {
      company: "Pró-Vida Cirúrgica",
      role: "Auxiliar de Escritório",
      type: "CLT",
      period: "jul/2024 – mai/2025",
      location: "presencial",
      technologies: ["React", "JavaScript", "Bootstrap", "HTML", "CSS"],
      description:
        "Site institucional para fortalecimento da presença digital da empresa.",
      highlights: [
        "Deploy da aplicação com configuração de hospedagem e domínio",
        "Implementação de boas práticas de SEO, visando melhor desempenho em mecanismos de busca",
        "Versionamento do código com Git, garantindo continuidade e organização do desenvolvimento em múltiplos ambientes",
      ],
    },
  ],

  skills: [
    { name: "React", level: 8, category: "frontend" },
    { name: "TypeScript", level: 8, category: "frontend" },
    { name: "JavaScript", level: 9, category: "frontend" },
    { name: "HTML/CSS", level: 9, category: "frontend" },
    { name: "Next.js", level: 6, category: "frontend" },
    { name: "Tailwind CSS", level: 7, category: "frontend" },
    { name: "Node.js", level: 7, category: "backend" },
    { name: "Python", level: 6, category: "backend" },
    { name: "PostgreSQL", level: 6, category: "backend" },
    { name: "MongoDB", level: 5, category: "backend" },
    { name: "REST APIs", level: 7, category: "backend" },
    { name: "Git", level: 8, category: "tools" },
    { name: "Docker", level: 5, category: "tools" },
    { name: "Figma", level: 5, category: "tools" },
    { name: "Linux", level: 6, category: "other" },
    { name: "Inglês", level: 7, category: "other" },
  ],

  projects: [
    {
      title: "Club Pró+",
      description:
        "Sistema web para automatizar simulações de seguros e planos e processos operacionais internos.",
      technologies: [
        "React",
        "Node.js",
        "Material-UI",
        "MySQL",
        "AWS",
        "Docker",
      ],
      githubUrl: "https://github.com/GoDo-Devs/priceasy",
      image: "src/assets/club-pro.png",
    },
    {
      title: "App Natura",
      description:
        "Sistema para controle de estoque e vendas com dashboard interativo para acompanhamento de resultados.",
      technologies: ["React", "TypeScript", "Node.js", "MySQL", "NestJS"],
      liveUrl: "https://natura-app-front.vercel.app/",
      githubUrl: "https://github.com/mateuslucasjm/natura-app",
      image: "src/assets/app-natura.png",
    },
    {
      title: "Pró-Vida Cirúrgica",
      description:
        "Site institucional para fortalecimento da presença digital da empresa.",
      technologies: ["React", "JavaScript", "Bootstrap", "HTML", "CSS"],
      liveUrl: "https://pro-vida-cirurgica.vercel.app/",
      image: "src/assets/pro-vida.png",
    },
    {
      title: "Toughts",
      description:
        "Toughts é um sistema simples para criar, editar e excluir pensamentos, ideal para registrar ideias e praticar desenvolvimento.",
      technologies: ["React", "Express", "Node.js", "Firebase"],
      liveUrl: "https://toughts-blue.vercel.app/",
      githubUrl: "https://github.com/mateuslucasjm/toughts",
      image: "src/assets/toughts.png",
    },
    {
      title: "Pokédex",
      description:
        "Desafio Técnico feito em 4h para visualizar informações sobre pokémons, com funcionalidades de busca e detalhes.",
      technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
      githubUrl: "https://github.com/mateuslucasjm/product-showcase",
      liveUrl: "https://product-showcase-kappa-lake.vercel.app/",
      image: "src/assets/pokedex.png",
    },
    {
      title: "App Orçamento Pessoal",
      description:
        "Aplicação para gerenciar orçamentos pessoais, com funcionalidades de criação, edição e exclusão de itens.",
      technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
      githubUrl: "https://github.com/mateuslucasjm/app-orcamento-pessoal",
      liveUrl: "https://app-orcamento-pessoal-gamma.vercel.app/",
      image: "src/assets/orcamento-pessoal.png",
    },
  ],

  social: {
    github: "https://github.com/mateuslucasjm",
    linkedin: "https://www.linkedin.com/in/mateuslucasjm/",
    email: "mateuslucas2k4@gmail.com",
  },
};
