"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
    const { t } = useLanguage();

    return (
        <nav className="mxd-nav__wrap" data-lenis-prevent="">
            {/* Hamburger Start */}
            <div className="mxd-nav__contain loading__fade">
                <a href="#0" className="mxd-nav__hamburger">
                    {/* flip element */}
                    <div className="hamburger__base"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </a>
            </div>
            {/* Hamburger End */}

            {/* Main Navigation Start */}
            <div className="mxd-menu__wrapper">
                {/* background active layer */}
                <div className="mxd-menu__base"></div>
                {/* menu container */}
                <div className="mxd-menu__contain">
                    <div className="mxd-menu__inner">
                        {/* left side */}
                        <div className="mxd-menu__left">
                            <p
                                className="mxd-menu__caption menu-fade-in"
                                dangerouslySetInnerHTML={{ __html: t.navigation.slogan }}
                            ></p>
                            <div className="main-menu">
                                <nav className="main-menu__content">
                                    <ul id="main-menu" className="main-menu__accordion">
                                        <li className="main-menu__item">
                                            <a className="main-menu__link btn btn-anim" href="/">
                                                <span className="btn-caption">{t.navigation.home}</span>
                                            </a>
                                        </li>
                                        <li className="main-menu__item">
                                            <a className="main-menu__link btn btn-anim" href="#about">
                                                <span className="btn-caption">{t.navigation.about}</span>
                                            </a>
                                        </li>
                                        <li className="main-menu__item">
                                            <a className="main-menu__link btn btn-anim" href="#corporate">
                                                <span className="btn-caption">{t.navigation.corporate}</span>
                                            </a>
                                        </li>
                                        <li className="main-menu__item">
                                            <a className="main-menu__link btn btn-anim" href="#insights">
                                                <span className="btn-caption">{t.navigation.blog}</span>
                                            </a>
                                        </li>
                                        <li className="main-menu__item">
                                            <a className="main-menu__link btn btn-anim" href="#contact">
                                                <span className="btn-caption">{t.navigation.contact}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="mxd-menu__right">
                            <div className="menu-promo">
                                <div className="menu-promo__content">
                                    <p
                                        className="menu-promo__caption menu-fade-in"
                                        dangerouslySetInnerHTML={{
                                            __html: t.navigation.promoCaption,
                                        }}
                                    ></p>
                                    <div className="menu-promo__video">
                                        <video
                                            className="menu-video"
                                            id="inner-video"
                                            preload="auto"
                                            autoPlay
                                            loop
                                            muted
                                            poster="img/video/540x310_video-01.webp"
                                        >
                                            <source type="video/mp4" src="files/animation.mp4" />
                                            <source
                                                type="video/webm"
                                                src="img/video/540x310_video-01.webm"
                                            />
                                            <source
                                                type="video/ogv"
                                                src="img/video/540x310_video-01.ogv"
                                            />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* data bottom line */}
                        <div className="mxd-menu__data menu-fade-in">
                            <p className="t-xsmall">
                                Webisse
                                <i className="ph-fill ph-heart t-additional"></i>
                                {t.navigation.with}
                                <a
                                    className="no-effect"
                                    href="https://webisse.com.tr"
                                    target="_blank"
                                >
                                    {t.navigation.promoLink}
                                </a>
                            </p>
                            <p className="t-xsmall">
                                <i className="ph ph-copyright"></i>
                                2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Navigation End */}
        </nav>
    );
}
