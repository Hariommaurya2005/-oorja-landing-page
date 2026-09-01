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
              Book My Session Now!
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