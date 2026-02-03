# Project Context & Roadmap
**Last Updated:** February 3, 2026
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
### Feb 3 (Current)
*   **Visual Assets:** Updated Thai, Spanish, and French cuisine images in `lib/mockData.ts` with high-quality, watermark-free images from Unsplash and Pexels.
*   **Image Optimization:** Expanded `next.config.ts` to support remote patterns for Unsplash, Pexels, Pixabay, and Placeholder.co.
*   **Layout Stability:** Fixed a horizontal scrolling bug by applying `overflow-x: hidden` to `html` and `body` in `app/globals.css`.
*   **Mobile Experience:** Improved the mobile navigation sidebar in `Header.tsx` with smoother transitions (`opacity`, `pointer-events`) and fixed a width issue that was breaking the layout.
*   **Navigation Cleanup:** Fixed broken/empty `href` links in the mobile menu component.
*   **Search Refinement:** Planned the connection between `HeroSection` search and the `/recipes` page.

### Feb 2 - Feb 3
*   **Major Architecture Shift:** Switched to Spoonacular API. Updated `lib/axios.ts` with a request interceptor for API keys.
*   **Mocking Strategy:** Implemented `USE_MOCK` in `useRecipes.ts` to use local data from `lib/mockData.ts` during UI development.
*   **Data Models:** Refactored `types/recipe.ts` to match Spoonacular's `ComplexSearch` response.

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/
│   ├── recipes/
│   │   └── page.tsx      # Search UI (Supports Cuisine filtering)
│   ├── layout.tsx
│   ├── page.tsx         # Home (Target for SSR refactor)
│   └── providers.tsx    # TanStack Query & Theme providers
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
1.  **Search Connectivity:**
    *   Connect the `HeroSection` search input to the `/recipes` page using query parameters (`?search=query`).
    *   Initialize the `app/recipes/page.tsx` search state from URL search parameters.
2.  **Recipe Detail Page:**
    *   Create `app/recipes/[id]/page.tsx`.
    *   Link `MealCard` to the dynamic detail page.
3.  **Search Refinement:**
    *   Implement "Sort By" logic (Popularity, Price, Healthiness) in `app/recipes/page.tsx`.
    *   Add "Diet" filtering to the search params.
4.  **Home Page SSR:**
    *   Refactor `app/page.tsx` from Client to Server Component.
5.  **New Pages:**
    *   Implement `/favorites` and `/signin` placeholder pages.