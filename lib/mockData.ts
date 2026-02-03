// This mock data simulates the response from Spoonacular's /recipes/complexSearch endpoint
// Use this to avoid hitting the 50 points/day limit during UI development.

export const MOCK_RECIPES = {
  results: [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
      summary:
        "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for.",
      cuisines: ["Italian"],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [],
      readyInMinutes: 45,
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
      summary:
        "What to make for dinner tonight?? Bruschetta Style Pork & Pasta is a main course that serves 6.",
      cuisines: ["Italian"],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [],
      readyInMinutes: 35,
    },
    {
      id: 646512,
      title: "Salmon with roasted vegetables",
      image: "https://img.spoonacular.com/recipes/646512-312x231.jpg",
      imageType: "jpg",
      summary:
        "Salmon with roasted vegetables is a gluten free, dairy free, and pescatarian main course.",
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal",
        "pescatarian",
      ],
      readyInMinutes: 45,
    },
    {
      id: 654959,
      title: "Pasta With Tuna",
      image: "https://img.spoonacular.com/recipes/654959-312x231.jpg",
      imageType: "jpg",
      summary: "Pasta With Tuna is a main course that serves 4.",
      cuisines: ["Italian"],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: ["pescatarian"],
      readyInMinutes: 20,
    },
  ],
  offset: 0,
  number: 10,
  totalResults: 4,
};

export const POPULAR_CUISINES = [
  {
    name: "Italian",
    image:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mexican",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Asian",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "American",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "European",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Indian",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mediterranean",
    image:
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "French",
    image:
      "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Japanese",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Thai",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spanish",
    image:
      "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Eastern Europe",
    image:
      "https://www.shutterstock.com/image-photo/slovak-national-dish-bryndzove-halusky-600nw-1921788164.jpg",
  },
];
