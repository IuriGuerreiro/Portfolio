'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const NavBar: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-neutral-900 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter hover:text-neutral-400 transition-colors cursor-pointer">
                IG.
            </div>
          
            <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-6 text-sm text-neutral-500 font-mono">
                    <a href="#projects" className="hover:text-white transition-colors">{lang === 'en' ? 'Projects' : 'Projetos'}</a>
                    <a href="#experience" className="hover:text-white transition-colors">{lang === 'en' ? 'Experience' : 'Experiência'}</a>
                </div>
                <button 
                onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
                className="text-xs font-mono border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 rounded hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                    {lang === 'en' ? 'EN / PT' : 'PT / EN'}
                </button>
            </div>
        </div>
    </nav>
  );
}