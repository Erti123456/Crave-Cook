import { useQuery } from "@tanstack/react-query";
import { POPULAR_CUISINES } from "@/lib/mockData";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return POPULAR_CUISINES;
    },
  });
};

export default useCategories;
