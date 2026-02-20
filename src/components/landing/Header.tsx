"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const { t, locale, changeLanguage } = useLanguage();

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
                <button
                    className="btn btn-default btn-outline"
                    onClick={() => changeLanguage(locale === "tr" ? "en" : "tr")}
                    style={{
                        height: "4rem",
                        width: "4rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                        marginRight: "10px",
                        borderRadius: "50%",
                        border: "1px solid var(--stroke)",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        color: "var(--base)",
                        fontSize: "1.4rem",
                        fontWeight: 500,
                    }}
                    type="button"
                    aria-label="Change Language"
                >
                    {locale === "tr" ? "EN" : "TR"}
                </button>

                <button
                    id="color-switcher"
                    className="mxd-color-switcher"
                    type="button"
                    role="switch"
                    aria-label="light/dark mode"
                    aria-checked="true"
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
