import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Removed: import Confetti from "react-confetti"; // External dependency issue
// import "./Onboarding.css"; // Assuming this is handled by the environment or included below

export default function Onboarding({ goToTechnology }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLines, setShowLines] = useState(false); // Kept state, but the visual effect is commented out below

  // --- UPDATED onboardingData: Images removed per user request ---
  const onboardingData = [
    // Step 0: Welcome
    { type: "welcome", title: "Hello! I am your guide.", subtitle: "Let's get to know each other" },

    // Step 1: Interest (Image removed)
    {
      type: "question",
      question: "Which are you more interested in?",
      options: [
        { id: "sec", label: "Cybersecurity" },
        { id: "web", label: "Web Development" },
      ],
    },

    // Step 2: Motivation (Image removed)
    {
      type: "question",
      question: "Why are you learning skills for?",
      options: [
        { id: "fun", label: "For fun" },
        { id: "skill_enh", label: "Skill enhancement" },
        { id: "resume", label: "Resume boost" },
      ],
    },

    // Step 3: Commitment Thought
    { type: "thought", title: "People who stay committed have a high chance of reaching their goals. " },

    // Step 4: Time Commitment (Image removed)
    {
      type: "question",
      question: "How much of your time are you gonna commit for your skill?",
      options: [
        { id: "10", label: "10 mins" },
        { id: "15", label: "15 mins" },
        { id: "25", label: "25 mins" },
        { id: "30", label: "30 mins" },
      ],
    },

    // Step 5: Daily Reminder (Image removed)
    {
      type: "question",
      question: "Do you want LearnSphere to send you daily reminders?",
      options: [
        { id: "allow", label: "Allow" },
        { id: "skip", label: "Skip" },
      ],
    },

    // Step 6: Motivation Thought
    { type: "thought", title: "I know its hard to be motivated, but LearnSphere keeps you engaging through fun games, themes... so dive in! " },

    // Step 7: Personal Playground (Image removed)
    {
      type: "question",
      question: "Before diving in, choose your personal playground",
      options: [
        { id: "anime", label: "Anime" },
        { id: "scientific", label: "Scientific" },
      ],
    },

    // Step 8: Final Step
    { type: "final", title: "You're ready — let's learn! " },
  ];
  // -------------------------------------------------------------------

  const current = onboardingData[step];

  const selectOption = (optId) => setSelected(optId === selected ? null : optId);

  const next = () => {
    if (current.type === "question" && !selected) return;
    setSelected(null);
    if (step < onboardingData.length - 1) {
      setStep((s) => s + 1);
    } else {
      // Simulate a final celebration effect
      setShowConfetti(true); 
      // setShowLines(true); // Keeping this state for potential future use or alternative visual
      setTimeout(() => setShowConfetti(false), 2500);

      // Navigate to Technology page
      if (typeof goToTechnology === "function") {
        // Find the selected tech from step 1 (technology question)
        const techOption = onboardingData[1].options.find(opt => opt.id === selected) || onboardingData[1].options[0];
        // We use the first option as a fallback if nothing was selected on step 1, 
        // which shouldn't happen due to the disabled button logic, but is safe.
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
      {/* Video background - assuming '/videos/onback.mp4' is available */}
      <video autoPlay loop muted className="onb-bg">
        <source src="/videos/onback.mp4" type="video/mp4" />
      </video>

      {/* Confetti (Replaced with a simple celebratory overlay/visual state if needed later) */}
      {/* {showConfetti && <Confetti recycle={false} numberOfPieces={140} />} */}

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
              {/* Assuming '/images/logo.jpeg' is available */}
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
                        // Added 'choice-label-only' class for specific styling changes
                        className={`choice-card choice-label-only ${isSel ? "selected" : ""}`}
                        onClick={() => selectOption(opt.id)}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Images removed as requested. The card now contains only the label
                          and the selection indicator. 
                        */}
                        <div className="choice-label">{opt.label}</div>
                        {/* MODIFIED: Changed selection indicator to a small, filled circle (dot) */}
                        <div className={`choice-dot ${isSel ? "show" : ""}`} />
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
                whileTap={{ scale: 0.98 }}
              >
                Continue →
              </motion.button>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Colorful paper fall (kept for visual effect, but currently commented out to avoid confusion without Confetti) */}
      {/* {showLines &&
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
        ))} */}
    </div>
  );
}
