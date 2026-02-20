"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function References() {
    const { t } = useLanguage();

    return (
        <div id="insights" className="mxd-section padding-blog">
            <div className="mxd-container grid-container">
                {/* Block - Section Title Start */}
                <div className="mxd-block">
                    <div className="mxd-section-title pre-grid">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <h2 className="reveal-type anim-uni-in-up">{t.references.title}</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrdescr">
                                        <p className="anim-uni-in-up">
                                            {t.references.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                                        <a
                                            className="btn btn-anim btn-default btn-outline slide-right-up"
                                            href="#0"
                                        >
                                            <span className="btn-caption">{t.references.all}</span>
                                            <i className="ph-bold ph-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Section Title End */}

                {/* Block - Blog Preview Cards Start */}
                <div className="mxd-block">
                    <div className="mxd-blog-preview">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                {/* item */}
                                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                                    <a className="mxd-blog-preview__media" href="blog-article.html">
                                        <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small">
                                            {/* <img class="parallax-img-small" src="img/blog/preview/1000x1250_prv-01.webp" alt="Blog Preview Image"> */}
                                        </div>
                                        <div className="mxd-preview-hover">
                                            <i className="mxd-preview-hover__icon">
                                                <img src="img/icons/icon-eye.svg" alt="Eye Icon" />
                                            </i>
                                        </div>
                                        <div className="mxd-blog-preview__tags">
                                            <span className="tag tag-default tag-permanent">
                                                Kurumsal
                                            </span>
                                            <span className="tag tag-default tag-permanent">
                                                Vaka
                                            </span>
                                        </div>
                                    </a>
                                    <div className="mxd-blog-preview__data">
                                        <a
                                            className="anim-uni-in-up"
                                            href="blog-article.html"
                                            dangerouslySetInnerHTML={{ __html: t.references.p1 }}
                                        >
                                        </a>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                                    <a className="mxd-blog-preview__media" href="blog-article.html">
                                        <div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small">
                                            {/* <img class="parallax-img-small" src="img/blog/preview/1000x1250_prv-02.webp" alt="Blog Preview Image"> */}
                                        </div>
                                        <div className="mxd-preview-hover">
                                            <i className="mxd-preview-hover__icon">
                                                <img src="img/icons/icon-eye.svg" alt="Eye Icon" />
                                            </i>
                                        </div>
                                        <div className="mxd-blog-preview__tags">
                                            <span className="tag tag-default tag-permanent">B2B</span>
                                            <span className="tag tag-default tag-permanent">
                                                Dijital
                                            </span>
                                        </div>
                                    </a>
                                    <div className="mxd-blog-preview__data">
                                        <a
                                            className="anim-uni-in-up"
                                            href="blog-article.html"
                                            dangerouslySetInnerHTML={{ __html: t.references.p2 }}
                                        >
                                        </a>
                                    </div>
                                </div>
                                {/* item */}
                                <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                                    <a className="mxd-blog-preview__media" href="blog-article.html">
                                        <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small">
                                            {/* <img class="parallax-img-small" src="img/blog/preview/1000x1250_prv-03.webp" alt="Blog Preview Image"> */}
                                        </div>
                                        <div className="mxd-preview-hover">
                                            <i className="mxd-preview-hover__icon">
                                                <img src="img/icons/icon-eye.svg" alt="Eye Icon" />
                                            </i>
                                        </div>
                                        <div className="mxd-blog-preview__tags">
                                            <span className="tag tag-default tag-permanent">
                                                E-ticaret
                                            </span>
                                            <span className="tag tag-default tag-permanent">
                                                Performans
                                            </span>
                                        </div>
                                    </a>
                                    <div className="mxd-blog-preview__data">
                                        <a
                                            className="anim-uni-in-up"
                                            href="blog-article.html"
                                            dangerouslySetInnerHTML={{ __html: t.references.p3 }}
                                        >
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Blog Preview Cards End */}
            </div>
        </div>
    );
}
