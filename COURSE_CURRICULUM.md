# Full-Stack Web Development with AI Agents
## Complete Course Curriculum

---

## Course Overview

This comprehensive course teaches you how to build modern full-stack web applications using cutting-edge AI development tools. You'll learn essential web development concepts alongside powerful prompt engineering techniques to leverage AI assistants like Replit and Lovable for faster, more efficient development.

**Duration:** 60+ hours  
**Level:** Beginner to Advanced  
**Prerequisites:** Basic computer literacy, willingness to learn

---

## MODULE 1: Foundations of Web Development (8 hours)

### Lesson 1.1: Understanding the Web (1 hour)

**What You'll Learn:**
- How the internet and web work
- Client-server architecture
- HTTP/HTTPS protocols
- Frontend vs Backend vs Full-Stack

**Key Concepts:**
- Request-response cycle
- URLs and routing
- Web browsers and servers
- APIs (Application Programming Interfaces)

**Practical Exercise:**
Open your browser's developer tools (F12) and examine the Network tab while loading a website. Observe the requests being made.

---

### Lesson 1.2: Essential Development Tools (2 hours)

**What You'll Learn:**
- Setting up a modern development environment
- Introduction to Replit as your cloud IDE
- Understanding package managers (npm)
- Version control basics with Git

**Key Tools:**
- **Replit**: Cloud-based IDE - no local setup needed
- **Browser DevTools**: Debugging and inspection
- **Git**: Version control (integrated in Replit)
- **npm**: JavaScript package manager

**Hands-On Activity:**
1. Create a Replit account
2. Fork a starter template
3. Make your first code change
4. Understand the file structure

---

### Lesson 1.3: HTML Fundamentals (2 hours)

**What You'll Learn:**
- HTML structure and syntax
- Semantic HTML elements
- Forms and inputs
- Accessibility basics

**Essential HTML Elements:**
```html
<!DOCTYPE html>
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
</html>
```

**Practice Project:**
Create a personal portfolio page with header, navigation, about section, and contact form.

---

### Lesson 1.4: CSS Styling Essentials (3 hours)

**What You'll Learn:**
- CSS selectors and specificity
- Box model and layout
- Flexbox and Grid
- Responsive design principles
- Modern CSS (Tailwind introduction)

**Core CSS Concepts:**

```css
/* Box Model */
.card {
  margin: 20px;        /* Space outside */
  padding: 15px;       /* Space inside */
  border: 1px solid #ddd;
  width: 300px;
}

/* Flexbox Layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

**Introduction to Tailwind CSS:**
```html
<!-- Traditional CSS -->
<div class="card"></div>

<!-- Tailwind CSS -->
<div class="p-4 m-5 border border-gray-300 rounded-lg shadow-md">
  Content
</div>
```

**Practice Project:**
Style your portfolio page using Tailwind CSS utility classes.

---

## MODULE 2: Frontend Development with React (12 hours)

### Lesson 2.1: JavaScript Essentials for React (2 hours)

**What You'll Learn:**
- Modern JavaScript (ES6+)
- Variables, functions, and arrow functions
- Array methods (map, filter, reduce)
- Destructuring and spread operator
- Template literals
- Async/await

**Essential JavaScript Concepts:**

```javascript
// Arrow Functions
const greet = (name) => `Hello, ${name}!`;

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Destructuring
const user = { name: 'Alice', age: 30 };
const { name, age } = user;

// Async/Await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

### Lesson 2.2: React Fundamentals (3 hours)

**What You'll Learn:**
- What is React and why use it
- Components and JSX
- Props for passing data
- State management with useState
- Event handling

**React Basics:**

```jsx
import { useState } from 'react';

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
}
```

**Practice Project:**
Build a todo list application with add, delete, and toggle complete functionality.

---

### Lesson 2.3: Advanced React Patterns (3 hours)

**What You'll Learn:**
- useEffect for side effects
- Custom hooks
- Component composition
- Conditional rendering
- Lists and keys

**Advanced Concepts:**

