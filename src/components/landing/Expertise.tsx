"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Expertise() {
    const { t } = useLanguage();

    return (
        <div className="mxd-section overflow-hidden padding-default">
            <div className="mxd-container grid-container">
                {/* Block - Section Title Start */}
                <div className="mxd-block">
                    <div className="mxd-section-title">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <h2 className="reveal-type">{t.expertise.title}</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                                    {/* <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">Design</p>
                    <p className="anim-uni-in-up">Development</p>
                    <p className="anim-uni-in-up">Mastership</p>
                  </div> */}
                                </div>
                                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                                        <a
                                            className="btn btn-anim btn-default btn-outline slide-right-up"
                                            href="services.html"
                                        >
                                            <span className="btn-caption">{t.expertise.allServices}</span>
                                            <i className="ph-bold ph-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Section Title End */}

                {/* Block - Our Capabilities List Start */}
                <div className="mxd-block">
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                                <div className="mxd-cpb-list">
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-04.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">
                                                {t.expertise.market}
                                            </h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 01</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-04.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-01.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">{t.expertise.content}</h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 02</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-01.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-02.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">{t.expertise.strategy}</h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 03</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-02.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-03.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">{t.expertise.uiux}</h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 04</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-03.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-05.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">{t.expertise.webDev}</h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 05</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-05.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                    {/* item */}
                                    <div className="mxd-cpb-list__item hover-reveal__item">
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                        <div className="hover-reveal__content hover-reveal-280x340">
                                            <img
                                                className="hover-reveal__image"
                                                src="img/illustrations/600x730_cpb-06.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__content anim-uni-in-up">
                                            <h6 className="mxd-cpb-list__title">{t.expertise.brand}</h6>
                                            <div className="mxd-cpb-list__num">
                                                <span>/ 06</span>
                                            </div>
                                        </div>
                                        <div className="mxd-cpb-list__image anim-uni-in-up">
                                            <img
                                                src="img/illustrations/1200x800_cpb-06.webp"
                                                alt="Project Preview"
                                            />
                                        </div>
                                        <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Our Capabilities List Start */}
            </div>
        </div>
    );
}
