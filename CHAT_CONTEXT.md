# Project Context & Roadmap
**Last Updated:** February 4, 2026
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
### Feb 4 (Current)
*   **Search Connectivity:** Successfully linked `MainSearchInput.tsx` on the Home page to the Recipes page using URL query parameters (`?q=...`).
*   **App Router Migration:** Updated navigation logic in `MainSearchInput.tsx` and `app/recipes/page.tsx` to use `next/navigation` (`useRouter`, `useSearchParams`) instead of the deprecated `next/router`.
*   **Bug Fix:** Fixed an issue in `MainSearchInput.tsx` where `e.preventDefault()` on `onKeyDown` was preventing all text entry.
*   **Stability:** Added `<Suspense>` to `app/recipes/page.tsx` to properly handle the use of `useSearchParams` in a Client Component during build/SSR.
*   **Source of Truth Strategy:** Decided to move toward "URL-controlled search" (removing local state as the primary search value) to improve link sharing and browser history.

### Feb 3
*   **Visual Assets:** Updated cuisine images in `lib/mockData.ts` with high-quality, watermark-free images.
*   **Image Optimization:** Expanded `next.config.ts` for remote image patterns.
*   **Layout Stability:** Fixed horizontal scrolling bugs in `globals.css`.
*   **Mobile Experience:** Improved navigation sidebar transitions in `Header.tsx`.

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/
│   ├── recipes/
│   │   └── page.tsx      # Search UI (Uses Suspense + useSearchParams)
│   ├── layout.tsx
│   ├── page.tsx         # Home
│   └── providers.tsx
├── features/
│   ├── home/            # Home-specific components
│   ├── layout/          # Header, Footer
│   └── recipes/
│       └── hooks/
│           ├── useRecipes.ts     # Fetches from Spoonacular (Mock enabled)
│           └── useCategories.ts  # Static popular cuisines
├── lib/
│   ├── axios.ts         # Spoonacular client with Interceptor
│   └── mockData.ts      # Dev mock data
└── types/
    └── recipe.ts        # Spoonacular-compatible types
```

## 🚀 Next Actions for Developer
1.  **URL-Controlled Search (Priority):**
    *   Rework `SearchBar` in `app/recipes/page.tsx` to use `lodash.debounce` to update the URL directly as the user types.
    *   Sync the input value with `useSearchParams()` so the URL is the "Source of Truth".
2.  **Code Organization:**
    *   Move `MealCard` and `SearchBar` from `app/recipes/page.tsx` to dedicated files in `features/recipes/components/`.
3.  **Image Optimization:**
    *   Add the `sizes` attribute to the `Image` component in `MealCard` to optimize browser downloading.
4.  **Recipe Detail Page:**
    *   Create `app/recipes/[id]/page.tsx` and link cards to it.
5.  **Home Page SSR:**
    *   Refactor `app/page.tsx` from Client to Server Component.