```jsx
import { useState, useEffect } from 'react';

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Using Custom Hook
function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  return (
    <div>
      <h1>My Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ 
              textDecoration: todo.done ? 'line-through' : 'none' 
            }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### Lesson 2.4: UI Libraries and Component Design (2 hours)

**What You'll Learn:**
- Using UI component libraries (shadcn/ui, Radix UI)
- Design systems and consistency
- Accessibility in components
- Responsive design patterns

**Using Component Libraries:**

```jsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function UserProfile() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

### Lesson 2.5: React Router and Navigation (2 hours)

**What You'll Learn:**
- Client-side routing
- Route parameters
- Navigation and links
- Protected routes

**Routing with Wouter:**

```jsx
import { Route, Link, useRoute } from 'wouter';

function App() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users">Users</Link>
      </nav>
      
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/users/:id" component={UserDetailPage} />
    </div>
  );
}

function UserDetailPage() {
  const [match, params] = useRoute('/users/:id');
  return <h1>User ID: {params.id}</h1>;
}
```

---

## MODULE 3: Backend Development with Node.js and Express (15 hours)

### Lesson 3.1: Node.js Fundamentals (2 hours)

**What You'll Learn:**
- What is Node.js
- CommonJS vs ES Modules
- File system operations
- Environment variables
- npm packages

**Node.js Basics:**

```javascript
// ES Modules (modern approach)
import express from 'express';
import { readFile } from 'fs/promises';

// Environment Variables
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Reading Files
async function loadConfig() {
  const config = await readFile('./config.json', 'utf-8');
  return JSON.parse(config);
}
```

---

### Lesson 3.2: Express.js Framework (3 hours)

**What You'll Learn:**
- Setting up Express server
- Routing and middleware
- Request and response handling
- Error handling
- CORS configuration

**Express Server Setup:**

```javascript
import express from 'express';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS for frontend communication
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  
  res.status(201).json({ id: 1, name, email });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

### Lesson 3.3: RESTful API Design (4 hours)

**What You'll Learn:**
- REST principles and conventions
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes
- API structure best practices
- Input validation

**REST API Patterns:**

```javascript
// Resource: /api/products

// GET all products
app.get('/api/products', async (req, res) => {
  const { category, limit = 10 } = req.query;
  
  const products = await db.products.findMany({
    where: category ? { category } : {},
    take: parseInt(limit)
  });
  
  res.json(products);
});

// GET single product
app.get('/api/products/:id', async (req, res) => {
  const product = await db.products.findById(req.params.id);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// CREATE new product
app.post('/api/products', async (req, res) => {
  const { name, price, category } = req.body;
  
  // Validation
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price required' });
  }
  
  const product = await db.products.create({
    name,
    price: parseFloat(price),
    category
  });
  
  res.status(201).json(product);
});

// UPDATE product
app.put('/api/products/:id', async (req, res) => {
  const product = await db.products.update(
    req.params.id,
    req.body
  );
  
  res.json(product);
});

// DELETE product
app.delete('/api/products/:id', async (req, res) => {
  await db.products.delete(req.params.id);
  res.status(204).send();
});
```

---

### Lesson 3.4: Database Integration with PostgreSQL (4 hours)

**What You'll Learn:**
- Relational databases concepts
- PostgreSQL on Replit
- SQL basics
- Drizzle ORM
- Database migrations

**Database Schema with Drizzle:**

```typescript
// schema.ts
import { pgTable, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const posts = pgTable('posts', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  published: boolean('published').default(false),
  authorId: integer('author_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow()
});
```

**Using Drizzle ORM:**

```typescript
import { db } from './db';
import { users, posts } from './schema';
import { eq } from 'drizzle-orm';

// Create user
const newUser = await db.insert(users).values({
  username: 'john_doe',
  email: 'john@example.com',
  password: hashedPassword
}).returning();

// Get user with posts
const userWithPosts = await db.query.users.findFirst({
  where: eq(users.id, userId),
  with: {
    posts: true
  }
});

// Update post
await db.update(posts)
  .set({ published: true })
  .where(eq(posts.id, postId));

// Delete user
await db.delete(users).where(eq(users.id, userId));
```

---

### Lesson 3.5: Authentication and Security (2 hours)

**What You'll Learn:**
- Password hashing
- Session management
- JWT tokens
- Secure cookie handling
- Common security vulnerabilities

**Authentication Implementation:**

```javascript
import bcrypt from 'bcrypt';
import session from 'express-session';

// Password hashing
async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.insert(users).values({
    username,
    password: hashedPassword
  });
}

// Login verification
async function login(username, password) {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username)
  });
  
  if (!user) return null;
  
  const valid = await bcrypt.compare(password, user.password);
  return valid ? user : null;
}

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Protected route middleware
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.get('/api/profile', requireAuth, async (req, res) => {
  const user = await db.query.users.findFirst({
    where: eq(users.id, req.session.userId)
  });
  res.json(user);
});
```

---

## MODULE 4: Full-Stack Integration (8 hours)

### Lesson 4.1: Connecting Frontend to Backend (2 hours)

**What You'll Learn:**
- Fetch API and axios
- React Query for data fetching
- Error handling
- Loading states

**Data Fetching with React Query:**

```jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Fetch data
function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch');
      return response.json();
    }
  });
}

