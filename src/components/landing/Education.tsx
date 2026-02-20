"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
    const { t } = useLanguage();

    return (
        <>
            <div className="mxd-section padding-default">
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
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: t.education.title,
                                                                    }}
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
                                            <div className="mxd-res-list">
                                                {/* item */}
                                                <div className="mxd-res-list__item">
                                                    <div className="mxd-res-list__divider anim-uni-in-up"></div>
                                                    <div className="mxd-res-list__content">
                                                        <div className="mxd-res-list__data">
                                                            <div className="mxd-res-list__title">
                                                                <h4 className="anim-uni-in-up">
                                                                    {t.education.ny.title}
                                                                </h4>
                                                                <p className="mxd-res-list__source anim-uni-in-up">
                                                                    course by{" "}
                                                                    <a href="#0" target="_blank">
                                                                        {t.education.ny.source}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="mxd-res-list__descr">
                                                                <p className="anim-uni-in-up">
                                                                    {t.education.ny.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mxd-res-list__year">
                                                            <p className="anim-uni-in-up">2015 - 2016</p>
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
                                                                    {t.education.calarts.title}
                                                                </h4>
                                                                <p className="mxd-res-list__source anim-uni-in-up">
                                                                    course by{" "}
                                                                    <a href="#0" target="_blank">
                                                                        {t.education.calarts.source}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="mxd-res-list__descr">
                                                                <p className="anim-uni-in-up">
                                                                    {t.education.calarts.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mxd-res-list__year">
                                                            <p className="anim-uni-in-up">2019 - 2021</p>
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
                                                                    {t.education.coursera.title}
                                                                </h4>
                                                                <p className="mxd-res-list__source anim-uni-in-up">
                                                                    course by{" "}
                                                                    <a href="#0" target="_blank">
                                                                        {t.education.coursera.source}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div className="mxd-res-list__descr">
                                                                <p className="anim-uni-in-up">
                                                                    {t.education.coursera.desc}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mxd-res-list__year">
                                                            <p className="anim-uni-in-up">2022</p>
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
                </div>

                <div className="mxd-section padding-pre-title">
                    <div className="mxd-container">
                        <div className="mxd-divider">
                            <div className="mxd-divider__image divider-image-5 parallax-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
