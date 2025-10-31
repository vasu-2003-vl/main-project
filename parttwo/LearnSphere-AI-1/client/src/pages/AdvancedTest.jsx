import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti"; 
import RobotIntro from "../components/RobotIntro"; // 👈 robot intro
import "./AdvancedTest.css";

const QUESTIONS = [
  { q: "Which keyword is block-scoped and re-assignable?", a: "let" },
  { q: "Which method doubles array values?", a: "map()" },
  { q: "How do you define an arrow function?", a: "() => {}" },
  { q: "Which operator copies object properties?", a: "spread ..." },
  { q: "Which keyword declares a constant?", a: "const" },
  { q: "How do you embed expressions in strings?", a: "template literals" },
  { q: "What does destructuring do?", a: "Extract values" },
  { q: "Objects can contain?", a: "Key-value pairs" },
  { q: "Which method adds an element to an array?", a: "push()" },
  { q: "Advanced JS features help to?", a: "Simplify development" },
];



export default function AdvancedTest() {
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

      localStorage.setItem("advancedProgress", "1");

      setTimeout(() => {
        setShowTrophy(false);
        setShowConfetti(false);
        alert(`🎉 Test passed! Advanced Level 1 unlocked. (Score: ${score}/10)`);
        navigate("/advanced");
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
      <button className="back-button" onClick={() => navigate("/advanced")}>
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
        🏆 Claim Glory
      </button>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={600}
          gravity={0.2}
        />
      )}

      {showTrophy && (
        <div className="trophy-overlay">
          <div className="trophy">🏆</div>
        </div>
      )}
    </div>
  );
}
