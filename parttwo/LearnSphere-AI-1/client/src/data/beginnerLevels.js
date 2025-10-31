// src/data/beginnerLevels.js
export const BEGINNER_LEVELS = [
  {
    id: 1,
    title: "Introduction to Frontend Development",
    sections: [
      {
        title: "What is Frontend Development?",
        content:
          `Frontend development is the process of building the visible part of a website or web application that users interact with. It covers design, structure, and interactivity in the browser.

Buttons, navigation menus, forms, and page layouts are part of the frontend. Example: When you click a "Sign Up" button the design/animation/click effect is frontend.`
      },
      {
        title: "Frontend vs Backend",
        content:
          `Frontend: User-facing, built with HTML, CSS, JS — responsible for look & feel.

Backend: Server-side, handles data storage, authentication, and business logic.

Real-Life Example:
• Frontend: Shopping cart UI
• Backend: Database that saves cart items`
      },
      {
        title: "Core Technologies",
        content:
          `HTML → Creates structure of a webpage
CSS → Adds style, colors, and layouts
JavaScript → Makes the page interactive`
      },
      {
        title: "Tools & Frameworks",
        content:
          `CSS Frameworks: Bootstrap, Tailwind
JS Frameworks: React, Angular, Vue
Tools: VS Code, GitHub, Chrome DevTools`
      },
      {
        title: "Future of Frontend",
        content:
          `Modern frontend trends include:
• Progressive Web Apps (PWAs)
• Component-based frameworks like React
• Server-side rendering (Next.js)
• JAMstack architectures for faster performance`
      },
      {
        title: "Summary",
        content:
          `Frontend = Visible part of websites. Uses HTML, CSS, JavaScript for structure, design, and interactivity.`
      }
    ],
    codeExample: `<!DOCTYPE html>
<html>
  <head><title>Frontend Example</title></head>
  <body>
    <h1>Hello World</h1>
    <button>Click Me</button>
  </body>
</html>`,
    questions: [
      { question: "Frontend development deals with?", options: ["User interface", "Database"], answer: "User interface" },
      { question: "Which of these is NOT a frontend language?", options: ["HTML", "CSS", "Python"], answer: "Python" },
      { question: "What does CSS do?", options: ["Adds style", "Stores data"], answer: "Adds style" },
      { question: "Which framework is for frontend?", options: ["React", "Django"], answer: "React" },
      { question: "Which tool is commonly used for debugging frontend code?", options: ["Git", "Chrome DevTools", "MySQL"], answer: "Chrome DevTools" },
      { question: "Frontend developers ensure websites are?", options: ["Responsive", "Only server-based"], answer: "Responsive" }
    ]
  },
  {
  id: 2,
title: "HTML Basics – Structure of a Webpage",
sections: [
  {
    title: "What is HTML?",
    content: 
      `HTML (HyperText Markup Language) is the standard language for creating web pages.
It defines the structure and layout of a webpage using tags.
Every website, from Google to YouTube, is built on HTML as the foundation.
Example: A blog article is structured with headings, paragraphs, and images using HTML.`
  },
  {
    title: "Structure of an HTML Document",
    content: 
      `A basic HTML document includes:
• <!DOCTYPE html> → Defines HTML5
• <html> → Root element
• <head> → Metadata (title, styles, scripts)
• <body> → Content shown on the page`
  },
  {
    title: "Common HTML Tags",
    content: 
      `• Headings: <h1> to <h6> (titles & subtitles)
• Paragraph: <p> (text content)
• Links: <a href="..."> (hyperlinks)
• Images: <img src="..." alt="..."> (pictures)`
  },
  {
    title: "Attributes in HTML",
    content: 
      `Attributes give extra information to tags.
Examples:
• href for links
• src for images
• alt for image description (accessibility)
• id and class for styling`
  },
  {
    title: "Inline vs Block Elements",
    content: 
      `• Block Elements: Take full width (<div>, <p>, <h1>)
• Inline Elements: Stay within a line (<span>, <a>, <strong>)
Understanding these helps in layout & styling.`
  },
   {
        title: "Lists in HTML",
        content:
          `Lists help organize content:
• Ordered List <ol>: Numbered items
• Unordered List <ul>: Bulleted items
• Definition List <dl>: Term & definition
Example:
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>`
      },
      {
        title: "Multimedia in HTML",
        content:
          `HTML supports multimedia content:
• <video> for videos
• <audio> for sound
• <iframe> for embedding YouTube/Maps`
      },
  {
    title: "Summary",
    content: 
      `• HTML = Foundation of every webpage
• Defines structure using tags and attributes
• Common tags: headings, paragraphs, links, images
• Inline vs Block elements help structure layouts
Without HTML, websites would not have structure or content.`
  }
],
codeExample: `<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph about HTML basics.</p>
  <a href="https://example.com">Visit Example</a>
  <img src="image.jpg" alt="Sample Image" />
   <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</body>
</html>`,
questions: [
  { question: "What does HTML stand for?", options: ["HyperText Makeup Language", "HyperText Markup Language", "HighText Mark Language", "Hyper Tool Markup Language"], answer: "HyperText Markup Language" },
  { question: "Which tag contains the content shown on a webpage?", options: ["<head>", "<body>", "<meta>", "<title>"], answer: "<body>" },
  { question: "Which attribute is used for image description?", options: ["src", "href", "alt", "id"], answer: "alt" },
  { question: "Which elements are inline?", options: ["<div>, <p>", "<span>, <a>", "<h1>, <section>", "<footer>, <article>"], answer: "<span>, <a>" },
  { question: "Which tag is used for ordered lists?", options: ["<ol>", "<ul>", "<li>", "<dl>"], answer: "<ol>" },
  { question: "Which HTML element is used to embed a YouTube video?", options: ["<video>", "<iframe>", "<object>", "<embed>"], answer: "<iframe>" },
  { question: "Which tag defines the root element of an HTML document?", options: ["<head>", "<html>", "<body>", "<section>"], answer: "<html>" }
]
},
{
  id: 3,
  title: "HTML Forms & Semantic Elements",
  sections: [
    {
      title: "What are HTML Forms?",
      content: 
        `Forms allow users to input data that can be sent to a server.
They are essential for user interaction in websites such as:
• Login & Signup Pages
• Search Bars
• Surveys & Feedback Forms
• Online Shopping Checkout
Form elements include text inputs, checkboxes, radio buttons, dropdowns, file uploads, and buttons.

Example: A login form where users enter username and password.`
    },
    {
      title: "Basic Form Structure",
      content: 
        `The <form> element is the container for input elements.
Important attributes:
• action → URL where form data is submitted
• method → GET (data visible in URL) or POST (data hidden)
• enctype → Specifies how data is encoded (important for file uploads)

Example:
<form action="/submit" method="POST"> ... </form>`
    },
    {
      title: "Input Types in Forms",
      content: 
        `Forms support multiple input types to collect correct data.
Examples:
• text → general input
• password → hides characters
• email → ensures email format
• number → accepts only numbers
• radio → select one option
• checkbox → select multiple options
• file → upload documents or images
• date/time → select calendar values
Choosing correct input type improves data accuracy.`
    },
    {
      title: "Semantic Elements",
      content: 
        `Semantic HTML tags describe their meaning clearly.
They improve accessibility, readability, and SEO.
Common tags:
• <header> → Top section of page (logo, nav)
• <nav> → Navigation menu
• <article> → Self-contained content
• <section> → Thematic grouping
• <aside> → Side content like ads or links
• <footer> → Bottom section of page`
    },
    {
      title: "Importance of Semantic Elements",
      content: 
        `Benefits:
• Makes HTML more meaningful and easier to read
• Helps search engines (SEO) understand content better
• Improves accessibility for screen readers
• Encourages consistent structure in webpages`
    },
    {
      title: "Summary",
      content: 
        `• Forms collect and submit user data
• Input types ensure correct data entry
• Semantic tags give meaning to content
• They improve SEO, accessibility, and code clarity`
    }
  ],
  codeExample: `<!-- Example HTML Form -->
<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />

  <button type="submit">Login</button>
</form>

<!-- Example Semantic Elements -->
<header>Website Header</header>
<nav>Navigation Links</nav>
<article>Independent Article</article>
<footer>Website Footer</footer>`,
  questions: [
    { question: "Which HTML element is used to create a form?", options: ["<div>", "<form>", "<section>"], answer: "<form>" },
    { question: "Which input type is used for collecting passwords?", options: ["text", "password", "number"], answer: "password" },
    { question: "Which semantic element represents navigation links?", options: ["<footer>",  "<nav>", "<article>"], answer: "<nav>" },
    { question: "Why are semantic elements important?", options: ["They add color", "They improve SEO & accessibility", "They replace CSS"], answer: "They improve SEO & accessibility" },
    { question: "Which attribute in the <form> element specifies where the form data is sent?", options: ["method", "action",  "target"], answer: "action" }
  ]
},

{
  id: 4,
  title: "CSS Basics – Selectors, Colors, Fonts",
  sections: [
    {
      title: "What is CSS?",
      content: 
        `CSS (Cascading Style Sheets) is used to style and format HTML elements.
It separates content (HTML) from design.
With CSS, you can control:
• Colors
• Fonts
• Layouts
• Animations
Without CSS, websites would look plain and unstyled.`
    },
    {
      title: "CSS Selectors",
      content: 
        `Selectors define which HTML elements should be styled.
Types:
• Element Selector → styles all of a type (p { color: red; })
• Class Selector → targets elements with a specific class (.btn { background: blue; })
• ID Selector → targets a unique element (#title { font-size: 24px; })
• Grouping Selector → targets multiple (h1, h2 { color: green; })
• Universal Selector → * { margin: 0; } (applies to everything)`
    },
    {
      title: "Colors in CSS",
      content: 
        `Ways to set colors:
• Named Colors → red, blue, green
• HEX Codes → #ff5733 (hexadecimal values for RGB)
• RGB / RGBA → rgb(255,0,0), rgba(0,0,255,0.5) (last value is transparency)
• HSL / HSLA → hsl(120, 100%, 50%) (Hue, Saturation, Lightness)`
    },
    {
      title: "Fonts in CSS",
      content: 
        `Fonts define how text looks.
Common properties:
• font-family: Arial, 'Times New Roman', sans-serif
• font-size: 16px, 2em, 120%
• font-weight: normal, bold, lighter, 700
• text-align: left, center, right, justify
• text-decoration: underline, none
Choosing the right fonts improves readability.`
    },
    {
      title: "Combining Styles",
      content: 
        `Selectors, colors, and fonts work together to make a page look modern.
Example:
p { color: navy; font-size: 18px; font-family: Arial; }`
    },
    {
      title: "Summary",
      content: 
        `• CSS adds style and beauty to webpages
• Selectors (element, class, ID) target specific parts
• Colors can be set with names, HEX, RGB, or HSL
• Fonts improve readability & design
Without CSS, all websites would be boring!`
    }
  ],
  codeExample: `/* CSS Example */
p {
  color: red;
  font-size: 18px;
}

.btn {
  background: blue;
  color: white;
  padding: 10px;
}

#title {
  font-size: 24px;
  text-align: center;
}`,
  questions: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Setup", "Colorful Styling Source"], answer: "Cascading Style Sheets" },
    { question: "Which selector targets all <p> elements?", options: ["#p", ".p", "p", "<p>"], answer: "p" },
    { question: "Which color format is written as #ff5733?", options: ["Named Color", "HEX Code", "RGB", "RGBA"], answer: "HEX Code" },
    { question: "Which property changes the text alignment?", options: ["font-weight", "color", "text-align", "font-size"], answer: "text-align" },
    { question: "Which selector is used to style an element with id='main'?", options: [".main", "#main", "main", "<main>"], answer: "#main" }
  ]
},