// Mutation (create/update/delete)
function useCreateProduct() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product) => {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['products']);
    }
  });
}

// Component usage
function ProductList() {
  const { data: products, isLoading, error } = useProducts();
  const createProduct = useCreateProduct();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
      <button onClick={() => createProduct.mutate({ name: 'New Product' })}>
        Add Product
      </button>
    </div>
  );
}
```

---

### Lesson 4.2: Forms and Validation (2 hours)

**What You'll Learn:**
- React Hook Form
- Zod schema validation
- Client-side vs server-side validation
- Error messages and UX

**Form Handling:**

```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Validation schema
const productSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  price: z.number().positive('Price must be positive'),
  description: z.string().optional()
});

function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(productSchema)
  });
  
  const onSubmit = async (data) => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      alert('Product created!');
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name')} placeholder="Product Name" />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      
      <div>
        <input 
          type="number" 
          {...register('price', { valueAsNumber: true })} 
          placeholder="Price" 
        />
        {errors.price && <span>{errors.price.message}</span>}
      </div>
      
      <button type="submit">Create Product</button>
    </form>
  );
}
```

---

### Lesson 4.3: Real-time Features with WebSockets (2 hours)

**What You'll Learn:**
- WebSocket protocol
- Setting up WebSocket server
- Real-time updates in React
- Use cases (chat, notifications)

**WebSocket Implementation:**

```javascript
// Server
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Client
function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');
    
    socket.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };
    
    setWs(socket);
    
    return () => socket.close();
  }, []);
  
  const sendMessage = (text) => {
    ws.send(JSON.stringify({ text, timestamp: Date.now() }));
  };
  
  return <div>{ /* Chat UI */ }</div>;
}
```

---

### Lesson 4.4: File Upload and Storage (2 hours)

**What You'll Learn:**
- Handling file uploads
- Replit Object Storage
- Image optimization
- Security considerations

**File Upload:**

```javascript
// Server
import { storage } from './storage';

app.post('/api/upload', async (req, res) => {
  const file = req.files.image;
  
  // Save to Replit Object Storage
  await storage.set(file.name, file.data);
  
  res.json({ url: `/uploads/${file.name}` });
});

