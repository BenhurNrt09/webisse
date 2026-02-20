"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
    const { t } = useLanguage();

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
                                                            <h2
                                                                className="reveal-type"
                                                                dangerouslySetInnerHTML={{ __html: t.techStack.title }}
                                                            ></h2>
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
                                        <div className="mxd-tech-stack-cards grid-cards">
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-photoshop.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Photoshop</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-figma.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Figma</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-illustrator.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Illustrator</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-scketch.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Sketch</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-blender.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Blender</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-html.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">HTML5</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-css.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">CSS3</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="mxd-tech-stack-cards__item animate-card-4">
                                                <div className="mxd-tech-stack-cards__inner-v2">
                                                    <div className="mxd-tech-stack-cards__icon">
                                                        <img
                                                            src="img/tech/icon-notion.svg"
                                                            alt="Tech Stack Icon"
                                                        />
                                                    </div>
                                                    <div className="mxd-tech-stack-cards__title">
                                                        <p className="t-bright t-caption">Notion</p>
                                                    </div>
                                                </div>
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