{
  id: 5,
  title: "CSS Box Model & Positioning",
  sections: [
    {
      title: "What is the Box Model?",
      content: 
        `In CSS, every element is treated as a rectangular box.
The box model consists of 4 main parts:
1. Content → text, image, or actual element data
2. Padding → space between content and border
3. Border → the edge around the element
4. Margin → space outside the border (between elements)`
    },
    {
      title: "Box Model Visual",
      content: 
        `Think of it like a gift:
• Content = the gift inside
• Padding = bubble wrap
• Border = the box walls
• Margin = space between this gift and other gifts`
    },
    {
      title: "Properties in Box Model",
      content: 
        `• width / height → size of the content
• padding → inner spacing (padding: 10px;)
• border → outer edge (border: 2px solid black;)
• margin → outer spacing (margin: 20px;)
• box-sizing: border-box; → includes padding & border in width/height`
    },
    {
      title: "CSS Positioning",
      content: 
        `Positioning controls how elements are placed.
Types:
• static → default, elements appear in normal order
• relative → moves element relative to its normal position
• absolute → positions element relative to its nearest positioned parent
• fixed → stays in place even when scrolling
• sticky → switches between relative and fixed depending on scroll`
    },
    {
      title: "Z-Index",
      content: 
        `z-index decides which element appears on top when elements overlap.
Higher z-index = on top.
Example:
z-index: 10;`
    },
    {
      title: "Summary",
      content: 
        `• The box model has content, padding, border, and margin
• Padding = inside space, Margin = outside space
• Borders make edges visible
• Positioning (static, relative, absolute, fixed, sticky) controls layout
• z-index decides overlapping order`
    }
  ],
  codeExample: `/* Box Model Example */
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 3px solid blue;
  margin: 15px;
  box-sizing: border-box;
}

/* Positioning Example */
.relative-box {
  position: relative;
  top: 20px;
  left: 30px;
}

.absolute-box {
  position: absolute;
  top: 50px;
  right: 20px;
}

.fixed-box {
  position: fixed;
  bottom: 0;
  right: 0;
}

.sticky-box {
  position: sticky;
  top: 10px;
}`,
  questions: [
    { question: "Which part of the box model is the space inside the border but outside the content?", options: ["Margin", "Padding", "Border", "Content"], answer: "Padding" },
    { question: "Which property controls the space outside the element?", options: ["padding", "margin", "border", "width"], answer: "margin" },
    { question: "Which positioning makes an element stay fixed even when scrolling?", options: ["absolute", "relative", "fixed", "sticky"], answer: "fixed" },
    { question: "What does box-sizing: border-box do?", options: ["Adds extra margin", "Includes border & padding in width/height", "Ignores padding", "Removes margin"], answer: "Includes border & padding in width/height" },
    { question: "Which property decides overlapping order?", options: ["position", "z-index", "margin", "padding"], answer: "z-index" }
  ]
},

