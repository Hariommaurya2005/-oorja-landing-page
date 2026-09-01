import React from "react";
import limitedSeatsImage from "../assets/images/IMG-20260801-WA0006.jpg.jpeg";

const LimitedSeats = ({ onApply }) => {
  return (
    <section
      className="limited-seats-section dark-section"
      id="limited-seats"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="limited-seats-background">
        <div className="limited-seats-orb limited-seats-orb-one"></div>

        <div className="limited-seats-orb limited-seats-orb-two"></div>

        <div className="limited-seats-ring limited-seats-ring-one"></div>

        <div className="limited-seats-ring limited-seats-ring-two"></div>

        <div className="limited-seats-grid"></div>
      </div>


      <div className="limited-seats-container">

        {/* =================================
            TOP LABEL
        ================================= */}

        <div className="limited-seats-label">

          <span className="limited-seats-label-line"></span>

          <span>
            LIMITED SEATS AVAILABLE
          </span>

          <span className="limited-seats-label-line"></span>

        </div>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="limited-seats-content">

          {/* =================================
              IMAGE
          ================================= */}

          <div className="limited-seats-image-column">

            <div className="limited-seats-image-wrapper">

              <img
                src={limitedSeatsImage}
                alt="OORJA live artist experience"
                className="limited-seats-image"
              />

              <div className="limited-seats-image-overlay"></div>

              <div className="limited-seats-image-frame"></div>


              {/* Floating badge */}

              <div className="limited-seats-badge">

                <span className="limited-seats-badge-icon">
                  ✦
                </span>

                <div>
                  <strong>
                    LIMITED
                  </strong>

                  <small>
                    SEATS ONLY
                  </small>
                </div>

              </div>

            </div>

          </div>


          {/* =================================
              CONTENT
          ================================= */}

          <div className="limited-seats-copy">

            <span className="limited-seats-small-label">
              FOR SERIOUS ARTISTS ONLY
            </span>


            <h2 className="limited-seats-title">

              Your Next
              <span>
                90 Days
              </span>

              Could Change
              <span>
                Everything.
              </span>

            </h2>


            <p className="limited-seats-description">
              This is an intentionally small, mentor-led experience
              so every artist gets the attention, feedback, and
              performance opportunities needed to make meaningful
              progress.
            </p>


            {/* =================================
                URGENCY BOX
            ================================= */}

            <div className="limited-seats-urgency">

              <div className="limited-seats-urgency-icon">
                !
              </div>

              <div className="limited-seats-urgency-content">

                <strong>
                  Seats are limited.
                </strong>

                <p>
                  Applications are reviewed on a selection basis.
                </p>

              </div>

            </div>


            {/* =================================
                BENEFITS
            ================================= */}

            <div className="limited-seats-points">

              <div className="limited-seats-point">
                <span>✓</span>
                <p>
                  Small batch for focused mentorship
                </p>
              </div>

              <div className="limited-seats-point">
                <span>✓</span>
                <p>
                  Real performance opportunities
                </p>
              </div>

              <div className="limited-seats-point">
                <span>✓</span>
                <p>
                  Personal feedback throughout the journey
                </p>
              </div>

            </div>


            {/* =================================
                CTA
            ================================= */}

            <button
              type="button"
              className="limited-seats-button"
              onClick={onApply}
            >

              <span>
                Apply For Selection
              </span>

              <span className="limited-seats-button-arrow">
                →
              </span>

            </button>


            <p className="limited-seats-note">
              Applications are open for the next cohort.
            </p>

          </div>

        </div>


        {/* =================================
            BOTTOM LINE
        ================================= */}

        <div className="limited-seats-bottom">

          <span></span>

          <p>
            Don't wait for the perfect moment.
            Start becoming the artist you want to be.
          </p>

          <span></span>

        </div>

      </div>

    </section>
  );
};

export default LimitedSeats;