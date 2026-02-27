"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCTA() {
    const { t } = useLanguage();

    return (
        <div id="contact" className="mxd-section overflow-hidden">
            <div className="mxd-container">
                {/* Block - CTA Start */}
                <div className="mxd-block">
                    <div className="mxd-promo">
                        <div className="mxd-promo__inner anim-zoom-out-container">
                            {/* background */}
                            <div className="mxd-promo__bg"></div>
                            {/* caption */}
                            <div className="mxd-promo__content">
                                <p className="mxd-promo__title anim-uni-in-up">
                                    <span className="mxd-promo__icon">
                                        <img src="img/icons/300x300_obj-cta-01.webp" alt="Icon" />
                                    </span>
                                    <span className="mxd-promo__caption reveal-type">
                                        {t.cta.caption}
                                    </span>
                                </p>
                                <div className="mxd-promo__controls anim-uni-in-up">
                                    <a
                                        className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                                        href="mailto:hello@webisse.com.tr"
                                    >
                                        <span className="btn-caption">{t.cta.btn}</span>
                                        <i className="ph-bold ph-arrow-up-right"></i>
                                    </a>
                                </div>
                            </div>
                            {/* parallax images */}
                            <div className="mxd-promo__images">
                                <img
                                    className="promo-image promo-image-1"
                                    src="img/3d-logo.png"
                                    alt="Webisse 3D Logo"
                                    style={{
                                        objectFit: "contain",
                                        transform: "translateY(-40px) scale(1.4)",
                                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
                                    }}
                                />
                                <img
                                    className="promo-image promo-image-2"
                                    src="img/illustrations/cta-img-02.webp"
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Block - CTA End */}
        </div>
    );
}
