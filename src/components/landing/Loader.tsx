"use client";

import React from "react";

export default function Loader() {
  return (
    <div id="loader" className="loader">
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
