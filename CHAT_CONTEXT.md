# Project Context & Roadmap
**Last Updated:** February 5, 2026
**User Identity:** Jarvis (Assistant)

## 🛑 User Constraints & Rules (CRITICAL)
*   **DO NOT CODE unless explicitly asked:** The user wants to learn. Do not implement features or change code autonomously.
*   **NO CODE SUGGESTIONS (UNLESS REQUESTED):** Do not provide code snippets or solutions by default. **Always ask first:** "Would you like me to suggest the code for this?"
*   **Communication Style:** Don't ask what *I* (the agent) should do. Instead, propose specific actions and ask if you want me to do them. When you ask "What should I do?", I will provide clear, prioritized next steps for you.
*   **Consultant First:** Focus on architecture, strategy, and explaining "Why" before "How".
*   **Environment:** Linux (Arch-based / Omarchy), LazyVim.
*   **Success Criteria:** No hydration errors, optimized images, strict TypeScript, SSR for discovery.

## 🎯 Project Scope: Crave & Cook
**High-performance recipe discovery platform (Next.js, TS, Tailwind, Clerk).**

### 1. Key Deliverables
*   **API Migration:** Fully migrated from TheMealDB to **Spoonacular API**.
*   **Home Page (SSR):** Fetch data on server, no `useEffect`, cache categories.
*   **Recipe Discovery:** Client-side search with cuisine and diet filtering.
*   **Dev Efficiency:** Using mock data (`lib/mockData.ts`) to preserve Spoonacular API points.

## 📜 Conversation Log & Key Decisions
### Feb 9 (Latest Progress)
*   **URL-Controlled Search (Step 2 Completed):**
    *   Implemented debounced search in `SearchBar.tsx` using `useMemo` and `lodash.debounce`.
    *   Added `useEffect` cleanup to prevent memory leaks and ghost navigations.
    *   Optimized `CuisineFilter` to push immediately while cancelling any pending search debounce for consistency.
    *   Added detailed code comments explaining the architectural decisions (Stability, Optimization, Memory Safety).

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/
│   ├── recipes/
│   │   └── page.tsx      # Entry point (Suspense wrapper)
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── features/
│   ├── home/
│   ├── recipes/
│   │   ├── components/
│   │   │   ├── MealCard.tsx
│   │   │   ├── MealsSearched.tsx 
│   │   │   ├── RecipeContent.tsx
│   │   │   └── SearchBar.tsx     # Debounced URL updates implemented
│   │   └── hooks/
│   │       ├── useRecipes.ts     # Handles Spoonacular/Mock logic
│   │       └── useCategories.ts
└── lib/
    ├── axios.ts
    └── mockData.ts
```

## 🚀 Next Actions for Developer
1.  **Recipe Detail Page (Step 3):**
    *   Create `app/recipes/[id]/page.tsx`.
    *   Implement SSR fetching for recipe details.
    *   Create `RecipeDetail` component in `features/recipes/components/`.
