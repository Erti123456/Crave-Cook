# Project Context & Roadmap
**Last Updated:** January 27, 2026

## 🛑 User Constraints & Rules (CRITICAL)
*   **DO NOT CODE unless explicitly asked:** The user wants to learn. Do not implement features or change code autonomously. Act as a consultant first.
*   **No Code Suggestions (unless requested):** When asking "what is missing," focus on architecture and strategy, not specific lines of code.
*   **Environment:**
    *   OS: Linux (Arch-based / Omarchy).
    *   Editor: LazyVim.
    *   Goal: Learning to get a tech job.
*   **Tooling:** Use the project to learn specific tech (React Query, Styled Components, etc.).
*   **User Identity:** Assistant is now identified as **Jarvis**.

## 📜 Conversation Log & Key Decisions

### 1. Initial Request & Constraints
*   **User asked:** "Can you see my project... suggest what is missing... make it so features I add require learning these technologies?"
*   **User Instruction:** "You don't code only when I tell you to code."

### 2. Architectural Advice
*   **Structure:** Adopted "Feature-Based Architecture" (`features/home`, `features/recipes`) to organize by domain.
*   **Tech Strategy:**
    *   **Data:** GraphQL (Complex Entities) + Axios (REST). React Query is mandatory.
    *   **Styling:** Tailwind (Layouts) + Styled Components (Complex UI).

### 3. Execution (Authorized by User)
*   **Folders:** Created `features/home/components`, `features/layout`, `globalHooks`, `lib`, `types`.
*   **Data Layer:** Created `types/recipe.ts`, `lib/axios.ts`, and `features/recipes/hooks/useRecipes.ts`.

### 4. React Query Setup (Jan 27)
*   **Action Taken:** 
    *   Created `app/providers.tsx` to initialize the `QueryClient`.
    *   Updated `app/layout.tsx` to wrap the application in `Providers`.
*   **Explanation:** Jarvis explained the roles of `QueryClient` (The Archivist) and `QueryClientProvider` (The Infrastructure).

---

## 📂 Project Structure (Current)
```text
/crave-cook
├── app/                 # Next.js App Router
│   ├── providers.tsx    # React Query Engine
│   └── layout.tsx       # Updated with Providers
├── features/            # Business Logic & Domains
│   ├── home/            # Landing Page
│   ├── recipes/         # Recipe Logic
│   └── layout/          # Global UI
├── globalHooks/         # Global Hooks (useIsMobile)
├── lib/                 # External client configs (Axios)
├── types/               # Global TypeScript interfaces
└── public/              # Static Assets
```

## 🚀 The Master Plan (Roadmap)

### Phase 1: The Core "Vertical Slice" (Current Focus)
Goal: Fetch and display a list of recipes.
1.  **Define Types:** DONE.
2.  **Data Layer:** DONE.
3.  **Engine Setup:** DONE (Providers).
4.  **UI Component:** Create `RecipeList.tsx` to consume the `useRecipes` hook. (NEXT STEP)

## 📝 Next Actions for Developer
1.  Implement `features/home/components/RecipeList.tsx`.
2.  Handle `isLoading` and `isError` states.
3.  Map through the `recipes` array to display `strMeal`.
