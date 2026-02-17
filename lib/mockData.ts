// This mock data simulates the response from Spoonacular's /recipes/complexSearch endpoint
// Use this to avoid hitting the daily limit during UI development.

export const MOCK_RECIPES = {
  results: [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format\u0026fit=crop\u0026w=1200\u0026q=80",
      imageType: "jpg",
      summary:
        "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be just the main course you are searching for.",
      cuisines: ["Italian"],
      dishTypes: ["lunch", "main course"],
      diets: ["vegetarian"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 85,
      healthiness: 70,
      price: 1.5,
      calories: 450,
      protein: 15,
      extendedIngredients: [
        {
          id: 1001,
          name: "pasta",
          amount: 1,
          unit: "lb",
          original: "1 lb pasta",
        },
        {
          id: 11215,
          name: "garlic",
          amount: 3,
          unit: "cloves",
          original: "3 cloves garlic, minced",
        },
        {
          id: 11291,
          name: "scallions",
          amount: 2,
          unit: "",
          original: "2 scallions, chopped",
        },
        {
          id: 11135,
          name: "cauliflower",
          amount: 1,
          unit: "head",
          original: "1 head cauliflower, cut into florets",
        },
        {
          id: 18079,
          name: "breadcrumbs",
          amount: 0.5,
          unit: "cup",
          original: "1/2 cup toasted breadcrumbs",
        },
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Bring a large pot of salted water to a boil and cook pasta according to package directions.",
            },
            {
              number: 2,
              step: "In a large skillet, sauté garlic and cauliflower until tender.",
            },
            {
              number: 3,
              step: "Toss pasta with the cauliflower mixture, scallions, and top with breadcrumbs.",
            },
          ],
        },
      ],
      nutrition: {
        nutrients: [
          {
            name: "Calories",
            amount: 450,
            unit: "kcal",
            percentOfDailyNeeds: 22,
          },
          { name: "Protein", amount: 15, unit: "g", percentOfDailyNeeds: 30 },
          { name: "Fat", amount: 10, unit: "g", percentOfDailyNeeds: 15 },
          {
            name: "Carbohydrates",
            amount: 75,
            unit: "g",
            percentOfDailyNeeds: 25,
          },
        ],
      },
    },
    {
      id: 715538,
      title: "Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Italian"],
      dishTypes: ["main course"],
      diets: [],
      readyInMinutes: 35,
      servings: 2,
      popularity: 78,
      healthiness: 55,
      price: 2.2,
      calories: 600,
      protein: 25,
      extendedIngredients: [
        { id: 1001, name: "pasta", amount: 8, unit: "oz", original: "8 oz pasta" },
        { id: 10210011, name: "pork", amount: 1, unit: "lb", original: "1 lb pork loin, cubed" },
        { id: 11529, name: "tomatoes", amount: 3, unit: "", original: "3 roma tomatoes, diced" },
        { id: 2044, name: "basil", amount: 0.25, unit: "cup", original: "1/4 cup fresh basil" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Cook pasta in boiling water." },
            { number: 2, step: "Sear pork in a pan until golden." },
            { number: 3, step: "Toss with tomatoes and basil." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 600, unit: "kcal", percentOfDailyNeeds: 30 },
          { name: "Protein", amount: 25, unit: "g", percentOfDailyNeeds: 50 }
        ]
      }
    },
    {
      id: 646512,
      title: "Salmon with roasted vegetables",
      image: "https://img.spoonacular.com/recipes/646512-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Mediterranean"],
      diets: ["gluten free", "dairy free", "pescatarian"],
      readyInMinutes: 45,
      servings: 2,
      popularity: 90,
      healthiness: 92,
      price: 4.8,
      calories: 400,
      protein: 35,
      extendedIngredients: [
        { id: 15076, name: "salmon", amount: 2, unit: "fillets", original: "2 salmon fillets" },
        { id: 11011, name: "asparagus", amount: 1, unit: "bunch", original: "1 bunch asparagus" },
        { id: 11124, name: "carrots", amount: 2, unit: "", original: "2 carrots, sliced" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Preheat oven to 400°F." },
            { number: 2, step: "Roast vegetables for 20 minutes." },
            { number: 3, step: "Add salmon and bake for another 12 minutes." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 400, unit: "kcal", percentOfDailyNeeds: 20 },
          { name: "Protein", amount: 35, unit: "g", percentOfDailyNeeds: 70 }
        ]
      }
    },
    {
      id: 654959,
      title: "Pasta With Tuna",
      image: "https://img.spoonacular.com/recipes/654959-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Italian"],
      diets: ["pescatarian"],
      readyInMinutes: 20,
      servings: 4,
      popularity: 65,
      healthiness: 60,
      price: 1.8,
      calories: 550,
      protein: 20,
      extendedIngredients: [
        { id: 1001, name: "pasta", amount: 1, unit: "lb", original: "1 lb pasta" },
        { id: 15121, name: "tuna", amount: 2, unit: "cans", original: "2 cans canned tuna" },
        { id: 4053, name: "olive oil", amount: 2, unit: "tbsp", original: "2 tbsp olive oil" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Boil pasta." },
            { number: 2, step: "Mix tuna with olive oil and herbs." },
            { number: 3, step: "Combine with pasta." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 550, unit: "kcal", percentOfDailyNeeds: 27 },
          { name: "Protein", amount: 20, unit: "g", percentOfDailyNeeds: 40 }
        ]
      }
    },
    {
      id: 633033,
      title: "Asian Thyme Chicken",
      image: "https://img.spoonacular.com/recipes/633033-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Asian"],
      diets: ["gluten free", "dairy free"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 80,
      healthiness: 75,
      price: 3.0,
      calories: 480,
      protein: 30,
      extendedIngredients: [
        { id: 5062, name: "chicken breast", amount: 1, unit: "lb", original: "1 lb chicken breast" },
        { id: 2049, name: "thyme", amount: 1, unit: "tsp", original: "1 tsp dried thyme" },
        { id: 16124, name: "soy sauce", amount: 2, unit: "tbsp", original: "2 tbsp soy sauce" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Marinate chicken with thyme and soy sauce." },
            { number: 2, step: "Grill chicken for 6-8 minutes per side." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 480, unit: "kcal", percentOfDailyNeeds: 24 },
          { name: "Protein", amount: 30, unit: "g", percentOfDailyNeeds: 60 }
        ]
      }
    },
    {
      id: 644387,
      title: "Garlicky Kale",
      image: "https://img.spoonacular.com/recipes/644387-312x231.jpg",
      imageType: "jpg",
      cuisines: ["American"],
      diets: ["vegan", "gluten free", "dairy free"],
      readyInMinutes: 15,
      servings: 2,
      popularity: 70,
      healthiness: 88,
      price: 1.2,
      calories: 200,
      protein: 8,
      extendedIngredients: [
        { id: 11233, name: "kale", amount: 1, unit: "bunch", original: "1 bunch kale" },
        { id: 11215, name: "garlic", amount: 2, unit: "cloves", original: "2 cloves garlic" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Sauté garlic." },
            { number: 2, step: "Add kale and cook until wilted." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 200, unit: "kcal", percentOfDailyNeeds: 10 },
          { name: "Protein", amount: 8, unit: "g", percentOfDailyNeeds: 16 }
        ]
      }
    },
    {
      id: 716268,
      title: "African Chicken Peanut Stew",
      image: "https://img.spoonacular.com/recipes/716268-312x231.jpg",
      imageType: "jpg",
      cuisines: ["African"],
      diets: ["gluten free", "dairy free"],
      readyInMinutes: 45,
      servings: 1,
      popularity: 60,
      healthiness: 72,
      price: 3.5,
      calories: 500,
      protein: 30,
      extendedIngredients: [
        { id: 5062, name: "chicken", amount: 0.5, unit: "lb", original: "1/2 lb chicken" },
        { id: 16098, name: "peanut butter", amount: 2, unit: "tbsp", original: "2 tbsp peanut butter" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Brown chicken." },
            { number: 2, step: "Stir in peanut butter and broth, simmer." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 500, unit: "kcal", percentOfDailyNeeds: 25 },
          { name: "Protein", amount: 30, unit: "g", percentOfDailyNeeds: 60 }
        ]
      }
    },
    {
      id: 663050,
      title: "Thai Vegetable Curry",
      image: "https://img.spoonacular.com/recipes/663050-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Thai"],
      diets: ["vegan", "gluten free"],
      readyInMinutes: 30,
      servings: 4,
      popularity: 82,
      healthiness: 80,
      price: 2.0,
      calories: 380,
      protein: 10,
      extendedIngredients: [
        { id: 11116, name: "broccoli", amount: 1, unit: "cup", original: "1 cup broccoli" },
        { id: 12117, name: "coconut milk", amount: 1, unit: "can", original: "1 can coconut milk" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Sauté vegetables." },
            { number: 2, step: "Add curry paste and coconut milk." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 380, unit: "kcal", percentOfDailyNeeds: 19 },
          { name: "Protein", amount: 10, unit: "g", percentOfDailyNeeds: 20 }
        ]
      }
    },
    {
      id: 661447,
      title: "Stuffed Sticky Rice Balls",
      image: "https://img.spoonacular.com/recipes/661447-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Chinese", "Asian"],
      diets: ["gluten free", "vegetarian"],
      readyInMinutes: 60,
      servings: 6,
      popularity: 50,
      healthiness: 65,
      price: 1.0,
      calories: 300,
      protein: 5,
      extendedIngredients: [
        { id: 20044, name: "sticky rice", amount: 2, unit: "cups", original: "2 cups sticky rice" },
        { id: 16053, name: "red beans", amount: 0.5, unit: "cup", original: "1/2 cup red bean paste" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Steam rice." },
            { number: 2, step: "Form balls around bean paste." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 300, unit: "kcal", percentOfDailyNeeds: 15 },
          { name: "Protein", amount: 5, unit: "g", percentOfDailyNeeds: 10 }
        ]
      }
    },
    {
      id: 640062,
      title: "Corn-Fritters with Chili-Lime-Mayo",
      image: "https://img.spoonacular.com/recipes/640062-312x231.jpg",
      imageType: "jpg",
      cuisines: ["American"],
      diets: ["vegetarian"],
      readyInMinutes: 30,
      servings: 4,
      popularity: 75,
      healthiness: 50,
      price: 1.75,
      calories: 320,
      protein: 7,
      extendedIngredients: [
        { id: 11168, name: "corn", amount: 2, unit: "cups", original: "2 cups corn kernels" },
        { id: 4025, name: "mayo", amount: 0.25, unit: "cup", original: "1/4 cup mayo" }
      ],
      analyzedInstructions: [
        {
          name: "",
          steps: [
            { number: 1, step: "Mix corn with batter." },
            { number: 2, step: "Fry until golden." }
          ]
        }
      ],
      nutrition: {
        nutrients: [
          { name: "Calories", amount: 320, unit: "kcal", percentOfDailyNeeds: 16 },
          { name: "Protein", amount: 7, unit: "g", percentOfDailyNeeds: 14 }
        ]
      }
    },
    {
      id: 642582,
      title: "Farfalle with Peas, Ham and Cream",
      image: "https://img.spoonacular.com/recipes/642582-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Italian"],
      diets: [],
      readyInMinutes: 30,
      servings: 4,
      popularity: 70,
      healthiness: 45,
      price: 2.5,
      calories: 650,
      protein: 22,
    },
    {
      id: 652423,
      title: "Moroccan Chickpea and Lentil Stew",
      image: "https://img.spoonacular.com/recipes/652423-312x231.jpg",
      imageType: "jpg",
      cuisines: ["African", "Moroccan"],
      diets: ["vegan", "gluten free"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 88,
      healthiness: 90,
      price: 2.1,
      calories: 350,
      protein: 18,
    },
    {
      id: 639413,
      title: "Classic Beef Tacos",
      image: "https://img.spoonacular.com/recipes/639413-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Mexican"],
      diets: [],
      readyInMinutes: 25,
      servings: 4,
      popularity: 92,
      healthiness: 68,
      price: 2.8,
      calories: 580,
      protein: 28,
    },
    {
      id: 641908,
      title: "Easy Chicken Enchiladas",
      image: "https://img.spoonacular.com/recipes/641908-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Mexican"],
      diets: ["gluten free"],
      readyInMinutes: 40,
      servings: 4,
      popularity: 89,
      healthiness: 60,
      price: 3.2,
      calories: 620,
      protein: 32,
    },
    {
      id: 651977,
      title: "Miso Glazed Salmon",
      image: "https://img.spoonacular.com/recipes/651977-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Japanese", "Asian"],
      diets: ["pescatarian", "gluten free", "dairy free"],
      readyInMinutes: 20,
      servings: 2,
      popularity: 91,
      healthiness: 95,
      price: 5.0,
      calories: 420,
      protein: 38,
    },
    {
      id: 660228,
      title: "Slow Cooker Beef Stew",
      image: "https://img.spoonacular.com/recipes/660228-312x231.jpg",
      imageType: "jpg",
      cuisines: ["American", "European"],
      diets: ["gluten free"],
      readyInMinutes: 480,
      servings: 6,
      popularity: 84,
      healthiness: 70,
      price: 2.7,
      calories: 530,
      protein: 30,
    },
    {
      id: 648431,
      title: "Japanese Curry",
      image: "https://img.spoonacular.com/recipes/648431-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Japanese", "Asian"],
      diets: ["dairy free"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 76,
      healthiness: 62,
      price: 2.4,
      calories: 490,
      protein: 18,
    },
    {
      id: 637161,
      title: "Cashew Chicken",
      image: "https://img.spoonacular.com/recipes/637161-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Chinese", "Asian"],
      diets: ["dairy free"],
      readyInMinutes: 30,
      servings: 3,
      popularity: 87,
      healthiness: 78,
      price: 3.1,
      calories: 510,
      protein: 28,
    },
    {
      id: 649114,
      title: "Lemon Herb Roasted Chicken",
      image: "https://img.spoonacular.com/recipes/649114-312x231.jpg",
      imageType: "jpg",
      cuisines: ["European", "American"],
      diets: ["gluten free", "dairy free"],
      readyInMinutes: 75,
      servings: 4,
      popularity: 83,
      healthiness: 85,
      price: 3.8,
      calories: 470,
      protein: 35,
    },
    {
      id: 638035,
      title: "Chicken Tikka Masala",
      image: "https://img.spoonacular.com/recipes/638035-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Indian", "Asian"],
      diets: ["gluten free"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 95,
      healthiness: 70,
      price: 3.9,
      calories: 600,
      protein: 40,
    },
    {
      id: 640352,
      title: "Coq au Vin",
      image: "https://img.spoonacular.com/recipes/640352-312x231.jpg",
      imageType: "jpg",
      cuisines: ["French", "European"],
      diets: ["gluten free", "dairy free"],
      readyInMinutes: 60,
      servings: 4,
      popularity: 88,
      healthiness: 75,
      price: 4.5,
      calories: 550,
      protein: 35,
    },
    {
      id: 659109,
      title: "Seafood Paella",
      image: "https://img.spoonacular.com/recipes/659109-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Spanish", "European"],
      diets: ["pescatarian", "gluten free", "dairy free"],
      readyInMinutes: 45,
      servings: 6,
      popularity: 92,
      healthiness: 82,
      price: 5.5,
      calories: 600,
      protein: 45,
    },
    {
      id: 635561,
      title: "Blueberry Pierogi",
      image: "https://img.spoonacular.com/recipes/635561-312x231.jpg",
      imageType: "jpg",
      cuisines: ["Eastern European", "European"],
      diets: ["vegetarian"],
      readyInMinutes: 45,
      servings: 4,
      popularity: 70,
      healthiness: 60,
      price: 1.5,
      calories: 350,
      protein: 10,
    },
  ],
  offset: 0,
  number: 20,
  totalResults: 20,
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
    name: "Eastern European",
    image:
      "https://www.shutterstock.com/image-photo/slovak-national-dish-bryndzove-halusky-600nw-1921788164.jpg",
  },
];
