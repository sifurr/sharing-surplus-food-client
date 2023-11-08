import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useMyFood = () => {

    const { user } = useAuth()
    const { email } = user;

    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: !!email,
        queryKey: ['myFoods'],
        queryFn: async () => {
            const res = await axios.get(`https://b8a11-server-side-sifurr.vercel.app/api/v1/user/foods?email=${email}`, { withCredentials: true });
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useMyFood;