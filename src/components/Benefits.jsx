import React from "react";
import benefitsImage from "../assets/images/IMG-20260801-WA0005.jpg.jpeg";

const Benefits = ({ onApply }) => {
  const benefits = [
    {
      number: "01",
      title: "Vocal Development",
      text: "Strengthen your voice, improve your technique, and learn how to prepare songs for professional performance.",
      icon: "♪",
    },
    {
      number: "02",
      title: "Stage Presence",
      text: "Learn how to move, connect with your audience, and perform with confidence on a real stage.",
      icon: "✦",
    },
    {
      number: "03",
      title: "Artist Identity",
      text: "Discover what makes you unique and build a clear identity that represents you as an artist.",
      icon: "◈",
    },
    {
      number: "04",
      title: "Industry Exposure",
      text: "Understand the professional side of being an artist and learn how to present yourself effectively.",
      icon: "★",
    },
    {
      number: "05",
      title: "Mentor Guidance",
      text: "Get practical direction and feedback from experienced performers and industry professionals.",
      icon: "◎",
    },
    {
      number: "06",
      title: "Live Performance",
      text: "Move from practice to real performance opportunities and experience what it feels like to perform live.",
      icon: "◉",
    },
  ];

  return (
    <section
      className="benefits-section dark-section"
      id="benefits"
    >
      {/* =================================
          MOVING BACKGROUND
      ================================= */}

      <div className="benefits-background">

        <div className="benefits-orb benefits-orb-one"></div>

        <div className="benefits-orb benefits-orb-two"></div>

        <div className="benefits-ring benefits-ring-one"></div>

        <div className="benefits-ring benefits-ring-two"></div>

        <div className="benefits-grid"></div>

      </div>


      <div className="benefits-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <div className="benefits-label">

          <span className="benefits-label-line"></span>

          <span>
            EVERYTHING YOU NEED
          </span>

          <span className="benefits-label-line"></span>

        </div>


        {/* =================================
            HEADING
        ================================= */}

        <div className="benefits-heading-wrap">

          <h2 className="benefits-title">

            More Than
            <span>
              Singing Lessons.
            </span>

          </h2>

          <p className="benefits-description">
            Everything inside the OORJA experience is designed to
            help you grow as a complete performing artist — from
            your voice and confidence to your stage presence and
            professional mindset.
          </p>

        </div>


        {/* =================================
            FEATURE IMAGE
        ================================= */}

        <div className="benefits-feature">

          <div className="benefits-feature-image-wrapper">

            <img
              src={benefitsImage}
              alt="Artist performance experience"
              className="benefits-feature-image"
            />

            <div className="benefits-feature-overlay"></div>

            <div className="benefits-feature-badge">

              <span>
                OORJA
              </span>

              <small>
                COMPLETE ARTIST DEVELOPMENT
              </small>

            </div>

          </div>


          <div className="benefits-feature-content">

            <span className="benefits-feature-number">
              06
            </span>

            <h3>
              Everything You Need
              <span>
                To Become Stage Ready.
              </span>
            </h3>

            <p>
              We don't stop at teaching you how to sing. The
              program is built around the complete transformation
              required to step onto a stage with confidence,
              clarity, and professional presence.
            </p>

            <button
              type="button"
              className="benefits-button"
              onClick={onApply}
            >
              <span>
                Apply For Selection
              </span>

              <span className="benefits-button-arrow">
                →
              </span>
            </button>

          </div>

        </div>


        {/* =================================
            BENEFIT CARDS
        ================================= */}

        <div className="benefits-list">

          {benefits.map((benefit) => (
            <article
              className="benefit-card"
              key={benefit.number}
            >
              <div className="benefit-card-top">

                <span className="benefit-number">
                  {benefit.number}
                </span>

                <span className="benefit-icon">
                  {benefit.icon}
                </span>

              </div>

              <h3>
                {benefit.title}
              </h3>

              <p>
                {benefit.text}
              </p>

              <span className="benefit-card-arrow">
                →
              </span>

            </article>
          ))}

        </div>


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="benefits-cta">

          <p>
            Your transformation starts here.
          </p>

          <button
            type="button"
            className="benefits-bottom-button"
            onClick={onApply}
          >
            <span>
              Start Your Artist Journey
            </span>

            <span>
              →
            </span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Benefits;