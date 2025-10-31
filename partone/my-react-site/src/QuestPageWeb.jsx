import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGame } from './GameContext';

const QuestPageWeb = () => {
  const { type, level } = useParams();
  const navigate = useNavigate();
  const { scores, challengeProgress, updateScore, updateChallengeProgress, addStars, addBadge, updateStreak, unlockedOffensive, unlockedDefensive, setUnlockedOffensive, setUnlockedDefensive, unlockNext } = useGame();

  const [dedicatedQuiz, setDedicatedQuiz] = useState(false);
  const [dedicatedScore, setDedicatedScore] = useState(0);
  const [dedicatedQuestion, setDedicatedQuestion] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showTheory, setShowTheory] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  const dedicatedQuestions = {
    frontend: {
      expert: [ /* same structure as Web Frontend expert */
        { q: "What is a component?", options: ["UI block", "Server", "DB"], correct: 0 },
        { q: "What is state?", options: ["UI data", "A CSS rule", "A font"], correct: 0 },
        { q: "What is SSR?", options: ["Server-side rendering", "Style sheet", "Script"], correct: 0 },
        { q: "What is a bundler?", options: ["Tool that packages code", "A DB", "An image"], correct: 0 },
        { q: "What is tree-shaking?", options: ["Removing unused code", "A CSS method", "A deploy step"], correct: 0 },
        { q: "What is responsive design?", options: ["Adaptive layouts", "Only mobile", "Only desktop"], correct: 0 },
        { q: "What is accessibility?", options: ["Making usable for all", "A testing library", "A server"], correct: 0 },
        { q: "What is progressive enhancement?", options: ["Build basic features first", "Only progressive apps", "A CSS trick"], correct: 0 },
        { q: "What is virtual DOM?", options: ["In-memory DOM", "Real DOM", "A server"], correct: 0 },
        { q: "What is hydration?", options: ["Making static markup interactive", "Hydrating images", "Compressing CSS"], correct: 0 }
      ],
      advanced: [ /* placeholder for advanced */ ],
    },
    backend: {
      expert: [ /* backend expert */
        { q: "What is an API?", options: ["Interface for communication", "UI component", "A font"], correct: 0 }
      ],
      advanced: [ /* backend advanced */ ]
    }
  };

  const challenges = {
    frontend: {
      beginner: [
        { theory: "Introduction to Frontend: HTML elements and structure.", quiz: { q: "What is HTML used for?", options: ["Structure content", "Styling only", "Server logic"], correct: 0 } },
        { theory: "CSS basics and the box model.", quiz: { q: "What does the CSS box model include?", options: ["Margin, border, padding, content", "Only padding", "Only margin"], correct: 0 } },
        { theory: "JavaScript fundamentals and DOM manipulation.", quiz: { q: "What is the DOM?", options: ["Document Object Model", "A font", "A server"], correct: 0 } },
        { theory: "Responsive layouts and media queries.", quiz: { q: "What are media queries used for?", options: ["Adapt styles to screen sizes", "Load images", "Encrypt data"], correct: 0 } },
        { theory: "Intro to accessibility and semantic HTML.", quiz: { q: "Why semantic HTML matters?", options: ["Improves accessibility and SEO", "Slows pages", "Only for styling"], correct: 0 } },
        { theory: "Debugging with browser devtools.", quiz: { q: "What can you inspect with DevTools?", options: ["DOM, network, performance", "Only CSS", "Only images"], correct: 0 } },
        { theory: "Forms and client-side validation.", quiz: { q: "Where validate data for best UX?", options: ["Client and server", "Only client", "Only server"], correct: 0 } },
        { theory: "Module systems and bundlers.", quiz: { q: "What is a bundler?", options: ["Packages assets for production", "A CSS rule", "A DB"], correct: 0 } },
        { theory: "Performance basics and image optimization.", quiz: { q: "Why optimize images?", options: ["Improve load times", "Increase size", "Only for SEO"], correct: 0 } },
        { theory: "Final Challenge: multiple quizzes.", quizzes: [
          { q: "Q1", options: ["A","B","C"], correct: 0 },
          { q: "Q2", options: ["A","B","C"], correct: 1 },
          { q: "Q3", options: ["A","B","C"], correct: 2 },
          { q: "Q4", options: ["A","B","C"], correct: 0 },
          { q: "Q5", options: ["A","B","C"], correct: 1 },
          { q: "Q6", options: ["A","B","C"], correct: 2 },
          { q: "Q7", options: ["A","B","C"], correct: 0 },
          { q: "Q8", options: ["A","B","C"], correct: 1 },
          { q: "Q9", options: ["A","B","C"], correct: 2 },
          { q: "Q10", options: ["A","B","C"], correct: 0 }
        ] }
      ],
      expert: [ /* ... */ ],
      advanced: [ /* ... */ ]
    },
    backend: {
      beginner: [
        { theory: "Introduction to Backend: servers and routing.", quiz: { q: "What does a server do?", options: ["Serve responses to clients", "Style pages", "Store fonts"], correct: 0 } },
        { theory: "Databases and basic CRUD operations.", quiz: { q: "What does CRUD stand for?", options: ["Create Read Update Delete", "Compute Render Update Delete", "None"], correct: 0 } },
        { theory: "APIs and REST principles.", quiz: { q: "What is REST?", options: ["Architectural style for APIs", "A CSS framework", "A font"], correct: 0 } },
        { theory: "Authentication and sessions.", quiz: { q: "What is authentication?", options: ["Verifying user identity", "Styling a page", "Compressing images"], correct: 0 } },
        { theory: "Caching and performance.", quiz: { q: "Why cache?", options: ["Improve response times", "Slow down servers", "Only for images"], correct: 0 } },
        { theory: "Logging and monitoring.", quiz: { q: "What is logging for?", options: ["Debugging and auditing", "Only styling", "Only fonts"], correct: 0 } },
        { theory: "Scaling basics and load balancing.", quiz: { q: "What is load balancing?", options: ["Distributing traffic", "A CSS method", "A DB"], correct: 0 } },
        { theory: "Security basics and input validation.", quiz: { q: "Why validate input?", options: ["Prevent injection and errors", "Improve styles", "Faster images"], correct: 0 } },
        { theory: "Deployment and CI/CD basics.", quiz: { q: "What is CI?", options: ["Continuous Integration", "A CSS rule", "A font"], correct: 0 } },
        { theory: "Final Challenge: multiple quizzes.", quizzes: [
          { q: "Q1", options: ["A","B","C"], correct: 0 },
          { q: "Q2", options: ["A","B","C"], correct: 1 },
          { q: "Q3", options: ["A","B","C"], correct: 2 },
          { q: "Q4", options: ["A","B","C"], correct: 0 },
          { q: "Q5", options: ["A","B","C"], correct: 1 },
          { q: "Q6", options: ["A","B","C"], correct: 2 },
          { q: "Q7", options: ["A","B","C"], correct: 0 },
          { q: "Q8", options: ["A","B","C"], correct: 1 },
          { q: "Q9", options: ["A","B","C"], correct: 2 },
          { q: "Q10", options: ["A","B","C"], correct: 0 }
        ] }
      ],
      expert: [ /* ... */ ],
      advanced: [ /* ... */ ]
    }
  };

  useEffect(() => {
    const isFrontend = type === 'frontend';
    const unlocked = level === 'beginner' || (isFrontend ? unlockedOffensive[level] : unlockedDefensive[level]);
    if (!unlocked) {
      setDedicatedQuiz(true);
    } else {
      setCurrentChallenge(challengeProgress[type]?.[level] ?? 0);
    }
  }, [type, level, scores, challengeProgress, unlockedOffensive, unlockedDefensive]);

  const handleDedicatedAnswer = (index) => {
    if (index === dedicatedQuestions[type][level][dedicatedQuestion].correct) {
      setDedicatedScore(dedicatedScore + 1);
    }
    if (dedicatedQuestion < 9) {
      setDedicatedQuestion(dedicatedQuestion + 1);
    } else {
      if (dedicatedScore + (index === dedicatedQuestions[type][level][dedicatedQuestion].correct ? 1 : 0) >= 8) {
        if (type === 'frontend') {
          if (level === 'expert') setUnlockedOffensive(prev => ({ ...prev, expert: true }));
          if (level === 'advanced') setUnlockedOffensive(prev => ({ ...prev, advanced: true }));
        } else if (type === 'backend') {
          if (level === 'expert') setUnlockedDefensive(prev => ({ ...prev, expert: true }));
          if (level === 'advanced') setUnlockedDefensive(prev => ({ ...prev, advanced: true }));
        }
        setDedicatedQuiz(false);
        setCurrentChallenge(0);
      } else {
        setDedicatedScore(0);
        setDedicatedQuestion(0);
      }
    }
  };

  const handleQuizAnswer = (index) => {
    const challenge = challenges[type][level][currentChallenge];
    const quiz = challenge.quiz || challenge.quizzes[currentQuiz];
    if (index === quiz.correct) {
      setQuizScore(quizScore + 1);
    }
    if (currentChallenge < 9) {
      if (quizScore + (index === quiz.correct ? 1 : 0) >= 1) {
        updateChallengeProgress(type, level, currentChallenge + 1);
        setCurrentChallenge(currentChallenge + 1);
        setQuizScore(0);
        setShowTheory(true);
      } else {
        setQuizScore(0);
      }
    } else {
      if (currentQuiz < 9) {
        setCurrentQuiz(currentQuiz + 1);
      } else {
        const finalScore = quizScore + (index === quiz.correct ? 1 : 0);
        updateScore(type, level, finalScore);
        addStars(finalScore);
        if (finalScore >= 8) addBadge(`${type}-${level}`);
        updateStreak(finalScore >= 7 ? 1 : 0);
        setShowFeedback(true);
        if (finalScore >= 8) unlockNext(type, level);
      }
    }
  };

  if (dedicatedQuiz) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'black',
        color: 'white',
        padding: '2rem'
      }}>
        <h1>Dedicated Quiz to Unlock {level.toUpperCase()}</h1>
        <p>Question {dedicatedQuestion + 1} of 10</p>
        <h2>{dedicatedQuestions[type][level][dedicatedQuestion]?.q}</h2>
        {dedicatedQuestions[type][level][dedicatedQuestion]?.options.map((opt, i) => (
          <button key={i} onClick={() => handleDedicatedAnswer(i)} style={{
            display: 'block',
            width: '100%',
            padding: '1rem',
            margin: '0.5rem 0',
            background: 'gray',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px'
          }}>
            {opt}
          </button>
        ))}
      </div>
    );
  }

  if (showFeedback) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1>Quest Complete! 🎉</h1>
        <p>Score: {quizScore}/10</p>
        <button onClick={() => navigate(`/${type}-quests`)} style={{ padding: '1rem', marginTop: '1rem' }}>Back to Map</button>
      </div>
    );
  }

  const challenge = challenges[type][level][currentChallenge];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'black',
      color: 'white',
      padding: '2rem',
      position: 'relative'
    }}>
      <button onClick={() => navigate(`/${type}-quests`)} style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        background: 'transparent',
        border: '2px solid white',
        color: 'white',
        padding: '0.5rem',
        cursor: 'pointer'
      }}>Back</button>

      <h1>Challenge {currentChallenge + 1} of 10</h1>
      {showTheory ? (
        <div>
          <p>{challenge.theory}</p>
          <button onClick={() => setShowTheory(false)} style={{ padding: '1rem', marginTop: '1rem' }}>Start Quiz</button>
        </div>
      ) : (
        <div>
          <h2>{challenge.quiz ? challenge.quiz.q : challenge.quizzes[currentQuiz].q}</h2>
          {(challenge.quiz ? [challenge.quiz] : [challenge.quizzes[currentQuiz]]).map((q, i) => (
            q.options.map((opt, j) => (
              <button key={j} onClick={() => handleQuizAnswer(j)} style={{
                display: 'block',
                width: '100%',
                padding: '1rem',
                margin: '0.5rem 0',
                background: 'gray',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px'
              }}>
                {opt}
              </button>
            ))
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestPageWeb;
