'use client';

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Globe, Apple, Smartphone, Link as LinkIcon } from "lucide-react";
import { portfolioData } from "@/data/data";
import { notFound } from "next/navigation";

export default function ProjectsPage(){
    const router = useRouter();
    const params = useParams();
    const { lang } = useLanguage();
    const project = params.id as string;
    const projectData = portfolioData[lang].projects[project]; // Fetch or retrieve project data based on the 'project' variable
    const [selectedImage, setSelectedImage] = useState(0);

    const navback = lang === 'en' ? 'Back to Projects' : 'Voltar para Projetos';
    const overviewTitle = lang === 'en' ? 'Overview' : 'Visão Geral';
    const videosTitle = lang === 'en' ? 'Videos' : 'Vídeos';
    const galleryTitle = lang === 'en' ? 'Gallery' : 'Galeria';
    const achievementsTitle = lang === 'en' ? 'Key Achievements' : 'Principais Conquistas';
    const techStackTitle = lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico';

    if (!projectData) {
        notFound();
    }

    return (
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
            <div className="fade-in animate-in slide-in-from-bottom-4 duration-500">
                <button 
                    onClick={() => router.back()}
                    className="group flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-white mb-12 transition-colors"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    {navback}
                </button>

                {/* Title Header */}
                <div className="mb-12 border-b border-neutral-800 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                        {projectData.title}
                    </h1>
                    
                    {/* DYNAMIC LINK BUTTONS */}
                    <div className="flex gap-3 flex-wrap">
                        {projectData.links?.web && (
                        <a href={projectData.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                            <Globe size={14} /> Website
                        </a>
                        )}
                        {projectData.links?.ios && (
                        <a href={projectData.links.ios} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                            <Apple size={14} /> App Store
                        </a>
                        )}
                        {projectData.links?.android && (
                        <a href={projectData.links.android} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                            <Smartphone size={14} /> Play Store
                        </a>
                        )}
                        {projectData.links?.other?.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                                <LinkIcon size={14} /> {link.name}
                            </a>
                        ))}
                    </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 items-center text-sm font-mono text-neutral-400">
                    <span className="bg-neutral-900 px-3 py-1 rounded text-neutral-300">{projectData.date}</span>
                    <span className="hidden md:inline text-neutral-800">|</span>
                    <div className="flex flex-wrap gap-2">
                        {projectData.tags?.map((tag, i) => (
                            <span key={i} className="text-neutral-500">#{tag}</span>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Col: Description & Context */}
                    <div className="lg:col-span-2 space-y-12">
                    <div>
                        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">{overviewTitle}</h3>
                        <p className="text-xl text-neutral-300 font-light leading-relaxed">
                        {projectData.bigDescription}
                        </p>
                    </div>

                    {/* Videos Section */}
                    {projectData.videos && projectData.videos.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{videosTitle}</h3>
                            {projectData.videos.map((video, i) => (
                                <div key={i} className="aspect-video bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
                                    <video 
                                        controls 
                                        className="w-full h-full object-cover"
                                        poster={projectData.images?.[0]} // Optional: use first image as poster
                                    >
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Images Section */}
                    {projectData.images && projectData.images.length > 0 ? (
                        <div className="space-y-4">
                            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{galleryTitle}</h3>
                            
                            {/* Main Image Display */}
                            <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 relative aspect-video group">
                                <img 
                                    src={projectData.images[selectedImage]} 
                                    alt={`${projectData.title} screenshot ${selectedImage + 1}`} 
                                    className="w-full h-full object-contain"
                                />
                                
                                {/* Navigation Arrows (Optional, but good for UX) */}
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage((prev) => (prev === 0 ? projectData.images!.length - 1 : prev - 1));
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                >
                                    ←
                                </button>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage((prev) => (prev === projectData.images!.length - 1 ? 0 : prev + 1));
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                >
                                    →
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {projectData.images.map((img, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => setSelectedImage(i)}
                                        className={`relative flex-shrink-0 w-20 h-14 rounded overflow-hidden border transition-all duration-300 ${
                                            selectedImage === i 
                                            ? 'border-white opacity-100 ring-1 ring-white' 
                                            : 'border-neutral-800 opacity-50 hover:opacity-100 hover:border-neutral-600'
                                        }`}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Thumbnail ${i + 1}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        // Fallback if no images or videos
                        !projectData.videos && (
                            <div className="aspect-video bg-neutral-900/50 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-600 font-mono text-xs">
                                No Preview Available
                            </div>
                        )
                    )}
                    
                    <div>
                        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">{achievementsTitle}</h3>
                        <ul className="space-y-4 text-neutral-400 leading-relaxed">
                        {projectData.points?.map((point, i) => (
                            <li key={i} className="flex gap-4">
                            <span className="text-white mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-600 flex-shrink-0"></span>
                            <span>{point}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>

                    {/* Right Col: "Metadata" or Visual Placeholder */}
                    <div className="space-y-8">
                        <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/20">
                            <h3 className="text-sm font-mono text-white uppercase tracking-widest mb-4">{techStackTitle}</h3>
                            <div className="flex flex-wrap gap-2">
                                {projectData.tags?.map((tag, i) => (
                                <span key={i} className="text-xs font-mono px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400">
                                    {tag}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}