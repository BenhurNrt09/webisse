"use client";

import React from "react";
import Link from "next/link";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";

const categoryColors: Record<string, string> = {
    "Tasarım": "#6366f1", "Design": "#6366f1",
    "Teknoloji": "#0891b2", "Technology": "#0891b2", "Technologie": "#0891b2",
    "E-ticaret": "#059669", "E-commerce": "#059669", "E-Commerce": "#059669",
    "Branding": "#d97706",
    "Mobil": "#ec4899", "Mobile": "#ec4899",
    "SEO": "#8b5cf6",
};

const categoryIcons: Record<string, string> = {
    "Tasarım": "ph-bold ph-paint-brush", "Design": "ph-bold ph-paint-brush",
    "Teknoloji": "ph-bold ph-cpu", "Technology": "ph-bold ph-cpu", "Technologie": "ph-bold ph-cpu",
    "E-ticaret": "ph-bold ph-shopping-cart", "E-commerce": "ph-bold ph-shopping-cart", "E-Commerce": "ph-bold ph-shopping-cart",
    "Branding": "ph-bold ph-palette",
    "Mobil": "ph-bold ph-device-mobile", "Mobile": "ph-bold ph-device-mobile",
    "SEO": "ph-bold ph-chart-line-up",
};

export default function BlogPage() {
    const { t } = useLanguage();
    const p = (t as any).pages?.blog;
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

                {/* Blog Posts Grid */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)", paddingBottom: 80 }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "32px 0" }}>
                                    {p.posts.map((post: any, i: number) => (
                                        <div key={i} className="col-12 col-md-6 col-xl-4 mxd-grid-item">
                                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                                <div className="blog-card" style={{
                                                    borderRadius: 16,
                                                    overflow: "hidden",
                                                    border: "1px solid var(--stroke)",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    cursor: "pointer"
                                                }}>
                                                    {/* Category Header Image */}
                                                    <div style={{
                                                        height: 200,
                                                        background: `linear-gradient(135deg, ${categoryColors[post.category] || '#6366f1'}22, ${categoryColors[post.category] || '#6366f1'}44)`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        position: "relative",
                                                        overflow: "hidden"
                                                    }}>
                                                        <div style={{
                                                            position: "absolute",
                                                            width: 120, height: 120,
                                                            borderRadius: "50%",
                                                            background: `${categoryColors[post.category] || '#6366f1'}15`,
                                                            top: -20, right: -20,
                                                        }} />
                                                        <i className={categoryIcons[post.category] || "ph-bold ph-article"} style={{
                                                            fontSize: 64,
                                                            color: categoryColors[post.category] || '#6366f1',
                                                            opacity: 0.6,
                                                            position: "relative",
                                                            zIndex: 1
                                                        }}></i>
                                                    </div>
                                                    {/* Content */}
                                                    <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                                                            <span style={{
                                                                padding: "4px 12px",
                                                                background: categoryColors[post.category] || '#6366f1',
                                                                color: "#fff",
                                                                borderRadius: 20,
                                                                fontSize: 12,
                                                                fontWeight: 600
                                                            }}>
                                                                {post.category}
                                                            </span>
                                                            <span className="t-muted" style={{ fontSize: 13 }}>{post.date}</span>
                                                        </div>
                                                        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                                                            {post.title}
                                                        </h3>
                                                        <p className="t-muted" style={{ lineHeight: 1.6, flex: 1 }}>
                                                            {post.excerpt}
                                                        </p>
                                                        <div style={{ marginTop: 16 }}>
                                                            <span style={{
                                                                fontWeight: 600,
                                                                fontSize: 14,
                                                                color: "#000",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                gap: 6
                                                            }}>
                                                                {p.readMore} <i className="ph-bold ph-arrow-right" style={{ fontSize: 14 }}></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
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
