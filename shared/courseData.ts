
import type { Module } from './schema';

export const modules: Module[] = [];

export const courseModules = [
  {
    number: 1,
    title: "Introduction to Full-Stack Development",
    duration: "3 hours",
    description: "Get started with modern web development, understand the full stack, and set up your development environment.",
    sortOrder: 1,
    lessonCount: 4
  },
  {
    number: 2,
    title: "Frontend Fundamentals with React",
    duration: "8 hours",
    description: "Master React basics, components, hooks, and state management to build interactive user interfaces.",
    sortOrder: 2,
    lessonCount: 5
  },
  {
    number: 3,
    title: "Backend Development with Node.js & Express",
    duration: "8 hours",
    description: "Build robust server-side applications with Node.js, Express, and RESTful API design.",
    sortOrder: 3,
    lessonCount: 5
  },
  {
    number: 4,
    title: "Database Management & Integration",
    duration: "6 hours",
    description: "Work with databases, design schemas, and integrate data persistence into your applications.",
    sortOrder: 4,
    lessonCount: 4
  },
  {
    number: 5,
    title: "AI-Powered Development with Lovable & Replit",
    duration: "6 hours",
    description: "Learn to craft effective prompts for AI coding assistants to accelerate your development workflow.",
    sortOrder: 5,
    lessonCount: 4
  },
  {
    number: 6,
    title: "Deployment and Production",
    duration: "5 hours",
    description: "Deploy your applications to production, manage databases, and monitor your apps effectively.",
    sortOrder: 6,
    lessonCount: 4
  },
  {
    number: 7,
    title: "Real-World Project Workshop",
    duration: "10 hours",
    description: "Build a complete project from planning to deployment using everything you have learned.",
    sortOrder: 7,
    lessonCount: 4
  }
];

export const courseLessons = [
  // Module 1 Lessons
  { moduleId: 1, title: "What is Full-Stack Development?", duration: "45min", type: "video", sortOrder: 1 },
  { moduleId: 1, title: "Setting Up Your Development Environment", duration: "1h", type: "tutorial", sortOrder: 2 },
  { moduleId: 1, title: "Understanding the Modern Web Stack", duration: "45min", type: "video", sortOrder: 3 },
  { moduleId: 1, title: "Your First Full-Stack App", duration: "30min", type: "hands-on", sortOrder: 4 },
  
  // Module 2 Lessons
  { moduleId: 2, title: "React Fundamentals & JSX", duration: "1.5h", type: "tutorial", sortOrder: 1 },
  { moduleId: 2, title: "Components and Props", duration: "1.5h", type: "tutorial", sortOrder: 2 },
  { moduleId: 2, title: "State and Hooks", duration: "2h", type: "tutorial", sortOrder: 3 },
  { moduleId: 2, title: "Styling with Tailwind CSS", duration: "1.5h", type: "tutorial", sortOrder: 4 },
  { moduleId: 2, title: "Building Interactive UIs", duration: "1.5h", type: "hands-on", sortOrder: 5 },
  
  // Module 3 Lessons
  { moduleId: 3, title: "Node.js and Express Basics", duration: "1.5h", type: "tutorial", sortOrder: 1 },
  { moduleId: 3, title: "RESTful API Design", duration: "2h", type: "tutorial", sortOrder: 2 },
  { moduleId: 3, title: "Middleware and Error Handling", duration: "1.5h", type: "tutorial", sortOrder: 3 },
  { moduleId: 3, title: "Authentication & Security", duration: "2h", type: "tutorial", sortOrder: 4 },
  { moduleId: 3, title: "Building Your First API", duration: "1h", type: "hands-on", sortOrder: 5 },
  
  // Module 4 Lessons
  { moduleId: 4, title: "Database Fundamentals", duration: "1.5h", type: "tutorial", sortOrder: 1 },
  { moduleId: 4, title: "Working with PostgreSQL", duration: "2h", type: "tutorial", sortOrder: 2 },
  { moduleId: 4, title: "ORM with Drizzle", duration: "1.5h", type: "tutorial", sortOrder: 3 },
  { moduleId: 4, title: "Data Modeling and Relationships", duration: "1h", type: "hands-on", sortOrder: 4 },
  
  // Module 5 Lessons
  { moduleId: 5, title: "Introduction to AI Coding Assistants", duration: "1h", type: "video", sortOrder: 1 },
  { moduleId: 5, title: "Crafting Effective Prompts for Lovable", duration: "2h", type: "tutorial", sortOrder: 2 },
  { moduleId: 5, title: "Using Replit AI Agent Effectively", duration: "2h", type: "tutorial", sortOrder: 3 },
  { moduleId: 5, title: "AI-Assisted Project Build", duration: "1h", type: "hands-on", sortOrder: 4 },
  
  // Module 6 Lessons
  { moduleId: 6, title: "Preparing for Production", duration: "1h", type: "tutorial", sortOrder: 1 },
  { moduleId: 6, title: "Deploying on Replit", duration: "1.5h", type: "tutorial", sortOrder: 2 },
  { moduleId: 6, title: "Database Management in Production", duration: "1.5h", type: "tutorial", sortOrder: 3 },
  { moduleId: 6, title: "Monitoring and Maintenance", duration: "1h", type: "tutorial", sortOrder: 4 },
  
  // Module 7 Lessons
  { moduleId: 7, title: "Project Planning and Requirements", duration: "2h", type: "tutorial", sortOrder: 1 },
  { moduleId: 7, title: "Building with AI Assistance", duration: "3h", type: "hands-on", sortOrder: 2 },
  { moduleId: 7, title: "Testing and Debugging", duration: "2h", type: "tutorial", sortOrder: 3 },
  { moduleId: 7, title: "Final Deployment and Launch", duration: "3h", type: "hands-on", sortOrder: 4 }
];

export const lessonContentData = [
  // Module 1 Lesson 1
  {
    lessonId: 1,
    moduleTitle: "Introduction to Full-Stack Development",
    lessonTitle: "What is Full-Stack Development?",
    content: {
      overview: "Understand the complete web development stack and what it means to be a full-stack developer in modern web development.",
      sections: [
        {
          type: "heading",
          text: "Understanding the Full Stack"
        },
        {
          type: "paragraph",
          text: "Full-stack development involves working with both frontend (client-side) and backend (server-side) technologies. As a full-stack developer, you'll build complete web applications from user interface to database."
        },
        {
          type: "list",
          items: [
            "Frontend: React, HTML, CSS, JavaScript",
            "Backend: Node.js, Express, APIs",
            "Database: PostgreSQL, data modeling",
            "Deployment: Replit, production workflows"
          ]
        }
      ]
    }
  }
];

export const lessonContent: Record<number, any> = {};
