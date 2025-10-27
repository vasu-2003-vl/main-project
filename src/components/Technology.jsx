import React, { useState } from "react";
import { motion } from "framer-motion";
import WebDevelopment from "./WebDevelopment";
import "./Technology.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Technology({ goBack }) {
  const [webPage, setWebPage] = useState(false);

  if (webPage) {
    return <WebDevelopment goBack={() => setWebPage(false)} />;
  }

  return (
    <div className="technology-page">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/techback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={goBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back 
      </motion.button>

      {/* Hero Section */}
      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">🚀 Explore Technology Realms</h1>
        <p className="subtitle">
          Choose your adventure — dive into powerful skills that shape the future!
        </p>
      </motion.div>

      {/* Technology Cards */}
      <div className="tech-container">
        <motion.div
          className="tech-card web"
          whileHover={{ scale: 1.05,  }}
          transition={{ duration: 0.3 }}
        >
          <h2>🌐 Web Development</h2>
          <p>
            Master the art of creating modern, responsive, and interactive web experiences.
          </p>
          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setWebPage(true)}
          >
            Explore Now
          </motion.button>
        </motion.div>

        <motion.div
          className="tech-card cyber"
          whileHover={{ scale: 1.05,  }}
          transition={{ duration: 0.3 }}
        >
          <h2>🛡️ Cyber Security</h2>
          <p>
            Step into the digital battlefield — defend networks, data, and systems like a pro.
          </p>
          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Now
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="bottom-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      
    </div>
  );
}