{
  id: 6,
  title: "CSS Flexbox & Grid Layout",
  sections: [
    {
      title: "What is Flexbox?",
      content: 
        `Flexbox (Flexible Box) is a CSS layout system that makes it easy to arrange elements 
in a row or column and distribute space automatically. 
It is perfect for creating responsive layouts.`
    },
    {
      title: "Flexbox Properties (Parent – flex container)",
      content: 
        `• display: flex; → activates flexbox
• flex-direction: row | column | row-reverse | column-reverse
• justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly
• align-items: flex-start | center | flex-end | stretch | baseline
• flex-wrap: wrap | nowrap`
    },
    {
      title: "Flexbox Properties (Children – flex items)",
      content: 
        `• flex-grow → how much an item grows (relative to others)
• flex-shrink → how much an item shrinks
• flex-basis → initial size of the item
• align-self → override align-items for one item`
    },
    {
      title: "What is CSS Grid?",
      content: 
        `CSS Grid is a two-dimensional layout system (rows + columns).
It allows precise control of page layout compared to Flexbox.`
    },
    {
      title: "Grid Properties (Parent – grid container)",
      content: 
        `• display: grid; → activates grid
• grid-template-columns: repeat(3, 1fr); → 3 equal columns
• grid-template-rows: 100px 200px auto; → defines row sizes
• gap: 10px; → space between rows & columns
• justify-items: start | center | end | stretch
• align-items: start | center | end | stretch`
    },
    {
      title: "Grid Properties (Children – grid items)",
      content: 
        `• grid-column: 1 / 3 → spans across column 1 to 2
• grid-row: 2 / 4 → spans across row 2 to 3
• justify-self & align-self → control individual item placement`
    },
    {
      title: "Flexbox vs Grid",
      content: 
        `• Flexbox → 1D layout (row OR column)
• Grid → 2D layout (rows AND columns)
They can be combined for modern responsive websites.`
    },
    {
      title: "Summary",
      content: 
        `• Flexbox → best for aligning items in a row/column
• Grid → best for building full page layouts
• Both reduce the need for float/position hacks`
    }
  ],
  codeExample: `/* Flexbox Example */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 10px;
  background: lightblue;
}

/* Grid Example */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 10px;
}

.grid-item {
  background: lightgreen;
  padding: 20px;
  text-align: center;
}`,
  questions: [
    { question: "Which property activates Flexbox?", options: ["position: flex", "display: flex", "flex: active", "flex-direction: row"], answer: "display: flex" },
    { question: "Which Flexbox property aligns items horizontally?", options: ["align-items", "justify-content", "flex-wrap", "flex-grow"], answer: "justify-content" },
    { question: "What is the main difference between Flexbox and Grid?", options: ["Flexbox is for animations, Grid is for colors", "Flexbox = 1D layout, Grid = 2D layout", "Flexbox = old, Grid = new", "They are the same"], answer: "Flexbox = 1D layout, Grid = 2D layout" },
    { question: "Which Grid property defines columns?", options: ["grid-template-rows", "grid-template-columns", "grid-column", "justify-items"], answer: "grid-template-columns" },
    { question: "Which property controls spacing between grid rows and columns?", options: ["padding", "margin", "gap", "z-index"], answer: "gap" }
  ]
},

