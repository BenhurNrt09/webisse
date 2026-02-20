"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <div id="about" className="mxd-section padding-pre-grid">
            <div className="mxd-container grid-container">
                {/* Block - About Description with H2 Title and Paragraph Start */}
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row gx-0">
                            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                                <div className="mxd-block__name">
                                    <h2 className="reveal-type anim-uni-in-up">
                                        {t.about.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                <div className="mxd-block__content">
                                    <div className="mxd-block__paragraph">
                                        <p className="t-large t-bright anim-uni-in-up">
                                            {t.about.description}
                                        </p>
                                        <div className="mxd-paragraph__lists">
                                            <div className="container-fluid p-0">
                                                <div className="row g-0">
                                                    <div className="col-6 col-xl-5">
                                                        <ul>
                                                            {t.about.list1.map((item, index) => (
                                                                <li key={index}>
                                                                    <p className="anim-uni-in-up">{item}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="col-6 col-xl-5">
                                                        <ul>
                                                            {t.about.list2.map((item, index) => (
                                                                <li key={index}>
                                                                    <p className="anim-uni-in-up">{item}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mxd-paragraph__controls anim-uni-in-up">
                                            <div className="mxd-btngroup">
                                                <a
                                                    className="btn btn-anim btn-default btn-accent slide-down"
                                                    href="mailto:hello@webisse.com.tr"
                                                >
                                                    <span className="btn-caption">{t.about.getQuote}</span>
                                                    <i className="ph-bold ph-arrow-down"></i>
                                                </a>
                                                <a
                                                    className="btn btn-anim btn-default btn-outline slide-right-up"
                                                    href="https://webisse.com.tr"
                                                >
                                                    <span className="btn-caption">{t.about.aboutUs}</span>
                                                    <i className="ph-bold ph-arrow-up-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - About Description with H2 Title and Paragraph End */}
            </div>
        </div>
    );
}
