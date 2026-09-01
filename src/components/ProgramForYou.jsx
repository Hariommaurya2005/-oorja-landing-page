import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import programImage from "../assets/images/IMG-20191129-WA0011.jpg.jpeg";

const ProgramForYou = ({ registrationLink }) => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="program-section dark-section scroll-section"
      id="program-for-you"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="program-background">
        <div className="program-orb program-orb-one"></div>

        <div className="program-orb program-orb-two"></div>

        <div className="program-ring program-ring-one"></div>

        <div className="program-ring program-ring-two"></div>

        <div className="program-grid"></div>
      </div>


      {/* =================================
          MAIN CONTAINER
      ================================= */}

      <div className="program-container">

        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="program-label">
          <span className="program-label-line"></span>

          <span>
            IS THIS PROGRAM FOR YOU?
          </span>

          <span className="program-label-line"></span>
        </div>


        <div className="program-heading-wrap">

          <h2 className="program-title">
            You Have The

            <span>
              Talent.
            </span>
          </h2>


          <p className="program-description">
            This program is for passionate singers who know they
            have something special to offer but need the right
            direction, confidence, and environment to turn that
            potential into a professional artist journey.
          </p>

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="program-content">

          {/* =================================
              IMAGE
          ================================= */}

          <div className="program-image-column">

            <div className="program-image-wrapper">

              <img
                src={programImage}
                alt="Singer performing"
                className="program-image"
              />

              <div className="program-image-overlay"></div>


              {/* Image Badge */}

              <div className="program-image-badge">

                <span className="program-image-badge-number">
                  90
                </span>

                <span className="program-image-badge-text">
                  DAYS TO TRANSFORM
                </span>

              </div>

            </div>

          </div>


          {/* =================================
              RIGHT CONTENT
          ================================= */}

          <div className="program-points">

            {/* POINT 1 */}

            <div className="program-point">

              <div className="program-point-number">
                01
              </div>

              <div className="program-point-content">

                <h3>
                  You Love To Sing
                </h3>

                <p>
                  Singing is more than a hobby for you. You genuinely
                  enjoy performing, creating music, and connecting with
                  people through your voice.
                </p>

              </div>

            </div>


            {/* POINT 2 */}

            <div className="program-point">

              <div className="program-point-number">
                02
              </div>

              <div className="program-point-content">

                <h3>
                  You Want To Perform
                </h3>

                <p>
                  You want to move beyond practicing alone and become
                  comfortable performing confidently in front of real
                  audiences.
                </p>

              </div>

            </div>


            {/* POINT 3 */}

            <div className="program-point">

              <div className="program-point-number">
                03
              </div>

              <div className="program-point-content">

                <h3>
                  You Need Direction
                </h3>

                <p>
                  You have the passion but are unsure about the next
                  step. You want structured guidance from people who
                  understand the artist journey.
                </p>

              </div>

            </div>


            {/* POINT 4 */}

            <div className="program-point">

              <div className="program-point-number">
                04
              </div>

              <div className="program-point-content">

                <h3>
                  You Are Ready To Commit
                </h3>

                <p>
                  You are willing to put in the work, learn new skills,
                  step outside your comfort zone, and seriously invest
                  in your growth as an artist.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="program-cta">

          <p className="program-cta-text">
            Ready to take your talent seriously?
          </p>


          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="program-button"
          >
            <span>
              Apply For Selection
            </span>

            <span className="program-button-arrow">
              →
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default ProgramForYou;