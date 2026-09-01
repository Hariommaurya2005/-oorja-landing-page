import React from "react";

const Footer = ({ registrationLink }) => {
  return (
    <footer className="footer-section">

      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="footer-background">

        <div className="footer-orb footer-orb-one"></div>

        <div className="footer-ring footer-ring-one"></div>

        <div className="footer-grid"></div>

      </div>


      <div className="footer-container">

        {/* =================================
            TOP FOOTER
        ================================= */}

        <div className="footer-top">

          {/* =================================
              BRAND
          ================================= */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >
              <span>
                OORJA
              </span>

              <small>
                THE TALENT HUB
              </small>
            </a>


            <p className="footer-brand-description">
              Empowering passionate singers to discover their
              voice, build confidence, and become professional
              performing artists.
            </p>


            {/* Social Links */}

            <div className="footer-socials">

              <a
                href="#instagram"
                className="footer-social"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="#youtube"
                className="footer-social"
                aria-label="YouTube"
              >
                YT
              </a>

              <a
                href="#facebook"
                className="footer-social"
                aria-label="Facebook"
              >
                FB
              </a>

            </div>

          </div>


          {/* =================================
              LINKS
          ================================= */}

          <div className="footer-links-column">

            <h3>
              Explore
            </h3>

            <a href="#about">
              About Program
            </a>

            <a href="#program-for-you">
              Is This For You?
            </a>

            <a href="#journey">
              90-Day Journey
            </a>

            <a href="#benefits">
              What You'll Get
            </a>

            <a href="#mentors">
              Mentors
            </a>

          </div>


          {/* =================================
              CONTACT
          ================================= */}

          <div className="footer-contact-column">

            <h3>
              Get In Touch
            </h3>

            <a href="mailto:hello@oorjatalenthub.com">
              hello@oorjatalenthub.com
            </a>

            <a href="tel:+919999999999">
              +91 99999 99999
            </a>

            <p>
              Mumbai, Maharashtra
              <br />
              India
            </p>

          </div>

        </div>


        {/* =================================
            FOOTER CTA
        ================================= */}

        <div className="footer-cta">

          <div className="footer-cta-content">

            <span>
              YOUR TALENT DESERVES THE RIGHT STAGE.
            </span>

            <h2>
              Keep

              <strong>
                Creating.
              </strong>

            </h2>

          </div>


          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-button"
          >
            <span>
              Start Your Journey
            </span>

            <span>
              →
            </span>
          </a>

        </div>


        {/* =================================
            FOOTER BOTTOM
        ================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} OORJA THE TALENT HUB.
            All rights reserved.
          </p>


          <div className="footer-legal">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;