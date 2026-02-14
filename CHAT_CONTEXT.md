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
*   **Search & Filter Refinements (Step 2 Completed & Enhanced):**
    *   **"Type & Switch" Bug Fix:** Corrected `handleCuisineChange` and `handleSortChange` in `SearchBar.tsx` to preserve the `q` (search query) parameter when changing cuisine or sort filters, preventing loss of typed input.
    *   **Functional Mock Sorting:**
        *   Expanded `lib/mockData.ts` with 20 diverse mock recipes, including `popularity`, `healthiness`, `price`, `calories`, and `protein` properties.
        *   Updated `types/recipe.ts` to include these new sortable properties in the `Recipe` interface.
        *   Refactored `useRecipes.ts` to implement local filtering and sorting of mock data based on `searchQuery`, `cuisine`, and `sort` parameters, eliminating `any` types and using `const` for improved type safety and code quality. `sortDirection` logic was added for 'asc' (time/price) and 'desc' (others).
        *   Updated `SearchBar.tsx` with more comprehensive sorting options (e.g., "Quickest", "Lowest Calories", "Highest Protein", "Surprise Me").
    *   **Home Page Search Bar Remake:**
        *   `HeroSection.tsx` reverted to using `MainSearchInput.tsx`.
        *   `MainSearchInput.tsx` was fully remade using a "Container Approach" for improved aesthetics (focus-within effect for the entire search unit), responsive search button (desktop/mobile), and robust navigation with `encodeURIComponent`.
    *   **Global Color Update:** All instances of `green-300` were replaced with `green-400` in `HeroSection.tsx`, `CategorySection.tsx`, `MealCard.tsx`, and `Header.tsx` for a consistent, deeper green aesthetic.
    *   **Streamlined Header Navigation & Aesthetics:**
        *   `features/layout/Header.tsx` was updated to remove the old toggling search input.
        *   A permanent magnifying glass icon now appears in the header and links directly to `/recipes`.
        *   The "Recipes" navigation link was renamed to "Browse".
        *   The mobile menu (`PopUpDiv`) was updated to reflect these changes, including a "Search" link, and improved closing UX.
        *   Implemented a dynamic transparency effect for the header on the home page: transparent at the top, becoming solid `bg-green-400` on scroll or on other pages. The header was changed to `fixed` positioning.

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
│   │   └── components/
│   │       ├── CategorySection.tsx # Updated color
│   │       ├── HeroSection.tsx     # Uses MainSearchInput, updated color
│   │       └── MainSearchInput.tsx # Remade with new design & navigation
│   ├── layout/
│   │   └── Header.tsx          # Remade for streamlined navigation and dynamic transparency
│   └── recipes/
│       ├── components/
│       │   ├── MealCard.tsx        # Updated color
│       │   ├── MealsSearched.tsx   # Passes sort param to hook
│       │   ├── RecipeContent.tsx
│       │   └── SearchBar.tsx       # Debounced, bug fixes, new sort options
│       └── hooks/
│           ├── useRecipes.ts       # Mock data filtering/sorting, removed 'any'
│           └── useCategories.ts
├── lib/
│   ├── axios.ts
│   └── mockData.ts         # Expanded mock recipes, added sortable properties
└── types/
    └── recipe.ts           # Updated Recipe interface with sortable properties

```

## 🚀 Next Actions for Developer
1.  **Recipe Detail Page (Step 3):**
    *   Make the `MealCards` clickable (add `Link` to `/recipes/[id]`).
    *   Create `app/recipes/[id]/page.tsx`.
    *   Implement SSR fetching for recipe details.
    *   Create `RecipeDetail` component in `features/recipes/components/`.
