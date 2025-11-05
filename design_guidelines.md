# Design Guidelines: Full-Stack Web Development Learning Platform

## Design Approach

**Selected System**: Custom Educational Platform Design inspired by Udemy, Coursera, and Linear
**Rationale**: Educational platforms prioritize clarity, accessibility, and consistent navigation. The design balances professional aesthetics with learning-focused functionality.

**Core Principles**:
- Clarity over decoration
- Progressive disclosure of complex information
- Consistent navigation patterns across all pages
- Visual hierarchy that guides learning flow

---

## Typography

**Font Families** (via Google Fonts):
- Primary: Inter (headings, UI elements, body text)
- Code: JetBrains Mono (code snippets, technical content)

**Hierarchy**:
- Hero Headings: text-5xl to text-6xl, font-bold
- Page Titles: text-4xl, font-bold
- Section Headings: text-2xl to text-3xl, font-semibold
- Module/Lesson Titles: text-xl, font-semibold
- Body Text: text-base, font-normal, leading-relaxed
- Captions/Meta: text-sm, font-medium
- Code Blocks: text-sm, font-mono

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-20
- Card gaps: gap-4, gap-6, gap-8
- Margin separators: mb-8, mb-12, mb-16

**Container Structure**:
- Max width: max-w-7xl for main content areas
- Dashboard/Admin: max-w-screen-xl for data-heavy layouts
- Lesson content: max-w-4xl for optimal reading
- Sidebar navigation: w-64 (desktop), full-width (mobile)

**Grid Patterns**:
- Course cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature highlights: grid-cols-1 md:grid-cols-3
- Dashboard stats: grid-cols-2 md:grid-cols-4
- Lesson resources: Single column, stacked vertically

---

## Component Library

### Navigation
- **Top Navigation Bar**: Fixed header with logo (left), main links (center), CTA button + user avatar (right), height h-16, backdrop-blur effect when scrolling
- **Course Sidebar**: Collapsible module list with progress indicators, nested lesson structure, sticky positioning
- **Breadcrumbs**: For lesson navigation showing Course > Module > Lesson path

### Home Page Components
- **Hero Section**: Full-width with height of 80vh, split-layout design with headline + CTA on left (50%), large hero image on right (50%) showing students coding or modern development environment, gradient overlay for text readability
- **Course Overview Cards**: Three-column grid showcasing key outcomes with icon, title, description format
- **Testimonial Section**: Two-column layout with student photos (circular, size-16), quote text, name, and achievement badge
- **Stats Bar**: Four metrics in single row (Students Enrolled, Completion Rate, Hours of Content, Career Transitions)
- **CTA Footer Section**: Centered layout with primary enrollment button, secondary "View Curriculum" link, trust indicators below

### Curriculum Page Components
- **Module Accordion**: Expandable panels showing module number, title, duration, completion percentage, with nested lesson list
- **Lesson Card**: Icon indicator (video/text/code), lesson title, duration badge, status indicator (locked/in-progress/completed), estimated time
- **Progress Bar**: Horizontal bar showing overall course completion at top of page

### Lesson Page Components
- **Content Container**: White background card with rounded-2xl, shadow-lg, padding p-8
- **Video Player**: 16:9 aspect ratio, custom controls, progress saving
- **Code Block**: Syntax-highlighted with copy button, language tag, line numbers for longer snippets
- **Markdown Renderer**: Proper heading hierarchy, blockquotes, lists, inline code styling
- **Navigation Controls**: Fixed bottom bar with "Previous" (left), progress indicator (center), "Next" (right) buttons
- **Resources Sidebar**: Downloadable files with icons, file size, download button

### AI Prompt Learning Components
- **Interactive Prompt Builder**: Two-panel layout with input textarea (left), live AI response preview (right)
- **Example Gallery**: Card grid showing before/after prompt improvements with annotations
- **Practice Exercise Cards**: Challenge description, input field, submit button, feedback display area

### Dashboard Components
- **Progress Overview**: Circular progress chart, completed modules count, total hours learned
- **Course Timeline**: Vertical timeline showing completed lessons with dates and upcoming milestones
- **Certificate Section**: Visual certificate preview card with download button
- **Continue Learning Card**: Large prominent card showing last accessed lesson with thumbnail and resume button

### Admin Panel Components
- **Content Management Table**: Sortable columns for lessons, status badges, quick action buttons (edit/delete)
- **Lesson Editor**: Form layout with title, description, content type selector, file upload areas
- **User Analytics Grid**: Cards showing enrollment trends, completion rates, popular modules

### Form Elements
- **Input Fields**: Rounded-lg borders, p-3 padding, focus ring-2 states
- **Buttons**: Primary (rounded-lg, px-6, py-3), Secondary (outline variant), Icon buttons (square aspect ratio)
- **Dropdown Menus**: Rounded-xl with shadow-lg, max height with scroll
- **Toggle Switches**: For settings and preferences, larger touch target size-12

### Cards & Containers
- **Standard Card**: rounded-2xl, shadow-md, p-6, hover shadow-lg transition
- **Feature Card**: rounded-xl, border variant, p-8, with icon container at top
- **Lesson Preview Card**: Compact design with thumbnail (if video), title, meta information row
- **Dashboard Widget**: rounded-2xl, border design, p-6, with header section

---

## Images

**Hero Image**: Large, high-quality photograph showing modern developer workspace or students collaborating on code. Should convey professionalism and modern tech environment. Positioned on right side of hero split-layout, occupying 50% width.

**Testimonial Photos**: Circular profile images of students/graduates, size w-16 h-16, professionally shot or high-quality avatars.

**Course Thumbnails**: 16:9 aspect ratio images for each module, abstract tech illustrations or code-themed graphics.

**Empty States**: Friendly illustrations for dashboard when no progress exists, or admin panel with no content.

---

## Interaction Patterns

**Page Transitions**: Smooth fade-in for content areas, slide-in for sidebar navigation

**Hover States**: 
- Cards: Subtle lift effect with shadow increase (translate-y-1, shadow-lg)
- Buttons: Slight scale (scale-105) with shadow enhancement
- Links: Underline appearance on hover

**Progress Indicators**: 
- Linear bars with animated fill on page load
- Circular charts with animated arc drawing
- Checkmark animations on lesson completion

**Accordion Behavior**: Smooth max-height transition with rotate transform on chevron icon

**Modal Overlays**: Backdrop blur with fade-in animation for lesson resources, enrollment forms

**Sticky Elements**: Course sidebar remains visible during scroll, lesson navigation bar sticks to bottom

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked layout, hamburger menu)
- Tablet: 768px - 1024px (two-column grids, collapsible sidebar)
- Desktop: > 1024px (full multi-column layouts, persistent sidebar)

**Mobile Optimizations**:
- Hero section: Stack content vertically, reduce height to 60vh
- Navigation: Slide-out drawer menu
- Course sidebar: Bottom sheet or full-screen overlay
- Lesson navigation: Simplified sticky bar with icons only
- Cards: Full-width with comfortable tap targets (min 44px height)