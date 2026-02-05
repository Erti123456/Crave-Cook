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
### Feb 5 (Latest Progress)
*   **URL-Controlled Search (Step 2 Investigation):**
    *   Identified that `useSearchParams().get()` returns `string | null`, which causes type and logic issues when passed directly to `useRecipes`.
    *   Determined that the `useRecipes` hook needs valid strings to prevent literal "null" searches in the API.
    *   Decided to use the nullish coalescing operator (`??`) to provide `""` fallbacks for URL parameters.
    *   Confirmed `lodash` is available in `package.json` for future implementation of debounced URL updates.
    *   Identified a conflict in `RecipeContent.tsx` where local state is passed as props to `MealsSearched.tsx`, while the latter is trying to read directly from the URL.

### Feb 4
*   **Component Refactoring (Step 1 Complete):** 
    *   Deconstructed `app/recipes/page.tsx` into modular components.
    *   Created optimized `MealCard.tsx` and refactored `SearchBar.tsx`.
    *   Isolated data fetching logic into `MealsSearched.tsx`.

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
│   │   │   ├── MealsSearched.tsx # Currently investigating URL parameter syncing
│   │   │   ├── RecipeContent.tsx
│   │   │   └── SearchBar.tsx
│   │   └── hooks/
│   │       ├── useRecipes.ts     # Handles Spoonacular/Mock logic
│   │       └── useCategories.ts
└── lib/
    ├── axios.ts
    └── mockData.ts
```

## 🚀 Next Actions for Developer
1.  **Sync `MealsSearched.tsx` (Priority):**
    *   Update parameter assignments using `?? ""` to handle `null` results from `useSearchParams`.
2.  **Refactor `RecipeContent.tsx` State:**
    *   Remove redundant local `useState` for `input` and `cuisine`.
    *   Ensure the component uses URL parameters as the single source of truth.
3.  **Implement Debounced Search:**
    *   Update `SearchBar.tsx` to push updates to the URL with a debounce.
4.  **Recipe Detail Page (Step 3):**
    *   Create `app/recipes/[id]/page.tsx`.
