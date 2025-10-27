import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";


export default function About({ goBack }) {
  return (
    <div className="about-page">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/aboutback.mp4" type="video/mp4" />
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

      {/* Content */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>🌟 About LearnSphere AI</h1>
        <p>
          LearnSphere AI is your personalized learning hub — blending gamification,
          AI mentorship, and interactive challenges to make learning exciting and effective.
        </p>
        <p>
          Our mission is to make skill-building fun, rewarding, and accessible to everyone.
          Every click earns you XP, every quiz grows your skills, and every achievement
          brings you closer to mastery.
        </p>
      </motion.div>
      
    </div>
  );
}