// Client
function ImageUpload() {
  const [preview, setPreview] = useState(null);
  
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const { url } = await response.json();
    setPreview(url);
  };
  
  return (
    <div>
      <input type="file" onChange={handleUpload} accept="image/*" />
      {preview && <img src={preview} alt="Preview" />}
    </div>
  );
}
```

---

## MODULE 5: AI-Powered Development (12 hours)

### Lesson 5.1: Introduction to AI Development Tools (2 hours)

**What You'll Learn:**
- Overview of AI coding assistants
- Replit Agent capabilities
- Lovable platform overview
- When to use AI vs manual coding
- Limitations and best practices

**Key Concepts:**
- **Replit Agent**: Full-stack development assistant integrated into Replit
- **Lovable**: Specialized for frontend/UI development
- **Use cases**: Rapid prototyping, boilerplate generation, debugging assistance
- **Human oversight**: AI accelerates, humans validate and refine

---

### Lesson 5.2: Fundamentals of Prompt Engineering (3 hours)

**What You'll Learn:**
- What makes a good prompt
- Specificity and context
- Iterative refinement
- Common pitfalls to avoid

**Prompt Engineering Principles:**

1. **Be Specific and Clear**
   - ❌ Bad: "Make a login page"
   - ✅ Good: "Create a login page with email and password fields, a 'Remember me' checkbox, and a 'Forgot password' link. Use Tailwind CSS for styling and React Hook Form for form handling."

2. **Provide Context**
   - ❌ Bad: "Add authentication"
   - ✅ Good: "Add user authentication to my Express.js backend using bcrypt for password hashing and express-session for session management. Store user data in the existing PostgreSQL database using the Drizzle ORM."

3. **Specify Tech Stack**
   - ❌ Bad: "Create a dashboard"
   - ✅ Good: "Create a React dashboard using shadcn/ui components, with charts from Recharts library, displaying user statistics fetched from /api/stats endpoint."

4. **Break Down Complex Tasks**
   - ❌ Bad: "Build a complete e-commerce site"
   - ✅ Good: "First, create the product listing page with filtering by category and price range. Then we'll add the shopping cart functionality."

5. **Include Design Requirements**
   - ❌ Bad: "Make it look nice"
   - ✅ Good: "Design with a modern, minimalist aesthetic. Use a blue and white color scheme, rounded corners, subtle shadows, and responsive layout for mobile and desktop."

---

### Lesson 5.3: Prompting for Frontend Development (3 hours)

**What You'll Learn:**
- UI/UX prompt patterns
- Component generation
- Styling and responsiveness
- Accessibility requirements

**Frontend Prompt Templates:**

**Creating Components:**
```
Create a [component type] component in React that:
- Displays [specific data/content]
- Includes [interactive features]
- Uses [specific UI library] for styling
- Is responsive for mobile, tablet, and desktop
- Follows accessibility best practices (ARIA labels, keyboard navigation)

Example data structure: [provide sample data]
Design style: [describe visual appearance]
```

**Building Pages:**
```
Build a [page type] page with:
- Header containing [navigation items]
- Main section with [content sections]
- Footer with [footer elements]

Layout requirements:
- Desktop: [layout description]
- Mobile: [mobile-specific layout]

Tech stack:
- React with [routing library]
- [UI component library]
- [styling approach]
```

**Styling Requests:**
```
Style the [component/page] with:
- Color scheme: [primary, secondary, accent colors]
- Typography: [font families, sizes, weights]
- Spacing: [consistent padding/margins]
- Effects: [shadows, transitions, hover states]
- Dark mode: [yes/no, implementation details]
```

**Real Example:**
```
Create a ProductCard component that displays:
- Product image (responsive, with loading state)
- Product name and category
- Price with currency formatting
- "Add to Cart" button
- Favorite/wishlist heart icon

Requirements:
- Use shadcn/ui Card component
- Image should have hover zoom effect
- Price should be prominently displayed
- Button should show loading spinner when clicked
- Use Lucide React icons
- Tailwind CSS for all styling
- Mobile-first responsive design
```

---

### Lesson 5.4: Prompting for Backend Development (3 hours)

**What You'll Learn:**
- API endpoint generation
- Database schema design
- Authentication flows
- Error handling patterns

**Backend Prompt Templates:**

**API Endpoints:**
```
Create a REST API endpoint for [resource]:
- Method: [GET/POST/PUT/DELETE]
- Route: [/api/resource/:id]
- Input: [request body/params/query structure]
- Output: [response structure]
- Validation: [input validation rules]
- Error handling: [specific error cases]
- Authentication: [required/not required]

