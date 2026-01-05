import { Link } from "lucide-react";

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
      location: "Amora, Portugal",
      status: "Open to Work",
      cta: "View Projects"
    },
    sectionTitles: {
      projects: "Selected Projects",
      experience: "Work Experience",
      stack: "Technical Stack",
    },
    projects: {
        Designia : {
            title: "Designia",
            featured: true,
            date: "Aug 2025 - Jan 2026",
            links :{
                web : "",
                other: [
                    {
                        name: "Backend code",
                        url: "" },
                    { 
                        name: "Frontend code", 
                        url: ""
                    },
                ]
            },
            images: [
                "/projects/designia/1.png",
                "/projects/designia/2.png",
                "/projects/designia/3.png",
                "/projects/designia/4.png",
            ],
            tags: ["Python", "Django", "TypeScript", "React 19", "Docker", "AWS", "Stripe Connect", "WebSockets"],
            description: "Multi-vendor furniture platform built with Django and React.",
            bigDescription : "Designia is a comprehensive furniture marketplace platform designed to connect multiple vendors with customers through a seamless online shopping experience. The platform is built using Django for the backend and React 19 for the frontend, ensuring a robust and responsive user interface. Key features include secure user authentication, real-time chat functionality, and integrated payment processing via Stripe Connect.",
            points: [
              "Architected a scalable Marketplace backend using Domain-Driven Design (DDD)* to handle complex multi-party financial transactions.",
              "Created a Real-Time Event Bus* using Django Channels and Redis (WebSockets) for instant messaging and live notifications.",
              "Integrated Stripe Connect* to automate complex split payments, commission calculations, and sellerpayouts.",
              "Built a Next-Gen Frontend using React 19, Vite 7, and TailwindCSS 4*, prioritizing performance and developer experience.",
              "Deployed Production Observability with OpenTelemetry and Prometheus*, and containerized services viaDocker for consistent CI/CD workflows.",
            ],
        },
        YummiAI : {
            title: "YummiAI",
            featured: true,
            date: "Aug 2025 - Present",
            links :{
                web : "https://www.yummiapp.pt/",
                android: "https://play.google.com/store/apps/details?id=com.yummiai.app",
                ios: "https://apps.apple.com/us/app/yummiai-contador-de-calorias/id6748530095",
            },
            images: [
                "/projects/yummi/1.jpg",
                "/projects/yummi/2.jpg",
                "/projects/yummi/3.jpg",
                "/projects/yummi/4.jpg",
            ],
            tags: ["React Native", "Django", "Computer Vision", "GCP"],
            description: "AI-driven food recognition and calorie tracking mobile app.",
            bigDescription : "YummiAI is an innovative mobile application that leverages advanced AI technologies to provide users with accurate nutritional analysis and calorie tracking. The app utilizes computer vision to analyze food images, extracting detailed caloric and nutritional information. Built with a robust Django backend and a sleek React Native frontend, YummiAI offers a seamless user experience while ensuring scalability and performance through Google Cloud Platform (GCP) deployment.",
            points: [
                "Created an AI-driven Food Recognition System using Google Gemini Vision API to automate calorie tracking and nutritional analysis from user-uploaded images.",
                "Architected a robust Django REST Backend with custom caching layers for AI model responses to minimize latency and optimize API operational costs.",
                "Built a feature-rich Cross-Platform Mobile App using React Native (Expo) and NativeWind, delivering a fluid UI with Reanimated and integrated social authentication.",
                "Developed a high-performance Marketing Web Platform using React 19, Vite 7, and TailwindCSS, optimized for SEO and lightning-fast user acquisition.",
                "Implemented automated background workflows using APScheduler to manage scheduled system maintenance and personalized user notifications.",
                "Orchestrated critical background automations and system maintenance workflows using server-side Cron jobs to ensure data integrity and reliability.",
            ],
        },
        ClothingAI : {
            title: "ClothingAi",
            featured: true,
            date: "Aug 2025 - Present",
            tags: ["React Native", "Expo", "Typescript", "Supabase", "Edge Functions","Generative AI", "MixPanel", "SuperWall"],
            description: "AI-powered virtual try-on and outfit generation mobile app using Nano Banana.",
            bigDescription: "ClothingAI is a cutting-edge mobile application that leverages Google's Nano Banana multimodal model to provide virtual try-on and personalized outfit generation experience Built with React Native and Expo, it offers a seamless cross-platform experience. The app integrates Supabase for a robust backend, handling authentication, real-time database updates, and secure file storage. It features a sophisticated credit system and premium features managed via Superwall, with comprehensive user analytics powered by Mixpanel.",
            points: [
                "Implemented AI Virtual Try-On & Outfit Generation using Nano Banana multimodal model via Supabase Edge Functions, enabling users to visualize clothing on their own photos.",
                "Architected a serverless backend with Supabase, utilizing Edge Functions for secure API interactions, PostgreSQL for relational data, and Row Level Security (RLS) for data protection.",
                "Integrated Superwall for dynamic paywalls and subscription management, creating a monetization strategy with 'Feature Gates' for premium AI capabilities.",
                "Built a data-driven User Analytics System with Mixpanel, tracking granular user interactions, performance metrics, and conversion funnels to optimize UX.",
                "Developed a performant React Native/Expo frontend with TypeScript, featuring custom native modules integration, secure OAuth (Google/Apple), and responsive UI components."
            ]
        },
        SmoothAimPico : {
            title: "SmoothAim-Pico",
            featured: false,
            date: "Dec 2025 - Jan 2026",
            videos: [
                "/projects/pico/1.mp4",
            ],
            images: [
                "/projects/pico/2.jpg",
            ],
            tags: ["C", "Embedded Systems", "Raspberry Pi Pico", "USB HID", "PIO", "TinyUSB",],
            description: "Hardware-based USB mouse interceptor and automation tool running on Raspberry Pi Pico.",
            bigDescription: "A high-performance USB Man-in-the-Middle (MITM) device built on the RP2040 microcontroller. It sits physically between a USB mouse and a computer, intercepting HID reports in real-time to allow for input modification, macro injection, and programmable automation. The system leverages the RP2040's Programmable I/O (PIO) to implement a software-defined USB Host port whilea simultaneously acting as a standard USB Device to the PC, achieving sub-millisecond latency.",
            points: [
              "Implemented a Dual USB Stack architecture using `Pico-PIO-USB` for software-bitbanged USB Host and `TinyUSB` for hardware device emulation, enabling transparent signal passthrough.",
              "Engineered a custom Bytecode Scripting Engine in C capable of parsing and executing complex automation sequences (jitter, recoil control) with support for conditional logic and randomization.",
              "Developed an Adaptive Input Algorithm that intelligently yields control to physical mouse movements, preventing the 'fighting' sensation common in basic input injectors.",
              "Created a CDC Serial Command Interface for real-time configuration, allowing users to load scripts, toggle features, and debug HID reports instantly without flashing firmware.",
              "Built a robust Flash Storage System to persist user settings and scripts across power cycles, utilizing the RP2040's XIP flash memory safely alongside multicore execution."
            ],
        },
    },
    experience: [
      {
        company: "BEWG.PT",
        role: " Full Stack Developer Internship",
        date: "Jun 2025 – Jul 2025",
        location: "Lisbon",
        tags: ["python", "laravel", "mySQL", "linux", "git"],
        points: [
          "Built a device monitoring dashboard using Laravel, Django, and MySQL for 200+ devices.",
          "Reduced network downtime by 60% through the integration of real-time alerting APIs (SSH, Action1).",
          "Optimized database architecture to support concurrent monitoring, improving reliability.",
          "Upgraded physical network infrastructure (cabling/provisioning) to improve connectivity."
        ]
      },
      {
        company: "HRConsulta",
        role: "Eramus+ Internship for Full Stack Developer",
        date: "May 2025 – Jun 2025",
        location: "Malta",
        tags: ["php", "git", "MySQL"],
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
      location: "Amora, Portugal",
      status: "Disponível para Trabalho",
      cta: "Ver Projetos"
    },
    sectionTitles: {
      projects: "Projetos Selecionados",
      experience: "Experiência Profissional",
      stack: "Stack Técnico",
    },
    projects: {
        Designia : {
            title: "Designia Marketplace",
            featured: true,
            date: "Ago 2025 - Presente",
            links :{
                web : "",
                other: [
                    {
                        name: "Código Backend",
                        url: "" },
                    { 
                        name: "Código Frontend", 
                        url: ""
                    },
                ]
            },
            images: [
                "/projects/designia/1.png",
                "/projects/designia/2.png",
                "/projects/designia/3.png",
                "/projects/designia/4.png",
            ],
            tags: ["Python", "Django", "TypeScript", "React 19", "Docker", "AWS", "Stripe Connect", "WebSockets"],
            description: "Plataforma de mobiliário multi-vendedor construída com Django e React.",
            bigDescription : "Designia é uma plataforma abrangente de marketplace de mobiliário projetada para conectar múltiplos vendedores com clientes através de uma experiência de compra online perfeita. A plataforma é construída usando Django para o backend e React 19 para o frontend, garantindo uma interface de utilizador robusta e responsiva. As principais características incluem autenticação segura de utilizadores, funcionalidade de chat em tempo real e processamento de pagamentos integrado via Stripe Connect.",
            points: [
              "Arquitetei um backend de Marketplace escalável usando Domain-Driven Design (DDD)* para lidar com transações financeiras complexas entre múltiplas partes.",
              "Desenvolvi um Bus de Eventos em Tempo Real* usando Django Channels e Redis (WebSockets) para mensagens instantâneas e notificações ao vivo.",
              "Integrei Stripe Connect* para automatizar pagamentos divididos complexos, cálculos de comissão e pagamentos aos vendedores.",
              "Construí um Frontend de Próxima Geração usando React 19, Vite 7 e TailwindCSS 4*, priorizando desempenho e experiência do desenvolvedor.",
              "Implantei Observabilidade em Produção com OpenTelemetry e Prometheus*, e serviços containerizados via Docker para fluxos de trabalho CI/CD consistentes.",
            ],
        },
        YummiAI : {
            title: "YummiAI",
            featured: true,
            date: "Ago 2025 - Presente",
            links :{
                web : "https://www.yummiapp.pt/",
                android: "https://play.google.com/store/apps/details?id=com.yummiai.app",
                ios: "https://apps.apple.com/us/app/yummiai-contador-de-calorias/id6748530095",
            },
            images: [
                "/projects/yummi/1.jpg",
                "/projects/yummi/2.jpg",
                "/projects/yummi/3.jpg",
                "/projects/yummi/4.jpg",
            ],
            tags: ["React Native", "Django", "Visão Computacional", "GCP"],
            description: "Aplicação móvel de reconhecimento de alimentos e rastreamento de calorias impulsionada por IA.",
            bigDescription : "YummiAI é uma aplicação móvel inovadora que aproveita tecnologias avançadas de IA para fornecer aos utilizadores análises nutricionais precisas e rastreamento de calorias. O aplicativo utiliza visão computacional para analisar imagens de alimentos, extraindo informações calóricas e nutricionais detalhadas. Construído com um backend Django robusto e um frontend React Native elegante, o YummiAI oferece uma experiência de utilizador perfeita, garantindo escalabilidade e desempenho através da implantação na Google Cloud Platform (GCP).",
            points: [
                "Desenvolvi um Sistema de Reconhecimento de Alimentos impulsionado por IA usando a API Google Gemini Vision para automatizar o rastreamento de calorias e análise nutricional a partir de imagens enviadas pelos utilizadores.",
                "Arquitetei um Backend Django REST robusto para respostas de modelos de IA para minimizar a latência e otimizar os custos operacionais da API.",
                "Construí um Aplicativo Móvel Multiplataforma rico em recursos usando React Native (Expo) e NativeWind, entregando uma UI fluida com Reanimated e autenticação social integrada.",
                "Desenvolvi uma Plataforma Web de Marketing de alto desempenho usando React 19, Vite 7 e TailwindCSS, otimizada para SEO e aquisição de utilizadores ultrarrápida.",
                "Implementei fluxos de trabalho em segundo plano automatizados usando APScheduler para gerenciar manutenção agendada do sistema e notificações personalizadas aos utilizadores.",
                "Orquestrei automações críticas em segundo plano e fluxos de trabalho de manutenção do sistema usando Cron jobs no servidor para garantir a integridade e confiabilidade dos dados.",
            ],
        },
        ClothingAI : {
            title: "ClothingAi",
            featured: true,
            date: "Ago 2025 - Presente",
            tags: ["React Native", "Expo", "Typescript", "Supabase", "Edge Functions","IA Generativa", "MixPanel", "SuperWall"],
            description: "Aplicação móvel de provador virtual e geração de outfits impulsionada por IA usando Gemini 2.5Flash.",
            bigDescription: "ClothingAI é uma aplicação móvel de ponta que aproveita o modelo multimodal Nano Banana do Google para fornecer uma experiência de provador virtual e geração de outfits personalizados. Construído com React Native e Expo, oferece uma experiência multiplataforma perfeita. O aplicativo integra Supabase para um backend robusto, lidando com autenticação, atualizações de banco de dados em tempo real e armazenamento seguro de arquivos. Possui um sistema de crédito sofisticado e recursos premium gerenciados via Superwall, com análises de utilizador abrangentes impulsionadas pelo Mixpanel.",
            points: [
                "Implementei Provador Virtual com IA & Geração de Outfits usando o modelo multimodal Nano Banana via Supabase Edge Functions, permitindo que os utilizadores visualizem roupas em suas próprias fotos.",
                "Arquitetei um backend serverless com Supabase, utilizando Edge Functions para interações seguras com API, PostgreSQL para dados relacionais e Row Level Security (RLS) para proteção de dados.",
                "Integrei Superwall para paywalls dinâmicos e gerenciamento de assinaturas, criando uma estratégia de monetização com 'Feature Gates' para capacidades premium de IA.",
                "Construí um Sistema de Análise de utilizador orientado a dados com Mixpanel, rastreando interações granulares dos utilizadores, métricas de desempenho e funis de conversão para otimizar a UX.",
                "Desenvolvi um frontend React Native/Expo performático com TypeScript, apresentando integração de módulos nativos personalizados, OAuth seguro (Google/Apple) e componentes de UI responsivos."
            ]
        },
        SmoothAimPico : {
            title: "SmoothAim-Pico",
            featured: false,
            date: "Dez 2025 - Jan 2026",
            videos: [
                "/projects/pico/1.mp4",
            ],
            images: [
                "/projects/pico/2.jpg",
            ],
            tags: ["C", "Sistemas Embarcados", "Raspberry Pi Pico", "USB HID", "PIO", "TinyUSB",],
            description: "Interceptador de mouse USB baseado em hardware e ferramenta de automação rodando no Raspberry Pi Pico.",
            bigDescription: "Um dispositivo USB Man-in-the-Middle (MITM) de alto desempenho construído no microcontrolador RP2040. Ele fica fisicamente entre um mouse USB e um computador, interceptando relatórios HID em tempo real para permitir modificação de entrada, injeção de macros e automação programável. O sistema aproveita o I/O Programável (PIO) do RP2040 para implementar uma porta USB Host definida por software enquanto atua simultaneamente como um Dispositivo USB padrão para o PC, alcançando latência sub-milissegundo.",
            points: [
              "Implementei uma arquitetura de Pilha USB Dupla usando `Pico-PIO-USB` para USB Host bitbanged por software e `TinyUSB` para emulação de dispositivo de hardware, permitindo passagem de sinal transparente.",
              "Engenhei um Motor de Scripting Bytecode personalizado em C capaz de analisar e executar sequências de automação complexas (jitter, controle de recuo) com suporte para lógica condicional e aleatoriedade.",
              "Desenvolvi um Algoritmo de Entrada Adaptativo que cede inteligentemente o controle aos movimentos físicos do mouse, prevenindo a sensação de 'luta' comum em injetores de entrada básicos.",
              "Criei uma Interface de Comando Serial CDC para configuração em tempo real, permitindo que os utilizadores carreguem scripts, alternem recursos e depurem relatórios HID instantaneamente sem atualizar o firmware.",
              "Construí um Sistema de Armazenamento Flash robusto para persistir configurações e scripts do utilizador através de ciclos de energia, utilizando a memória flash XIP do RP2040 com segurança ao lado da execução multicore."
            ],
        },
    },
    experience: [
      {
        company: "BEWG.PT",
        role: "Estágio Desenvolvedor Full Stack",
        date: "Jun 2025 – Jul 2025",
        location: "Lisboa",
        tags: ["python", "laravel", "mySQL", "linux", "git"],
        points: [
          "Construção de dashboard de monitoramento usando Laravel, Django e MySQL para 200+ dispositivos.",
          "Redução do tempo de inatividade da rede em 60% através da integração de APIs de alerta em tempo real (SSH, Action1).",
          "Otimização da arquitetura da base de dados para suportar monitoramento simultâneo e melhorar a confiabilidade.",
          "Atualização da infraestrutura de rede física (cabeamento/provisionamento) para melhorar a conectividade."
        ]
      },
      {
        company: "HRConsulta",
        role: "Estágio Eramus+ de Desenvolvedor Full Stack",
        date: "Mai 2025 – Jun 2025",
        location: "Malta",
        tags: ["php", "git", "MySQL"],
        points: [
          "Desenvolvimento de duas aplicações web empresariais para o setor educacional usando React.js e PHP.",
          "Implementação de Controle de Acesso Baseado em Funções (RBAC).",
          "Manutenção rigorosa de controle de versão e integridade de código usando Git."
        ]
      },
      {
        company: "BEWG.PT",
        role: "Estágio Desenvolvedor Full Stack",
        date: "Jun 2024 – Jul 2024",
        location: "Lisboa",
        tags: ["laravel", "mySQL", "git"],
        points: [
          "",
          "",
          "",
        ]
      },
    ]
  }
};