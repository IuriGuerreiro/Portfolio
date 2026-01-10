'use client';

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Globe, Apple, Smartphone, Link as LinkIcon } from "lucide-react";
import { portfolioData } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";

type ExperienceData = {
    id: string;
    company: string;
    role: string;
    date: string;
    location: string;
    bigDescription?: string;
    points: string[];
    tags?: string[];
    images?: string[];
    links?: {
        web?: string;
        ios?: string;
        android?: string;
        other?: { name: string; url: string }[];
    };
}

export default function ExperienceClient() {
    const router = useRouter();
    const params = useParams();
    const { lang } = useLanguage();
    const id = params.id as string;
    
    if (!id) return null;

    const experienceData = portfolioData[lang].experience.find((job: any) => job.id === id) as ExperienceData | undefined;
    const [selectedImage, setSelectedImage] = useState(0);

    const navback = lang === 'en' ? 'Back to Experience' : 'Voltar para Experiência';
    const overviewTitle = lang === 'en' ? 'Overview' : 'Visão Geral';
    const galleryTitle = lang === 'en' ? 'Gallery' : 'Galeria';
    const achievementsTitle = lang === 'en' ? 'Key Achievements' : 'Principais Conquistas';
    const techStackTitle = lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico';

    if (!experienceData) {
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
                        <div>
                             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2">
                                {experienceData.company}
                            </h1>
                            <h2 className="text-xl md:text-2xl text-neutral-400 font-mono">
                                {experienceData.role}
                            </h2>
                        </div>
                   
                    
                        {/* DYNAMIC LINK BUTTONS */}
                        <div className="flex gap-3 flex-wrap">
                            {experienceData.links?.web && (
                            <a href={experienceData.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                                <Globe size={14} /> Website
                            </a>
                            )}
                            {experienceData.links?.ios && (
                            <a href={experienceData.links.ios} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                                <Apple size={14} /> App Store
                            </a>
                            )}
                            {experienceData.links?.android && (
                            <a href={experienceData.links.android} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                                <Smartphone size={14} /> Play Store
                            </a>
                            )}
                            {experienceData.links?.other?.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono border border-neutral-800 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
                                    <LinkIcon size={14} /> {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 items-center text-sm font-mono text-neutral-400">
                        <span className="bg-neutral-900 px-3 py-1 rounded text-neutral-300">{experienceData.date}</span>
                        <span className="hidden md:inline text-neutral-800">|</span>
                        <span>{experienceData.location}</span>
                        {/* Tags */}
                        {experienceData.tags && (
                             <>
                                <span className="hidden md:inline text-neutral-800">|</span>
                                <div className="flex flex-wrap gap-2">
                                    {experienceData.tags.map((tag, i) => (
                                        <span key={i} className="text-neutral-500">#{tag}</span>
                                    ))}
                                </div>
                             </>
                        )}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Description & Points */}
                    <div className="lg:col-span-2 space-y-12">
                        {experienceData.bigDescription && (
                            <section>
                                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">{overviewTitle}</h3>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-neutral-300 leading-relaxed text-lg">
                                        {experienceData.bigDescription}
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Images Section */}
                        {experienceData.images && experienceData.images.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{galleryTitle}</h3>
                                
                                {/* Main Image Display */}
                                <div className="rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 relative aspect-video group">
                                    <img 
                                        src={experienceData.images[selectedImage]} 
                                        alt={`${experienceData.company} screenshot ${selectedImage + 1}`} 
                                        className="w-full h-full object-contain"
                                    />
                                    
                                    {/* Navigation Arrows */}
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage((prev) => (prev === 0 ? experienceData.images!.length - 1 : prev - 1));
                                        }}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                    >
                                        ←
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage((prev) => (prev === experienceData.images!.length - 1 ? 0 : prev + 1));
                                        }}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                    >
                                        →
                                    </button>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                    {experienceData.images.map((img, i) => (
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
                        )}

                        <section>
                            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">{achievementsTitle}</h3>
                            <ul className="space-y-4">
                                {experienceData.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-neutral-300 group">
                                        <span className="font-mono text-neutral-600 mt-1">0{i+1}.</span>
                                        <span className="leading-relaxed group-hover:text-white transition-colors">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Col: "Metadata" or Visual Placeholder */}
                    <div className="space-y-8">
                        <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/20">
                            <h3 className="text-sm font-mono text-white uppercase tracking-widest mb-4">{techStackTitle}</h3>
                            <div className="flex flex-wrap gap-2">
                                {experienceData.tags?.map((tag, i) => (
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
