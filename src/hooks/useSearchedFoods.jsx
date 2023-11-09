import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useSearchedFoods = (searchQuery) => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: !!searchQuery,
        queryKey: ['searchText'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/foods-by-query?ser=${searchQuery}`);
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useSearchedFoods;