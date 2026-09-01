import React from "react";
import journeyImage from "../assets/images/IMG-20260801-WA0006.jpg.jpeg";

const Journey = ({ onApply }) => {
  const journeySteps = [
    {
      number: "01",
      days: "DAYS 01 — 30",
      title: "Find Your Voice",
      description:
        "Build your vocal foundation, understand your strengths, and develop a stronger connection with your voice.",
    },
    {
      number: "02",
      days: "DAYS 31 — 60",
      title: "Find Your Confidence",
      description:
        "Work on stage presence, performance confidence, expression, and the ability to connect with an audience.",
    },
    {
      number: "03",
      days: "DAYS 61 — 90",
      title: "Become Stage Ready",
      description:
        "Put everything into practice through performance preparation, feedback, and real artist experiences.",
    },
  ];

  return (
    <section
      className="journey-section light-section"
      id="journey"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="journey-background">

        <div className="journey-orb journey-orb-one"></div>

        <div className="journey-orb journey-orb-two"></div>

        <div className="journey-ring journey-ring-one"></div>

        <div className="journey-ring journey-ring-two"></div>

        <div className="journey-grid"></div>

      </div>


      <div className="journey-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="journey-label">

          <span className="journey-label-line"></span>

          <span>
            YOUR 90-DAY JOURNEY
          </span>

          <span className="journey-label-line"></span>

        </div>


        {/* =================================
            HEADING
        ================================= */}

        <div className="journey-heading">

          <h2 className="journey-title">

            From
            <span>
              Passion
            </span>

            To
            <span>
              Performance.
            </span>

          </h2>

          <p className="journey-description">
            A structured three-stage journey designed to transform
            your potential into the confidence and skills of a
            professional performing artist.
          </p>

        </div>


        {/* =================================
            FEATURE IMAGE
        ================================= */}

        <div className="journey-feature">

          <div className="journey-image-wrapper">

            <img
              src={journeyImage}
              alt="Artist on stage"
              className="journey-image"
            />

            <div className="journey-image-overlay"></div>


            <div className="journey-image-badge">

              <span>
                90 DAYS
              </span>

              <small>
                ONE COMPLETE TRANSFORMATION
              </small>

            </div>

          </div>

        </div>


        {/* =================================
            TIMELINE
        ================================= */}

        <div className="journey-timeline">

          <div className="journey-timeline-line"></div>

          {journeySteps.map((step) => (
            <article
              className="journey-step"
              key={step.number}
            >

              {/* Number */}

              <div className="journey-step-marker">

                <span>
                  {step.number}
                </span>

              </div>


              {/* Content */}

              <div className="journey-step-content">

                <span className="journey-step-days">
                  {step.days}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </article>
          ))}

        </div>


        {/* =================================
            BOTTOM STATEMENT
        ================================= */}

        <div className="journey-statement">

          <p>
            You don't need to have it all figured out.
          </p>

          <h3>
            You just need to be
            <span>
              ready to begin.
            </span>
          </h3>

        </div>


        {/* =================================
            CTA
        ================================= */}

        <div className="journey-cta">

          <button
            type="button"
            className="journey-button"
            onClick={onApply}
          >

            <span>
              Start My 90-Day Journey
            </span>

            <span className="journey-button-arrow">
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default Journey;