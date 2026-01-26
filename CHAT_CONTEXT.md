# Project Context & Roadmap
**Last Updated:** January 26, 2026

## 🛑 User Constraints & Rules (CRITICAL)
*   **DO NOT CODE unless explicitly asked:** The user wants to learn. Do not implement features or change code autonomously. Act as a consultant first.
*   **No Code Suggestions (unless requested):** When asking "what is missing," focus on architecture and strategy, not specific lines of code.
*   **Environment:**
    *   OS: Linux (Arch-based / Omarchy).
    *   Editor: LazyVim.
    *   Goal: Learning to get a tech job.
*   **Tooling:** Use the project to learn specific tech (React 19, TS 5.9, React Query, Styled Components, etc.).

## 📜 Conversation Log & Key Decisions

### 1. Initial Request & Constraints
*   **User asked:** "Can you see my project... suggest what is missing... make it so features I add require learning these technologies?"
*   **User Instruction:** "Don't change the code in codebase" (after initial attempt to install dependencies).
*   **User Instruction:** "You don't code only when I tell you to code."

### 2. Architectural Advice
*   **Critique:** Flat `components/` structure is unscalable. Conflicting styling libraries need a strategy.
*   **Structure:** Adopted "Feature-Based Architecture" (`features/home`, `features/recipes`) to organize by domain.
*   **Tech Strategy:**
    *   **Data:** GraphQL (Complex Entities) + Axios (REST). React Query is mandatory.
    *   **Styling:** Tailwind (Layouts) + Styled Components (Complex UI).
    *   **State:** Context only for global client state; React Query for everything else.

### 3. Execution (Authorized by User)
*   **User Instruction:** "Help me structure the folders."
*   **Action Taken:**
    *   Created directories: `features/home/components`, `features/layout`, `hooks` (renamed to `globalHooks`), `lib`, `types`.
    *   Moved files:
        *   `HeroSection.tsx` & `CategorySection.tsx` -> `features/home/components/`
        *   `Header.tsx` -> `features/layout/`
        *   `useIsMobile.tsx` -> `globalHooks/`
    *   **Updated Imports:** Fixed all broken paths in `app/page.tsx`, `app/layout.tsx`, and the moved components.

### 4. Data Layer Implementation (Authorized by User)
*   **User Instruction:** "Give me instructions for step 1... help me verify."
*   **Action Taken:**
    *   **Contract (Types):** Created `types/recipe.ts`. Moved `Category` interface there and added `Recipe` and `RecipeAPIResponse` interfaces to match TheMealDB API.
    *   **Messenger (Axios):** Created `lib/axios.ts` with base URL and headers.
    *   **Manager (Hooks):** Created `features/recipes/hooks/useRecipes.ts` using `useQuery` to fetch data.
    *   **Cleanup:** Renamed `hooks` -> `globalHooks` and verified imports were updated correctly.

---

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/                 # Next.js App Router
├── features/            # Business Logic & Domains
│   ├── home/            # Landing Page
│   ├── recipes/         # Recipe Logic
│   │   └── hooks/       # useRecipes hook
│   └── layout/          # Global UI
├── globalHooks/         # Global Hooks (useIsMobile)
├── lib/                 # External client configs (Axios)
├── types/               # Global TypeScript interfaces (recipe.ts)
└── public/              # Static Assets
```

## 🚀 The Master Plan (Roadmap)

### Phase 1: The Core "Vertical Slice" (Current Focus)
Goal: Fetch and display a list of recipes using the full stack.
1.  **Define Types:** DONE (`types/recipe.ts`).
2.  **Data Layer:** DONE (`lib/axios.ts`, `useRecipes.ts`).
3.  **UI Component:** Build `RecipeList` component to display the data.
4.  **Integration:** Display the list on a new `/recipes` page or the home page.

### Phase 2: User Features
1.  **Authentication:** Firebase Auth integration.
2.  **State Management:** User profile context.
3.  **Favorites:** Save recipes to local storage (or Firebase).

### Phase 3: Advanced Tech
1.  **Maps:** Mapbox integration for "Sourcing Ingredients".
2.  **Payments:** Stripe integration for "Premium Recipes".
3.  **Internationalization:** i18next for multi-language support.

## 📝 Next Actions for Developer
1.  Create `features/home/components/RecipeList.tsx` (or similar) to consume the `useRecipes` hook.
2.  Test the data flow by displaying real recipe names on the screen.