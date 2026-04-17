Dynamic Content Builder

A production-quality React application that enables users to dynamically create, edit, and organize content using a block-based interface — similar to modern editors like Notion.

---

🚀 Overview

The Dynamic Content Builder allows users to construct rich content layouts using modular blocks such as text, images, headers, and markdown. It emphasizes flexibility, intuitive drag-and-drop interactions, and persistent state management.

---

🛠 Tech Stack

- React (Vite) — Fast development and optimized builds
- Tailwind CSS — Utility-first styling for rapid UI development
- dnd-kit — Lightweight, accessible drag-and-drop library
- Context API + useReducer — Centralized and predictable state management
- localStorage — Client-side persistence

---

✨ Features

- Drag-and-drop block reordering
- Multiple block types:
  - Text Block
  - Image Block (URL-based)
  - Header Block (H1, H2, H3)
  - Markdown Block (live preview)
- Real-time editing of each block
- Persistent state across page reloads
- Clean, modern SaaS-style UI
- Smooth animations and interaction feedback

---

🧱 Architecture & Component Design

The application follows a modular and scalable component architecture:

src/
├── components/
│ ├── Palette.jsx → Block selector panel
│ ├── Canvas.jsx → Main editor area
│ ├── BlockWrapper.jsx → Shared block container
│ └── blocks/ → Individual block implementations
├── context/
│ └── BuilderContext.jsx → Global state management
├── utils/
│ ├── constants.js → Block type definitions
│ └── helpers.js → Utility functions (e.g., arrayMove)

Key Design Decisions

- Separation of concerns
  - UI rendering is isolated from state logic
- Block abstraction
  - Each block type is its own component
- Wrapper pattern
  - "BlockWrapper" standardizes layout and behavior across all blocks

This structure ensures the system is easily extensible (e.g., adding new block types).

---

🎨 UI/UX Design Choices

The UI is intentionally designed to reflect modern SaaS editing tools:

Layout

- Left Sidebar (Palette)
  Provides quick access to block types with clear affordances.

- Main Canvas
  
  - Centered content area for focus
  - Max-width constraint for readability

Visual Design

- Soft shadows and rounded cards → improve content separation
- Subtle gradients → enhance depth without distraction
- Consistent spacing → improves scanability

Interaction Design

- Hover states for discoverability
- Drag feedback (opacity + scale)
- Smooth transitions using Tailwind utilities

Empty State

- Clear onboarding message when canvas is empty

---

🔄 State Management Strategy

The app uses React Context + useReducer to manage state in a centralized and predictable way.

State Shape

{
  blocks: [
    {
      id: string,
      type: string,
      content: string,
      config: object
    }
  ]
}

---

Why useReducer?

- Handles complex updates (add, update, reorder)
- Keeps logic centralized
- Improves maintainability vs scattered useState

---

Supported Actions

- "ADD_BLOCK" → Adds a new block
- "UPDATE_BLOCK" → Updates content/config
- "REORDER_BLOCKS" → Handles drag-and-drop sorting
- "LOAD" → Hydrates state from localStorage

---

Block Handling

Each block is:

- Identified by a unique "id"
- Rendered dynamically based on "type"
- Updated independently without affecting others

---

🔀 Drag-and-Drop Implementation

Implemented using dnd-kit:

- "DndContext" → global drag context
- "SortableContext" → manages ordering
- "useSortable" → enables drag behavior per block

Behavior

- Vertical list sorting
- Smooth transform-based animations
- Safe handling of invalid drag states

---

💾 Persistence Strategy

Persistence is implemented using localStorage.

Flow

1. On app load:
   
   localStorage.getItem("builder")
   
   → hydrate state via "LOAD"

2. On state update:
   
   localStorage.setItem("builder", JSON.stringify(state))

Benefits

- No backend required
- Instant recovery on refresh
- Simple and reliable

Error Handling

- Try/catch guards prevent crashes from malformed data

---

⚠️ Edge Cases Handled

- Empty canvas state
- Invalid image URLs (fallback UI)
- Dragging outside valid zones
- Reordering with invalid indices
- Corrupt localStorage data

---

🧪 Testing

Manual validation includes:

- Adding all block types
- Editing content
- Reordering blocks
- Refresh persistence
- Build verification ("npm run build")

---

📦 Setup & Run

npm install
npm run dev

Production Build

npm run build
npm run preview

---

🔮 Future Improvements

- Block deletion / duplication
- Undo/Redo history
- Keyboard navigation
- Rich text editor (Slate / TipTap)
- Backend persistence (API integration)
- Plugin-based block system

---

🧠 Summary

This project demonstrates:

- Scalable component architecture
- Effective state management using reducers
- Real-world drag-and-drop implementation
- Thoughtful UI/UX design
- Persistent client-side data handling

---

📄 License

This project is for educational and demonstration purposes.
