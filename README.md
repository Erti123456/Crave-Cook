# 🍳 Crave & Cook

A high-performance, full-stack recipe discovery platform built with **Next.js**, **TypeScript**, and **Supabase**. Discover, search, and save your favorite recipes from a database of thousands, powered by the Spoonacular API.

---

## ✨ Key Features

- **🚀 Server-Side Power:** Leverages Next.js Server Components and SSR for lightning-fast discovery and SEO-optimized recipe detail pages.
- **🔍 Advanced Search:** Real-time client-side search with filtering by cuisine, diet, and ingredients using TanStack Query.
- **❤️ Favorites System:** Securely save your favorite recipes to your personal collection, persisted in **Supabase** via **Prisma ORM**.
- **🔐 Secure Authentication:** Complete user management (Sign-in, Sign-up, User Profile) powered by **Clerk**.
- **📊 Nutrition Insights:** Detailed nutrition breakdowns, ingredient lists with icons, and step-by-step instructions for every recipe.
- **📱 Responsive & Interactive:** Mobile-first design with smooth animations using **Framer Motion** and **Tailwind CSS**.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Database:** [Supabase (PostgreSQL)](https://supabase.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **API:** [Spoonacular API](https://spoonacular.com/food-api)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crave-cook.git
cd crave-cook
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env` file in the root directory and add your credentials:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Database (Supabase)
DATABASE_URL="postgresql://postgres.[REF]:[PASS]@db.[REF].supabase.co:6543/postgres?pgbouncer=true&connection_limit=1"

# Spoonacular API
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
```

### 4. Push Database Schema
```bash
npx prisma db push
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## 📁 Project Structure

```text
/crave-cook
├── app/                  # Next.js App Router (Pages & Layouts)
├── features/             # Feature-based components and logic
│   ├── home/             # Hero, Category sections
│   ├── layout/           # Global Header & Footer
│   └── recipes/          # Search, Details, and Favorites logic
├── lib/                  # Shared utilities (API clients, Prisma)
├── prisma/               # Database schema and migrations
├── public/               # Static assets (logos, images)
├── types/                # Global TypeScript interfaces
└── globalHooks/          # Shared React hooks
```

---

## 📜 License

This project is open-source and available under the MIT License.

---

Built with ❤️ by [Your Name]