{
  id: 7,
  title: "Responsive Web Design",
  sections: [
    {
      title: "What is Responsive Web Design?",
      content: 
        `Responsive Web Design (RWD) makes websites look good on all devices 
(desktops, tablets, mobiles). 
Instead of fixed sizes, layouts adjust automatically to the screen size.`
    },
    {
      title: "Why Responsive Design?",
      content: 
        `• Users open websites on many devices
• Mobile-first design is standard today
• Google ranks mobile-friendly sites higher
• Improves user experience and accessibility`
    },
    {
      title: "Fluid Layouts",
      content: 
        `Instead of fixed px values, use flexible units:
• % (percentage) → width: 50%;
• em / rem → relative to font-size
• vh / vw → relative to viewport height/width
This makes layouts adjust fluidly.`
    },
    {
      title: "Flexible Images",
      content: 
        `Images should not overflow the screen.
Use:
img { max-width: 100%; height: auto; }`
    },
    {
      title: "Media Queries",
      content: 
        `Media queries apply different CSS rules based on screen size.
Syntax:
@media (max-width: 768px) {
  body { background: lightblue; }
}
This applies when the screen is 768px or smaller.`
    },
    {
      title: "Common Breakpoints",
      content: 
        `• Large devices (desktops): 1200px and above
• Medium devices (tablets): 768px – 1199px
• Small devices (mobiles): up to 767px
These are standard but can be customized.`
    },
    {
      title: "Mobile-First Approach",
      content: 
        `Design for the smallest screen first, then enhance for larger screens.
Example:
body { font-size: 14px; }   // default (mobile)
@media (min-width: 768px) { body { font-size: 16px; } }
@media (min-width: 1200px) { body { font-size: 18px; } }`
    },
    {
      title: "Summary",
      content: 
        `• Responsive Design = website works on all screen sizes
• Use flexible units instead of fixed px
• Media queries apply styles based on device width
• Mobile-first design is best practice`
    }
  ],
  codeExample: `/* Fluid Layout Example */
.container {
  width: 80%;
  margin: auto;
}

/* Responsive Image */
img {
  max-width: 100%;
  height: auto;
}

/* Media Queries */
@media (max-width: 768px) {
  .container {
    width: 95%;
  }
  nav {
    flex-direction: column;
  }
}`,
  questions: [
    { question: "What does Responsive Web Design mean?", options: ["Website adjusts to all screen sizes", "Website loads faster", "Website uses bright colors", "Website has animations"], answer: "Website adjusts to all screen sizes" },
    { question: "Which CSS unit adjusts relative to viewport width?", options: ["%", "vh/vw", "em", "px"], answer: "vh/vw" },
    { question: "What does this media query mean? @media (max-width: 600px)", options: ["Styles apply when screen is larger than 600px", "Styles apply when screen is exactly 600px", "Styles apply when screen is 600px or smaller", "Styles never apply"], answer: "Styles apply when screen is 600px or smaller" },
    { question: "Which property prevents images from overflowing?", options: ["width: auto;", "max-width: 100%;", "overflow: hidden;", "display: flex;"], answer: "max-width: 100%;" },
    { question: "Which design approach is preferred today?", options: ["Desktop-first", "Mobile-first", "Tablet-first", "TV-first"], answer: "Mobile-first" }
  ]
},

