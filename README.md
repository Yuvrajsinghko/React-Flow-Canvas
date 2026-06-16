# ReactFlow Canvas

Frontend take-home assignment built with React, TypeScript, ReactFlow, Zustand, TanStack Query, shadcn/ui, and MSW.

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
```

---

## Features

### Layout

- Top navigation bar
- Left navigation rail
- ReactFlow canvas
- Right-side application panel
- Mobile drawer for smaller screens

### ReactFlow

- Render graph with nodes and edges
- Node selection
- Node dragging
- Node deletion using Delete / Backspace
- Zoom and pan
- Fit view on load
- Dotted background

### Node Inspector

- Status badge
- Config and Runtime tabs
- Editable node name
- Slider and numeric input
- Two-way synchronization
- Node-specific persistence

### Data Fetching

Mock APIs implemented with MSW:

- GET /apps
- GET /apps/:appId/graph

Features:

- Loading state
- Error state
- Query caching
- Graph refetch on app change

### State Management

Zustand is used for UI state:

- selectedAppId
- selectedNodeId
- activeInspectorTab
- isMobilePanelOpen

---

## Key Decisions

### TanStack Query for Server State

Used TanStack Query to manage API data, caching, loading states, and refetching when switching applications.

### Zustand for UI State

Used Zustand only for UI-related state such as selected app, selected node, active tab, and mobile drawer visibility.

### ReactFlow as Source of Truth

Node-specific values such as name and weight are stored in ReactFlow node data rather than Zustand. This keeps node state independent and avoids shared values between nodes.

### MSW for Mock APIs

Used Mock Service Worker to simulate backend endpoints and error scenarios without requiring a real server.

---

## Known Limitations

- Data is stored in memory only.
- No backend persistence.
- Refreshing the page resets mock data.
- Mobile layout is optimized for assignment requirements rather than production-scale usage.