'use client';

import React, { createContext, useContext, useState, useEffect} from 'react';

type Language = 'pt' | 'en';

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  mounted: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children } : { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>('pt');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedLang = localStorage.getItem('language') as Language | null;
        if (storedLang) {
            setLangState(storedLang);
        }else {
            const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
            setLangState(browserLang);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        localStorage.setItem('language', lang);
    }, [lang]);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('language', newLang);
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}