'use client';

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, Smartphone, Link as LinkIcon, ArrowRight } from "lucide-react";

type Project = {
    title: string;
    featured?: boolean;
    date: string;
    description: string;
    bigDescription?: string;
    challenges?: string;
    solution?: string;
    points: string[];
    tags: string[];
    images?: string[];
    videos?: string[];
    links?: {
        web?: string;
        ios?: string;
        android?: string;
        other?: { name: string; url: string }[];
    };
}

interface ProjectsProps {
  project: Project;
  slug?: string;
}

export const Project: React.FC<ProjectsProps> = ({ project, slug }) => {
    const { lang } = useLanguage();
    const readMore = lang === 'en' ? 'Read More' : 'Ler Mais';
    
    return (
        <div className="group relative">
            {/* Stretched Link */}
            {slug && (
                <Link href={`/projects/${slug}`} className="absolute inset-0 z-0" />
            )}

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

            <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white transition-colors cursor-default">
                {tag}
                </span>
            ))}
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap items-center gap-4 mt-4 relative z-10" onClick={(e) => e.stopPropagation()}>
                {project.links && (
                    <>
                        {project.links.web && (
                            <a
                                href={project.links.web}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-10 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Globe size={16} />
                                <span>Website</span>
                            </a>
                        )}
                        {project.links.ios && (
                            <a
                                href={project.links.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-10 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Smartphone size={16} />
                                <span>iOS</span>
                            </a>
                        )}
                        {project.links.android && (
                            <a
                                href={project.links.android}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-10 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Smartphone size={16} />
                                <span>Android</span>
                            </a>
                        )}
                        {project.links.other?.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-10 relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <LinkIcon size={16} />
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </>
                )}

            </div>

            {slug && (
                 <div className="mt-6 relative z-10">
                    <Link
                        href={`/projects/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {readMore}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </div>
    );
}