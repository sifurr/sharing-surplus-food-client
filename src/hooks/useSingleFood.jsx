import { useQuery } from "@tanstack/react-query";
import axios from "axios";       
        
const useSingleFood = (id) => {

    const { data, isLoading, isFetching, refetch } = useQuery({        
        queryKey: ['singleFood'],       
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/foods/${id}`);
            return res.data;
        },              
    })

    return { data, isLoading, isFetching, refetch };
};

export default useSingleFood;