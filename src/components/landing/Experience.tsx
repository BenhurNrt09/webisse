"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
    const { t, locale } = useLanguage();

    return (
        <div className="mxd-section padding-grid-pre-pinned">
            <div className="mxd-container grid-container">
                {/* Block - Stack Universal Pinned Block with Section Title Start */}
                <div className="mxd-block">
                    <div className="mxd-pinned-universal">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                                    <div className="mxd-pinned-universal__static-inner no-margin">
                                        {/* Section Title Start */}
                                        <div className="mxd-section-title h2-only no-margin-desktop">
                                            <div className="container-fluid p-0">
                                                <div className="row g-0">
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__title card-split-title">
                                                            <h2 className="reveal-type">{t.services.title}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section Title Start */}
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                                    <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                                        <div className="mxd-res-list">
                                            {/* item */}
                                            <div className="mxd-res-list__item">
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                                <div className="mxd-res-list__content">
                                                    <div className="mxd-res-list__data">
                                                        <div className="mxd-res-list__title">
                                                            <h4 className="anim-uni-in-up">{t.services.strategy.title}</h4>
                                                            <p className="mxd-res-list__source anim-uni-in-up">
                                                                premium{" "}
                                                                <a href="#0" target="_blank">
                                                                    {locale === "tr" ? "hizmet" : "service"}
                                                                </a>{" "}
                                                                {locale === "tr" ? "alanı" : "field"}
                                                            </p>
                                                        </div>
                                                        <div className="mxd-res-list__descr">
                                                            <p className="anim-uni-in-up">
                                                                {t.services.strategy.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mxd-res-list__year">
                                                        <p className="anim-uni-in-up">01</p>
                                                    </div>
                                                </div>
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-res-list__item">
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                                <div className="mxd-res-list__content">
                                                    <div className="mxd-res-list__data">
                                                        <div className="mxd-res-list__title">
                                                            <h4 className="anim-uni-in-up">{t.services.design.title}</h4>
                                                            <p className="mxd-res-list__source anim-uni-in-up">
                                                                premium{" "}
                                                                <a href="#0" target="_blank">
                                                                    {locale === "tr" ? "hizmet" : "service"}
                                                                </a>{" "}
                                                                {locale === "tr" ? "alanı" : "field"}
                                                            </p>
                                                        </div>
                                                        <div className="mxd-res-list__descr">
                                                            <p className="anim-uni-in-up">
                                                                {t.services.design.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mxd-res-list__year">
                                                        <p className="anim-uni-in-up">02</p>
                                                    </div>
                                                </div>
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-res-list__item">
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                                <div className="mxd-res-list__content">
                                                    <div className="mxd-res-list__data">
                                                        <div className="mxd-res-list__title">
                                                            <h4 className="anim-uni-in-up">
                                                                {t.services.dev.title}
                                                            </h4>
                                                            <p className="mxd-res-list__source anim-uni-in-up">
                                                                premium{" "}
                                                                <a href="#0" target="_blank">
                                                                    {locale === "tr" ? "hizmet" : "service"}
                                                                </a>{" "}
                                                                {locale === "tr" ? "alanı" : "field"}
                                                            </p>
                                                        </div>
                                                        <div className="mxd-res-list__descr">
                                                            <p className="anim-uni-in-up">
                                                                {t.services.dev.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="mxd-res-list__year">
                                                        <p className="anim-uni-in-up">03</p>
                                                    </div>
                                                </div>
                                                <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Stack Universal Pinned Block with Section Title Start */}
            </div>
        </div>
    );
}
