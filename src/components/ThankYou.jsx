import React from "react";

const ThankYou = () => {
  return (
    <section className="thank-you-section">

      <div className="thank-you-background">
        <div className="thank-you-glow"></div>
        <div className="thank-you-ring"></div>
      </div>

      <div className="thank-you-container">

        <div className="thank-you-icon">
          ✓
        </div>

        <span className="thank-you-label">
          OORJA THE TALENT HUB
        </span>

        <h1 className="thank-you-title">
          Thank You
          <span>For Applying.</span>
        </h1>

        <p className="thank-you-description">
          Your application has been received successfully.
          Our team will review your details and get in touch
          with you soon.
        </p>

        <a
          href="/"
          className="thank-you-button"
        >
          Back To Home
          <span>→</span>
        </a>

      </div>

    </section>
  );
};

export default ThankYou;