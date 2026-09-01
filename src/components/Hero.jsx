import React from "react";
import heroImage from "../assets/images/IMG-20260801-WA0004.jpg.jpeg";

const Hero = ({ registrationLink }) => {
  return (
    <section
      className="hero-section"
      id="home"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="hero-background">
        <div className="hero-background-overlay"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>


        {/* Rotating Wheel 1 */}

        <div className="hero-wheel hero-wheel-one">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* Rotating Wheel 2 */}

        <div className="hero-wheel hero-wheel-two">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        {/* Floating Particles */}

        <div className="hero-particle particle-one"></div>
        <div className="hero-particle particle-two"></div>
        <div className="hero-particle particle-three"></div>
        <div className="hero-particle particle-four"></div>
      </div>


      {/* =================================
          HERO CONTENT
      ================================= */}

      <div className="hero-container">

        <div className="hero-content">

          {/* Eyebrow */}

          <div className="hero-eyebrow">

            <span className="hero-eyebrow-line"></span>

            <span className="hero-eyebrow-text">
              OORJA THE TALENT HUB
            </span>

            <span className="hero-eyebrow-line"></span>

          </div>


          {/* Heading */}

          <h1 className="hero-title">

            <span>
              Turn Your
            </span>

            <span className="hero-title-gold">
              Talent
            </span>

            <span>
              Into Your
            </span>

            <span className="hero-title-gold">
              Career.
            </span>

          </h1>


          {/* Description */}

          <p className="hero-description">
            A 90-day artist transformation program designed to
            help passionate singers become confident,
            professional performing artists.
          </p>


          {/* =================================
              BUTTONS
          ================================= */}

          <div className="hero-actions">

            {/* Apply Button */}

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary-button"
            >
              <span>
                Apply For Selection
              </span>

              <span className="hero-button-arrow">
                →
              </span>
            </a>


            {/* Explore Button */}

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary-button"
            >
              Explore The Program
            </a>

          </div>


          {/* =================================
              HIGHLIGHTS
          ================================= */}

          <div className="hero-highlights">

            <div className="hero-highlight">

              <span className="hero-highlight-number">
                90
              </span>

              <span className="hero-highlight-text">
                Days
              </span>

            </div>


            <div className="hero-highlight-divider"></div>


            <div className="hero-highlight">

              <span className="hero-highlight-number">
                1:1
              </span>

              <span className="hero-highlight-text">
                Mentorship
              </span>

            </div>


            <div className="hero-highlight-divider"></div>


            <div className="hero-highlight">

              <span className="hero-highlight-number">
                LIVE
              </span>

              <span className="hero-highlight-text">
                Performance
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <a
        href="#program"
        className="hero-scroll-indicator"
        aria-label="Scroll to explore program"
      >

        <span className="hero-scroll-text">
          Scroll To Explore
        </span>

        <span className="hero-scroll-icon">
          ↓
        </span>

      </a>

    </section>
  );
};

export default Hero;