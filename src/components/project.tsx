'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
    title: string;
    date: string;
    description: string;
    points: string[];
    tags: string[];
}

interface ProjectsProps {
  project: Project;
}

export const Project: React.FC<ProjectsProps> = ({ project }) => {
    const { lang } = useLanguage();
    return (
        <div className="group relative">
            {/* Decorative hover line */}
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top hidden md:block"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
            <h4 className="text-3xl font-bold group-hover:text-neutral-400 transition-colors duration-300">
                {project.title}
            </h4>
            <span className="font-mono text-xs text-neutral-500 mt-2 md:mt-0 px-2 py-1 bg-neutral-900 rounded">
                {project.date}
            </span>
            </div>
            
            <p className="text-neutral-300 mb-6 text-lg font-light leading-relaxed max-w-3xl">
            {project.description}
            </p>

            <ul className="space-y-3 mb-8 text-neutral-400 text-sm leading-relaxed font-mono">
            {project.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                <span className="text-neutral-600 mt-1">▹</span>
                {point}
                </li>
            ))}
            </ul>

            <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors cursor-default">
                {tag}
                </span>
            ))}
            </div>
        </div>
    );
}