{
  id: 8,
  title: "JavaScript Basics",
  sections: [
    {
      title: "What is JavaScript?",
      content: 
        `JavaScript (JS) is a programming language that adds interactivity to websites.
HTML = structure, CSS = style, JS = behavior.
Examples of JS:
• Dropdown menus
• Form validation
• Image sliders
• Pop-ups
• Dynamic content updates`
    },
    {
      title: "JavaScript Placement",
      content: 
        `You can write JavaScript in:
1. Inline → inside HTML tag (not recommended)
2. Internal → inside <script> tag in HTML
3. External → separate .js file (best practice)`
    },
    {
      title: "Variables",
      content: 
        `Variables store data values.
Keywords:
• var → old, avoid
• let → block scoped, modern
• const → constant, cannot change
Example:
let age = 21;
const pi = 3.14;`
    },
    {
      title: "Data Types",
      content: 
        `Common data types:
• String → "Hello"
• Number → 42
• Boolean → true / false
• Null → nothing
• Undefined → not assigned
• Object → { key: value }
• Array → [1, 2, 3]`
    },
    {
      title: "Operators",
      content: 
        `• Arithmetic → +, -, *, /, %
• Assignment → =, +=, -=
• Comparison → ==, ===, !=, !==, >, <
• Logical → && (and), || (or), ! (not)`
    },
    {
      title: "Functions",
      content: 
        `Functions are reusable blocks of code.
Example:
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Sam"));`
    },
    {
      title: "DOM Manipulation",
      content: 
        `JavaScript can change HTML content & styles.
Example:
document.getElementById("title").innerText = "Welcome!";
document.querySelector(".btn").style.background = "red";`
    },
    {
      title: "Summary",
      content: 
        `• JavaScript = makes websites interactive
• Variables store data (let, const preferred)
• Supports many data types
• Functions reuse code
• Can update HTML & CSS dynamically`
    }
  ],
  codeExample: `// Variables
let name = "Alex";
const pi = 3.14;

// Function
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

// DOM Example
document.getElementById("demo").innerText = "Hello JS!";`,
  questions: [
    { question: "What does JavaScript add to a website?", options: ["Structure", "Style", "Interactivity", "Database"], answer: "Interactivity" },
    { question: "Which keyword is used for a constant variable?", options: ["let", "var", "const", "define"], answer: "const" },
    { question: "Which operator checks both value and type?", options: ["==", "=", "===", "!="], answer: "===" },
    { question: "Which method selects an element by ID?", options: ["querySelector()", "getElementById()", "getElementsByClass()", "selectId()"], answer: "getElementById()" },
    { question: "Which data type is this: [1, 2, 3] ?", options: ["Object", "Array", "String", "Boolean"], answer: "Array" }
  ]
},

