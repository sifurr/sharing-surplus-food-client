import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFoods = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await axios.get(`https://b8a11-server-side-sifurr.vercel.app/api/v1/foods`);
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useFoods;