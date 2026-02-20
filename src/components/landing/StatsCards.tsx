"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsCards() {
    const { t } = useLanguage();

    useEffect(() => {
        // Attempt to initialize CountUp if available globally
        const initCountUp = () => {
            if (typeof window !== "undefined" && (window as any).countUp && (window as any).optionsPlus && (window as any).optionsPercent) {
                try {
                    const { CountUp } = (window as any).countUp;
                    const optionsPlus = (window as any).optionsPlus;
                    const optionsPercent = (window as any).optionsPercent;

                    const statsCounter1 = new CountUp("stats-counter-1", 40, optionsPlus);
                    const statsCounter2 = new CountUp("stats-counter-2", 80, optionsPercent);
                    const statsCounter3 = new CountUp("stats-counter-3", 3, optionsPlus);
                    const statsCounter4 = new CountUp("stats-counter-4", 50, optionsPlus);

                    if (!statsCounter1.error) statsCounter1.start();
                    if (!statsCounter2.error) statsCounter2.start();
                    if (!statsCounter3.error) statsCounter3.start();
                    if (!statsCounter4.error) statsCounter4.start();
                } catch (e) {
                    console.error("CountUp initialization failed", e);
                }
            }
        };

        // Small delay to ensure scripts are loaded if they are deferred
        const timer = setTimeout(initCountUp, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mxd-section overflow-hidden padding-pre-title">
            <div className="mxd-container grid-container">
                {/* Block - Statistics Cards Start */}
                <div className="mxd-block">
                    <div className="mxd-stats-cards">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                {/* item */}
                                <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                                    <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                                        <div className="mxd-counter align-end">
                                            <p
                                                id="stats-counter-1"
                                                className="mxd-counter__number mxd-stats-number opposite"
                                            >
                                                0
                                            </p>
                                            <p
                                                className="mxd-counter__descr t-140 t-bright opposite"
                                                dangerouslySetInnerHTML={{ __html: t.stats.trust }}
                                            ></p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a
                                                className="btn btn-anim btn-default btn-outline opposite slide-right-up"
                                                href="#0"
                                            >
                                                <span className="btn-caption">{t.stats.services}</span>
                                                <i className="ph-bold ph-arrow-up-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                                            <img
                                                src="img/illustrations/800x800_card-image-01.webp"
                                                alt="Illustration"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                                    <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                                        <div className="mxd-stats-cards__btngroup">
                                            <div className="mxd-avatars">
                                                <div className="mxd-avatars__item">
                                                    <img
                                                        src="img/avatars/300x300_ava-02.webp"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                                <div className="mxd-avatars__item bg-base-opp">
                                                    <svg
                                                        className="mxd-avatars__icon"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        x="0px"
                                                        y="0px"
                                                        width="60px"
                                                        height="60px"
                                                        viewBox="0 0 60 60"
                                                        style={{ enableBackground: "new 0 0 60 60" }}
                                                        xmlSpace="preserve"
                                                    >
                                                        <path
                                                            className="icon-star"
                                                            d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7
                                c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1
                                c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5
                                c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7
                                c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                                c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7
                                c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"
                                                            style={{ fill: "var(--additional)" }}
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="mxd-avatars__item">
                                                    <img
                                                        src="img/avatars/300x300_ava-01.webp"
                                                        alt="Avatar"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mxd-counter align-end">
                                            <p
                                                id="stats-counter-2"
                                                className="mxd-counter__number mxd-stats-number"
                                            >
                                                0
                                            </p>
                                            <p
                                                className="mxd-counter__descr t-140 t-bright"
                                                dangerouslySetInnerHTML={{ __html: t.stats.returnClients }}
                                            ></p>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                                            <img
                                                src="img/illustrations/800x800_card-image-02.webp"
                                                alt="Illustration"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                        <div className="mxd-counter">
                                            <p
                                                id="stats-counter-3"
                                                className="mxd-counter__number mxd-stats-number"
                                            >
                                                0
                                            </p>
                                            <p className="mxd-counter__descr t-140 t-bright">
                                                {t.stats.expertise}
                                            </p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a
                                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                                href="mailto:hello@webisse.com.tr"
                                            >
                                                <span className="btn-caption">{t.stats.startProject}</span>
                                                <i className="ph-bold ph-arrow-up-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                                            <img
                                                src="img/illustrations/800x800_card-image-03.webp"
                                                alt="Illustration"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                                    <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                        <div className="mxd-counter">
                                            <p
                                                id="stats-counter-4"
                                                className="mxd-counter__number mxd-stats-number"
                                            >
                                                0
                                            </p>
                                            <p
                                                className="mxd-counter__descr t-140 t-bright"
                                                dangerouslySetInnerHTML={{ __html: t.stats.completed }}
                                            ></p>
                                        </div>
                                        <div className="mxd-stats-cards__btngroup">
                                            <a
                                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                                href="#references"
                                            >
                                                <span className="btn-caption">{t.navigation.references}</span>
                                                <i className="ph-bold ph-arrow-up-right"></i>
                                            </a>
                                        </div>
                                        <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                                            <img
                                                src="img/illustrations/800x800_card-image-04.webp"
                                                alt="Illustration"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Statistics Cards End */}
            </div>
        </div>
    );
}
