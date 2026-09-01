import React from "react";
import discoveryImage from "../assets/images/IMG_20221026_225608_828.jpg.jpeg";

const DiscoveryCall = ({ onApply }) => {
  return (
    <section
      className="discovery-section light-section"
      id="program"
    >
      {/* =================================
          DECORATIVE BACKGROUND
      ================================= */}

      <div className="discovery-background">
        <div className="discovery-orb discovery-orb-one"></div>

        <div className="discovery-orb discovery-orb-two"></div>

        <div className="discovery-ring"></div>
      </div>


      <div className="discovery-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="discovery-label">
          <span className="discovery-label-line"></span>

          <span>
            DISCOVER YOUR POTENTIAL
          </span>

          <span className="discovery-label-line"></span>
        </div>


        {/* =================================
            HEADING
        ================================= */}

        <h2 className="discovery-title">
          Your Voice Has

          <span>
            More To Offer.
          </span>
        </h2>


        {/* =================================
            DESCRIPTION
        ================================= */}

        <p className="discovery-description">
          Talent is only the beginning. We help passionate singers
          develop the confidence, skills, stage presence, and
          professional identity needed to step into the world of
          live performance.
        </p>


        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="discovery-content">

          {/* =================================
              LEFT IMAGE
          ================================= */}

          <div className="discovery-image-column">

            <div className="discovery-image-wrapper">

              <img
                src={discoveryImage}
                alt="OORJA artist"
                className="discovery-image"
              />

              <div className="discovery-image-overlay"></div>

              <div className="discovery-image-badge">
                <span>OORJA</span>
                <small>THE TALENT HUB</small>
              </div>

            </div>


            {/* Intro Card */}

            <div className="discovery-intro">

              <span className="discovery-number">
                01
              </span>

              <h3>
                From Passion
                <br />
                To Performance
              </h3>

              <p>
                Build the foundation of a professional artist
                through structured training, personal mentorship,
                and real performance experience.
              </p>

            </div>

          </div>


          {/* =================================
              RIGHT POINTS
          ================================= */}

          <div className="discovery-points">

            {/* CARD 1 */}

            <div className="discovery-point">

              <div className="discovery-icon">
                <span>♪</span>
              </div>

              <div className="discovery-point-content">

                <h4>
                  Strengthen Your Voice
                </h4>

                <p>
                  Improve your vocal ability, song preparation,
                  and performance technique.
                </p>

              </div>

            </div>


            {/* CARD 2 */}

            <div className="discovery-point">

              <div className="discovery-icon">
                <span>✦</span>
              </div>

              <div className="discovery-point-content">

                <h4>
                  Build Stage Confidence
                </h4>

                <p>
                  Learn how to own the stage, communicate
                  naturally, and perform with confidence.
                </p>

              </div>

            </div>


            {/* CARD 3 */}

            <div className="discovery-point">

              <div className="discovery-icon">
                <span>◈</span>
              </div>

              <div className="discovery-point-content">

                <h4>
                  Become Industry Ready
                </h4>

                <p>
                  Develop your artist identity, portfolio,
                  and professional performance presence.
                </p>

              </div>

            </div>


            {/* CARD 4 */}

            <div className="discovery-point">

              <div className="discovery-icon">
                <span>★</span>
              </div>

              <div className="discovery-point-content">

                <h4>
                  Perform For Real Audiences
                </h4>

                <p>
                  Gain practical live-performance experience
                  and learn what it takes to perform professionally.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            CTA
        ================================= */}

        <div className="discovery-cta">

          <button
            type="button"
            className="discovery-button"
            onClick={onApply}
          >
            <span>
              Start Your Journey
            </span>

            <span className="discovery-button-arrow">
              →
            </span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default DiscoveryCall;