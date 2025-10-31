// src/data/intermediateLevels.js
export const INTERMEDIATE_LEVELS = [
  {
    id: 1,
    title: "DOM Manipulation with JavaScript",
    sections: [
      {
        title: "What is the DOM?",
        content:  `DOM (Document Object Model) is a tree-like structure that represents an HTML page.
Every HTML element becomes a "node" in the DOM, and JavaScript can interact with it.
The DOM lets us create dynamic websites by changing content, styles, and structure in real-time.

Example:
document.body.style.background = "lightblue";`
      },
      {
        title: "Selecting Elements",
        content: `We can access elements using different methods:
- getElementById("id") → Selects element by ID
- getElementsByClassName("class") → Returns collection of elements
- getElementsByTagName("tag") → Returns elements by tag name
- querySelector("selector") → Returns the first matching element
- querySelectorAll("selector") → Returns all matching elements

Example:
let title = document.querySelector('h1');
let items = document.querySelectorAll('.list-item');`
      },
      {
        title: "Changing Content & Styles",
        content: `JavaScript can change inner text, HTML, and CSS styles of elements.

Example:
document.getElementById('demo').innerText = "Hello World!";
document.getElementById('demo').innerHTML = "<b>Bold Text</b>";
document.getElementById('demo').style.color = "red";
document.getElementById('demo').style.fontSize = "20px";`
      },
      {
        title: "Creating & Removing Elements",
        content: `We can create new elements and add them to the page.
We can also remove existing elements.

Example:
let p = document.createElement('p');
p.innerText = 'New Paragraph';
document.body.appendChild(p);
document.body.removeChild(p);`
      },
      {
        title: "Event-Based DOM Updates",
        content: `DOM can be updated when events happen (click, hover, input).

Example:
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('msg').innerText = 'Button Clicked!';
});`
      },
      {
        title: "Summary",
        content: `• DOM = tree structure of HTML
• JavaScript selects and modifies elements
• We can change content, styles, create, or remove elements
• Event-based DOM updates make pages interactive Core of dynamic web applications.
• Select elements → querySelector, getElementById, etc.  
• Modify content → innerText, innerHTML  
• Modify styles → element.style  
• Create/remove elements → createElement, appendChild, removeChild  
• Work with attributes and classes for better styling control  
• Navigate DOM tree using parent/child/sibling relations`
      }
    ],
    codeExample: `<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Welcome</h1>
    <p id="msg">Original Text</p>
    <button id="btn">Click Me</button>
    <script>
      document.getElementById('title').style.color = 'blue';
      document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('msg').innerText = 'Button Clicked!';
      });
    </script>
  </body>
</html>`,
    questions: [
      { question: "DOM stands for?", options: ["Document Object Model", "Data Object Manager"], answer: "Document Object Model" },
      { question: "Which method selects an element by ID?", options: ["querySelector()", "getElementById()"], answer: "getElementById()" },
      { question: "Which property changes inner text?", options: ["innerText", "value"], answer: "innerText" },
      { question: "Which method adds new elements?", options: ["appendChild()", "deleteChild()"], answer: "appendChild()" },
      { question: "Event-based DOM updates happen on?", options: ["Page load only", "User actions like click"], answer: "User actions like click" }
    ]
  },
  // Add this as id: 2 in src/data/intermediateLevels.js
{
  id: 2,
  title: "Advanced JavaScript Concepts: Objects, Arrays & ES6 Features",
  sections: [
    {
      title: "Objects in JavaScript",
      content: `Objects store data in key-value pairs.
They can also contain methods (functions).

Example:
let person = { name: 'Alice', age: 22, greet: function(){ console.log('Hi'); } };`
    },
    {
      title: "Arrays in JavaScript",
      content: `Arrays hold multiple values in a single variable.
They have built-in methods like push, pop, map, filter, reduce.

Example:
let numbers = [1, 2, 3, 4];
numbers.push(5);
let doubled = numbers.map(n => n * 2);`
    },
    {
      title: "ES6 – Let & Const",
      content: `ES6 introduced block-scoped variables.
let: re-assignable, block scope
const: constant, cannot be reassigned

Example:
let x = 10;
const PI = 3.14;`
    },
    {
      title: "ES6 – Arrow Functions & Template Literals",
      content: `Arrow functions are shorter function syntax.
Template literals allow embedded expressions using backticks.

Example:
const greet = name => \`Hello, \${name}\`;
console.log(greet('Alice'));`
    },
    {
      title: "ES6 – Destructuring & Spread",
      content: `Destructuring extracts values from objects/arrays.
Spread operator expands arrays or objects.

Example:
let [a, b] = [1, 2];
let obj = { ...person, city: 'Paris' };`
    },
    {
      title: "Summary",
      content: `• Objects = key-value pairs with methods
• Arrays = lists with powerful methods (map, filter, reduce)
• ES6 introduced let, const, arrow functions, template literals
• Destructuring & spread make code cleaner
Advanced features simplify JavaScript development`
    }
  ],
  codeExample: `// Objects
let person = { name: 'Alice', age: 22, greet: function(){ console.log('Hi'); } };

// Arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
let doubled = numbers.map(n => n*2);

// ES6 – let & const
let x = 10;
const PI = 3.14;

// ES6 – Arrow Functions & Template Literals
const greet = name => \`Hello, \${name}\`;
console.log(greet('Alice'));

// ES6 – Destructuring & Spread
let [a, b] = [1, 2];
let obj = { ...person, city: 'Paris' };`,
  questions: [
    {
      question: "How do you define an object in JavaScript?",
      options: ["Using key-value pairs", "Using arrays"], 
      answer: "Using key-value pairs"
    },
    {
      question: "Which array method creates a new array by applying a function to each element?",
      options: ["filter()", "map()"], 
      answer: "map()"
    },
    {
      question: "Which keyword declares a block-scoped variable that cannot be reassigned?",
      options: ["let", "const"], 
      answer: "const"
    },
    {
      question: "How do you write a short function in ES6?",
      options: ["function keyword", "Arrow function"], 
      answer: "Arrow function"
    },
    {
      question: "Which operator allows copying properties of an object or array?",
      options: ["Destructuring", "Spread operator"], 
      answer: "Spread operator"
    }
  ]
},
{
  id: 3,
  title: "JavaScript Events & Event Delegation",
  sections: [
    {
      title: "What are Events?",
      content: `Events are actions that occur in the browser.
Examples: clicks, key presses, mouse movements, form submissions.

Example:
<button onclick="alert('Clicked!')">Click Me</button>`
    },
    {
      title: "Adding Event Listeners",
      content: `Event listeners allow you to respond to events with JavaScript.

Example:
document.getElementById('btn').addEventListener('click', () => {
  console.log('Button Clicked');
});`
    },
    {
      title: "Event Bubbling & Capturing",
      content: `Events travel through the DOM in two phases:
- Capturing Phase: from root to target
- Bubbling Phase: from target back to root

Example:
A click on a child triggers parent handlers too.`
    },
    {
      title: "What is Event Delegation?",
      content: `Event delegation allows handling events for multiple child elements by attaching a single listener to their parent.

Example:
document.getElementById('list').addEventListener('click', (e) => {
  if(e.target.tagName === 'LI') {
    console.log('Item clicked:', e.target.innerText);
  }
});`
    },
    {
      title: "Summary",
      content: `• Events = user/browser actions (click, keypress, etc.)
• Event listeners respond to these actions
• Bubbling & capturing define event flow
• Event delegation improves efficiency for dynamic elements
Makes web apps more interactive and optimized`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <button id="btn">Click Me</button>

    <script>
      document.getElementById('btn').addEventListener('click', () => {
        alert('Button Clicked!');
      });

      document.getElementById('list').addEventListener('click', (e) => {
        if(e.target.tagName === 'LI') {
          console.log('Item clicked:', e.target.innerText);
        }
      });
    </script>
  </body>
</html>`,
  questions: [
    {
      question: "What is an event in JavaScript?",
      options: ["User/browser actions like click", "A function definition"],
      answer: "User/browser actions like click"
    },
    {
      question: "Which method attaches a listener to an element?",
      options: ["addEventListener()", "attachEvent()"],
      answer: "addEventListener()"
    },
    {
      question: "Event delegation helps to?",
      options: ["Attach multiple listeners individually", "Handle multiple child elements with one listener"],
      answer: "Handle multiple child elements with one listener"
    },
    {
      question: "Event bubbling flows from?",
      options: ["Target to root", "Root to target"],
      answer: "Target to root"
    },
    {
      question: "Capturing phase flows from?",
      options: ["Target to root", "Root to target"],
      answer: "Root to target"
    }
  ]
},
{
  id: 4,
  title: "Form Validation with JavaScript",
  sections: [
    {
      title: "What is Form Validation?",
      content: `Form validation ensures that user input meets required rules.
It helps prevent invalid or incomplete data submission.

Example:
Checking if an email field contains '@'.`
    },
    {
      title: "Types of Validation",
      content: `• Client-side validation (done in browser with JavaScript)
• Server-side validation (done on server for security)

Client-side is faster, but server-side is essential for safety.`
    },
    {
      title: "Required Fields",
      content: `We can check if required fields are empty before submitting.

Example:
if(document.getElementById('name').value === '') {
  alert('Name is required');
}`
    },
    {
      title: "Email & Password Validation",
      content: `JavaScript can check formats like email and password strength.

Example:
let email = document.getElementById('email').value;
if(!email.includes('@')) {
  alert('Invalid Email');
}`
    },
    {
      title: "Regex for Advanced Validation",
      content: `Regular expressions (regex) allow complex input checks.

Example:
let pattern = /^[0-9]{10}$/;
if(!pattern.test(phone)) {
  alert('Invalid Phone Number');
}`
    },
    {
      title: "Summary",
      content: `• Form validation ensures correct user input
• Can be client-side (JavaScript) or server-side
• Check required fields, email, password, phone numbers
• Regex enables advanced validation rules
Essential for secure and reliable forms`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <form id="myForm">
      <input type="text" id="name" placeholder="Name" />
      <input type="email" id="email" placeholder="Email" />
      <input type="text" id="phone" placeholder="Phone" />
      <button type="button" id="submitBtn">Submit</button>
    </form>

    <script>
      document.getElementById('submitBtn').addEventListener('click', () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;

        if(name === '') {
          alert('Name is required');
          return;
        }

        if(!email.includes('@')) {
          alert('Invalid Email');
          return;
        }

        let pattern = /^[0-9]{10}$/;
        if(!pattern.test(phone)) {
          alert('Invalid Phone Number');
          return;
        }

        alert('Form submitted successfully!');
      });
    </script>
  </body>
</html>`,
  questions: [
    {
      question: "Form validation ensures?",
      options: ["User input meets rules", "Browser styling changes"],
      answer: "User input meets rules"
    },
    {
      question: "Which validation is done in browser?",
      options: ["Server-side validation", "Client-side validation"],
      answer: "Client-side validation"
    },
    {
      question: "Which code checks if a field is empty?",
      options: ["if(value === '')", "if(value == null)"],
      answer: "if(value === '')"
    },
    {
      question: "What does regex allow in validation?",
      options: ["Complex input checks", "Changing element styles"],
      answer: "Complex input checks"
    },
    {
      question: "Email validation example?",
      options: ["Checking for '@'", "Checking for number of characters only"],
      answer: "Checking for '@'"
    }
  ]
},
{
  id: 5,
  title: "CSS Animations & Transitions",
  sections: [
    {
      title: "What are CSS Transitions?",
      content: `Transitions allow smooth changes between CSS property values.
They occur when an element’s state changes (hover, click).

Example:
button { transition: background 0.5s ease; }
button:hover { background: blue; }`
    },
    {
      title: "Transition Properties",
      content: `• transition-property: CSS property to animate
• transition-duration: How long the transition takes
• transition-timing-function: speed curve (ease, linear)
• transition-delay: Wait before transition starts`
    },
    {
      title: "What are CSS Animations?",
      content: `Animations use @keyframes to define changes over time.
They can create looping and complex motion effects.

Example:
@keyframes move {
  from { left: 0; }
  to { left: 200px; }
}
div { position: relative; animation: move 2s infinite; }`
    },
    {
      title: "Keyframe Animations",
      content: `Keyframes define how an element’s style changes step by step.
We can define from-to or percentage-based animations.

Example:
@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
div { animation: fadeIn 1s ease-in; }`
    },
    {
      title: "Combining Animations & Transitions",
      content: `Animations and transitions can be used together.
Transitions are best for simple effects, animations for complex ones.

Example:
button { transition: transform 0.3s; }
button:hover { transform: scale(1.1); }`
    },
    {
      title: "Summary",
      content: `• Transitions: smooth property changes on events
• Keyframes: define step-by-step animations
• Animations allow looping and complex effects
• Both enhance user experience with motion
Makes websites more engaging and interactive`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <head>
    <style>
      button {
        transition: transform 0.3s, background 0.5s ease;
        background: red;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background: blue;
        transform: scale(1.1);
      }

      #box {
        width: 50px;
        height: 50px;
        background: green;
        position: relative;
        animation: move 2s infinite alternate;
      }

      @keyframes move {
        from { left: 0; }
        to { left: 200px; }
      }
    </style>
  </head>
  <body>
    <button>Hover Me!</button>
    <div id="box"></div>
  </body>
</html>`,
  questions: [
    {
      question: "What do CSS transitions do?",
      options: ["Smooth changes between CSS property values", "Instantly change styles"],
      answer: "Smooth changes between CSS property values"
    },
    {
      question: "Which property defines the duration of a transition?",
      options: ["transition-duration", "animation-duration"],
      answer: "transition-duration"
    },
    {
      question: "What are keyframes used for?",
      options: ["Step-by-step animations", "Single style change"],
      answer: "Step-by-step animations"
    },
    {
      question: "Transitions or animations for complex motion?",
      options: ["Transitions", "Animations"],
      answer: "Animations"
    },
    {
      question: "Can animations and transitions be combined?",
      options: ["Yes", "No"],
      answer: "Yes"
    }
  ]
},
{
  id: 6,
  title: "Bootstrap & Tailwind CSS Basics",
  sections: [
    {
      title: "What is Bootstrap?",
      content: `Bootstrap is a popular CSS framework with pre-built components.
It provides a grid system, buttons, modals, navbars, and more.

Example:
<button class="btn btn-primary">Click Me</button>`
    },
    {
      title: "Bootstrap Grid System",
      content: `Bootstrap uses a 12-column grid system for layouts.
Responsive layouts are made with .container, .row, .col classes.

Example:
<div class="row">
  <div class="col-6">Left</div>
  <div class="col-6">Right</div>
</div>`
    },
    {
      title: "What is Tailwind CSS?",
      content: `Tailwind CSS is a utility-first CSS framework.
It uses classes for direct styling instead of pre-designed components.

Example:
<button class="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>`
    },
    {
      title: "Tailwind Utility Classes",
      content: `Tailwind provides utility classes for styling:
• Colors: text-red-500, bg-green-200
• Spacing: p-4, m-2
• Flex & Grid: flex, grid, gap-4

Example:
<div class="flex justify-center items-center h-screen">Centered</div>`
    },
    {
      title: "Bootstrap vs Tailwind",
      content: `• Bootstrap: Pre-built components, easy to start
• Tailwind: Utility-first, highly customizable
Bootstrap is faster for beginners, Tailwind gives more control

Many projects use a mix of both.`
    },
    {
      title: "Summary",
      content: `• CSS frameworks save time and effort
• Bootstrap offers components + grid system
• Tailwind offers utility classes for custom designs
• Both make responsive design faster and easier
Essential tools for frontend developers`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <head>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <!-- Bootstrap Button -->
    <button class="btn btn-primary m-2">Bootstrap Button</button>

    <!-- Bootstrap Grid -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-6 bg-light p-3">Left</div>
        <div class="col-6 bg-secondary text-white p-3">Right</div>
      </div>
    </div>

    <!-- Tailwind Button -->
    <button class="bg-blue-500 text-white px-4 py-2 rounded m-2">Tailwind Button</button>

    <!-- Tailwind Flexbox Centering -->
    <div class="flex justify-center items-center h-32 bg-gray-200 mt-4">
      Centered Content
    </div>
  </body>
</html>`,
  questions: [
    {
      question: "Bootstrap provides which of the following?",
      options: ["Pre-built components and grid system", "Only utility classes"],
      answer: "Pre-built components and grid system"
    },
    {
      question: "Tailwind CSS is a?",
      options: ["Utility-first CSS framework", "Component-based framework"],
      answer: "Utility-first CSS framework"
    },
    {
      question: "How many columns are in Bootstrap's grid system?",
      options: ["12", "10"],
      answer: "12"
    },
    {
      question: "Which framework is more customizable via utilities?",
      options: ["Bootstrap", "Tailwind CSS"],
      answer: "Tailwind CSS"
    },
    {
      question: "Can Bootstrap and Tailwind be used together?",
      options: ["Yes", "No"],
      answer: "Yes"
    }
  ]
},
{
  id: 7,
  title: "JavaScript Fetch API & AJAX Basics",
  sections: [
    {
      title: "What is AJAX?",
      content: `AJAX (Asynchronous JavaScript and XML) allows web pages to update
without reloading by exchanging data with a server in the background.

Example: Loading new comments without refreshing the page.`
    },
    {
      title: "Fetch API Introduction",
      content: `Fetch API is a modern way to make HTTP requests in JavaScript.
It returns a Promise that resolves with the response.

Example:
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log(data));`
    },
    {
      title: "GET Request with Fetch",
      content: `GET is used to retrieve data from a server.

Example:
fetch('https://api.example.com/users')
  .then(res => res.json())
  .then(data => console.log(data));`
    },
    {
      title: "POST Request with Fetch",
      content: `POST is used to send data to the server.

Example:
fetch('https://api.example.com/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});`
    },
    {
      title: "Handling Errors",
      content: `Always handle errors in network requests.

Example:
fetch('wrong-url')
  .then(res => res.json())
  .catch(error => console.error('Error:', error));`
    },
    {
      title: "Summary",
      content: `• AJAX enables background server communication
• Fetch API is the modern replacement for XMLHttpRequest
• GET retrieves data, POST sends data
• Always handle errors for reliable apps
Used in APIs, forms, dynamic content loading`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <h2>Fetch API Example</h2>
    <button id="loadBtn">Load Users</button>
    <ul id="userList"></ul>

    <script>
      const btn = document.getElementById('loadBtn');
      const list = document.getElementById('userList');

      btn.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(data => {
            list.innerHTML = '';
            data.forEach(user => {
              const li = document.createElement('li');
              li.innerText = user.name;
              list.appendChild(li);
            });
          })
          .catch(err => console.error('Error:', err));
      });
    </script>
  </body>
</html>`,
  questions: [
    {
      question: "AJAX allows web pages to?",
      options: ["Update without reloading", "Reload every time"], 
      answer: "Update without reloading"
    },
    {
      question: "Fetch API returns?",
      options: ["A Promise", "A String"], 
      answer: "A Promise"
    },
    {
      question: "Which HTTP method retrieves data?",
      options: ["GET", "POST"], 
      answer: "GET"
    },
    {
      question: "Which HTTP method sends data to the server?",
      options: ["POST", "GET"], 
      answer: "POST"
    },
    {
      question: "Why should we handle errors in fetch requests?",
      options: ["For reliable apps", "No need to handle"], 
      answer: "For reliable apps"
    }
  ]
},
{
  id: 8,
  title: "Git & GitHub for Frontend Developers",
  sections: [
    {
      title: "What is Git?",
      content: `Git is a version control system that tracks code changes.
It allows developers to manage different versions of their code.

Example: git init, git add, git commit`
    },
    {
      title: "What is GitHub?",
      content: `GitHub is a cloud platform for hosting Git repositories.
It enables collaboration, code sharing, and project management.

Example: Pushing code to GitHub repository.`
    },
    {
      title: "Common Git Commands",
      content: `git init → Initialize repo
git add . → Stage changes
git commit -m "message" → Save snapshot
git status → Check status
git log → Show history`
    },
    {
      title: "Working with GitHub",
      content: `Steps to connect local repo with GitHub:
1. git remote add origin <repo-url>
2. git push -u origin main
3. git pull origin main

Enables collaboration with teams.`
    },
    {
      title: "Branching & Merging",
      content: `Branches allow working on features separately.
Merging combines them into main branch.

Example:
git checkout -b feature
git merge feature`
    },
    {
      title: "Summary",
      content: `• Git tracks code changes locally
• GitHub hosts repositories online
• Git commands manage commits, branches, merges
• Collaboration made easy with push, pull, and forks

Essential skill for every frontend developer`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <h2>Git Commands Example</h2>
    <p>Open terminal in your project folder and try:</p>
    <pre>
git init
git add .
git commit -m "Initial commit"
git branch feature
git checkout feature
git merge feature
    </pre>
    <p>Then connect with GitHub:</p>
    <pre>
git remote add origin &lt;repo-url&gt;
git push -u origin main
git pull origin main
    </pre>
  </body>
</html>`,
  questions: [
    {
      question: "Git is used for?",
      options: ["Version control", "Writing HTML"], 
      answer: "Version control"
    },
    {
      question: "GitHub is?",
      options: ["Cloud platform for Git repos", "Code editor"], 
      answer: "Cloud platform for Git repos"
    },
    {
      question: "Which command stages changes?",
      options: ["git add .", "git commit"], 
      answer: "git add ."
    },
    {
      question: "Which command combines branches?",
      options: ["git merge", "git branch"], 
      answer: "git merge"
    },
    {
      question: "Connecting local repo to GitHub enables?",
      options: ["Collaboration", "Local backup only"], 
      answer: "Collaboration"
    }
  ]
},
{
  id: 9,
  title: "Package Managers: npm & Yarn",
  sections: [
    {
      title: "What are Package Managers?",
      content: `Package managers are tools that automate installing, updating, and managing libraries.
They help developers avoid manually downloading dependencies.

Example: Installing React with a single command instead of downloading files.`
    },
    {
      title: "npm (Node Package Manager)",
      content: `npm is the default package manager for Node.js.
It has the largest ecosystem of open-source libraries.

Example Commands:
npm init -y   → Initialize project
npm install lodash   → Install lodash package
npm uninstall lodash → Remove lodash`
    },
    {
      title: "Yarn Package Manager",
      content: `Yarn is an alternative to npm developed by Facebook.
It focuses on speed, security, and reliability with lock files.

Example Commands:
yarn init -y   → Initialize project
yarn add lodash   → Install lodash package
yarn remove lodash → Remove lodash`
    },
    {
      title: "package.json File",
      content: `package.json stores project information and dependencies.
It ensures consistency when sharing projects.

Example:
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": { "react": "^18.0.0" }
}`
    },
    {
      title: "package-lock.json & yarn.lock",
      content: `Both files lock exact versions of installed packages.
- package-lock.json → npm
- yarn.lock → Yarn

Ensures all developers use the same dependency versions.`
    },
    {
      title: "Summary",
      content: `• Package managers simplify dependency management
• npm → default with Node.js, largest ecosystem
• Yarn → faster, secure alternative with lock files
• package.json tracks dependencies, lock files ensure consistency

Essential for modern frontend development`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <h2>Package Managers Example</h2>
    <p>Initialize a project and install a package:</p>
    <pre>
# Using npm
npm init -y
npm install lodash

# Using Yarn
yarn init -y
yarn add lodash
    </pre>
    <p>View package.json to see dependencies and versions:</p>
    <pre>
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": { "lodash": "^4.17.21" }
}
    </pre>
  </body>
</html>`,
  questions: [
    {
      question: "What is a package manager used for?",
      options: ["Managing dependencies", "Styling pages"], 
      answer: "Managing dependencies"
    },
    {
      question: "npm is the default package manager for?",
      options: ["Node.js", "Python"], 
      answer: "Node.js"
    },
    {
      question: "Which command installs a package using npm?",
      options: ["npm install lodash", "npm remove lodash"], 
      answer: "npm install lodash"
    },
    {
      question: "Yarn was developed by?",
      options: ["Facebook", "Google"], 
      answer: "Facebook"
    },
    {
      question: "What ensures all developers use the same dependency versions?",
      options: ["package-lock.json / yarn.lock", "README.md"], 
      answer: "package-lock.json / yarn.lock"
    }
  ]
},
{
  id: 10,
  title: "Debugging & Developer Tools in Browser",
  sections: [
    {
      title: "What is Debugging?",
      content: `Debugging is the process of identifying and fixing errors in code.
It helps ensure smooth functionality of web applications.

Example: Finding why a button click doesn’t work.`
    },
    {
      title: "Browser Developer Tools",
      content: `Modern browsers (Chrome, Firefox, Edge) provide DevTools.
They help inspect HTML, CSS, JS, and network requests.

Shortcut: Press F12 or Right-click → Inspect.`
    },
    {
      title: "Console & Debugging",
      content: `The Console tab shows errors and allows testing JavaScript.
console.log() is commonly used to debug values.

Example:
console.log('Button clicked:', buttonValue);`
    },
    {
      title: "Breakpoints in Sources Tab",
      content: `Breakpoints pause code execution at a specific line.
They allow step-by-step inspection of variables.

Example: Pause a loop to see variable values at each step.`
    },
    {
      title: "Network & Performance Monitoring",
      content: `The Network tab shows API calls, load times, and errors.
Performance tab helps analyze rendering speed.

Example: Check if a fetch() request failed due to 404 error.`
    },
    {
      title: "Summary",
      content: `• Debugging helps find and fix errors in code
• Browser DevTools allow inspecting HTML, CSS, JS
• Console logs and breakpoints make debugging easier
• Network & performance tabs analyze API calls and speed

Essential for professional frontend development`
    }
  ],
  codeExample: `<!DOCTYPE html>
<html>
  <body>
    <h2>Debugging Example</h2>
    <button id="btn">Click Me</button>
    <script>
      const btn = document.getElementById('btn');
      let count = 0;

      // Using console.log to debug
      btn.addEventListener('click', () => {
        count++;
        console.log('Button clicked:', count);
      });

      // You can also set breakpoints in DevTools to pause here
      for(let i = 0; i < 3; i++) {
        console.log('Loop iteration:', i);
      }
    </script>
  </body>
</html>`,
  questions: [
    {
      question: "What is debugging used for?",
      options: ["Finding and fixing errors", "Styling web pages"], 
      answer: "Finding and fixing errors"
    },
    {
      question: "Which browser feature helps inspect HTML, CSS, and JS?",
      options: ["Developer Tools", "Command Prompt"], 
      answer: "Developer Tools"
    },
    {
      question: "Which method is commonly used to debug values in JavaScript?",
      options: ["console.log()", "alert()"], 
      answer: "console.log()"
    },
    {
      question: "Breakpoints are used to?",
      options: ["Pause code execution at specific lines", "Reload the page"], 
      answer: "Pause code execution at specific lines"
    },
    {
      question: "Network tab in DevTools is useful for?",
      options: ["Analyzing API calls and load times", "Changing CSS colors"], 
      answer: "Analyzing API calls and load times"
    }
  ]
}








  // Later you will add id: 2, 3 ... up to id: 10
];
