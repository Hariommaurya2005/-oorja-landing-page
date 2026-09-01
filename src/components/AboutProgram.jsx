import React from "react";
import aboutImage from "../assets/images/20190427_180716.jpg.jpeg";

const AboutProgram = ({ registrationLink }) => {
  return (
    <section
      className="about-program-section light-section"
      id="about"
    >
      {/* =================================
          DECORATIVE BACKGROUND
      ================================= */}

      <div className="about-program-background">

        <div className="about-program-orb about-program-orb-one"></div>

        <div className="about-program-orb about-program-orb-two"></div>

        <div className="about-program-ring"></div>

      </div>


      <div className="about-program-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="about-program-label">

          <span className="about-program-label-line"></span>

          <span>
            ABOUT THE PROGRAM
          </span>

          <span className="about-program-label-line"></span>

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="about-program-content">

          {/* =================================
              IMAGE SIDE
          ================================= */}

          <div className="about-program-image-column">

            <div className="about-program-image-wrapper">

              <img
                src={aboutImage}
                alt="OORJA talent and performance"
                className="about-program-image"
              />

              <div className="about-program-image-overlay"></div>


              {/* Floating Image Card */}

              <div className="about-program-image-card">

                <span className="about-program-card-number">
                  90
                </span>

                <span className="about-program-card-label">
                  DAYS
                </span>

              </div>

            </div>

          </div>


          {/* =================================
              TEXT SIDE
          ================================= */}

          <div className="about-program-copy">

            <h2 className="about-program-title">

              We Don't Just Teach Singing.

              <span>
                We Build Artists.
              </span>

            </h2>


            <p className="about-program-description">
              OORJA is built for singers who want more than just
              vocal training. This is a complete artist transformation
              experience designed to develop your voice, confidence,
              stage presence, identity, and professional mindset.
            </p>


            <p className="about-program-description">
              Over 90 days, you'll work closely with experienced
              mentors, perform in real environments, and develop
              the practical skills required to move from passionate
              singer to confident performing artist.
            </p>


            {/* =================================
                FEATURES
            ================================= */}

            <div className="about-program-features">

              <div className="about-program-feature">

                <span className="about-program-feature-icon">
                  ✦
                </span>

                <div>

                  <h3>
                    Artist Development
                  </h3>

                  <p>
                    Build the complete foundation of your artist identity.
                  </p>

                </div>

              </div>


              <div className="about-program-feature">

                <span className="about-program-feature-icon">
                  ♪
                </span>

                <div>

                  <h3>
                    Professional Training
                  </h3>

                  <p>
                    Learn through practical training and expert guidance.
                  </p>

                </div>

              </div>


              <div className="about-program-feature">

                <span className="about-program-feature-icon">
                  ★
                </span>

                <div>

                  <h3>
                    Real Performance
                  </h3>

                  <p>
                    Gain confidence through real stage experience.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================
                CTA
            ================================= */}

            <div className="about-program-cta">

              <a
                href={registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="about-program-button"
              >

                <span>
                  Apply For The Program
                </span>

                <span className="about-program-button-arrow">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM STAT STRIP
        ================================= */}

        <div className="about-program-stats">

          <div className="about-program-stat">

            <strong>
              90
            </strong>

            <span>
              DAYS
            </span>

          </div>


          <div className="about-program-stat-divider"></div>


          <div className="about-program-stat">

            <strong>
              1:1
            </strong>

            <span>
              MENTORSHIP
            </span>

          </div>


          <div className="about-program-stat-divider"></div>


          <div className="about-program-stat">

            <strong>
              LIVE
            </strong>

            <span>
              EXPERIENCE
            </span>

          </div>


          <div className="about-program-stat-divider"></div>


          <div className="about-program-stat">

            <strong>
              100%
            </strong>

            <span>
              ARTIST FOCUS
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutProgram;