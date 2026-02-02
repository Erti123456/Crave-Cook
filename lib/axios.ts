import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to inject the API key into every request
apiClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY,
  };
  return config;
});

export default apiClient;