Database: [ORM and table to use]
```

**Database Schema:**
```
Design a database schema for [feature/domain]:

Tables needed:
1. [table name]:
   - [field name]: [type, constraints]
   - [relationships to other tables]

2. [another table]...

Requirements:
- Use [specific ORM]
- Include timestamps (created_at, updated_at)
- Set up appropriate indexes for [queries]
- Define foreign key relationships
```

**Authentication:**
```
Implement [authentication type] with:
- Registration: [fields required]
- Login: [method - email/username, password]
- Session management: [approach]
- Password security: [hashing method]
- Protected routes: [list of routes]

Database table: [specify or create new]
Security requirements: [specific needs]
```

**Real Example:**
```
Create a complete CRUD API for blog posts:

Endpoints:
- GET /api/posts - list all posts (with pagination, limit 20 per page)
- GET /api/posts/:id - get single post with author details
- POST /api/posts - create new post (authenticated users only)
- PUT /api/posts/:id - update post (author only)
- DELETE /api/posts/:id - delete post (author only)

Request/Response format:
- Post object: { id, title, content, authorId, published, createdAt, updatedAt }

Validation:
- Title: required, 5-200 characters
- Content: required, minimum 50 characters
- Published: boolean, default false

Use Drizzle ORM with existing posts and users tables.
Include proper error messages and status codes.
```

---

### Lesson 5.5: Advanced Prompting Techniques (1 hour)

**What You'll Learn:**
- Iterative refinement
- Debugging with AI
- Code review requests
- Performance optimization

**Advanced Techniques:**

**Iterative Refinement:**
```
Initial: "Create a user dashboard"
Refinement 1: "Add a stats card showing total users, active users, and new signups this month"
Refinement 2: "Make the stats update in real-time using WebSockets"
Refinement 3: "Add a line chart showing user growth over the last 6 months"
```

**Debugging:**
```
I'm getting [error message] when [action that causes error].

Context:
- This happens in [file/component name]
- Relevant code: [paste code snippet]
- Expected behavior: [what should happen]
- Actual behavior: [what's happening]

Tech stack: [relevant technologies]
```

**Code Review:**
```
Review this [component/function] for:
- Performance optimizations
- Security vulnerabilities
- Best practice violations
- Accessibility issues
- Code readability improvements

[paste code]

Suggest specific improvements with code examples.
```

**Performance Optimization:**
```
Optimize [component/function] for:
- Faster render times
- Reduced bundle size
- Better database query performance
- Fewer API calls

Current implementation: [describe/paste code]
Performance bottleneck: [if known]
```

---

## MODULE 6: Deployment and Production (5 hours)

### Lesson 6.1: Preparing for Production (1 hour)

**What You'll Learn:**
- Environment variables
- Production vs development builds
- Security hardening
- Performance optimization

**Production Checklist:**
- ✅ Environment variables properly configured
- ✅ No sensitive data in code
- ✅ HTTPS enforced
- ✅ Error logging implemented
- ✅ Rate limiting on APIs
- ✅ Input validation on all endpoints
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CORS properly configured

---

### Lesson 6.2: Deploying on Replit (2 hours)

**What You'll Learn:**
- Replit deployment process
- Custom domains
- Reserved VM benefits
- Monitoring and logs

**Deployment Steps:**

1. **Prepare Your Application:**
```json
// package.json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --bundle --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js"
  }
}
```

2. **Environment Variables:**
- Set all secrets in Replit Secrets tab
- Never commit .env files
- Use process.env in code

3. **Deploy:**
- Click "Deploy" button in Replit
- Configure autoscaling if needed
- Set up custom domain (optional)

4. **Monitor:**
- Check logs for errors
- Monitor response times
- Set up uptime monitoring

---

### Lesson 6.3: Database Management (1 hour)

**What You'll Learn:**
- Production database setup
- Migrations
- Backups
- Scaling considerations

**Database Best Practices:**
```javascript
// Use connection pooling
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10 // connection pool size
});

