import { useQuery } from "@tanstack/react-query";
import axios from "axios";       
        
const useFoodRequestByOthers = (id) => {

    const { data, isLoading, isFetching, refetch } = useQuery({        
        queryKey: ['singleFood'],       
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/user/food-request-by-others/${id}`);
            return res.data;
        },              
    })

    return { data, isLoading, isFetching, refetch };
};

export default useFoodRequestByOthers;