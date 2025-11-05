import type { Module, Lesson, LessonContentData } from './schema';

export const courseModules: Omit<Module, 'id'>[] = [
  {
    slug: 'module-1',
    title: 'Foundations of Web Development',
    description: 'Learn the essential building blocks of web development including HTML, CSS, and development tools.',
    duration: '8 hours',
    sortOrder: 1,
    locked: false,
  },
  {
    slug: 'module-2',
    title: 'Frontend Development with React',
    description: 'Master modern frontend development with React, including hooks, state management, and UI libraries.',
    duration: '12 hours',
    sortOrder: 2,
    locked: false,
  },
  {
    slug: 'module-3',
    title: 'Backend Development with Node.js and Express',
    description: 'Build robust backends with Node.js, Express, PostgreSQL, and learn RESTful API design.',
    duration: '15 hours',
    sortOrder: 3,
    locked: false,
  },
  {
    slug: 'module-4',
    title: 'Full-Stack Integration',
    description: 'Connect your frontend and backend, handle forms, implement real-time features, and manage file uploads.',
    duration: '8 hours',
    sortOrder: 4,
    locked: false,
  },
  {
    slug: 'module-5',
    title: 'AI-Powered Development',
    description: 'Learn to leverage AI assistants like Replit Agent and master prompt engineering for 10x faster development.',
    duration: '12 hours',
    sortOrder: 5,
    locked: false,
  },
  {
    slug: 'module-6',
    title: 'Deployment and Production',
    description: 'Deploy your applications to production, manage databases, and monitor your apps effectively.',
    duration: '5 hours',
    sortOrder: 6,
    locked: false,
  },
  {
    slug: 'module-7',
    title: 'Real-World Project Workshop',
    description: 'Build a complete project from planning to deployment using everything you have learned.',
    duration: '10 hours',
    sortOrder: 7,
    locked: false,
  },
  {
    slug: 'module-8',
    title: 'Advanced Topics',
    description: 'Explore advanced concepts including AI integration, performance optimization, and scaling.',
    duration: '10+ hours',
    sortOrder: 8,
    locked: false,
  },
];

