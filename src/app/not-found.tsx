'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
    const { lang } = useLanguage();
    
    const content = {
        en: {
            title: "404",
            subtitle: "Page Not Found",
            description: "The page you're looking for doesn't exist or has been moved.",
            button: "Back to Home"
        },
        pt: {
            title: "404",
            subtitle: "Página Não Encontrada",
            description: "A página que procura não existe ou foi movida.",
            button: "Voltar ao Início"
        }
    };

    const text = content[lang];

    return (
        <main className="flex-grow flex items-center justify-center px-6 pt-16">
            <div className="max-w-2xl text-center">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <AlertCircle size={80} className="text-neutral-800" />
                        <div className="absolute inset-0 blur-xl bg-white/5"></div>
                    </div>
                </div>

                {/* 404 Title */}
                <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
                    {text.title}
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-mono text-neutral-400 mb-6">
                    {text.subtitle}
                </h2>
                
                {/* Description */}
                <p className="text-lg text-neutral-500 mb-12 font-light leading-relaxed">
                    {text.description}
                </p>

                {/* Back Button */}
                <Link href="/">
                    <button className="group inline-flex items-center gap-3 px-6 py-3 border border-neutral-800 bg-neutral-900/50 rounded hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-mono text-sm">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        {text.button}
                    </button>
                </Link>

                {/* Decorative Element */}
                <div className="mt-16 flex items-center justify-center gap-2 text-neutral-800 font-mono text-xs">
                    <div className="h-[1px] w-12 bg-neutral-800"></div>
                    <span>IG.</span>
                    <div className="h-[1px] w-12 bg-neutral-800"></div>
                </div>
            </div>
        </main>
    );
}