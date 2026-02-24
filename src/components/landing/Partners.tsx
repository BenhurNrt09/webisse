"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const partners = [
    { name: "Google", icon: "ph ph-google-logo" },
    { name: "Meta", icon: "ph ph-meta-logo" },
    { name: "Amazon", icon: "ph ph-amazon-logo" },
    { name: "Microsoft", icon: "ph ph-microsoft-logo" },
    { name: "Apple", icon: "ph ph-apple-logo" },
    { name: "Adobe", icon: "ph ph-adobe-logo" },
];

export default function Partners() {
    const { t } = useLanguage();
    const title = (t as any).partners?.title || "İş Ortaklarımız";

    return (
        <section className="mxd-section padding-pre-title overflow-hidden">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-block__name">
                        <h2 className="reveal-type anim-uni-in-up" style={{
                            fontSize: "clamp(48px, 6vw, 100px)",
                            fontWeight: 900,
                            lineHeight: 1,
                            marginBottom: "60px",
                            textTransform: "uppercase"
                        }}>
                            {title}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="partners-track-wrapper">
                <div className="partners-track">
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="partners-track__item">
                            <div className="partner-logo">
                                <i className={partner.icon} style={{ fontSize: "48px" }}></i>
                                <span style={{ fontSize: "24px", fontWeight: 600 }}>{partner.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
