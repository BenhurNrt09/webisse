"use client";

import React from "react";
import { useParams } from "next/navigation";
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
                    background: "var(--base)",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div className="mxd-container grid-container">
                        <div style={{
                            height: "clamp(300px, 40vh, 500px)",
                            borderRadius: 24,
                            overflow: "hidden",
                            position: "relative",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}>
                            <img
                                src={post.image || "/img/blog/placeholder.webp"}
                                alt={post.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                            <div style={{
                                position: "absolute",
                                bottom: 32,
                                left: 32,
                                zIndex: 2
                            }}>
                                <span style={{
                                    padding: "8px 24px",
                                    background: color,
                                    color: "#fff",
                                    borderRadius: 30,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                                }}>
                                    {post.category}
                                </span>
                            </div>
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
                                        <a href="https://www.instagram.com/webisseteknoloji?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style={{
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
                                        <a href="https://www.linkedin.com/company/webisse/" target="_blank" style={{
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
