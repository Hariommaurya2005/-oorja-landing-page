import React from "react";

import mentorOne from "../assets/images/IMG_1318.JPG.jpeg";
import mentorTwo from "../assets/images/IMG-20260801-WA0005.jpg.jpeg";
import mentorThree from "../assets/images/IMG-20260801-WA0007.jpg.jpeg";

const Mentors = ({ registrationLink }) => {
  const mentors = [
    {
      id: "01",
      name: "Vocal Mentor",
      role: "VOCAL & PERFORMANCE",
      image: mentorOne,
      description:
        "Work on your vocal technique, expression, song preparation, and performance confidence.",
    },
    {
      id: "02",
      name: "Stage Mentor",
      role: "STAGE PRESENCE",
      image: mentorTwo,
      description:
        "Learn how to own the stage, connect with your audience, and perform with confidence.",
    },
    {
      id: "03",
      name: "Artist Mentor",
      role: "ARTIST DEVELOPMENT",
      image: mentorThree,
      description:
        "Develop your identity, professional mindset, and direction as a performing artist.",
    },
  ];

  return (
    <section
      className="mentors-section light-section"
      id="mentors"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="mentors-background">

        <div className="mentors-orb mentors-orb-one"></div>

        <div className="mentors-orb mentors-orb-two"></div>

        <div className="mentors-ring mentors-ring-one"></div>

        <div className="mentors-ring mentors-ring-two"></div>

        <div className="mentors-grid"></div>

      </div>


      <div className="mentors-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="mentors-label">

          <span className="mentors-label-line"></span>

          <span>
            LEARN FROM ACTIVE PERFORMING ARTISTS
          </span>

          <span className="mentors-label-line"></span>

        </div>


        {/* =================================
            HEADING
        ================================= */}

        <div className="mentors-heading">

          <h2 className="mentors-title">

            Learn From People

            <span>
              Who've Been There.
            </span>

          </h2>

          <p className="mentors-description">
            Get guidance from experienced artists and performers
            who understand what it takes to build confidence,
            develop your craft, and step onto a professional stage.
          </p>

        </div>


        {/* =================================
            MENTOR CARDS
        ================================= */}

        <div className="mentors-grid">

          {mentors.map((mentor) => (
            <article
              className="mentor-card"
              key={mentor.id}
            >

              {/* Image */}

              <div className="mentor-image-wrapper">

                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mentor-image"
                />

                <div className="mentor-image-overlay"></div>


                {/* Number */}

                <span className="mentor-number">
                  {mentor.id}
                </span>


                {/* Role */}

                <span className="mentor-role">
                  {mentor.role}
                </span>

              </div>


              {/* Content */}

              <div className="mentor-card-content">

                <h3>
                  {mentor.name}
                </h3>

                <p>
                  {mentor.description}
                </p>

                <span className="mentor-card-arrow">
                  →
                </span>

              </div>

            </article>
          ))}

        </div>


        {/* =================================
            MENTOR STATEMENT
        ================================= */}

        <div className="mentors-statement">

          <p>
            Real experience. Real guidance.
            Real artist growth.
          </p>

          <div className="mentors-statement-line"></div>

        </div>


        {/* =================================
            CTA
        ================================= */}

        <div className="mentors-cta">

          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mentors-button"
          >
            <span>
              Apply For Selection
            </span>

            <span className="mentors-button-arrow">
              →
            </span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Mentors;