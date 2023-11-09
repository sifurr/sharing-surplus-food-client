import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useMyFoodRequests = () => {

    const { user } = useAuth()
    const { email } = user;

    const { data, isLoading, isFetching, refetch } = useQuery({
        enabled: !!email,
        queryKey: ['myFoodRequests'],
        queryFn: async () => {
            const res = await axios.get(`https://community-food-sharing-server-two.vercel.app/api/v1/user/food-requests?email=${email}`, { withCredentials: true });            
            return res.data;
        },
    })

    return { data, isLoading, isFetching, refetch };
};

export default useMyFoodRequests;