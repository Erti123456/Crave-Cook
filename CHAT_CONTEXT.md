# Project Context & Roadmap
**Last Updated:** February 21, 2026
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
*   **User Engagement:** Clerk Authentication and Favorites system (Supabase planned).

## 📜 Conversation Log & Key Decisions

### Feb 21 (Recipe Detail & Auth Progress)
*   **Recipe Data Infrastructure:**
    *   **Types Updated:** `types/recipe.ts` expanded with `Ingredient`, `Instruction`, `Nutrient` interfaces.
    *   **Mock Data Richness:** `lib/mockData.ts` updated with detailed ingredients, instructions, and nutrition for the first 10 recipes to support UI development without API calls.
    *   **Data Access:** Created `lib/getRecipeById.ts` using a robust `async` loop to find recipes by ID, prepared for `apiClient` integration.
*   **Recipe Detail Page Implementation:**
    *   **Dynamic Routing:** Created `app/recipes/[id]/page.tsx` as a Server Component using Next.js 16 `params` Promise logic.
    *   **Architecture:** Reorganized components into `features/recipes/components/listing` and `features/recipes/components/detail`.
    *   **UI Components (Detail):**
        *   `RecipeHero.tsx`: Premium, responsive hero with high-quality images (Unsplash), HTML summary handling, and quick stats.
        *   `NutritionGrid.tsx`: Styled 4-column grid (Calories, Protein, Fat, Carbs) inspired by professional food blog designs.
        *   `IngredientsList.tsx`: Checked list using `lucide-react` icons.
        *   `InstructionsList.tsx`: Numbered steps with custom styled indicators.
    *   **UX Fixes:** Implemented `ErrorHandle` for invalid IDs and added a "Back to Browse" link.
*   **Layout & Global Navigation:**
    *   **Header Refinement:** Fixed mobile menu (PopUpDiv) click-outside logic and event bubbling. Improved header to be transparent only on Home top-scroll and solid `bg-green-400` on all other pages.
    *   **Clerk Integration:** Added `ClerkProvider` to `RootLayout` and initial `clerkMiddleware`. Integrated `UserButton` and `SignedOut`/`SignedIn` logic into the Header.
*   **Search Improvements:**
    *   **SearchBar.tsx:** Fixed Tailwind v4 animation issues. Replaced non-standard classes with `framer-motion` for smooth dropdown transitions and `react-icons` for chevrons.

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/
│   ├── recipes/
│   │   ├── [id]/
│   │   │   └── page.tsx      # SSR Recipe Detail Page
│   │   └── page.tsx          # Recipe Listing (Search/Filter)
│   ├── sign-in/
│   │   └── [[...sign-in]]/   # Clerk Custom Sign-In
│   ├── sign-up/
│   │   └── [[...sign-up]]/   # Clerk Custom Sign-Up
│   ├── layout.tsx            # ClerkProvider & Root Layout
│   ├── page.tsx              # Home Page
│   └── providers.tsx         # React Query & Global Providers
├── features/
│   ├── layout/
│   │   └── Header.tsx        # Responsive Header w/ Auth & Scroll logic
│   └── recipes/
│       ├── components/
│       │   ├── detail/       # RecipeHero, NutritionGrid, IngredientsList, InstructionsList
│       │   └── listing/      # MealCard, SearchBar, MealsSearched, RecipeContent
│       └── hooks/
│           ├── useRecipes.ts # Mock/API Switch logic
│           └── useCategories.ts
├── lib/
│   ├── axios.ts              # Spoonacular apiClient configuration
│   ├── getRecipeById.ts      # Fetcher for Detail Page
│   └── mockData.ts           # Rich Mock Data (v2)
└── types/
    └── recipe.ts             # Strict TypeScript definitions
```

## 🚀 Next Actions for Developer
1.  **Authentication UI:** Finalize the custom `sign-in` and `sign-up` pages with the `pt-32` layout fix.
2.  **User Profile:** Implement `app/user-profile/[[...user-profile]]/page.tsx` using Clerk's `<UserProfile />`.
3.  **Favorites Logic (Supabase):** 
    *   Initialize Supabase client.
    *   Create `favorites` table and link to Clerk `userId`.
    *   Implement "Heart" button in `MealCard`.
4.  **Real API Transition:** Flip `USE_MOCK` to `false` once API limits reset and audit data mapping.
