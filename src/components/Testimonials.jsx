import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Client Feedback",
    role: "Web Project",
    message:
      "Dax understood the project requirements quickly and created a clean, responsive and modern web experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Project Collaborator",
    role: "Development Project",
    message:
      "Great attention to detail and a strong focus on writing organized, reusable code. The final result was smooth and professional.",
    rating: 5,
  },
  {
    id: 3,
    name: "Project Client",
    role: "Website Development",
    message:
      "The interface was modern, responsive and easy to use. Communication and development throughout the project were excellent.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const previousTestimonial = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? testimonials.length - 1
        : currentIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">Testimonials</span>

          <h2>
            What people say
            <span> about my work.</span>
          </h2>

          <p>
            Feedback and experiences from people I've worked with on different
            projects.
          </p>
        </div>

        {/* Testimonial */}
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            {/* Quote Icon */}
            <div className="testimonial-quote">
              <FaQuoteLeft />
            </div>

            {/* Rating */}
            <div className="testimonial-rating">
              {Array.from(
                { length: activeTestimonial.rating },
                (_, index) => (
                  <FaStar key={index} />
                )
              )}
            </div>

            {/* Message */}
            <blockquote>
              "{activeTestimonial.message}"
            </blockquote>

            {/* Person */}
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {activeTestimonial.name.charAt(0)}
              </div>

              <div>
                <h3>{activeTestimonial.name}</h3>
                <span>{activeTestimonial.role}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonial-controls">
            <button
              type="button"
              onClick={previousTestimonial}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  key={testimonial.id}
                  className={
                    activeIndex === index
                      ? "testimonial-dot active"
                      : "testimonial-dot"
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;