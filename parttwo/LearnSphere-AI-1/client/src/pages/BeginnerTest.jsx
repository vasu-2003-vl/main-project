// client/src/pages/BeginnerTest.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti"; 
import RobotIntro from "../components/RobotIntro"; // 👈 robot intro
import "./AdvancedTest.css"; // trophy CSS reused

const QUESTIONS = [
  { q: "HTML stands for?", a: "HyperText Markup Language" },
  { q: "CSS is used for?", a: "Styling" },
  { q: "JS stands for?", a: "JavaScript" },
  { q: "Which tag is used for links?", a: "<a>" },
  { q: "How do you comment in HTML?", a: "<!-- -->" },
  { q: "Which CSS property changes text color?", a: "color" },
  { q: "Which method shows output in console?", a: "console.log()" },
  { q: "Which keyword declares a variable?", a: "var / let / const" },
  { q: "JS uses?", a: "Functions" },
  { q: "DOM stands for?", a: "Document Object Model" },
];

export default function BeginnerTest() {
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

      localStorage.setItem("beginnerProgress", "1");

      setTimeout(() => {
        setShowTrophy(false);
        setShowConfetti(false);
        alert(`🎉 Test passed! Beginner Level 1 unlocked. (Score: ${score}/10)`);
        navigate("/beginner");
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
      {/* 🔙 Back button (goes to beginner page) */}
      <button className="back-button" onClick={() => navigate("/beginner")}>
        ← Back
      </button>

      <h1>⚡ Spark the Journey</h1>
      <i>
        <p>🧩 Puzzle of Progress</p>
      </i>

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
        🏆 Claim Glory
      </button>

      {/* 🎉 Confetti */}
      {showConfetti && <Confetti numberOfPieces={300} gravity={0.2} />}

      {/* 🏆 Trophy */}
      {showTrophy && (
        <div className="trophy-overlay">
          <div className="trophy">🏆</div>
        </div>
      )}
    </div>
  );
}