export const courseLessons: Omit<Lesson, 'id'>[] = [
  // Module 1 - Foundations
  { moduleId: 1, slug: 'understanding-the-web', title: 'Understanding the Web', duration: '1 hour', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 1, slug: 'essential-development-tools', title: 'Essential Development Tools', duration: '2 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 1, slug: 'html-fundamentals', title: 'HTML Fundamentals', duration: '2 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 1, slug: 'css-styling-essentials', title: 'CSS Styling Essentials', duration: '3 hours', type: 'lesson', sortOrder: 4, completed: false },
  
  // Module 2 - Frontend with React
  { moduleId: 2, slug: 'javascript-essentials', title: 'JavaScript Essentials for React', duration: '2 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 2, slug: 'react-fundamentals', title: 'React Fundamentals', duration: '3 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 2, slug: 'advanced-react-patterns', title: 'Advanced React Patterns', duration: '3 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 2, slug: 'ui-libraries-component-design', title: 'UI Libraries and Component Design', duration: '2 hours', type: 'lesson', sortOrder: 4, completed: false },
  { moduleId: 2, slug: 'react-router-navigation', title: 'React Router and Navigation', duration: '2 hours', type: 'lesson', sortOrder: 5, completed: false },
  
  // Module 3 - Backend Development
  { moduleId: 3, slug: 'nodejs-fundamentals', title: 'Node.js Fundamentals', duration: '2 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 3, slug: 'express-framework', title: 'Express.js Framework', duration: '3 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 3, slug: 'restful-api-design', title: 'RESTful API Design', duration: '4 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 3, slug: 'database-postgresql', title: 'Database Integration with PostgreSQL', duration: '4 hours', type: 'lesson', sortOrder: 4, completed: false },
  { moduleId: 3, slug: 'authentication-security', title: 'Authentication and Security', duration: '2 hours', type: 'lesson', sortOrder: 5, completed: false },
  
  // Module 4 - Full-Stack Integration
  { moduleId: 4, slug: 'connecting-frontend-backend', title: 'Connecting Frontend to Backend', duration: '2 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 4, slug: 'forms-validation', title: 'Forms and Validation', duration: '2 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 4, slug: 'realtime-websockets', title: 'Real-time Features with WebSockets', duration: '2 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 4, slug: 'file-upload-storage', title: 'File Upload and Storage', duration: '2 hours', type: 'lesson', sortOrder: 4, completed: false },
  
  // Module 5 - AI-Powered Development
  { moduleId: 5, slug: 'intro-ai-tools', title: 'Introduction to AI Development Tools', duration: '2 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 5, slug: 'prompt-engineering-fundamentals', title: 'Fundamentals of Prompt Engineering', duration: '3 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 5, slug: 'prompting-frontend', title: 'Prompting for Frontend Development', duration: '3 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 5, slug: 'prompting-backend', title: 'Prompting for Backend Development', duration: '3 hours', type: 'lesson', sortOrder: 4, completed: false },
  { moduleId: 5, slug: 'advanced-prompting', title: 'Advanced Prompting Techniques', duration: '1 hour', type: 'lesson', sortOrder: 5, completed: false },
  
  // Module 6 - Deployment
  { moduleId: 6, slug: 'preparing-production', title: 'Preparing for Production', duration: '1 hour', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 6, slug: 'deploying-replit', title: 'Deploying on Replit', duration: '2 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 6, slug: 'database-management', title: 'Database Management', duration: '1 hour', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 6, slug: 'monitoring-maintenance', title: 'Monitoring and Maintenance', duration: '1 hour', type: 'lesson', sortOrder: 4, completed: false },
  
  // Module 7 - Real-World Project
  { moduleId: 7, slug: 'project-planning', title: 'Project Planning', duration: '2 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 7, slug: 'building-with-ai', title: 'Building with AI Assistance', duration: '4 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 7, slug: 'testing-debugging', title: 'Testing and Debugging', duration: '2 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 7, slug: 'deployment-launch', title: 'Deployment and Launch', duration: '2 hours', type: 'lesson', sortOrder: 4, completed: false },
  
  // Module 8 - Advanced Topics
  { moduleId: 8, slug: 'advanced-ai-integration', title: 'Advanced AI Integration', duration: '3 hours', type: 'lesson', sortOrder: 1, completed: false },
  { moduleId: 8, slug: 'performance-optimization', title: 'Performance Optimization', duration: '2 hours', type: 'lesson', sortOrder: 2, completed: false },
  { moduleId: 8, slug: 'advanced-patterns', title: 'Advanced Patterns', duration: '3 hours', type: 'lesson', sortOrder: 3, completed: false },
  { moduleId: 8, slug: 'scaling-architecture', title: 'Scaling and Architecture', duration: '2 hours', type: 'lesson', sortOrder: 4, completed: false },
];

export const lessonContentData: Omit<LessonContentData, 'id'>[] = [
  {
    lessonId: 1,
    moduleTitle: 'Foundations of Web Development',
    lessonTitle: 'Understanding the Web',
    content: {
      overview: 'Learn how the internet and web work, including client-server architecture, HTTP/HTTPS protocols, and the difference between frontend, backend, and full-stack development.',
      sections: [
        {
          type: 'heading',
          text: 'How the Internet and Web Work',
        },
        {
          type: 'paragraph',
          text: 'The internet is a global network of computers that communicate using standardized protocols. The World Wide Web is a service that runs on top of the internet, allowing us to access and share information through web pages.',
        },
        {
          type: 'paragraph',
          text: 'When you visit a website, your browser (the client) sends a request to a web server, which processes the request and sends back a response containing the web page content.',
        },
        {
          type: 'heading',
          text: 'Client-Server Architecture',
        },
        {
          type: 'paragraph',
          text: 'Web applications follow a client-server model:',
        },
        {
          type: 'list',
          items: [
            'Client: Your web browser (Chrome, Firefox, Safari) that displays web pages and handles user interactions',
            'Server: A computer that stores website files and responds to requests from clients',
            'Communication: Clients and servers communicate using HTTP/HTTPS protocols',
            'Separation of Concerns: Clients handle presentation and user interaction, servers handle data processing and storage',
          ],
        },
        {
          type: 'heading',
          text: 'HTTP/HTTPS Protocols',
        },
        {
          type: 'paragraph',
          text: 'HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. HTTPS is the secure version that encrypts data between client and server.',
        },
        {
          type: 'list',
          items: [
            'HTTP Methods: GET (retrieve data), POST (send data), PUT (update data), DELETE (remove data)',
            'Status Codes: 200 (OK), 404 (Not Found), 500 (Server Error), 201 (Created)',
            'Headers: Metadata about the request/response (content type, authentication, caching)',
            'HTTPS Encryption: Uses SSL/TLS to secure data transmission and prevent eavesdropping',
          ],
        },
        {
          type: 'heading',
          text: 'Frontend vs Backend vs Full-Stack',
        },
        {
          type: 'paragraph',
          text: 'Web development is divided into three main areas:',
        },
        {
          type: 'list',
          items: [
            'Frontend: Everything users see and interact with (HTML, CSS, JavaScript, React)',
            'Backend: Server-side logic, databases, and APIs (Node.js, Express, PostgreSQL)',
            'Full-Stack: Combination of both frontend and backend development',
            'DevOps: Deployment, server management, and infrastructure (what you\'ll learn in Module 6)',
          ],
        },
        {
          type: 'heading',
          text: 'Request-Response Cycle',
        },
        {
          type: 'paragraph',
          text: 'Every web interaction follows this cycle:',
        },
        {
          type: 'list',
          items: [
            '1. User Action: You type a URL or click a link in your browser',
            '2. DNS Lookup: Browser converts domain name to IP address',
            '3. HTTP Request: Browser sends request to server with method, headers, and optional body',
            '4. Server Processing: Server receives request, processes it, queries database if needed',
            '5. HTTP Response: Server sends back response with status code, headers, and content',
            '6. Rendering: Browser receives response and displays the web page',
          ],
        },
        {
          type: 'heading',
          text: 'URLs and Routing',
        },
        {
          type: 'paragraph',
          text: 'URLs (Uniform Resource Locators) are addresses that identify resources on the web:',
        },
        {
          type: 'code',
          language: 'text',
          text: 'https://www.example.com:443/courses/web-dev?sort=popular#modules\n\nProtocol: https://\nDomain: www.example.com\nPort: 443 (default for HTTPS)\nPath: /courses/web-dev\nQuery Parameters: ?sort=popular\nFragment: #modules',
        },
        {
          type: 'list',
          items: [
            'Routing: Mapping URLs to specific pages or functions in your application',
            'Dynamic Routes: URLs with parameters like /user/:id or /post/:slug',
            'Query Strings: Additional parameters passed in URL like ?page=2&limit=10',
          ],
        },
        {
          type: 'heading',
          text: 'Web Browsers and Servers',
        },
        {
          type: 'paragraph',
          text: 'Browsers are sophisticated applications that:',
        },
        {
          type: 'list',
          items: [
            'Parse HTML, CSS, and JavaScript to render web pages',
            'Execute JavaScript code in a secure sandbox environment',
            'Store data locally using cookies, localStorage, and sessionStorage',
            'Provide developer tools for debugging (we\'ll use these extensively)',
          ],
        },
        {
          type: 'paragraph',
          text: 'Servers are programs that:',
        },
        {
          type: 'list',
          items: [
            'Listen for incoming HTTP requests on specific ports (usually 80 for HTTP, 443 for HTTPS)',
            'Process requests and execute business logic',
            'Connect to databases to store and retrieve data',
            'Send responses back to clients with requested content',
          ],
        },
        {
          type: 'heading',
          text: 'APIs (Application Programming Interfaces)',
        },
        {
          type: 'paragraph',
          text: 'APIs are interfaces that allow different software systems to communicate:',
        },
        {
          type: 'list',
          items: [
            'REST APIs: Use HTTP methods and URLs to perform CRUD operations (Create, Read, Update, Delete)',
            'Endpoints: Specific URLs that perform specific functions like /api/users or /api/posts',
            'JSON Format: Most modern APIs send and receive data in JSON format',
            'Authentication: APIs often require API keys or tokens to verify authorized access',
          ],
        },
        {
          type: 'code',
          language: 'javascript',
          text: '// Example API request\nfetch(\'https://api.example.com/users\')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(\'Error:\', error));',
        },
        {
          type: 'heading',
          text: 'Practical Exercise',
        },
        {
          type: 'paragraph',
          text: 'Open your browser\'s developer tools (F12 or right-click > Inspect) and explore:',
        },
        {
          type: 'list',
          items: [
            '1. Network Tab: Load a website and observe all HTTP requests being made',
            '2. Request Details: Click on a request to see headers, response, timing',
            '3. Console Tab: Try typing: document.location.href to see the current URL',
            '4. Elements Tab: Inspect the HTML structure of any web page',
          ],
        },
        {
          type: 'callout',
          calloutType: 'info',
          text: 'Understanding these fundamentals is crucial. Every web application, no matter how complex, is built on these core concepts.',
        },
      ],
    },
  },
  {
    lessonId: 2,
    moduleTitle: 'Foundations of Web Development',
    lessonTitle: 'Essential Development Tools',
    content: {
      overview: 'Set up your modern development environment and learn about essential tools including Replit, package managers, and version control.',
      sections: [
        {
          type: 'heading',
          text: 'Key Tools',
        },
        {
          type: 'list',
          items: [
            'Replit: Cloud-based IDE - no local setup needed',
            'Browser DevTools: Debugging and inspection',
            'Git: Version control (integrated in Replit)',
            'npm: JavaScript package manager',
          ],
        },
        {
          type: 'heading',
          text: 'Hands-On Activity',
        },
        {
          type: 'list',
          items: [
            'Create a Replit account',
            'Fork a starter template',
            'Make your first code change',
            'Understand the file structure',
          ],
        },
      ],
    },
  },
  {
    lessonId: 3,
    moduleTitle: 'Foundations of Web Development',
    lessonTitle: 'HTML Fundamentals',
    content: {
      overview: 'Master HTML structure and syntax, semantic elements, forms and inputs, and accessibility basics.',
      sections: [
        {
          type: 'heading',
          text: 'Essential HTML Elements',
        },
        {
          type: 'code',
          language: 'html',
          text: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <header>
    <h1>Welcome to Web Development</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  <main>
    <section id="about">
      <h2>About Section</h2>
      <p>This is a semantic HTML structure.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
        },
        {
          type: 'heading',
          text: 'Practice Project',
        },
        {
          type: 'paragraph',
          text: 'Create a personal portfolio page with header, navigation, about section, and contact form.',
        },
      ],
    },
  },
  {
    lessonId: 6,
    moduleTitle: 'Frontend Development with React',
    lessonTitle: 'React Fundamentals',
    content: {
      overview: 'Learn the fundamental concepts of React including components, JSX, props, state management with useState, and event handling.',
      sections: [
        {
          type: 'heading',
          text: 'What You\'ll Learn',
        },
        {
          type: 'list',
          items: [
            'What is React and why use it',
            'Components and JSX',
            'Props for passing data',
            'State management with useState',
            'Event handling',
          ],
        },
        {
          type: 'heading',
          text: 'React Basics Example',
        },
        {
          type: 'code',
          language: 'jsx',
          text: `import { useState } from 'react';

// Functional Component with Props
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Component with State
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// Using Components
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}`,
        },
        {
          type: 'heading',
          text: 'Practice Project',
        },
        {
          type: 'paragraph',
          text: 'Build a todo list application with add, delete, and toggle complete functionality.',
        },
      ],
    },
  },
  {
    lessonId: 20,
    moduleTitle: 'AI-Powered Development',
    lessonTitle: 'Introduction to AI Development Tools',
    content: {
      overview: 'Explore AI coding assistants, understand Replit Agent and Lovable platform capabilities, and learn when to use AI vs manual coding.',
      sections: [
        {
          type: 'heading',
          text: 'Key Concepts',
        },
        {
          type: 'list',
          items: [
            'Replit Agent: Full-stack development assistant integrated into Replit',
            'Lovable: Specialized for frontend/UI development',
            'Use cases: Rapid prototyping, boilerplate generation, debugging assistance',
            'Human oversight: AI accelerates, humans validate and refine',
          ],
        },
        {
          type: 'callout',
          calloutType: 'info',
          text: 'AI tools are powerful accelerators, but your understanding, creativity, and problem-solving skills are what make you a great developer.',
        },
      ],
    },
  },
  {
    lessonId: 21,
    moduleTitle: 'AI-Powered Development',
    lessonTitle: 'Fundamentals of Prompt Engineering',
    content: {
      overview: 'Master the art of writing effective prompts for AI assistants. Learn specificity, context provision, and how to avoid common pitfalls.',
      sections: [
        {
          type: 'heading',
          text: 'Prompt Engineering Principles',
        },
        {
          type: 'paragraph',
          text: '1. Be Specific and Clear',
        },
        {
          type: 'paragraph',
          text: '❌ Bad: "Make a login page"',
        },
        {
          type: 'paragraph',
          text: '✅ Good: "Create a login page with email and password fields, a \'Remember me\' checkbox, and a \'Forgot password\' link. Use Tailwind CSS for styling and React Hook Form for form handling."',
        },
        {
          type: 'paragraph',
          text: '2. Provide Context',
        },
        {
          type: 'paragraph',
          text: '❌ Bad: "Add authentication"',
        },
        {
          type: 'paragraph',
          text: '✅ Good: "Add user authentication to my Express.js backend using bcrypt for password hashing and express-session for session management. Store user data in the existing PostgreSQL database using the Drizzle ORM."',
        },
        {
          type: 'paragraph',
          text: '3. Specify Tech Stack',
        },
        {
          type: 'paragraph',
          text: '✅ Good: "Create a React dashboard using shadcn/ui components, with charts from Recharts library, displaying user statistics fetched from /api/stats endpoint."',
        },
        {
          type: 'paragraph',
          text: '4. Break Down Complex Tasks',
        },
        {
          type: 'paragraph',
          text: '✅ Good: "First, create the product listing page with filtering by category and price range. Then we\'ll add the shopping cart functionality."',
        },
      ],
    },
  },
];
