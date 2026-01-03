'use client';

import Image from "next/image";
import { Project } from "@/components/project";
import { portfolioData } from "@/data/data";
import { useLanguage } from "@/context/LanguageContext";
import React, { createContext, useContext, useState } from 'react';

import { Globe, Mail, Github } from "lucide-react";

export default function Home() {
  const { lang, setLang } = useLanguage();
  const content = portfolioData[lang];


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
        
        <div className="flex flex-col sm:flex-row gap-6 text-sm font-mono text-neutral-500 border-t border-neutral-900 pt-8">
          <span className="flex items-center gap-2">
            <Globe size={16} />
            {content.hero.location}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={16} />
            iurifernandesguerreiro@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Github size={16} />
            github.com/IuriGuerreiro
          </span>
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
          {content.projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      
    </main>
  );
}
