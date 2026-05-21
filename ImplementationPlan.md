# Corporate Intranet Web Application Implementation Plan

## Goal Description

To design and build a modern, dynamic, and interactive Corporate Intranet web application using React.js. The platform aims to serve as a central hub for organizational communication, culture-building, and engagement, moving away from standard HR transactions. It will provide visibility into management vision, company announcements, departmental achievements, and employee recognition. Key features include a robust dashboard, an engagement calendar, peer appreciation feeds, an employee directory, a knowledge base, event galleries, and discussion forums. The UX will prioritize a premium, aesthetic, and responsive design using modern CSS practices (glassmorphism, dark mode, smooth animations).

## User Review Required

> [!IMPORTANT]
> **Data Persistence Strategy**
> Since the focus is on frontend architecture, UI/UX, and element selection, should we mock the backend APIs and database using a local mock service (like JSON Server or Mock Service Worker) or simple memory/local-storage based state for this initial web app prototype? This will allow us to focus entirely on the frontend experience.

> [!WARNING]
> **Styling Approach**
> I will use Vanilla CSS with CSS Modules or global scoped CSS to ensure a premium, customized look with rich aesthetics, gradients, and micro-animations, as Tailwind CSS is avoided per guidelines. Please confirm if this approach is preferred over component libraries (like MUI or AntD).

## Open Questions

- Do you have any specific color palette preferences (e.g., brand colors), or should I design a sleek, modern palette (e.g., deep indigo/slate dark mode with vibrant accent colors)?
- For the "gamification elements," should we implement a simple point-based system tied to actions like posting in forums and giving peer appreciation?
- How many distinct roles or "departments" should we mock initially to demonstrate the multi-tenancy and visibility controls?

## Architecture & Schema Design (Proposed)

While this is a frontend application, we will structure our state and mock schemas as follows to ensure easy backend integration later:

### Core Schemas (Mocked)
1. **User**: `id`, `name`, `role`, `departmentId`, `points` (gamification), `avatar`, `bio`.
2. **Department**: `id`, `name`, `description`.
3. **Announcement/Post**: `id`, `title`, `content`, `authorId`, `departmentId` (null for global), `type` (Vision, Milestone, Achievement, Win), `timestamp`, `likes`, `comments`.
4. **Recognition**: `id`, `giverId`, `receiverId`, `message`, `timestamp`.
5. **Event**: `id`, `title`, `date`, `description`, `attendees`.
6. **KnowledgeDoc**: `id`, `title`, `category`, `contentUrl`.
7. **ForumThread**: `id`, `topic`, `authorId`, `repliesCount`, `lastActive`.

### State Management
- **React Context API** or **Zustand** for global state (e.g., Auth User, Theme (Dark/Light), Notifications).
- **React Router** for application routing.

## Proposed Component Structure & UI Elements

The application will be highly modular.

### 1. Layout & Core Navigation
- **Sidebar Navigation**: Collapsible, glassmorphic sidebar for quick access to modules.
- **Top Bar**: Search bar (Global colleague/document search), Notifications bell, User Profile dropdown, Theme toggle.

### 2. Main Dashboard (The Hub)
- **Hero Section**: Carousel of Management Vision, Key Announcements, and "Welcome New Joinees".
- **Widgets Grid**:
  - *My Department Updates*: Filtered stream of departmental news.
  - *Upcoming Events Calendar*: Visual mini-calendar.
  - *Recognition Wall*: Rolling ticker or cards of recent peer appreciations.
  - *Leaderboard*: Top engaged employees.

### 3. Modules (Pages)
- **Discover (Directory)**: Rich cards for employees with filters by department, role.
- **Engagement Calendar**: Full month/week view of events.
- **Culture & Recognition**: Dedicated feed for celebrating wins, with comment/reply mechanics.
- **Knowledge & Reference Hub**: Folder-like structure with a sleek list view for policies.
- **Media Gallery**: Masonry layout for event images/videos.
- **Forums**: Topic-based discussion boards.

## Thematic Representation & CSS Strategy

- **Color Palette**: Dark mode by default (Deep Space colors like `#0F172A`) with vibrant accents (e.g., Neon Blue `#3B82F6` or Emerald `#10B981`) for interactive elements.
- **Typography**: `Inter` or `Outfit` for clean, highly legible, modern look.
- **Visuals**:
  - Glassmorphism for overlays and sidebars (`backdrop-filter: blur()`).
  - Subtle gradients for active states and hero banners.
  - Micro-animations (hover lifts, fade-ins on scroll) for a dynamic feel.

## Verification Plan

### Automated/Manual Testing
- Run `npm run dev` to verify the application loads without errors.
- Verify routing between all major modules.
- Ensure the application is fully responsive on desktop, tablet, and simulated mobile views.
- Test the dark/light theme toggle and visual accessibility.
- Simulate user login/role switching to verify "multi-tenancy" visibility changes.
