"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <>
            <footer id="mxd-footer" className="mxd-footer">
                {/* Footer Block - Fullwidth Text Start */}
                <div className="mxd-footer__text-wrap">
                    <div className="fullwidth-text__tl-trigger"></div>
                    <div className="mxd-footer__fullwidth-text personal anim-top-to-bottom">
                        <h1 style={{ fontSize: "clamp(80px, 14vw, 240px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, margin: 0, whiteSpace: "nowrap" }}>
                            Webisse
                        </h1>
                    </div>
                </div>
                {/* Footer Block - Fullwidth Text End */}

                {/* Footer Block - Info Columns Start */}
                <div className="mxd-footer__footer-blocks">
                    {/* single column */}
                    <div className="footer-blocks__column animate-card-3">
                        {/* inner card */}
                        <div className="footer-blocks__card fullheight-card">
                            {/* footer navigation */}
                            <div className="footer-blocks__nav">
                                <ul className="footer-nav">
                                    <li className="footer-nav__item anim-uni-in-up">
                                        <a href="#0" className="footer-nav__link btn-anim">
                                            <span className="btn-caption">{t.footer.home}</span>
                                        </a>
                                    </li>
                                    <li className="footer-nav__item anim-uni-in-up">
                                        <a href="#about" className="footer-nav__link btn-anim">
                                            <span className="btn-caption">{t.footer.about}</span>
                                        </a>
                                    </li>
                                    <li className="footer-nav__item anim-uni-in-up">
                                        <a href="#0" className="footer-nav__link btn-anim">
                                            <span className="btn-caption">{t.footer.corporate}</span>
                                        </a>
                                    </li>
                                    <li className="footer-nav__item anim-uni-in-up">
                                        <a href="#0" className="footer-nav__link btn-anim">
                                            <span className="btn-caption">{t.footer.blog}</span>
                                        </a>
                                    </li>
                                    <li className="footer-nav__item anim-uni-in-up">
                                        <a
                                            href="mailto:hello@webisse.com.tr"
                                            className="footer-nav__link btn-anim"
                                        >
                                            <span className="btn-caption">{t.footer.contact}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* links */}
                            <div className="footer-blocks__links anim-uni-in-up">
                                <a
                                    className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                                    href="#0"
                                >
                                    <span className="btn-caption">{t.footer.privacy}</span>
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                                <a
                                    className="btn btn-line-xsmall btn-muted slide-right anim-no-delay"
                                    href="#0"
                                >
                                    <span className="btn-caption">{t.footer.terms}</span>
                                    <i className="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* single column */}
                    <div className="footer-blocks__column animate-card-3">
                        {/* inner card */}
                        <div className="footer-blocks__card">
                            <p className="mxd-point-subtitle anim-uni-in-up">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                                    ></path>
                                </svg>
                                <a href="mailto:hello@webisse.com.tr?subject=Webisse%20Site%20Mesajı">
                                    hello@webisse.com.tr
                                </a>
                            </p>
                        </div>
                        {/* inner card */}
                        <div className="footer-blocks__card">
                            <p className="mxd-point-subtitle anim-uni-in-up">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                                    ></path>
                                </svg>
                                <a href="tel:+905421059958">+90 542 105 99 58</a>
                            </p>
                        </div>
                        {/* inner card - Contact CTA */}
                        <div className="footer-blocks__card fill-card notify">
                            {/* card title */}
                            <div className="footer-blocks__title anim-uni-in-up">
                                <p className="footer-blocks__title-m">{t.footer.contactCtaDesc}</p>
                            </div>
                            {/* CTA button */}
                            <div className="anim-uni-in-up" style={{ marginTop: "20px" }}>
                                <a
                                    className="btn btn-anim btn-default btn-accent slide-down"
                                    href="mailto:hello@webisse.com.tr"
                                >
                                    <span className="btn-caption">{t.footer.contactCta}</span>
                                    <i className="ph-bold ph-arrow-down"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* single column */}
                    <div className="footer-blocks__column animate-card-3">
                        {/* inner card */}
                        <div className="footer-blocks__card fullheight-card">
                            {/* nav block */}
                            <div className="footer-blocks__block">
                                {/* card title */}
                                <div className="footer-blocks__title anim-uni-in-up">
                                    <p className="footer-blocks__title-l">{t.footer.socialMedia}</p>
                                </div>
                                {/* footer socials */}
                                <div className="footer-blocks__socials">
                                    <ul className="footer-socials">
                                        <li className="footer-socials__item anim-uni-in-up">
                                            <a
                                                href="https://www.linkedin.com/company/webisse"
                                                className="footer-socials__link"
                                                target="_blank"
                                            >
                                                LinkedIn
                                            </a>
                                        </li>
                                        <li className="footer-socials__item anim-uni-in-up">
                                            <a
                                                href="https://www.instagram.com/webisse"
                                                className="footer-socials__link"
                                                target="_blank"
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* links */}
                            <div className="footer-blocks__links anim-uni-in-up">
                                <p className="t-xsmall t-muted">
                                    <a
                                        className="no-effect"
                                        href="https://webisse.com.tr"
                                        target="_blank"
                                    >
                                        {t.footer.rights}
                                    </a>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Block - Info Columns End */}
            </footer>

            {/* To Top Button Start */}
            <a
                href="#0"
                id="to-top"
                className="btn btn-to-top slide-up anim-no-delay"
            >
                <i className="ph ph-arrow-up"></i>
            </a>
            {/* To Top Button End */}
        </>
    );
}
