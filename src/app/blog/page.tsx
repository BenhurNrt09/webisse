"use client";

import React from "react";
import Link from "next/link";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";

const categoryColors: Record<string, string> = {
    "Tasarım": "#000", "Design": "#000",
    "Teknoloji": "#000", "Technology": "#000", "Technologie": "#000",
    "E-ticaret": "#000", "E-commerce": "#000", "E-Commerce": "#000",
    "Branding": "#000",
    "Mobil": "#000", "Mobile": "#000",
    "SEO": "#000",
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
                                                    {/* Blog Header Image */}
                                                    <div style={{
                                                        height: 240,
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        background: "#f0f0f0"
                                                    }}>
                                                        <img
                                                            src={post.image || "/img/blog/placeholder.webp"}
                                                            alt={post.title}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover",
                                                                transition: "transform 0.5s ease"
                                                            }}
                                                            className="blog_card_img"
                                                        />
                                                        <div style={{
                                                            position: "absolute",
                                                            top: 16,
                                                            left: 16,
                                                            zIndex: 2
                                                        }}>
                                                            <span style={{
                                                                padding: "4px 12px",
                                                                background: categoryColors[post.category] || '#6366f1',
                                                                color: "#fff",
                                                                borderRadius: 20,
                                                                fontSize: 12,
                                                                fontWeight: 600,
                                                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                                            }}>
                                                                {post.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    {/* Content */}
                                                    <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
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
