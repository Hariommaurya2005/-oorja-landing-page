import React, { useEffect } from "react";

const ApplicationForm = ({ isOpen, onClose }) => {

  useEffect(() => {

    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {

      if (event.key === "Escape") {
        onClose();
      }

    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {

      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [isOpen, onClose]);


  if (!isOpen) {
    return null;
  }


  const handleSubmit = (event) => {

    event.preventDefault();

    alert(
      "Application submitted successfully!"
    );

  };


  return (
    <div
      className="application-modal"
      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <div className="application-form-card">

        {/* Close Button */}

        <button
          type="button"
          className="application-close"
          onClick={onClose}
          aria-label="Close application form"
        >
          ×
        </button>


        {/* Header */}

        <div className="application-form-header">

          <span className="application-form-label">
            OORJA THE TALENT HUB
          </span>

          <h2>
            Start Your
            <span>
              Artist Journey
            </span>
          </h2>

          <p>
            Fill in your details and our team
            will get in touch with you.
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="application-form"
        >

          {/* Name */}

          <div className="application-field">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
            />

          </div>


          {/* Email */}

          <div className="application-field">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>


          {/* Phone */}

          <div className="application-field">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />

          </div>


          {/* Experience */}

          <div className="application-field">

            <label htmlFor="experience">
              Singing Experience
            </label>

            <select
              id="experience"
              name="experience"
              defaultValue=""
              required
            >

              <option
                value=""
                disabled
              >
                Select your experience
              </option>

              <option value="beginner">
                Beginner
              </option>

              <option value="intermediate">
                Intermediate
              </option>

              <option value="advanced">
                Advanced
              </option>

              <option value="professional">
                Professional
              </option>

            </select>

          </div>


          {/* Message */}

          <div className="application-field">

            <label htmlFor="message">
              Tell Us About Yourself
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us briefly about your singing journey..."
            ></textarea>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="application-submit"
          >

            <span>
              Submit Application
            </span>

            <span>
              →
            </span>

          </button>

        </form>

      </div>

    </div>
  );
};

export default ApplicationForm;