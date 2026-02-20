"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dictionaries, Locale } from "@/lib/dictionaries";

type Messages = typeof dictionaries["tr"];

interface LanguageContextProps {
    locale: Locale;
    t: Messages;
    changeLanguage: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("tr");
    const [t, setT] = useState<Messages>(dictionaries["tr"]);

    useEffect(() => {
        // Check local storage for saved preference
        const saved = localStorage.getItem("webisse_lang") as Locale;
        if (saved && (saved === "tr" || saved === "en")) {
            setLocale(saved);
            setT(dictionaries[saved]);
        }
    }, []);

    const changeLanguage = (lang: Locale) => {
        setLocale(lang);
        setT(dictionaries[lang]);
        localStorage.setItem("webisse_lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ locale, t, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
