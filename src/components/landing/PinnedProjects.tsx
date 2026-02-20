"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PinnedProjects() {
    const { t } = useLanguage();

    return (
        <div id="references" className="mxd-section padding-hero-06 padding-default">
            <div className="mxd-container grid-container">
                {/* Block - Projects Pinned #01 with Section Title Start */}
                <div className="mxd-block">
                    <div className="mxd-pinned-projects">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                                    <div className="mxd-pinned-projects__static-inner no-margin">
                                        {/* Section Title Start */}
                                        <div className="mxd-section-title no-margin-desktop">
                                            <div className="container-fluid p-0">
                                                <div className="row g-0">
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__title">
                                                            <h2
                                                                className="reveal-type"
                                                                dangerouslySetInnerHTML={{ __html: t.pinnedProjects.title }}
                                                            ></h2>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__descr">
                                                            <p
                                                                className="anim-uni-in-up"
                                                                dangerouslySetInnerHTML={{ __html: t.pinnedProjects.description }}
                                                            ></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 mxd-grid-item no-margin">
                                                        <div className="mxd-section-title__controls anim-uni-in-up">
                                                            <a
                                                                className="btn btn-anim btn-default btn-outline slide-right-up"
                                                                href="#0"
                                                            >
                                                                <span className="btn-caption">
                                                                    {t.pinnedProjects.allReferences}
                                                                </span>
                                                                <i className="ph-bold ph-arrow-up-right"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Section Title End */}
                                    </div>
                                </div>
                                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                                    <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                                        {/* item */}
                                        <div className="mxd-project-item">
                                            <a
                                                className="mxd-project-item__media anim-uni-in-up"
                                                href="project-details.html"
                                            >
                                                <div className="mxd-project-item__preview preview-image-1 parallax-img-small"></div>
                                                <div className="mxd-project-item__tags">
                                                    <span className="tag tag-default tag-permanent">
                                                        UI/UX
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Web design
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Illustrations
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="mxd-project-item__promo">
                                                <div className="mxd-project-item__name">
                                                    <a
                                                        className="anim-uni-in-up"
                                                        href="project-details.html"
                                                        dangerouslySetInnerHTML={{ __html: t.pinnedProjects.transformation.title.replace('Kurumsal web', '<span>Kurumsal web</span>').replace('Corporate web', '<span>Corporate web</span>') }}
                                                    >
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="mxd-project-item">
                                            <a
                                                className="mxd-project-item__media anim-uni-in-up"
                                                href="project-details.html"
                                            >
                                                <div className="mxd-project-item__preview preview-image-2 parallax-img-small"></div>
                                                <div className="mxd-project-item__tags">
                                                    <span className="tag tag-default tag-permanent">
                                                        Sora
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        AI
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Editorial
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="mxd-project-item__promo">
                                                <div className="mxd-project-item__name">
                                                    <a
                                                        className="anim-uni-in-up"
                                                        href="project-details.html"
                                                        dangerouslySetInnerHTML={{ __html: t.pinnedProjects.ai.title.replace('AI destekli', '<span>AI destekli</span>').replace('AI powered', '<span>AI powered</span>') }}
                                                    >
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="mxd-project-item">
                                            <a className="mxd-project-item__media" href="project-details.html">
                                                <div className="mxd-project-item__preview preview-image-3 parallax-img-small"></div>
                                                <div className="mxd-project-item__tags">
                                                    <span className="tag tag-default tag-permanent">
                                                        UI/UX
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Design
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Android
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="mxd-project-item__promo">
                                                <div className="mxd-project-item__name">
                                                    <a href="project-details.html"
                                                        dangerouslySetInnerHTML={{ __html: t.pinnedProjects.b2b.title.replace('B2B', '<span>B2B</span>') }}
                                                    >
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="mxd-project-item">
                                            <a
                                                className="mxd-project-item__media anim-uni-in-up"
                                                href="project-details.html"
                                            >
                                                <div className="mxd-project-item__preview preview-image-4 parallax-img-small"></div>
                                                <div className="mxd-project-item__tags">
                                                    <span className="tag tag-default tag-permanent">
                                                        Brand identity
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Style guides
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="mxd-project-item__promo">
                                                <div className="mxd-project-item__name">
                                                    <a
                                                        className="anim-uni-in-up"
                                                        href="project-details.html"
                                                        dangerouslySetInnerHTML={{ __html: t.pinnedProjects.brand.title.replace('Marka', '<span>Marka</span>').replace('Brand', '<span>Brand</span>') }}
                                                    >
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* item */}
                                        <div className="mxd-project-item">
                                            <a
                                                className="mxd-project-item__media anim-uni-in-up"
                                                href="project-details.html"
                                            >
                                                <div className="mxd-project-item__preview preview-image-5 parallax-img-small"></div>
                                                <div className="mxd-project-item__tags">
                                                    <span className="tag tag-default tag-permanent">
                                                        Illustrations
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Design
                                                    </span>
                                                    <span className="tag tag-default tag-permanent">
                                                        Packaging
                                                    </span>
                                                </div>
                                            </a>
                                            <div className="mxd-project-item__promo">
                                                <div className="mxd-project-item__name">
                                                    <a
                                                        className="anim-uni-in-up"
                                                        href="project-details.html"
                                                        dangerouslySetInnerHTML={{ __html: t.pinnedProjects.ecommerce.title.replace('E-ticaret', '<span>E-ticaret</span>').replace('E-commerce', '<span>E-commerce</span>') }}
                                                    >
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
                {/* Block - Projects Pinned #01 with Section Title Start */}
            </div>
        </div>
    );
}
