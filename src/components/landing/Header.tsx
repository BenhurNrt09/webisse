"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/dictionaries";

const flags: Record<Locale, string> = {
    tr: "https://flagcdn.com/tr.svg",
    en: "https://flagcdn.com/gb.svg",
    de: "https://flagcdn.com/de.svg",
};

export default function Header() {
    const { t, locale, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header id="header" className="mxd-header">
            {/* header logo */}
            <div className="mxd-header__logo loading__fade">
                <a href="/" className="mxd-logo">
                    {/* logo icon */}
                    <img
                        src="/img/wlogo.png"
                        alt="Webisse Logo"
                        className="mxd-logo__image"
                        style={{ height: "40px", width: "auto" }}
                    />
                    {/* logo text */}
                    <span
                        className="mxd-logo__text"
                        dangerouslySetInnerHTML={{ __html: t.header.logoText }}
                    ></span>
                </a>
            </div>
            {/* header controls */}
            <div className="mxd-header__controls loading__fade">
                {/* Language Dropdown */}
                <div ref={dropdownRef} style={{ position: "relative", marginRight: "10px" }}>
                    <button
                        onClick={() => setOpen(!open)}
                        style={{
                            height: "5.4rem",
                            width: "5.4rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 0,
                            borderRadius: "50%",
                            border: "1.5px solid var(--stroke, rgba(0,0,0,0.1))",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                        }}
                        type="button"
                        aria-label="Change Language"
                    >
                        <img
                            src={flags[locale]}
                            alt={locale}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: locale === "tr" ? "35% center" : "center",
                                borderRadius: "50%",
                                transform: open ? "scale(1.1)" : "scale(1)",
                                transition: "transform 0.3s ease"
                            }}
                        />
                    </button>
                    {open && (
                        <div
                            style={{
                                position: "absolute",
                                top: "calc(100% + 12px)",
                                right: 0,
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                padding: "10px",
                                borderRadius: "16px",
                                backgroundColor: "rgba(255, 255, 255, 0.8)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(0,0,0,0.05)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                                zIndex: 9999,
                                minWidth: "6rem",
                                animation: "fadeInUp 0.3s ease-out forwards",
                            }}
                        >
                            {(["tr", "en", "de"] as Locale[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => {
                                        changeLanguage(lang);
                                        setOpen(false);
                                    }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "4rem",
                                        height: "4rem",
                                        border: locale === lang ? "2px solid #000" : "1.5px solid transparent",
                                        borderRadius: "50%",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        padding: "2px",
                                        transition: "all 0.2s ease",
                                        overflow: "hidden",
                                    }}
                                    type="button"
                                    aria-label={lang.toUpperCase()}
                                >
                                    <img
                                        src={flags[lang]}
                                        alt={lang}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: lang === "tr" ? "35% center" : "center",
                                            borderRadius: "50%"
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <style jsx global>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>

                <button
                    id="color-switcher"
                    className="mxd-color-switcher"
                    type="button"
                    role="switch"
                    aria-label="light/dark mode"
                    aria-checked="true"
                    style={{ display: "none" }}
                ></button>
                <a
                    className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
                    href="mailto:hello@webisse.com.tr"
                >
                    <span className="btn-caption">{t.header.contactBtn}</span>
                    <i className="ph-bold ph-arrow-up-right"></i>
                </a>
            </div>
        </header>
    );
}
