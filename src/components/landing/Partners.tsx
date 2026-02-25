"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const customers = [
    "/img/costumers/12.png", "/img/costumers/almira.png", "/img/costumers/alpyco.png",
    "/img/costumers/app.png", "/img/costumers/astro.png", "/img/costumers/audcc.png",
    "/img/costumers/bbd.png", "/img/costumers/bmb.png", "/img/costumers/bozdag.png",
    "/img/costumers/caretta.png", "/img/costumers/damar.png", "/img/costumers/dh.png",
    "/img/costumers/epa.png", "/img/costumers/esnaf.png", "/img/costumers/hag.png",
    "/img/costumers/hak.png", "/img/costumers/ifade.png", "/img/costumers/ipek.png",
    "/img/costumers/korni.png", "/img/costumers/kumwals.png", "/img/costumers/ld.png",
    "/img/costumers/liya.png", "/img/costumers/lui.png", "/img/costumers/lumhar.png",
    "/img/costumers/mama.png", "/img/costumers/mmb.png", "/img/costumers/otel.png",
    "/img/costumers/parala.png", "/img/costumers/pcıfıc.png", "/img/costumers/ped.png",
    "/img/costumers/rota.png", "/img/costumers/smrn.png", "/img/costumers/td.png",
    "/img/costumers/trg.png", "/img/costumers/uranus.png", "/img/costumers/uvecd.png",
    "/img/costumers/witcho.png", "/img/costumers/yolcu.png"
];

export default function Partners() {
    const { t } = useLanguage();
    const title = (t as any).partners?.title || "Memnun Kalan Bazı Müşterilerimiz";

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
                    {[...customers, ...customers, ...customers, ...customers].map((src, index) => (
                        <div key={index} className="partners-track__item">
                            <div className="partner-logo" style={{
                                width: "160px",
                                height: "80px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "#fff",
                                borderRadius: "12px",
                                padding: "12px",
                                border: "1px solid var(--stroke)"
                            }}>
                                <img src={src} alt="Customer" style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain"
                                }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
