"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div className="mxd-section">
            <div className="mxd-hero-06">
                <div className="mxd-hero-06__wrap loading-wrap">
                    <div className="mxd-hero-06__top">
                        <div className="mxd-hero-06__content">
                            <div className="mxd-hero-06__video">
                                <video
                                    className="video"
                                    preload="auto"
                                    autoPlay
                                    loop
                                    muted
                                    poster="img/video/1920x1080_video-03.webp"
                                >
                                    <source type="video/mp4" src="files/animation.mp4" />
                                    <source
                                        type="video/webm"
                                        src="img/video/1920x1080_video-03.webm"
                                    />
                                    <source
                                        type="video/ogv"
                                        src="img/video/1920x1080_video-03.ogv"
                                    />
                                </video>
                                <div className="hero-06-video__cover"></div>
                            </div>
                            <div className="mxd-hero-06__data">
                                <div className="mxd-hero-06__list">
                                    <div className="mxd-paragraph__lists">
                                        <div className="container-fluid p-0">
                                            <div className="row g-0">
                                                <div className="col-6 col-lg-4 col-xl-2 loading__item">
                                                    <ul>
                                                        <li>
                                                            <p className="t-small">{t.hero.strategy}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.premiumDesign}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.experience}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.performance}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.growth}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-6 col-lg-4 col-xl-2 loading__item">
                                                    <ul>
                                                        <li>
                                                            <p className="t-small">{t.hero.uiux}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.webDesign}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.webDev}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.brandIdentity}</p>
                                                        </li>
                                                        <li>
                                                            <p className="t-small">{t.hero.contentCreative}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mxd-hero-06__headline">
                                    <div className="hero-06-headline__descr">
                                        <p className="loading__item">
                                            {t.hero.headlineDescription}
                                        </p>
                                        <div className="hero-06-headline__btn loading__item">
                                            <a
                                                href="#0"
                                                className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
                                            >
                                                {/* SVG rotating text */}
                                                <svg
                                                    version="1.1"
                                                    id="scrollDown"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 160 160"
                                                    style={{
                                                        enableBackground: "new 0 0 160 160",
                                                    }}
                                                    xmlSpace="preserve"
                                                    className="btn-rotating__text animate-rotation"
                                                    data-value="360"
                                                >
                                                    <defs>
                                                        <path
                                                            id="textPath"
                                                            d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                                                        />
                                                    </defs>
                                                    <g>
                                                        <use xlinkHref="#textPath" fill="none"></use>
                                                        <text>
                                                            {/* button text here!!! */}
                                                            <textPath xlinkHref="#textPath">
                                                                {t.hero.getQuote}
                                                            </textPath>
                                                        </text>
                                                    </g>
                                                </svg>
                                                {/* image */}
                                                <img
                                                    className="btn-rotating__image"
                                                    src="img/icons/300x300_obj-btn-03.webp"
                                                    alt="Object"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="hero-06-headline__content">
                                        <h1 className="hero-06-headline__title">
                                            {t.hero.headlineTitle}
                                        </h1>
                                        <div className="mxd-hero-06__marquee loading__item">
                                            <div className="marquee marquee-right--gsap permanent-desktop">
                                                <div
                                                    className="marquee__toright"
                                                    style={{
                                                        translate: "none",
                                                        rotate: "none",
                                                        scale: "none",
                                                        transform: "translate3d(11.3417%, 0px, 0px)",
                                                    }}
                                                >
                                                    {/* single item */}
                                                    <div className="marquee__item one-line item-regular text">
                                                        <p className="marquee__text">{t.hero.marqueeAgency}</p>
                                                        <div className="marquee__image">
                                                            <svg
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 80 80"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                                    "
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {/* single item */}
                                                    <div className="marquee__item one-line item-regular text">
                                                        <p className="marquee__text">{t.hero.marqueeDev}</p>
                                                        <div className="marquee__image">
                                                            <svg
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 80 80"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                                    "
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {/* single item */}
                                                    <div className="marquee__item one-line item-regular text">
                                                        <p className="marquee__text">{t.hero.marqueeIllustrator}</p>
                                                        <div className="marquee__image">
                                                            <svg
                                                                version="1.1"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 80 80"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                                    c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                                    c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                                    C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                                    c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                                    s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                                    c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z
                                    "
                                                                ></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mxd-hero-06__bottom loading__fade">
                            <div className="mxd-hero-06__mark">
                                <div className="mxd-hero__mark">
                                    <span className="mark-icon"></span>
                                    <span className="mark-text">{t.hero.available}</span>
                                </div>
                            </div>
                            <div className="mxd-hero-06__more">
                                <a
                                    className="btn btn-line-medium btn-anim btn-anim-medium slide-down"
                                    href="#projects"
                                >
                                    <span className="btn-caption">{t.hero.scroll}</span>
                                    <i className="ph-bold ph-arrow-elbow-right-down"></i>
                                </a>
                            </div>
                        </div>
                        <div className="mxd-hero-06__btn-mobile">
                            <a
                                href="#0"
                                className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop"
                            >
                                {/* SVG rotating text */}
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 160 160"
                                    style={{ enableBackground: "new 0 0 160 160" }}
                                    xmlSpace="preserve"
                                    className="btn-rotating__text animate-rotation"
                                    data-value="360"
                                >
                                    <defs>
                                        <path
                                            id="textPath"
                                            d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                                        />
                                    </defs>
                                    <g>
                                        <use xlinkHref="#textPath" fill="none"></use>
                                        <text>
                                            {/* button text here!!! */}
                                            <textPath xlinkHref="#textPath">
                                                {t.hero.getQuote}
                                            </textPath>
                                        </text>
                                    </g>
                                </svg>
                                {/* image */}
                                <img
                                    className="btn-rotating__image"
                                    src="img/icons/300x300_obj-btn-03.webp"
                                    alt="Object"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
