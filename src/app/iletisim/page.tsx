"use client";

import React, { useState } from "react";
import Navigation from "@/components/landing/Navigation";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function IletisimPage() {
    const { t } = useLanguage();
    const p = (t as any).pages?.contact;
    if (!p) return null;

    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:hello@webisse.com.tr?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${p.name}: ${formData.name}\n${p.email}: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "16px 20px",
        border: "1px solid var(--stroke)",
        borderRadius: 12,
        fontSize: 16,
        fontFamily: "inherit",
        background: "#f8f8f8",
        outline: "none",
        transition: "border-color 0.3s ease",
    };

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

                {/* Contact Content */}
                <div className="mxd-section padding-default" style={{ background: "var(--base)", paddingBottom: 80 }}>
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0" style={{ gap: "40px 0" }}>
                                    {/* Form */}
                                    <div className="col-12 col-xl-7 mxd-grid-item">
                                        <div style={{
                                            padding: "48px",
                                            background: "#f8f8f8",
                                            borderRadius: 20
                                        }}>
                                            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }}>{p.formTitle}</h2>
                                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                                <div className="container-fluid px-0">
                                                    <div className="row gx-0" style={{ gap: "20px 0" }}>
                                                        <div className="col-12 col-md-6 mxd-grid-item">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder={p.name}
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                style={inputStyle}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-12 col-md-6 mxd-grid-item">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder={p.email}
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                style={inputStyle}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder={p.subject}
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    style={inputStyle}
                                                    required
                                                />
                                                <textarea
                                                    name="message"
                                                    placeholder={p.message}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={6}
                                                    style={{ ...inputStyle, resize: "vertical" }}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-anim btn-default btn-accent slide-down"
                                                    style={{
                                                        alignSelf: "flex-start",
                                                        padding: "16px 40px",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <span className="btn-caption">{p.send}</span>
                                                    <i className="ph-bold ph-paper-plane-tilt"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="col-12 col-xl-5 mxd-grid-item">
                                        <div style={{ display: "flex", flexDirection: "column", gap: 24, paddingLeft: 0 }}>
                                            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>{p.infoTitle}</h2>

                                            {/* Email */}
                                            <a href={`mailto:${p.emailValue}`} style={{
                                                textDecoration: "none", color: "inherit",
                                                padding: "24px", background: "#f8f8f8", borderRadius: 16,
                                                display: "flex", alignItems: "center", gap: 16,
                                                transition: "transform 0.3s ease"
                                            }}>
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: 12,
                                                    background: "#000", color: "#fff",
                                                    display: "flex", alignItems: "center", justifyContent: "center"
                                                }}>
                                                    <i className="ph-bold ph-envelope" style={{ fontSize: 22 }}></i>
                                                </div>
                                                <div>
                                                    <p className="t-muted" style={{ fontSize: 13, marginBottom: 4 }}>{p.emailLabel}</p>
                                                    <p style={{ fontWeight: 600 }}>{p.emailValue}</p>
                                                </div>
                                            </a>

                                            {/* Phone */}
                                            <a href={`tel:${p.phoneValue.replace(/\s/g, '')}`} style={{
                                                textDecoration: "none", color: "inherit",
                                                padding: "24px", background: "#f8f8f8", borderRadius: 16,
                                                display: "flex", alignItems: "center", gap: 16,
                                                transition: "transform 0.3s ease"
                                            }}>
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: 12,
                                                    background: "#000", color: "#fff",
                                                    display: "flex", alignItems: "center", justifyContent: "center"
                                                }}>
                                                    <i className="ph-bold ph-phone" style={{ fontSize: 22 }}></i>
                                                </div>
                                                <div>
                                                    <p className="t-muted" style={{ fontSize: 13, marginBottom: 4 }}>{p.phoneLabel}</p>
                                                    <p style={{ fontWeight: 600 }}>{p.phoneValue}</p>
                                                </div>
                                            </a>

                                            {/* Address */}
                                            <div style={{
                                                padding: "24px", background: "#f8f8f8", borderRadius: 16,
                                                display: "flex", alignItems: "center", gap: 16
                                            }}>
                                                <div style={{
                                                    width: 48, height: 48, borderRadius: 12,
                                                    background: "#000", color: "#fff",
                                                    display: "flex", alignItems: "center", justifyContent: "center"
                                                }}>
                                                    <i className="ph-bold ph-map-pin" style={{ fontSize: 22 }}></i>
                                                </div>
                                                <div>
                                                    <p className="t-muted" style={{ fontSize: 13, marginBottom: 4 }}>{p.addressLabel}</p>
                                                    <p style={{ fontWeight: 600 }}>{p.addressValue}</p>
                                                </div>
                                            </div>

                                            {/* Social */}
                                            <div style={{ marginTop: 16 }}>
                                                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>{p.socialTitle}</h3>
                                                <div style={{ display: "flex", gap: 12 }}>
                                                    <a href="https://www.linkedin.com/company/webisse" target="_blank" style={{
                                                        width: 48, height: 48, borderRadius: 12,
                                                        background: "#f8f8f8", color: "#000",
                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                        textDecoration: "none",
                                                        border: "1px solid var(--stroke)",
                                                        transition: "background 0.3s ease"
                                                    }}>
                                                        <i className="ph-bold ph-linkedin-logo" style={{ fontSize: 22 }}></i>
                                                    </a>
                                                    <a href="https://www.instagram.com/webisse" target="_blank" style={{
                                                        width: 48, height: 48, borderRadius: 12,
                                                        background: "#f8f8f8", color: "#000",
                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                        textDecoration: "none",
                                                        border: "1px solid var(--stroke)",
                                                        transition: "background 0.3s ease"
                                                    }}>
                                                        <i className="ph-bold ph-instagram-logo" style={{ fontSize: 22 }}></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
