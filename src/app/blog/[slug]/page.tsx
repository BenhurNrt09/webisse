"use client";

import React from "react";
import { useParams } from "next/navigation";
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

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const { t } = useLanguage();
    const p = (t as any).pages?.blog;

    if (!p) return null;

    const post = p.posts.find((post: any) => post.slug === slug);

    if (!post) {
        return (
            <>
                <Navigation />
                <Header />
                <main id="mxd-page-content" className="mxd-page-content">
                    <div className="mxd-section padding-hero-06 padding-default" style={{ background: "var(--base)", paddingTop: "160px", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div className="mxd-container grid-container" style={{ textAlign: "center" }}>
                            <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 24 }}>404</h1>
                            <p className="t-muted" style={{ fontSize: 18, marginBottom: 32 }}>Blog yazısı bulunamadı.</p>
                            <Link href="/blog" className="btn btn-anim btn-default btn-accent slide-down" style={{ textDecoration: "none" }}>
                                <span className="btn-caption">{p.backToBlog || "Blog'a Dön"}</span>
                                <i className="ph-bold ph-arrow-left"></i>
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const color = categoryColors[post.category] || "#6366f1";
    const icon = categoryIcons[post.category] || "ph-bold ph-article";

    return (
        <>
            <Navigation />
            <Header />
            <main id="mxd-page-content" className="mxd-page-content">
                {/* Hero Image */}
                <div style={{
                    paddingTop: "120px",
                    background: `linear-gradient(135deg, ${color}15, ${color}35)`,
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{
                        height: 340,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    }}>
                        {/* Decorative circles */}
                        <div style={{
                            position: "absolute",
                            width: 300, height: 300,
                            borderRadius: "50%",
                            background: `${color}15`,
                            top: -60, right: "10%",
                        }} />
                        <div style={{
                            position: "absolute",
                            width: 200, height: 200,
                            borderRadius: "50%",
                            background: `${color}10`,
                            bottom: -40, left: "5%",
                        }} />
                        <div style={{
                            position: "relative",
                            zIndex: 1,
                            textAlign: "center"
                        }}>
                            <i className={icon} style={{
                                fontSize: 80,
                                color: color,
                                opacity: 0.7,
                                marginBottom: 16,
                                display: "block"
                            }}></i>
                            <span style={{
                                padding: "6px 20px",
                                background: color,
                                color: "#fff",
                                borderRadius: 24,
                                fontSize: 14,
                                fontWeight: 600
                            }}>
                                {post.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)" }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                                {/* Back link */}
                                <Link href="/blog" style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: "#666",
                                    textDecoration: "none",
                                    marginBottom: 32,
                                    transition: "color 0.3s"
                                }}>
                                    <i className="ph-bold ph-arrow-left" style={{ fontSize: 16 }}></i>
                                    {p.backToBlog || "Blog'a Dön"}
                                </Link>

                                {/* Date */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                    <i className="ph ph-calendar" style={{ fontSize: 18, color: "#999" }}></i>
                                    <span className="t-muted" style={{ fontSize: 14 }}>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: "clamp(28px, 5vw, 48px)",
                                    fontWeight: 800,
                                    lineHeight: 1.2,
                                    marginBottom: 24,
                                    color: "#000"
                                }}>
                                    {post.title}
                                </h1>

                                {/* Excerpt as lead */}
                                <p style={{
                                    fontSize: 20,
                                    lineHeight: 1.7,
                                    color: "#444",
                                    fontWeight: 500,
                                    marginBottom: 40,
                                    paddingBottom: 40,
                                    borderBottom: "1px solid var(--stroke)"
                                }}>
                                    {post.excerpt}
                                </p>

                                {/* Body paragraphs */}
                                {post.content?.map((paragraph: string, i: number) => (
                                    <p key={i} style={{
                                        fontSize: 17,
                                        lineHeight: 1.9,
                                        color: "#333",
                                        marginBottom: 28
                                    }}>
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Share / CTA */}
                                <div style={{
                                    marginTop: 48,
                                    paddingTop: 40,
                                    borderTop: "1px solid var(--stroke)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap",
                                    gap: 16
                                }}>
                                    <Link href="/blog" style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#000",
                                        textDecoration: "none"
                                    }}>
                                        <i className="ph-bold ph-arrow-left" style={{ fontSize: 16 }}></i>
                                        {p.backToBlog || "Blog'a Dön"}
                                    </Link>
                                    <div style={{ display: "flex", gap: 12 }}>
                                        <a href="#0" style={{
                                            width: 40, height: 40,
                                            borderRadius: "50%",
                                            border: "1px solid var(--stroke)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#666",
                                            textDecoration: "none",
                                            transition: "all 0.3s"
                                        }}>
                                            <i className="ph-bold ph-instagram-logo" style={{ fontSize: 18 }}></i>
                                        </a>
                                        <a href="#0" style={{
                                            width: 40, height: 40,
                                            borderRadius: "50%",
                                            border: "1px solid var(--stroke)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#666",
                                            textDecoration: "none",
                                            transition: "all 0.3s"
                                        }}>
                                            <i className="ph-bold ph-linkedin-logo" style={{ fontSize: 18 }}></i>
                                        </a>
                                    </div>
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
