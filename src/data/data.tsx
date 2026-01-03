export const portfolioData = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      role: "Full Stack Developer & AI Engineer",
      bio: "Bridging the gap between scalable web architecture and intelligent AI agents. Specializing in Python, React Native, and LLM orchestration.",
      location: "Lisbon, Portugal",
      status: "Open to Work",
      cta: "View Projects"
    },
    sectionTitles: {
      projects: "Selected Projects",
      experience: "Work Experience",
      stack: "Technical Stack",
    },
    projects: [
      {
        title: "AI Vtuber Orchestrator",
        date: "Oct 2025 - Present",
        tags: ["Python", "LangGraph", "WebSockets", "Vue.js", "Live2D"],
        description: "An autonomous virtual avatar system capable of real-time hearing, thinking, and speaking.",
        points: [
          "Engineered a bi-directional 'Speech-to-Text-to-Speech' loop with < 500ms latency.",
          "Built a Python processing unit using LangChain and LangGraph with MCP (Model Context Protocol) for Discord/Google integrations.",
          "Developed a reactive frontend using Vue.js and Live2D SDK for real-time lip-sync."
        ]
      },
      {
        title: "Designia Marketplace",
        date: "Aug 2025 - Present",
        tags: ["Django", "Docker", "React", "Stripe", "Microservices"],
        description: "Multi-vendor furniture platform built on a microservices architecture.",
        points: [
          "Containerized backend services using Docker to isolate auth, chat, and payment modules.",
          "Developed a real-time chat microservice using Django Channels (WebSockets).",
          "Integrated Stripe Connect to automate complex split payments between platform and sellers."
        ]
      },
      {
        title: "YummiAI",
        date: "Jun 2025 - Present",
        tags: ["React Native", "Django", "Computer Vision", "GCP"],
        description: "AI-powered nutritional analysis mobile application.",
        points: [
          "Created a computer vision pipeline to analyze food photos and extract caloric data.",
          "Migrated a legacy SQL food database to a modern schema optimized for LLM context.",
          "Deployed scalable backend services on Google Cloud Platform (GCP)."
        ]
      },
      {
        title: "ClothingAI",
        date: "Sep 2025 - Present",
        tags: ["Python", "React Native", "Supabase", "Generative AI"],
        description: "Generative fashion assistant for style analysis and outfit creation.",
        points: [
          "Developed dual pipelines for analyzing outfit aesthetics and generating new style recommendations.",
          "Built the mobile client in React Native with secure Supabase authentication.",
          "Integrated Mixpanel for event tracking and Superwall for dynamic paywall management."
        ]
      }
    ],
    experience: [
      {
        company: "BEWG.PT",
        role: "Full Stack Developer",
        date: "Jun 2025 – Jul 2025",
        location: "Lisbon",
        points: [
          "Built a device monitoring dashboard using Laravel, Django, and MySQL for 200+ devices.",
          "Reduced network downtime by 60% through the integration of real-time alerting APIs (SSH, Action1).",
          "Optimized database architecture to support concurrent monitoring, improving reliability.",
          "Upgraded physical network infrastructure (cabling/provisioning) to improve connectivity."
        ]
      },
      {
        company: "HRConsulta",
        role: "Full Stack Developer",
        date: "May 2025 – Jun 2025",
        location: "Remote / Malta",
        points: [
          "Developed two enterprise-grade web applications for the education sector using React.js and PHP.",
          "Implemented Role-Based Access Control (RBAC) to secure sensitive data for 500+ active users.",
          "Maintained strict version control and code integrity using Git."
        ]
      }
    ]
  },
  pt: {
    nav: {
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato"
    },
    hero: {
      role: "Desenvolvedor Full Stack & Engenheiro de IA",
      bio: "Focando na convergência entre arquitetura web escalável e agentes de IA inteligentes. Especialista em Python, React Native e orquestração de LLMs.",
      location: "Lisboa, Portugal",
      status: "Disponível para Trabalho",
      cta: "Ver Projetos"
    },
    sectionTitles: {
      projects: "Projetos Selecionados",
      experience: "Experiência Profissional",
      stack: "Stack Técnico",
    },
    projects: [
      {
        title: "AI Vtuber Orchestrator",
        date: "Out 2025 - Atual",
        tags: ["Python", "LangGraph", "WebSockets", "Vue.js", "Live2D"],
        description: "Sistema de avatar virtual autônomo capaz de ouvir, pensar e falar em tempo real.",
        points: [
          "Engenharia de um loop bidirecional 'Speech-to-Text-to-Speech' com baixa latência.",
          "Construção de unidade de processamento Python usando LangChain e LangGraph com MCP para integrações Discord/Google.",
          "Frontend reativo desenvolvido com Vue.js e Live2D SDK para sincronia labial em tempo real."
        ]
      },
      {
        title: "Designia Marketplace",
        date: "Ago 2025 - Atual",
        tags: ["Django", "Docker", "React", "Stripe", "Microservices"],
        description: "Plataforma multi-vendedor de mobiliário baseada em microsserviços.",
        points: [
          "Containerização de serviços backend usando Docker para isolar módulos de auth, chat e pagamentos.",
          "Desenvolvimento de microsserviço de chat em tempo real usando Django Channels (WebSockets).",
          "Integração com Stripe Connect para automatizar pagamentos divididos entre plataforma e vendedores."
        ]
      },
      {
        title: "YummiAI",
        date: "Jun 2025 - Atual",
        tags: ["React Native", "Django", "Computer Vision", "GCP"],
        description: "Aplicação móvel de análise nutricional impulsionada por IA.",
        points: [
          "Criação de pipeline de visão computacional para analisar fotos de comida e extrair dados calóricos.",
          "Migração de base de dados SQL legada para um esquema moderno otimizado para contexto de LLM.",
          "Deploy de serviços backend escaláveis na Google Cloud Platform (GCP)."
        ]
      },
      {
        title: "ClothingAI",
        date: "Set 2025 - Atual",
        tags: ["Python", "React Native", "Supabase", "Generative AI"],
        description: "Assistente de moda generativa para análise de estilo e criação de outfits.",
        points: [
          "Desenvolvimento de pipelines duplos para análise estética e geração de recomendações de estilo.",
          "Construção de cliente móvel em React Native com autenticação segura via Supabase.",
          "Integração de Mixpanel para rastreamento de eventos e Superwall para gestão de paywalls."
        ]
      }
    ],
    experience: [
      {
        company: "BEWG.PT",
        role: "Desenvolvedor Full Stack",
        date: "Jun 2025 – Jul 2025",
        location: "Lisboa",
        points: [
          "Construção de dashboard de monitoramento usando Laravel, Django e MySQL para 200+ dispositivos.",
          "Redução do tempo de inatividade da rede em 60% através da integração de APIs de alerta em tempo real (SSH, Action1).",
          "Otimização da arquitetura da base de dados para suportar monitoramento simultâneo e melhorar a confiabilidade.",
          "Atualização da infraestrutura de rede física (cabeamento/provisionamento) para melhorar a conectividade."
        ]
      },
      {
        company: "HRConsulta",
        role: "Desenvolvedor Full Stack",
        date: "Mai 2025 – Jun 2025",
        location: "Remoto / Malta",
        points: [
          "Desenvolvimento de duas aplicações web empresariais para o setor educacional usando React.js e PHP.",
          "Implementação de Controle de Acesso Baseado em Funções (RBAC) para proteger dados de 500+ usuários.",
          "Manutenção rigorosa de controle de versão e integridade de código usando Git."
        ]
      }
    ]
  }
};