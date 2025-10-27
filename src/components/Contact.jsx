// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Contact({ goBack }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      alert("⚠️ Please fill in all fields before sending!");
      return;
    }

    // You can replace this with an API call (like emailjs or backend endpoint)
    console.log("Message Sent:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Hide confirmation after few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="contact-background">
        <source src="/videos/conback.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="contact-overlay"></div>

      {/* Back Button */}
      <button className="back-btn" onClick={goBack}>
        ⬅ Back to Home
      </button>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="contact-box">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Drop your queries, ideas, or feedback
            below — our AI team will respond faster than light 
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder=" Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder=" Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder=" Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder=" Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {submitted && (
            <p className="success-message">
              ✅ Message sent successfully! We'll reach out soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
