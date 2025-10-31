import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import RobotIntro from "../components/RobotIntro"; // 👈 robot intro
import "./AdvancedTest.css";

const QUESTIONS = [
  { q: "Which CSS property is used to create animations without JavaScript?", a: "@keyframes" },
  { q: "In JavaScript, what will console.log(typeof NaN) output?", a: "number" },
  { q: "Which HTML element is best for making a website accessible when defining navigation links?", a: "<nav>" },
  { q: "What is the difference between == and === in JavaScript?", a: "== compares values with type conversion, === compares values & types" },
  { q: "In CSS Grid, what does grid-template-columns: repeat(3, 1fr); mean?", a: "3 equal columns" },
  { q: "Which JavaScript method can stop an event from bubbling up the DOM tree?", a: "event.stopPropagation()" },
  { q: "What is the default display property of a <span> element?", a: "inline" },
  { q: "Which JavaScript feature allows writing asynchronous code that looks synchronous?", a: "async/await" },
  { q: "In CSS Flexbox, what does align-items: stretch; do?", a: "Makes items equal height" },
  { q: "Which HTML5 feature allows a website to store data locally in the browser, even after refresh?", a: "LocalStorage" }
];

export default function IntermediateTest() {
  const [answers, setAnswers] = useState({});
  const [showTrophy, setShowTrophy] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showIntro, setShowIntro] = useState(true); // 👈 robot intro toggle
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    let score = 0;
    QUESTIONS.forEach((q, i) => {
      if (
        answers[i] &&
        answers[i].toLowerCase().includes(q.a.toLowerCase().split(" ")[0])
      ) {
        score++;
      }
    });

    if (score >= 6) {
      setShowTrophy(true);
      setShowConfetti(true);
      localStorage.setItem("intermediateProgress", "1");

      setTimeout(() => {
        setShowTrophy(false);
        setShowConfetti(false);
        alert(`🎉 Test passed! Intermediate Level 1 unlocked. (Score: ${score}/10)`);
        navigate("/intermediate");
      }, 4000);
    } else {
      alert(`❌ You need at least 6 correct. (Score: ${score}/10)`);
    }
  };
  // Show robot first
    if (showIntro) {
      return <RobotIntro onFinish={() => setShowIntro(false)} />;
      
    }

  return (
    <div className="advanced-test">
        {/* 🔙 Back button same as Levels */}
      <button className="back-button" onClick={() => navigate("/intermediate")}>
        ← Back
      </button>
      <h1>⚡ Spark the Journey</h1>
      <i><p>🧩 Puzzle of Progress</p></i>

      <ol>
        {QUESTIONS.map((q, i) => (
          <li key={i}>
            <p>{q.q}</p>
            <input
              type="text"
              placeholder="Type your answer..."
              value={answers[i] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          </li>
        ))}
      </ol>

      <button className="test-submit" onClick={handleSubmit}>
        🏆 Claim Mastery
      </button>

      {showConfetti && <Confetti numberOfPieces={300} gravity={0.2} />}
      {showTrophy && (
        <div className="trophy-overlay">
          <div className="trophy">🏆</div>
        </div>
      )}
    </div>
  );
}