{
  id: 9,
  title: "JavaScript Control Structures – Loops & Conditions",
  sections: [
    {
      title: "What are Control Structures?",
      content: 
        `Control structures define the flow of a program.
They allow JavaScript to make decisions and repeat tasks.
Example: Running code only if a condition is true.`
    },
    {
      title: "If-Else Statements",
      content: 
        `The if-else statement is used for decision-making.
Example:
let age = 18;
if(age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`
    },
    {
      title: "Switch Case",
      content: 
        `Switch is used when there are multiple conditions.
Example:
let day = 2;
switch(day) {
  case 1: console.log('Monday'); break;
  case 2: console.log('Tuesday'); break;
  default: console.log('Other day');
}`
    },
    {
      title: "Loops in JavaScript",
      content: 
        `Loops are used to repeat a block of code.
Types:
• for loop
• while loop
• do...while loop
Example (for loop):
for(let i=1; i<=5; i++) {
  console.log(i);
}`
    },
    {
      title: "Break & Continue",
      content: 
        `• Break stops the loop completely.
• Continue skips the current iteration and goes to the next.
Example:
for(let i=1; i<=5; i++) {
  if(i===3) continue;
  console.log(i);
}`
    },
    {
      title: "Summary",
      content: 
        `• Control structures guide program flow
• If-else and switch are used for decision-making
• Loops (for, while, do-while) repeat tasks
• Break exits a loop, continue skips iteration
Helps write efficient and logical programs.`
    }
  ],
  codeExample: `// If-Else Example
let age = 18;
if(age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Switch Example
let day = 2;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Other day");
}

// For Loop Example
for(let i=1; i<=5; i++) {
  console.log(i);
}

// Break & Continue Example
for(let i=1; i<=5; i++) {
  if(i === 3) continue; // skips 3
  console.log(i);
}`,
  questions: [
    { question: "Which statement is used for decision-making in JavaScript?", options: ["for", "if-else", "switch", "loop"], answer: "if-else" },
    { question: "Which loop guarantees execution at least once?", options: ["for", "while", "do...while", "foreach"], answer: "do...while" },
    { question: "What does the break statement do?", options: ["Skips iteration", "Exits the loop", "Pauses loop", "Restarts loop"], answer: "Exits the loop" },
    { question: "Which control structure is best for multiple conditions?", options: ["if-else", "switch", "loop", "while"], answer: "switch" },
    { question: "What does continue do inside a loop?", options: ["Ends loop", "Skips current iteration", "Repeats loop", "Throws error"], answer: "Skips current iteration" }
  ]
},
{
  id: 10,
  title: "Functions & Events in JavaScript",
  sections: [
    {
      title: "What are Functions?",
      content: 
        `Functions are reusable blocks of code that perform a specific task.
They help avoid repetition and make code organized.
Example:
function greet() {
  console.log('Hello World');
}
greet();`
    },
    {
      title: "Function Types",
      content: 
        `JavaScript provides different ways to define functions:
• Function Declaration
• Function Expression
• Arrow Function
Example:
const add = (a, b) => a + b;
console.log(add(5, 3));`
    },
    {
      title: "What are Events?",
      content: 
        `Events are actions that happen in the browser, like clicks or typing.
JavaScript can respond to these events.
Example:
<button onclick="alert('Clicked!')">Click Me</button>`
    },
    {
      title: "Event Listeners",
      content: 
        `Event listeners are a modern way to handle events.
They allow multiple events to be attached without overwriting.
Example:
document.getElementById('btn').addEventListener('click', () => {
  console.log('Button Clicked');
});`
    },
    {
      title: "Common Events",
      content: 
        `Some commonly used events in JavaScript:
• onclick → When a user clicks
• onmouseover → When mouse hovers
• onkeydown → When a key is pressed
• onsubmit → When a form is submitted
Example:
input.addEventListener('keydown', () => console.log('Key Pressed'));`
    },
    {
      title: "Summary",
      content: 
        `• Functions = reusable blocks of code
• Types: declaration, expression, arrow
• Events = actions in browser (click, hover, type)
• Event listeners handle user interactions
Core for dynamic and interactive websites.`
    }
  ],
  codeExample: `// Function Example
function greet() {
  console.log("Hello World");
}
greet();

// Arrow Function Example
const add = (a, b) => a + b;
console.log(add(5, 3));

// Inline Event Example
<button onclick="alert('Clicked!')">Click Me</button>

// Event Listener Example
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button Clicked");
});

// Keydown Event Example
input.addEventListener("keydown", () => console.log("Key Pressed"));`,
  questions: [
    { question: "What is the main purpose of functions in JavaScript?", options: ["Store data", "Reuse code", "Style pages", "Create loops"], answer: "Reuse code" },
    { question: "Which of these is NOT a type of function?", options: ["Function Declaration", "Function Expression", "Arrow Function", "Inline Style"], answer: "Inline Style" },
    { question: "Which attribute is used for inline event handling?", options: ["onclick", "onstyle", "onhover", "onchange"], answer: "onclick" },
    { question: "Which method is used to attach event listeners?", options: ["addEvent", "attachEvent", "addEventListener", "onEvent"], answer: "addEventListener" },
    { question: "Which event is triggered when a key is pressed?", options: ["onclick", "onmouseover", "onkeydown", "onsubmit"], answer: "onkeydown" }
  ]
}  // Add more level objects here (id: 3, 4, ...) following same pattern
];

