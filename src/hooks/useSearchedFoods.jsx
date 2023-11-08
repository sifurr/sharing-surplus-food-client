import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useSearchedFoods = (searchQuery) => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: !!searchQuery,
        queryKey: ['searchText'],
        queryFn: async () => {
            const res = await axios.get(`https://b8a11-server-side-sifurr.vercel.app/api/v1/foods-by-query?ser=${searchQuery}`);
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useSearchedFoods;