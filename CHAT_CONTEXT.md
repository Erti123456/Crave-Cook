# Project Context & Roadmap
**Last Updated:** January 28, 2026
**User Identity:** Jarvis (Assistant)

## 🛑 User Constraints & Rules (CRITICAL)
*   **DO NOT CODE unless explicitly asked:** The user wants to learn. Do not implement features or change code autonomously.
*   **NO CODE SUGGESTIONS (UNLESS REQUESTED):** Do not provide code snippets or solutions by default. **Always ask first:** "Would you like me to suggest the code for this?"
*   **Consultant First:** Focus on architecture, strategy, and explaining "Why" before "How".
*   **Environment:** Linux (Arch-based / Omarchy), LazyVim.
*   **Success Criteria:** No hydration errors, optimized images, strict TypeScript, SSR for discovery.

## 🎯 Project Scope: Crave & Cook
**High-performance recipe discovery platform (Next.js, TS, Tailwind, Clerk).**

### 1. Key Deliverables
*   **Home Page (SSR):** Fetch data on server, no `useEffect`, cache categories.
*   **Recipe Details (`/recipe/[id]`):** Dynamic routing, `generateMetadata`, optimized `<Image>`.
*   **Auth & Favorites:** Clerk integration. Favorites stored in metadata/local state.
*   **UX:** `loading.tsx` skeletons.

## 📜 Conversation Log & Key Decisions (Jan 28)
*   **Architecture Decision:** The Home page (`/`) will be SSR-focused. The Recipes page (`/recipes`) will be a Client-side interactive search tool.
*   **Data Fetching:** Confirmed `useRecipes` hook fetches ~25 items by default. Discussed Category-based filtering vs. Letter-based iteration.
*   **Layout:** Implemented `flex-wrap` for the meal gallery to ensure responsiveness.
*   **Correction:** Fixed `<forum>` vs `<form>` typo and clarified component naming conventions (Uppercase).

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/
│   ├── recipes/
│   │   └── page.tsx      # Client-side Search (In Progress)
│   ├── layout.tsx
│   └── page.tsx         # To be refactored to SSR
├── features/
│   ├── recipes/
│   │   └── hooks/
│   │       └── useRecipes.ts
│   └── ...
└── types/
    └── recipe.ts
```

## 🚀 Next Actions for Developer
1.  **Search Logic:** Implement `useState` for the search input in `app/recipes/page.tsx`.
2.  **Filter UI:** Add the "More Options" toggle to show Categories/Letters.
3.  **Refactor Home:** Start the SSR implementation for the main landing page.
