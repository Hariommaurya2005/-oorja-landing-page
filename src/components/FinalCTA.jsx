import React from "react";
import finalCtaImage from "../assets/images/IMG-20260801-WA0007.jpg.jpeg";

const FinalCTA = ({ registrationLink }) => {
  return (
    <section
      className="final-cta-section"
      id="apply"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="final-cta-background">

        <div className="final-cta-orb final-cta-orb-one"></div>

        <div className="final-cta-orb final-cta-orb-two"></div>

        <div className="final-cta-ring final-cta-ring-one"></div>

        <div className="final-cta-ring final-cta-ring-two"></div>

        <div className="final-cta-grid"></div>

      </div>


      <div className="final-cta-container">

        {/* =================================
            IMAGE
        ================================= */}

        <div className="final-cta-image-wrapper">

          <img
            src={finalCtaImage}
            alt="OORJA artist journey"
            className="final-cta-image"
          />

          <div className="final-cta-image-overlay"></div>

          <div className="final-cta-image-frame"></div>


          <div className="final-cta-image-badge">

            <span>
              OORJA
            </span>

            <small>
              THE TALENT HUB
            </small>

          </div>

        </div>


        {/* =================================
            CONTENT
        ================================= */}

        <div className="final-cta-content">

          <div className="final-cta-label">

            <span className="final-cta-label-line"></span>

            <span>
              YOUR JOURNEY STARTS HERE
            </span>

            <span className="final-cta-label-line"></span>

          </div>


          <h2 className="final-cta-title">

            Ready To Start

            <span>
              Your Artist Journey?
            </span>

          </h2>


          <p className="final-cta-description">
            You already have the passion. Now give your talent
            the direction, confidence, mentorship, and stage
            experience it deserves.
          </p>


          {/* =================================
              CTA
          ================================= */}

          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-button"
          >

            <span>
              Apply For Selection
            </span>

            <span className="final-cta-button-arrow">
              →
            </span>

          </a>


          <p className="final-cta-note">
            Limited seats available for the next cohort.
          </p>

        </div>

      </div>


      {/* =================================
          BOTTOM MESSAGE
      ================================= */}

      <div className="final-cta-bottom">

        <span></span>

        <p>
          Your talent deserves the right stage.
        </p>

        <span></span>

      </div>

    </section>
  );
};

export default FinalCTA;