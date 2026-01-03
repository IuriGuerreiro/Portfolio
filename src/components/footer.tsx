'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
    const { lang } = useLanguage();

    const RightsText = lang === 'en' ? 'All Rights Reserved.' : 'Todos os Direitos Reservados.';

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <footer className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm font-mono gap-4">
            <div>© {new Date().getFullYear()} Iuri Guerreiro. {RightsText}</div>
            <div className="flex gap-6">
                <a href="https://github.com/IuriGuerreiro" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="mailto:iurifernandesguerreiro@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
            </footer>
        </div>
    );
}