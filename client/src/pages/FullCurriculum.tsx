import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FullCurriculum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">Full Course Curriculum</h1>
                <p className="text-lg text-muted-foreground">
                  Complete guide to full-stack web development with AI agents
                </p>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <a href="/COURSE_CURRICULUM.md" download data-testid="button-download-curriculum">
                  <Download className="h-4 w-4" />
                  Download Full PDF
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                8 Modules
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                60+ Hours
              </span>
              <Badge variant="secondary">35 Lessons</Badge>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This comprehensive course teaches you how to build modern full-stack web applications using cutting-edge AI development tools. You'll learn essential web development concepts alongside powerful prompt engineering techniques to leverage AI assistants like Replit and Lovable for faster, more efficient development.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <ModuleSection
              number={1}
              title="Foundations of Web Development"
              duration="8 hours"
              description="Learn the essential building blocks of web development including HTML, CSS, and development tools."
              lessons={[
                "Understanding the Web - How the internet works, client-server architecture, HTTP/HTTPS protocols",
                "Essential Development Tools - Replit, browser DevTools, Git, npm package manager",
                "HTML Fundamentals - Structure, semantic elements, forms and inputs, accessibility",
                "CSS Styling Essentials - Box model, Flexbox, Grid, responsive design, Tailwind CSS",
              ]}
            />

            <ModuleSection
              number={2}
              title="Frontend Development with React"
              duration="12 hours"
              description="Master modern frontend development with React, including hooks, state management, and UI libraries."
              lessons={[
                "JavaScript Essentials for React - ES6+ features, arrow functions, array methods, async/await",
                "React Fundamentals - Components, JSX, props, state with useState, event handling",
                "Advanced React Patterns - useEffect, custom hooks, component composition, conditional rendering",
                "UI Libraries and Component Design - shadcn/ui, Radix UI, design systems, accessibility",
                "React Router and Navigation - Client-side routing, route parameters, navigation, protected routes",
              ]}
            />

            <ModuleSection
              number={3}
              title="Backend Development with Node.js and Express"
              duration="15 hours"
              description="Build robust backends with Node.js, Express, PostgreSQL, and learn RESTful API design."
              lessons={[
                "Node.js Fundamentals - What is Node.js, ES Modules, file system, environment variables",
                "Express.js Framework - Server setup, routing, middleware, error handling, CORS",
                "RESTful API Design - REST principles, HTTP methods, status codes, API best practices, validation",
                "Database Integration with PostgreSQL - SQL basics, Drizzle ORM, database schemas, migrations",
                "Authentication and Security - Password hashing with bcrypt, session management, JWT tokens, security best practices",
              ]}
            />

            <ModuleSection
              number={4}
              title="Full-Stack Integration"
              duration="8 hours"
              description="Connect your frontend and backend, handle forms, implement real-time features, and manage file uploads."
              lessons={[
                "Connecting Frontend to Backend - Fetch API, React Query, error handling, loading states",
                "Forms and Validation - React Hook Form, Zod schema validation, error messages, UX",
                "Real-time Features with WebSockets - WebSocket protocol, server setup, real-time updates",
                "File Upload and Storage - Handling uploads, Replit Object Storage, image optimization",
              ]}
            />

            <ModuleSection
              number={5}
              title="AI-Powered Development"
              duration="12 hours"
              description="Learn to leverage AI assistants like Replit Agent and master prompt engineering for 10x faster development."
              lessons={[
                "Introduction to AI Development Tools - Replit Agent, Lovable, when to use AI vs manual coding",
                "Fundamentals of Prompt Engineering - Specificity, context, iterative refinement, common pitfalls",
                "Prompting for Frontend Development - UI/UX prompts, component generation, styling, accessibility",
                "Prompting for Backend Development - API endpoints, database schemas, authentication flows",
                "Advanced Prompting Techniques - Iterative refinement, debugging with AI, code review, optimization",
              ]}
            />

            <ModuleSection
              number={6}
              title="Deployment and Production"
              duration="5 hours"
              description="Deploy your applications to production, manage databases, and monitor your apps effectively."
              lessons={[
                "Preparing for Production - Environment variables, security hardening, performance optimization",
                "Deploying on Replit - Deployment process, custom domains, Reserved VM, monitoring",
                "Database Management - Production setup, migrations, backups, scaling",
                "Monitoring and Maintenance - Error tracking, performance monitoring, continuous improvement",
              ]}
            />

            <ModuleSection
              number={7}
              title="Real-World Project Workshop"
              duration="10 hours"
              description="Build a complete project from planning to deployment using everything you have learned."
              lessons={[
                "Project Planning - Defining requirements, MVP approach, database design, API design",
                "Building with AI Assistance - Effective prompting workflow, iterating on code, integration",
                "Testing and Debugging - Manual testing, browser DevTools, debugging React, API testing",
                "Deployment and Launch - Pre-launch checklist, deployment, post-launch monitoring, feedback",
              ]}
            />

            <ModuleSection
              number={8}
              title="Advanced Topics"
              duration="10+ hours"
              description="Explore advanced concepts including AI integration, performance optimization, and scaling."
              lessons={[
                "Advanced AI Integration - Integrating OpenAI API, building AI features, cost management",
                "Performance Optimization - React performance, database queries, caching, bundle size",
                "Advanced Patterns - Server-side rendering, rate limiting, background jobs, multi-tenancy",
                "Scaling and Architecture - Microservices, API design for scale, database scaling, CDN",
              ]}
            />
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Course Completion</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Upon completing this course, you will have the skills to build full-stack web applications from scratch, leverage AI tools for 10x faster development, write effective prompts for any development task, and deploy production-ready applications. You'll be equipped with modern web development knowledge and AI-powered development techniques to confidently plan, build, and deploy your own web applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

interface ModuleSectionProps {
  number: number;
  title: string;
  duration: string;
  description: string;
  lessons: string[];
}

function ModuleSection({ number, title, duration, description, lessons }: ModuleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <span className="text-sm font-bold text-primary">{number}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{duration}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-3">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-3">Lessons:</h3>
        <ul className="space-y-3">
          {lessons.map((lesson, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <span className="text-xs font-medium text-primary">{index + 1}</span>
              </div>
              <span className="text-sm leading-relaxed">{lesson}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
