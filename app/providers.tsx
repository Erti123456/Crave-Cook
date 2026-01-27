"use client"; // 👈 Essential in Next.js! This allows the file to use browser-only features like 'State'.

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

/**
 * 🛠️ THE PROVIDERS COMPONENT
 * This acts as a wrapper for your entire application.
 * Anything inside 'children' will have access to our data-fetching tools.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  
  /** 
   * 🆕 NEW SYNTAX: 'useState' initialization
   * We wrap the QueryClient in 'useState' so that Next.js doesn't 
   * accidentally recreate the "Brain" every time the app re-renders.
   * This ensures your cached data (recipes) stays safe in one place.
   */
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // ⏳ Keep data "fresh" for 1 minute before checking the API again
      },
    },
  }));

  return (
    // 🔌 The Provider "broadcasts" the QueryClient to all your components
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
