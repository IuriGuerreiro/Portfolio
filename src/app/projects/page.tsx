'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage(){
    const { lang } = useLanguage();
    const projects = portfolioData[lang].projects;

    return (
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">
                {lang === 'en' ? 'All Projects' : 'Todos os Projetos'}
            </h1>

            <div className="grid gap-8">
                {Object.entries(projects).map(([id, project]) => (
                    <Link key={id} href={`/projects/${id}`} className="group block">
                        <div className="border border-neutral-800 bg-neutral-900/20 rounded-lg p-8 hover:border-neutral-600 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                                <h2 className="text-2xl font-bold group-hover:text-white transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral-400" size={20} />
                                </h2>
                                <span className="font-mono text-xs text-neutral-500 px-2 py-1 bg-neutral-900 rounded border border-neutral-800">
                                    {project.date}
                                </span>
                            </div>
                            
                            <p className="text-neutral-400 mb-6 font-light leading-relaxed max-w-3xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag, i) => (
                                    <span key={i} className="text-xs font-mono px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-500 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}