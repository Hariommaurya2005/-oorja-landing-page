import React from "react";
import transformationImage from "../assets/images/R75A7539.JPG.jpeg";

const Transformation = ({ registrationLink }) => {
  const transformations = [
    {
      number: "01",
      title: "Confident Performer",
      text: "Step onto a stage with confidence, control, and the ability to truly own your performance.",
      icon: "✦",
    },
    {
      number: "02",
      title: "Stronger Vocalist",
      text: "Understand your voice better and perform songs with greater control, expression, and consistency.",
      icon: "♪",
    },
    {
      number: "03",
      title: "Defined Artist Identity",
      text: "Know who you are as an artist and communicate your unique personality through your performances.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Stage Ready",
      text: "Feel prepared to face real audiences and handle live performance environments with confidence.",
      icon: "★",
    },
    {
      number: "05",
      title: "Professional Mindset",
      text: "Understand the discipline, preparation, professionalism, and consistency required to grow as an artist.",
      icon: "◎",
    },
    {
      number: "06",
      title: "Ready For Your Next Step",
      text: "Leave the program with a clearer direction and the confidence to continue building your artist career.",
      icon: "→",
    },
  ];

  return (
    <section
      className="transformation-section dark-section"
      id="transformation"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="transformation-background">

        <div className="transformation-orb transformation-orb-one"></div>

        <div className="transformation-orb transformation-orb-two"></div>

        <div className="transformation-ring transformation-ring-one"></div>

        <div className="transformation-ring transformation-ring-two"></div>

        <div className="transformation-grid"></div>

      </div>


      <div className="transformation-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="transformation-label">

          <span className="transformation-label-line"></span>

          <span>
            BY THE END OF THE PROGRAM
          </span>

          <span className="transformation-label-line"></span>

        </div>


        {/* =================================
            HEADING
        ================================= */}

        <div className="transformation-heading">

          <h2 className="transformation-title">

            You Don't Just

            <span>
              Learn.
            </span>

            You

            <span>
              Transform.
            </span>

          </h2>

          <p className="transformation-description">
            Ninety days from now, you'll have more than improved
            singing skills. You'll have greater confidence, a stronger
            identity, and the foundation to move forward as a real
            performing artist.
          </p>

        </div>


        {/* =================================
            FEATURE
        ================================= */}

        <div className="transformation-feature">

          <div className="transformation-image-wrapper">

            <img
              src={transformationImage}
              alt="OORJA artist transformation"
              className="transformation-image"
            />

            <div className="transformation-image-overlay"></div>

            <div className="transformation-image-badge">

              <span className="transformation-badge-number">
                90
              </span>

              <span className="transformation-badge-text">
                DAYS
              </span>

            </div>

          </div>


          <div className="transformation-feature-content">

            <span className="transformation-feature-label">
              THE TRANSFORMATION
            </span>

            <h3>

              From “Maybe I Can”

              <span>
                To “Watch Me.”
              </span>

            </h3>

            <p>
              The goal isn't perfection. It's progress — becoming
              the version of yourself who is confident enough to
              step forward, perform, and be seen.
            </p>


            {/* =================================
                SINGLE CTA
            ================================= */}

            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transformation-button transformation-cta-button"
            >
              <span>
                Book My Session Now!
              </span>

              <span className="transformation-button-arrow">
                →
              </span>
            </a>

          </div>

        </div>


        {/* =================================
            TRANSFORMATION CARDS
        ================================= */}

        <div className="transformation-grid-cards">

          {transformations.map((item) => (
            <article
              className="transformation-card"
              key={item.number}
            >

              <div className="transformation-card-top">

                <span className="transformation-card-number">
                  {item.number}
                </span>

                <span className="transformation-card-icon">
                  {item.icon}
                </span>

              </div>


              <h3>
                {item.title}
              </h3>


              <p>
                {item.text}
              </p>


              <span className="transformation-card-line"></span>

            </article>
          ))}

        </div>


        {/* =================================
            FINAL STATEMENT
        ================================= */}

        <div className="transformation-statement">

          <p>
            The artist you want to become
            starts with the decision you make today.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Transformation;