// Migrations with Drizzle
// drizzle.config.ts
export default {
  schema: './shared/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  }
};

// Run migrations
// npm run db:push
```

---

### Lesson 6.4: Monitoring and Maintenance (1 hour)

**What You'll Learn:**
- Error tracking
- Performance monitoring
- User analytics
- Continuous improvement

**Monitoring Setup:**
```javascript
// Error logging
app.use((err, req, res, next) => {
  // Log to console (Replit captures this)
  console.error({
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date()
  });
  
  res.status(500).json({ error: 'Internal server error' });
});

// Request logging
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  
  next();
});
```

---

## MODULE 7: Real-World Project Workshop (10 hours)

### Lesson 7.1: Project Planning (2 hours)

**What You'll Learn:**
- Defining requirements
- Feature prioritization (MVP approach)
- Database design
- API design
- UI/UX planning

**Planning Framework:**

1. **Define Core Features:**
   - Must-have (MVP)
   - Should-have (Phase 2)
   - Nice-to-have (Future)

2. **User Stories:**
   - As a [user type], I want to [action] so that [benefit]

3. **Technical Architecture:**
   - Frontend: Tech stack and component structure
   - Backend: API endpoints and data flow
   - Database: Schema and relationships

---

### Lesson 7.2: Building with AI Assistance (4 hours)

**What You'll Learn:**
- Effective prompting workflow
- Iterating on AI-generated code
- Manual refinements
- Integration of components

**Project Build Workflow:**

**Phase 1: Foundation (60 min)**
```
Prompt: "Create the base structure for a [project type] with:
- React frontend with Vite
- Express backend
- PostgreSQL database with Drizzle ORM
- User authentication
- Basic routing

Include all necessary configuration files and a README."
```

**Phase 2: Core Features (120 min)**

For each feature:
1. Write detailed prompt
2. Review generated code
3. Test functionality
4. Refine if needed
5. Move to next feature

Example prompts:
```
"Create a user registration form with:
- Email and password fields
- Password strength indicator
- Email validation
- Error handling
- Loading state
- Success redirect to dashboard"

"Build the backend API for user registration:
- POST /api/auth/register endpoint
- Validate email format and password strength
- Check for existing user
- Hash password with bcrypt
- Create user in database
- Return JWT token or session"
```

**Phase 3: Polish (60 min)**
```
"Improve the user dashboard with:
- Welcome message with user name
- Statistics cards showing [relevant metrics]
- Recent activity list
- Quick action buttons for common tasks
- Responsive design
- Loading states for all data"
```

---

### Lesson 7.3: Testing and Debugging (2 hours)

**What You'll Learn:**
- Manual testing workflow
- Using browser DevTools
- Debugging React components
- API testing with tools
- Common error patterns

**Testing Checklist:**
- ✅ All pages load without errors
- ✅ Forms submit correctly
- ✅ Validation works as expected
- ✅ Authentication protects routes
- ✅ Data persists in database
- ✅ Error messages are user-friendly
- ✅ Responsive on mobile and desktop
- ✅ No console errors

---

### Lesson 7.4: Deployment and Launch (2 hours)

**What You'll Learn:**
- Final pre-launch checklist
- Deploying to Replit
- Post-launch monitoring
- Gathering user feedback

**Launch Process:**

1. **Pre-launch:**
   - Test all features thoroughly
   - Set up production environment variables
   - Configure database for production
   - Review security settings

2. **Deploy:**
   - Run production build
   - Deploy to Replit
   - Verify deployment works
   - Set up custom domain (if desired)

3. **Post-launch:**
   - Monitor logs for errors
   - Test all features in production
   - Collect initial user feedback
   - Plan iteration cycles

---

## MODULE 8: Advanced Topics (10+ hours)

### Lesson 8.1: Advanced AI Integration (3 hours)

**What You'll Learn:**
- Integrating OpenAI API
- Building AI features into apps
- Prompt engineering for users
- Cost management

**AI-Powered Features:**

```javascript
// Server: OpenAI integration
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/ai/generate', async (req, res) => {
  const { prompt } = req.body;
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 500
  });
  
  res.json({ response: completion.choices[0].message.content });
});

