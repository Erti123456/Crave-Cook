// This mock data simulates the response from Spoonacular's /recipes/complexSearch endpoint
// Use this to avoid hitting the 50 points/day limit during UI development.

export const MOCK_RECIPES = {
  results: [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
      summary: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for.",
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
      summary: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta is a main course that serves 6.",
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
      summary: "Salmon with roasted vegetables is a gluten free, dairy free, and pescatarian main course.",
      cuisines: [],
      dishTypes: ["lunch", "main course", "main dish", "dinner"],
      diets: ["gluten free", "dairy free", "paleolithic", "primal", "pescatarian"],
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
    }
  ],
  offset: 0,
  number: 10,
  totalResults: 4,
};
