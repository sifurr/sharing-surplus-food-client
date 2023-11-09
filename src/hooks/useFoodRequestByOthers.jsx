import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useFoodRequestByOthers = (id) => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['singleFoodRequests'],
        queryFn: async () => {
            const res = await axios.get(`https://community-food-sharing-server-two.vercel.app/api/v1/user/food-requests/${id}`);
            
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useFoodRequestByOthers;