// Client: AI feature UI
function AIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  const generate = async () => {
    setLoading(true);
    const res = await fetch('/api/ai/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.response);
    setLoading(false);
  };
  
  return (
    <div>
      <textarea 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask anything..."
      />
      <button onClick={generate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {response && <div>{response}</div>}
    </div>
  );
}
```

---

### Lesson 8.2: Performance Optimization (2 hours)

**What You'll Learn:**
- React performance patterns
- Database query optimization
- Caching strategies
- Bundle size optimization

**Optimization Techniques:**

```jsx
// React: Memoization
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => complexCalculation(item));
  }, [data]);
  
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  return <div>{/* Render */}</div>;
});

// Database: Efficient queries
// ❌ Bad: N+1 query problem
const posts = await db.query.posts.findMany();
for (const post of posts) {
  const author = await db.query.users.findFirst({
    where: eq(users.id, post.authorId)
  });
}

// ✅ Good: Single query with join
const posts = await db.query.posts.findMany({
  with: {
    author: true
  }
});

// Caching
import NodeCache from 'node-cache';
const cache = new NodeCache({ stdTTL: 600 }); // 10 min

app.get('/api/posts', async (req, res) => {
  const cached = cache.get('posts');
  if (cached) return res.json(cached);
  
  const posts = await db.query.posts.findMany();
  cache.set('posts', posts);
  res.json(posts);
});
```

---

### Lesson 8.3: Advanced Patterns (3 hours)

**What You'll Learn:**
- Server-side rendering considerations
- API rate limiting
- Background jobs
- Multi-tenancy

**Advanced Backend Patterns:**

```javascript
// Rate limiting
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/', limiter);

// Background jobs (simple implementation)
class JobQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  
  add(job) {
    this.queue.push(job);
    this.process();
  }
  
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    const job = this.queue.shift();
    
    try {
      await job();
    } catch (error) {
      console.error('Job failed:', error);
    }
    
    this.processing = false;
    this.process();
  }
}

const emailQueue = new JobQueue();

// Add job
emailQueue.add(async () => {
  await sendEmail(user.email, 'Welcome!', template);
});
```

---

### Lesson 8.4: Scaling and Architecture (2 hours)

**What You'll Learn:**
- Microservices concepts
- API design for scale
- Database scaling
- CDN and static assets

**Scaling Considerations:**

1. **Database:**
   - Use indexes for frequently queried fields
   - Implement read replicas for read-heavy apps
   - Consider database sharding for very large datasets

2. **API:**
   - Use pagination for list endpoints
   - Implement field selection (GraphQL-style)
   - Cache frequently accessed data

3. **Frontend:**
   - Code splitting and lazy loading
   - CDN for static assets
   - Service workers for offline support

```jsx
// Code splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Suspense>
  );
}
```

---

## BONUS MODULE: Prompt Engineering Masterclass

### The Ultimate Prompting Framework

**CLEAR Framework for AI Prompts:**

**C - Context**: Provide relevant background
**L - Level**: Specify expertise level and detail needed
**E - Examples**: Include sample data or desired output
**A - Action**: Clear instruction on what to do
**R - Requirements**: Technical constraints and specifications

**Example Application:**

**❌ Vague Prompt:**
"Create a blog"

**✅ CLEAR Prompt:**
```
Context: I'm building a personal blog platform where users can create and share articles.

Level: Intermediate - I understand React and Express basics but need guidance on best practices.

Examples: 
- Post structure: { title, content, author, publishedAt, tags[], coverImage }
- User can create, edit, delete their own posts
- Anyone can view published posts
- Similar to Medium's interface but simpler

Action: Create a full-stack blog application

