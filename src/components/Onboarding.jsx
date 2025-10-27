import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import "./Onboarding.css";

export default function Onboarding({ goToTechnology }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLines, setShowLines] = useState(false);

  const onboardingData = [
    { type: "welcome", title: "Welcome to LearnSphere AI!", subtitle: "Choose what excites you." },
    {
      type: "question",
      question: "Which technology excites you most?",
      options: [
        { id: "web", label: "Web Development", img: "/images/place-web.jpeg" },
        { id: "sec", label: "Cybersecurity", img: "/images/place-sec.jpeg" },
      ],
    },
    {
      type: "question",
      question: "Which learning style suits you best?",
      options: [
        { id: "visual", label: "Visual", img: "/images/place-visual.jpeg" },
        { id: "aud", label: "Auditory", img: "/images/place-aud.jpeg" },
        { id: "read", label: "Reading/Writing", img: "/images/place-read.jpeg" },
        { id: "hands", label: "Hands-on", img: "/images/place-hands.jpeg" },
      ],
    },
    { type: "thought", title: "💡 Every step you take is progress!" },
    {
      type: "question",
      question: "What is your current skill level?",
      options: [
        { id: "Beginner", label: "Beginner", img: "/images/place-beginner.jpeg" },
        { id: "inter", label: "Intermediate", img: "/images/place-inter.jpeg" },
        { id: "adv", label: "Advanced", img: "/images/place-adv.jpeg" },
      ],
    },
    {
      type: "question",
      question: "How much time can you dedicate per day?",
      options: [
        { id: "15", label: "15 mins", img: "/images/15.jpeg" },
        { id: "30", label: "30 mins", img: "/images/30.jpeg" },
        { id: "45", label: "45 mins", img: "/images/45.jpeg" },
        { id: "hr", label: "1 hr", img: "/images/1.jpeg" },
      ],
    },
    { type: "thought", title: "Small progress each day adds up to big results." },
    { type: "final", title: "You're ready — let's learn! 🎉" },
  ];

  const current = onboardingData[step];

  const selectOption = (optId) => setSelected(optId === selected ? null : optId);

  
  const next = () => {
  if (current.type === "question" && !selected) return;
  setSelected(null);
  if (step < onboardingData.length - 1) {
    setStep((s) => s + 1);
  } else {
    setShowConfetti(true);
    setShowLines(true);
    setTimeout(() => setShowConfetti(false), 2500);
    
    // Navigate to Technology page
    if (typeof goToTechnology === "function") {
      // pass the selected tech from step 1 (technology question)
      const techOption = onboardingData[1].options.find(opt => opt.id === selected) || onboardingData[1].options[0];
      goToTechnology(techOption.id);
    }
  }
};


  const cardVariants = {
    enter: { opacity: 0, y: 20, scale: 0.98 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  };

  const lineVariants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="onboarding-root">
      {/* Video background */}
      <video autoPlay loop muted className="onb-bg">
        <source src="/videos/onback.mp4" type="video/mp4" />
      </video>

      {/* Confetti */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={140} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="onb-card glass-card"
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45 }}
        >
          {/* Welcome Step */}
          {current.type === "welcome" && (
            <>
              <img src="/images/logo.jpeg" alt="LearnSphere Logo" className="onb-logo" width="100"
  height="100" />
              <h1 className="onb-title neon">{current.title}</h1>
              <p className="onb-sub">{current.subtitle}</p>
              <motion.button
                className="onb-continue big"
                onClick={next}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue →
              </motion.button>
            </>
          )}

          {/* Questions & Thoughts */}
          {(current.type === "question" || current.type === "thought") && (
            <>
              {/* Top animated rainbow line */}
              <motion.div
                className="onb-color-line-top"
                variants={lineVariants}
                initial="initial"
                animate="animate"
              />

              <h2 className="onb-title neon">{current.question || current.title}</h2>

              {current.type === "question" && (
                <div className="choices-grid">
                  {current.options.map((opt) => {
                    const isSel = selected === opt.id;
                    return (
                      <motion.div
                        key={opt.id}
                        className={`choice-card ${isSel ? "selected" : ""}`}
                        onClick={() => selectOption(opt.id)}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="choice-art">
                          <img
                            src={opt.img}
                            alt={opt.label}
                            onError={(e) => { e.currentTarget.src = "/images/placeholder.png"; }}
                          />
                        </div>
                        <div className="choice-label">{opt.label}</div>
                        <div className={`choice-check ${isSel ? "show" : ""}`}>✓</div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              <motion.button
                className="onb-continue"
                onClick={next}
                disabled={current.type === "question" && !selected}
                whileHover={{ scale: selected || current.type === "thought" ? 1.03 : 1 }}
              >
                Continue →
              </motion.button>
            </>
          )}

          {/* Final Step */}
          {current.type === "final" && (
            <>
              <h1 className="onb-title neon">{current.title}</h1>
              <motion.button
                className="onb-continue big"
                onClick={next}
                whileHover={{ scale: 1.03 }}
              >
                Continue →
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Colorful paper fall */}
      {showLines &&
        Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="color-paper"
            style={{
              left: `${Math.random() * 100}%`,
              width: 8 + Math.random() * 16,
              height: 8 + Math.random() * 16,
              rotate: Math.random() * 360,
            }}
            initial={{ y: -50 }}
            animate={{ y: 900, rotate: Math.random() * 720 }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
    </div>
  );
}
