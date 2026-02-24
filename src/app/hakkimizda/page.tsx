"use client";

import React from "react";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function HakkimizdaPage() {
    const { t } = useLanguage();
    const p = (t as any).pages?.about;
    if (!p) return null;

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

                {/* Mission & Vision */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "40px 0" }}>
                                    <div className="col-12 col-xl-6 mxd-grid-item">
                                        <div style={{ padding: "40px", background: "#f8f8f8", borderRadius: 16, height: "100%" }}>
                                            <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{p.missionTitle}</h3>
                                            <p className="t-medium" style={{ lineHeight: 1.8 }}>{p.missionDesc}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-6 mxd-grid-item">
                                        <div style={{ padding: "40px", background: "#f8f8f8", borderRadius: 16, height: "100%" }}>
                                            <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>{p.visionTitle}</h3>
                                            <p className="t-medium" style={{ lineHeight: 1.8 }}>{p.visionDesc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <h2 className="reveal-type" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 48 }}>
                                {p.valuesTitle}
                            </h2>
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "24px 0" }}>
                                    {p.values.map((v: any, i: number) => (
                                        <div key={i} className="col-12 col-md-6 col-xl-3 mxd-grid-item">
                                            <div style={{
                                                padding: "32px",
                                                border: "1px solid var(--stroke)",
                                                borderRadius: 16,
                                                height: "100%",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            }}>
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: "50%",
                                                    background: "#000", color: "#fff",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    fontSize: 20, fontWeight: 700, marginBottom: 20
                                                }}>
                                                    {String(i + 1).padStart(2, '0')}
                                                </div>
                                                <h4 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{v.title}</h4>
                                                <p className="t-muted" style={{ lineHeight: 1.7 }}>{v.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mxd-section padding-default" style={{ background: "#f4f4f4", paddingBottom: 80 }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <h2 className="reveal-type" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginBottom: 48 }}>
                                {p.timelineTitle}
                            </h2>
                            <div style={{ position: "relative" }}>
                                <div style={{
                                    position: "absolute", left: "50%", top: 0, bottom: 0,
                                    width: 2, background: "#ddd", transform: "translateX(-50%)"
                                }} />
                                {p.timeline.map((item: any, i: number) => (
                                    <div key={i} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                                        marginBottom: 48,
                                        position: "relative"
                                    }}>
                                        <div style={{
                                            width: "45%",
                                            padding: "32px",
                                            background: "#fff",
                                            borderRadius: 16,
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                                            order: i % 2 === 0 ? 0 : 1
                                        }}>
                                            <span style={{
                                                display: "inline-block", padding: "4px 16px",
                                                background: "#000", color: "#fff",
                                                borderRadius: 20, fontSize: 14, fontWeight: 600, marginBottom: 12
                                            }}>
                                                {item.year}
                                            </span>
                                            <h4 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                                            <p className="t-muted" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
