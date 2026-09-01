import React from "react";

const ThankYou = () => {
  return (
    <section className="thank-you-section">

      {/* =================================
          BACKGROUND
      ================================= */}

      <div className="thank-you-background">

        <div className="thank-you-glow"></div>

        <div className="thank-you-ring"></div>

      </div>


      {/* =================================
          CONTENT
      ================================= */}

      <div className="thank-you-container">

        {/* Success Icon */}

        <div className="thank-you-icon">
          ✓
        </div>


        {/* Label */}

        <span className="thank-you-label">
          OORJA THE TALENT HUB
        </span>


        {/* Heading */}

        <h1 className="thank-you-title">

          Thank You

          <span>
            For Applying.
          </span>

        </h1>


        {/* Description */}

        <p className="thank-you-description">
          Your application has been received successfully.
          Our team will review your details and get in touch
          with you soon.
        </p>


        {/* Back To Home */}

        <a
          href="/hari/"
          className="thank-you-button"
        >

          <span>
            Back To Home
          </span>

          <span>
            →
          </span>

        </a>

      </div>

    </section>
  );
};

export default ThankYou;