Requirements:
- Frontend: React with TypeScript, Tailwind CSS, shadcn/ui components
- Backend: Express.js with PostgreSQL (Drizzle ORM)
- Features: User authentication, markdown editor, image uploads, comments
- Responsive design
- SEO-friendly URLs
```

### Prompting Patterns Library

**1. Feature Addition:**
```
Add [feature name] to [existing component/page]:

Current implementation: [describe or paste code]

New requirements:
- [Specific requirement 1]
- [Specific requirement 2]

Integration points:
- [How it connects to existing code]

Design: [UI/UX specifications]
```

**2. Bug Fix:**
```
Fix the following issue:

Error: [exact error message]
Location: [file and line if known]
Steps to reproduce: [numbered list]

Expected: [what should happen]
Actual: [what's happening]

Relevant code:
[paste code snippet]
```

**3. Refactoring:**
```
Refactor [component/function] to:
- Improve [specific aspect]
- Follow [pattern/best practice]
- Maintain current functionality

Current code:
[paste code]

Constraints:
- Don't change [specific parts]
- Maintain backward compatibility
```

**4. Documentation:**
```
Create documentation for [code/feature]:

Purpose: [what it does]
Usage: [how to use it]
Parameters: [inputs]
Returns: [outputs]
Examples: [code examples]

Target audience: [developers/end-users]
Format: [markdown/inline comments/README]
```

---

## Final Project: Build Your Dream App

**Assignment:**

Using everything you've learned, plan and build a complete web application with AI assistance.

**Requirements:**
1. Define your app idea and target users
2. Create detailed feature specifications
3. Design database schema
4. Build using effective AI prompts
5. Deploy to production
6. Document your prompting strategy

**Example Projects:**
- Task management app with team collaboration
- Recipe sharing platform with meal planning
- Fitness tracker with progress charts
- Job board with application tracking
- Learning platform with progress tracking
- Portfolio website with CMS

**Deliverables:**
1. Deployed, working application
2. Source code with clear structure
3. README with setup instructions
4. Documentation of your AI prompting workflow
5. Reflection on what worked well and challenges faced

---

## Course Completion & Next Steps

**Congratulations!** You now have the skills to:
- Build full-stack web applications from scratch
- Leverage AI tools for 10x faster development
- Write effective prompts for any development task
- Deploy production-ready applications
- Continue learning and growing as a developer

**Continuing Your Journey:**

1. **Build More Projects**: Practice is essential
2. **Join Communities**: Replit Community, React forums, Dev.to
3. **Stay Updated**: Follow web dev blogs, newsletters
4. **Contribute**: Open source projects, help others learn
5. **Specialize**: Choose an area to deep dive (performance, security, AI)

**Resources:**
- Replit Documentation
- MDN Web Docs
- React Documentation
- Node.js Documentation
- AI Prompting Guides

---

## Appendix: Quick Reference Guides

### A. Essential Keyboard Shortcuts

**VS Code / Replit:**
- Ctrl/Cmd + P: Quick file open
- Ctrl/Cmd + Shift + P: Command palette
- Ctrl/Cmd + /: Toggle comment
- Alt + Up/Down: Move line
- Ctrl/Cmd + D: Select next occurrence

### B. Common Error Solutions

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**Module Not Found:**
```bash
npm install [package-name]
```

**Database Connection Error:**
- Check DATABASE_URL environment variable
- Verify database is running
- Check credentials

### C. Git Command Quick Reference

```bash
git status              # Check status
git add .              # Stage all changes
git commit -m "msg"    # Commit with message
git push               # Push to remote
git pull               # Pull from remote
```

### D. Prompt Templates Library

Available in separate document: `prompt-templates.md`

---

**End of Course**

This course is designed to be practical, comprehensive, and actionable. Each lesson builds on the previous one, ensuring you develop both the technical skills and the AI collaboration skills needed for modern web development.

Remember: AI tools are powerful accelerators, but your understanding, creativity, and problem-solving skills are what make you a great developer. Use AI to speed up implementation, but always understand what you're building and why.

Happy coding! 🚀
