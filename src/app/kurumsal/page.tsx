"use client";

import React from "react";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function KurumsalPage() {
    const { t } = useLanguage();
    const p = (t as any).pages?.corporate;
    if (!p) return null;

    const techLogos = [
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ];

    const infoItems = [
        { label: p.founded, value: p.foundedValue },
        { label: p.team, value: p.teamValue },
        { label: p.clients, value: p.clientsValue },
        { label: p.location, value: p.locationValue },
    ];

    return (
        <>
            <Navigation />
            <Header />
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero */}
                <div className="mxd-section padding-hero-06 padding-default" style={{ background: "var(--base)", paddingTop: "160px" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div style={{ maxWidth: 700 }}>
                                <h1 className="reveal-type" style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
                                    {p.heroTitle}
                                </h1>
                                <p className="t-large t-medium anim-uni-in-up" style={{ maxWidth: 560, lineHeight: 1.7 }}>
                                    {p.heroDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Info */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <h2 className="reveal-type" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 48 }}>
                                {p.infoTitle}
                            </h2>
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "24px 0" }}>
                                    {infoItems.map((item, i) => (
                                        <div key={i} className="col-6 col-xl-3 mxd-grid-item">
                                            <div style={{
                                                padding: "32px",
                                                background: "#f8f8f8",
                                                borderRadius: 16,
                                                textAlign: "center",
                                                height: "100%"
                                            }}>
                                                <p className="t-muted" style={{ fontSize: 14, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</p>
                                                <p style={{ fontSize: 22, fontWeight: 700 }}>{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="mxd-section padding-default" style={{ background: "#f4f4f4" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <h2 className="reveal-type" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 48 }}>
                                {p.servicesTitle}
                            </h2>
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "24px 0" }}>
                                    {p.servicesList.map((s: any, i: number) => (
                                        <div key={i} className="col-12 col-md-6 col-xl-4 mxd-grid-item">
                                            <div style={{
                                                padding: "32px",
                                                background: "#fff",
                                                borderRadius: 16,
                                                height: "100%",
                                                border: "1px solid var(--stroke)",
                                                transition: "transform 0.3s ease"
                                            }}>
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: 12,
                                                    background: "#000", color: "#fff",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: 20, marginBottom: 20
                                                }}>
                                                    <i className="ph-bold ph-star"></i>
                                                </div>
                                                <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{s.title}</h4>
                                                <p className="t-muted" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
