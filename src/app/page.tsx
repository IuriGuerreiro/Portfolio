'use client';

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/project";
import { portfolioData } from "@/data/data";
import { useLanguage } from "@/context/LanguageContext";
import React, { createContext, useContext, useState } from 'react';
import { Experiences } from "@/components/experiences";
import { useRouter } from "next/navigation";

import { Github, Mail, Linkedin, Globe, Server, Code, Terminal, Cpu, ArrowRight} from 'lucide-react';


export default function Home() {
  const { lang, setLang } = useLanguage();
  const content = portfolioData[lang];
  const router = useRouter();

  const goToProjects = () => {
    router.push('/projects');
  };

  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        
      {/* HERO SECTION */}
      <section className="mb-32 fade-in">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/30 text-xs font-mono text-neutral-400">
          {content.hero.status}
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          IURI GUERREIRO
        </h1>
        <h2 className="text-xl md:text-2xl text-neutral-400 font-mono mb-8 max-w-2xl border-l-2 border-white pl-6">
          {content.hero.role}
        </h2>
        <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed mb-10 font-light">
          {content.hero.bio}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={goToProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-sm font-bold rounded hover:bg-neutral-200 transition-all"
          >
            {content.hero.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 text-sm font-mono text-neutral-500 border-t border-neutral-900 pt-8">
          <span className="flex items-center gap-2 hover:text-white transition-colors ">
            <Globe size={16} />
            {content.hero.location}
          </span>
          <a href="mailto:iurifernandesguerreiro@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} /> iurifernandesguerreiro@gmail.com
            </a>
          <a href="https://github.com/IuriGuerreiro" className="hover:text-white transition-colors flex items-center gap-2">
            <Github size={16} /> github.com/IuriGuerreiro
          </a>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mb-32">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
            01. {content.sectionTitles.projects}
          </h3>
          <div className="h-[1px] w-full bg-neutral-900"></div>
        </div>
        
        <div className="grid gap-20">
          {Object.entries(content.projects)
            .filter(([_, project]) => project.featured)
            .map(([key, project]) => (
            <div key={key} className="block group">
              <Project project={project} slug={key} />
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={goToProjects}
            className="group flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white border border-neutral-800 bg-neutral-900/30 px-6 py-3 rounded hover:border-neutral-600 transition-all duration-300"
          >
            {lang === 'en' ? 'View All Projects' : 'Ver Todos os Projetos'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="mb-32">
           <div className="flex items-center gap-4 mb-16">
             <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
              02. {content.sectionTitles.experience}
            </h3>
            <div className="h-[1px] w-full bg-neutral-900"></div>
          </div>

          <div className="space-y-16">
            {content.experience.map((job, index) => (
              <Experiences key={index} job={job} />
            ))}
          </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
            03. {content.sectionTitles.stack}
          </h3>
          <div className="h-[1px] w-full bg-neutral-900"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-4">
                  <Code size={16} /> Languages
              </div>
              <div className="flex flex-col gap-2 font-mono text-sm text-neutral-400">
                  <span>Python 3.12+</span>
                  <span>TypeScript</span>
                  <span>JavaScript (ES6+)</span>
                  <span>PHP 8+</span>
                  <span>SQL</span>
                  <span>C</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-4">
                  <Terminal size={16} /> Backend
              </div>
              <div className="flex flex-col gap-2 font-mono text-sm text-neutral-400">
                  <span>Django / Channels</span>
                  <span>Laravel</span>
                  <span>Node.js</span>
                  <span>Supabase</span>
                  <span>WebSockets</span>
                  <span>SQL / NoSQL</span>
              </div>
          </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-4">
                  <Cpu size={16} /> AI / ML
              </div>
              <div className="flex flex-col gap-2 font-mono text-sm text-neutral-400">
                  <span>LangChain / LangGraph</span>
                  <span>Faster Whisper</span>
                  <span>Computer Vision</span>
                  <span>Local LLMs (Ollama)</span>
                  <span>MCP Servers</span>
              </div>
          </div>

          <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider mb-4">
                  <Server size={16} /> DevOps
              </div>
              <div className="flex flex-col gap-2 font-mono text-sm text-neutral-400">
                  <span>Docker</span>
                  <span>Google Cloud (GCP)</span>
                  <span>Git / GitHub Actions</span>
                  <span>Linux</span>
              </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="mb-32">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest whitespace-nowrap">
            04. {content.nav.contact}
          </h3>
          <div className="h-[1px] w-full bg-neutral-900"></div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
            {lang === 'en' ? "Let's build something together" : "Vamos construir algo juntos"}
          </h2>
          <p className="text-neutral-400 font-light mb-10 leading-relaxed">
            {lang === 'en' 
              ? "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!" 
              : "Estou atualmente à procura de novas oportunidades. Se tiver uma pergunta ou apenas quiser dizer olá, a minha caixa de entrada está sempre aberta!"}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:iurifernandesguerreiro@gmail.com" 
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-mono text-sm font-bold rounded hover:bg-neutral-200 transition-all"
            >
              <Mail size={18} /> {lang === 'en' ? 'Say Hello' : 'Dizer Olá'}
            </a>
            <a 
              href="https://www.linkedin.com/in/iuri-guerreiro-379a85273/" 
              target="_blank"
              className="flex items-center gap-2 px-8 py-4 border border-neutral-800 bg-neutral-900/30 text-white font-mono text-sm rounded hover:border-neutral-600 transition-all"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
