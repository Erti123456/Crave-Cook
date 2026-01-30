import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { CategoryApiResponse } from "@/types/recipe";

const useCategories = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await apiClient.get<CategoryApiResponse>(`/categories.php`);
      return res.data.categories;
    },
    enabled: true,
  });
};
export default useCategories;
