"use client";

import React from "react";

export default function ServicesParallax() {
    return (
        <div id="services" className="mxd-section padding-grid-pre-pinned">
            <div className="mxd-container">
                <div className="mxd-divider">
                    <div className="mxd-divider__video">
                        <video
                            className="video parallax-video"
                            preload="auto"
                            autoPlay
                            loop
                            muted
                            poster="img/video/1920x1080_video-05.webp"
                        >
                            <source type="video/mp4" src="files/animation.mp4" />
                            <source type="video/webm" src="img/video/1920x1080_video-05.webm" />
                            <source type="video/ogv" src="img/video/1920x1080_video-05.ogv" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}
