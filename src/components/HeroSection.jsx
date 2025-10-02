import React from "react";
import "../App.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="subtitle">
            You Are Invited To
            <br />
            The Wedding Of
          </div>
          <h1>Ali & Aya</h1>
          <div class="separator">
            <div class="line"></div>
            <div class="diamond-shape"></div>
            <div class="line"></div>
          </div>
          <div className="date-box">
            <div>On</div>
            <span>25 / 10 / 2025</span>
            <div>at 9:00 PM</div>
          </div>

          <div className="location">Le Palace Garden, Zagazig</div>

          <a
            className="map-link"
            href="https://maps.app.goo.gl/vb5yrvVEF6LUWGhMA"
            target="_blank"
            rel="noreferrer"
          >
            View Location on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
