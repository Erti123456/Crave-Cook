import { useQuery } from "@tanstack/react-query";

// Adding high-quality images for the cuisines to match the original look
const POPULAR_CUISINES = [
  { name: "Italian", image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=800&q=80" },
  { name: "Mexican", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80" },
  { name: "Asian", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80" },
  { name: "American", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { name: "European", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80" },
  { name: "Indian", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80" },
  { name: "Mediterranean", image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=800&q=80" },
];

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return POPULAR_CUISINES;
    },
  });
};

export default useCategories;
