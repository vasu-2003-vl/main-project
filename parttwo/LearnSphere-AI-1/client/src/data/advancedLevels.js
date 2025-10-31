// src/data/advancedLevels.js

export const ADVANCED_LEVELS = [
 {
    id: 1,
    title: "Introduction to React.js – Components & Props",
    sections: [
      {
        title: "What is React & Why Use It?",
        content: `React is a popular JavaScript library developed by Facebook for building fast and interactive user interfaces. 
 -It uses a component-based architecture, allowing developers to break UI into reusable pieces. 
 -React improves performance by using a Virtual DOM to minimize direct DOM manipulations. 
 -It is widely used for SPAs (Single Page Applications) where the UI needs frequent updates without page reloads.`
      },
      {
        title: "Creating Components",
        content: `Components are the building blocks of React apps. They can be functional or class-based.
-Functional components are simple JS functions returning JSX.
-Class components provide additional features like lifecycle methods and state management.
-Breaking UI into components makes code modular, maintainable, and reusable.`
      },
      {
        title: "JSX Basics & Passing Props",
        content: `JSX allows you to write HTML-like syntax inside JavaScript, making UI code more readable. 
-Props (short for properties) are used to pass data from parent to child components.
-Props are read-only, making components predictable and reusable.`
      }
    ],
    codeExample: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name='Pratiksha' />`,
    questions: [
      { question: "React is used for?", options: ["Building UIs", "Server-side scripting"], answer: "Building UIs" },
      { question: "JSX allows?", options: ["HTML in JS", "CSS in JS only"], answer: "HTML in JS" },
      { question: "Props are used to?", options: ["Pass data to components", "Style components"], answer: "Pass data to components" },
      { question: "Components can be?", options: ["Functional or Class", "Only Functional"], answer: "Functional or Class" },
      { question: "React uses?", options: ["Virtual DOM", "Real DOM only"], answer: "Virtual DOM" }
    ]
  },
 {
    id: 2,
    title: "React State & Lifecycle Methods / Hooks",
    sections: [
      { title: "State & setState", content: `State is an object that stores dynamic data in components. 
-Changing state triggers a re-render, updating the UI automatically. 
-In class components, setState() updates state safely. 
-Functional components manage state using useState hook.` },
      { title: "Lifecycle Methods", content: `Class components have lifecycle methods like:
- componentDidMount: runs after component mounts
- componentDidUpdate: runs after updates
- componentWillUnmount: runs before unmounting
These help manage side effects like API calls or subscriptions.` },
      { title: "Hooks (useState, useEffect)", content: `Hooks let functional components manage state and side effects. 
- useState: manage component state
- useEffect: handle side effects like data fetching, subscriptions, or DOM updates
Hooks make functional components as powerful as class components.` },
      { title: "Example: Counter App", content: `A simple counter app demonstrates state management:
useState initializes count, buttons increment/decrement the value.
The UI updates automatically whenever state changes.` }
    ],
    codeExample: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}`,
    questions: [
      { question: "useState is used to?", options: ["Manage state", "Manage styles"], answer: "Manage state" },
      { question: "componentDidMount runs?", options: ["After component mounts", "Before component mounts"], answer: "After component mounts" },
      { question: "Hooks can be used in?", options: ["Functional components", "Class components"], answer: "Functional components" },
      { question: "setState triggers?", options: ["Re-render", "Style change"], answer: "Re-render" },
      { question: "useEffect handles?", options: ["Side effects", "State only"], answer: "Side effects" }
    ]
  },
 {
    id: 3,
    title: "React Routing & Navigation",
    sections: [
      { title: "React Router Basics", content: `React Router enables navigation between components in SPAs without reloading the page.
It keeps the UI in sync with the URL, allowing dynamic routing based on application state.` },
      { title: "Route, Link, NavLink", content: `- Route: maps URL paths to components
- Link: navigate between routes without refreshing
- NavLink: like Link but can apply active styles to highlight the current page` },
      { title: "Dynamic Routes", content: `Dynamic routes allow rendering based on URL parameters.
Example: /user/:id will render the user profile component for the given id parameter.
This is useful for profile pages, product pages, or blogs.` },
      { title: "Example: Multi-Page App", content: `Create multiple pages like Home, About, Contact.
Use Router, Route, and Link to navigate seamlessly without full page reloads.` }
    ],
    codeExample: `import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}`,
    questions: [
      { question: "React Router is used for?", options: ["Navigation in SPAs", "Database operations"], answer: "Navigation in SPAs" },
      { question: "NavLink is used to?", options: ["Highlight active link", "Render components only"], answer: "Highlight active link" },
      { question: "Dynamic route example?", options: ["/user/:id", "/home"], answer: "/user/:id" },
      { question: "Routes component is used to?", options: ["Wrap multiple Route components", "Style buttons"], answer: "Wrap multiple Route components" },
      { question: "Link component does?", options: ["Navigate without page reload", "Submit forms"], answer: "Navigate without page reload" }
    ]
  },
 {
    id: 4,
    title: "State Management with Redux / Context API",
    sections: [
      { title: "Why State Management?", content: `In large applications, passing state through multiple layers becomes difficult. 
State management libraries like Redux or Context API centralize app state, making it accessible anywhere in the component tree.` },
      { title: "Redux Basics", content: `Redux stores the state in a single store.
Components dispatch actions to update state.
Reducers are pure functions that define how state changes.
Redux DevTools help debug state changes.` },
      { title: "Context API", content: `Context API allows passing data through component tree without prop drilling.
Create a context, wrap components with Provider, and consume with useContext hook.
Ideal for small to medium apps or themes, user auth, and settings.` },
      { title: "Example: Theme Switcher", content: `Toggle dark/light theme using Context API.
Components subscribe to context value to update UI automatically.` }
    ],
    codeExample: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>;
}`,
    questions: [
      { question: "Redux uses?", options: ["Store, Actions, Reducers", "State only"], answer: "Store, Actions, Reducers" },
      { question: "Context API avoids?", options: ["Prop drilling", "Component reuse"], answer: "Prop drilling" },
      { question: "useContext is a?", options: ["Hook", "Class method"], answer: "Hook" },
      { question: "State management is needed for?", options: ["Large apps", "Small apps only"], answer: "Large apps" },
      { question: "Theme switcher example uses?", options: ["Redux or Context", "CSS only"], answer: "Redux or Context" }
    ]
  },
  {
    id: 5,
    title: "Introduction to TypeScript in Frontend",
    sections: [
      { title: "What is TypeScript?", content: "TypeScript is a typed superset of JavaScript that compiles to plain JS." },
      { title: "Benefits over JavaScript", content: "TypeScript offers static typing, better error detection, and easier maintenance." },
      { title: "Basic Types & Interfaces", content: "Use types like string, number, boolean; interfaces define object structures." },
      { title: "Using TypeScript with React", content: "TypeScript improves React code safety with typed props and state." }
    ],
    codeExample: "interface Props { name: string; age: number; }\nfunction User(props: Props) {\n  return <div>{props.name} - {props.age}</div>;\n}",
    questions: [
      { question: "TypeScript is a?", options: ["Typed JS superset", "CSS framework"], answer: "Typed JS superset" },
      { question: "Interfaces define?", options: ["Object structures", "Variables only"], answer: "Object structures" },
      { question: "TypeScript helps in?", options: ["Error detection", "Styling"], answer: "Error detection" },
      { question: "Props can be typed using?", options: ["Interfaces", "useState only"], answer: "Interfaces" },
      { question: "TypeScript compiles to?", options: ["JavaScript", "HTML"], answer: "JavaScript" }
    ]
  },
  {
    id: 6,
    title: "Next.js Basics – Server-side Rendering & Routing",
    sections: [
      { title: "What is Next.js?", content: "Next.js is a React framework for building server-rendered and static web applications with routing built-in." },
      { title: "File-based Routing", content: "Pages are created by adding files in the 'pages' directory. File names define the route paths automatically." },
      { title: "SSR vs CSR vs SSG", content: "SSR renders on the server, CSR renders on the client, SSG pre-generates pages at build time." },
      { title: "Example Project Setup", content: "A Next.js app with pages/index.js for home and pages/about.js for about page navigation." }
    ],
    codeExample: "import Link from 'next/link';\nfunction Home() {\n  return <Link href='/about'>Go to About</Link>;\n}\nexport default Home;",
    questions: [
      { question: "Next.js is built on?", options: ["React", "Angular"], answer: "React" },
      { question: "File-based routing uses?", options: ["Pages directory", "Components only"], answer: "Pages directory" },
      { question: "SSR stands for?", options: ["Server-side rendering", "Static site rendering"], answer: "Server-side rendering" },
      { question: "SSG pre-generates pages at?", options: ["Build time", "Runtime"], answer: "Build time" },
      { question: "Next.js allows?", options: ["SSR, CSR, SSG", "Only CSR"], answer: "SSR, CSR, SSG" }
    ]
  },
  {
    id: 7,
    title: "API Integration in React (REST & GraphQL)",
    sections: [
      { title: "REST API Integration", content: "REST APIs allow fetching data via HTTP methods. React fetches data using fetch or axios." },
      { title: "GraphQL Basics", content: "GraphQL lets clients request exactly the data they need from a single endpoint." },
      { title: "Using Apollo Client", content: "Apollo Client connects React with GraphQL servers for queries and mutations." },
      { title: "Example: Fetch & Display Data", content: "Fetch user list from an API and display using map function in React." }
    ],
    codeExample: "import { useEffect, useState } from 'react';\nfunction Users() {\n  const [users, setUsers] = useState([]);\n  useEffect(() => { fetch('/api/users').then(r=>r.json()).then(setUsers); }, []);\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}",
    questions: [
      { question: "REST API uses?", options: ["HTTP methods", "GraphQL queries"], answer: "HTTP methods" },
      { question: "GraphQL allows?", options: ["Request specific data", "Fetch all data always"], answer: "Request specific data" },
      { question: "Apollo Client is for?", options: ["GraphQL integration", "CSS styling"], answer: "GraphQL integration" },
      { question: "Fetch data in React using?", options: ["fetch or axios", "DOM only"], answer: "fetch or axios" },
      { question: "React map function is used to?", options: ["Render lists", "Update state only"], answer: "Render lists" }
    ]
  },
  {
    id: 8,
    title: "Authentication & Authorization in Frontend",
    sections: [
      { title: "Auth vs Authorization", content: "Authentication verifies identity; authorization determines access levels and permissions." },
      { title: "JWT Tokens", content: "JWT tokens securely transmit user info between client and server for authentication." },
      { title: "Role-based Access Control", content: "Assign roles like admin or user to control which components/pages are accessible." },
      { title: "Example: Login/Logout System", content: "Login form generates token; token stored in localStorage and checked for protected routes." }
    ],
    codeExample: "function Protected() {\n  const token = localStorage.getItem('token');\n  if(!token) return <p>Access Denied</p>;\n  return <Dashboard />;\n}",
    questions: [
      { question: "Authentication is?", options: ["Verify identity", "Grant access"], answer: "Verify identity" },
      { question: "Authorization is?", options: ["Grant access", "Verify identity"], answer: "Grant access" },
      { question: "JWT is used for?", options: ["Secure info transfer", "Styling"], answer: "Secure info transfer" },
      { question: "Role-based access controls?", options: ["Restrict pages/components", "Update state"], answer: "Restrict pages/components" },
      { question: "Login token stored in?", options: ["localStorage", "DOM only"], answer: "localStorage" }
    ]
  },
  {
    id: 9,
    title: "Performance Optimization in Frontend",
    sections: [
      { title: "Why Performance Matters", content: "Fast apps improve user experience, retention, and SEO rankings." },
      { title: "Lazy Loading", content: "Load images or components only when needed to reduce initial load time." },
      { title: "Code Splitting", content: "Split code into smaller bundles to avoid loading unnecessary scripts upfront." },
      { title: "Caching Strategies", content: "Use browser caching, service workers, and memoization to speed up apps." }
    ],
    codeExample: "import React, { lazy, Suspense } from 'react';\nconst LazyComp = lazy(() => import('./Component'));\n<Suspense fallback={<p>Loading...</p>}><LazyComp /></Suspense>",
    questions: [
      { question: "Lazy loading helps?", options: ["Reduce initial load", "Improve styling"], answer: "Reduce initial load" },
      { question: "Code splitting is?", options: ["Divide JS bundles", "Divide CSS only"], answer: "Divide JS bundles" },
      { question: "Caching improves?", options: ["App speed", "Form validation"], answer: "App speed" },
      { question: "Performance affects?", options: ["User experience & SEO", "Backend only"], answer: "User experience & SEO" },
      { question: "Suspense is used for?", options: ["Lazy components fallback", "Styling components"], answer: "Lazy components fallback" }
    ]
  },
  {
    id: 10,
    title: "Frontend Project Deployment (Netlify, Vercel, GitHub Pages)",
    sections: [
      { title: "Hosting Options", content: "Netlify, Vercel, and GitHub Pages provide free and easy hosting for frontend apps." },
      { title: "Deploying with Netlify/Vercel", content: "Connect Git repo and deploy with one click; supports continuous deployment." },
      { title: "GitHub Pages Setup", content: "Push frontend code to main branch and enable Pages from repository settings." },
      { title: "Continuous Deployment Basics", content: "CI/CD automates build and deployment on every commit for faster delivery." }
    ],
    codeExample: "npm run build\nnetlify deploy --prod\n# or push to GitHub Pages branch gh-pages",
    questions: [
      { question: "Netlify and Vercel are?", options: ["Hosting platforms", "JS frameworks"], answer: "Hosting platforms" },
      { question: "GitHub Pages hosts?", options: ["Frontend apps", "Databases"], answer: "Frontend apps" },
      { question: "CI/CD automates?", options: ["Build & deploy", "Manual coding"], answer: "Build & deploy" },
      { question: "Continuous deployment triggers on?", options: ["Every commit", "Only first commit"], answer: "Every commit" },
      { question: "Connecting Git repo to Netlify does?", options: ["One-click deploy", "Style only"], answer: "One-click deploy" }
    ]
  }

];
