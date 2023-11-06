import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";

        
        
const SearchedFood = ({searchQuery}) => {

    console.log("From searched,",searchQuery)


    const { data, isLoading } = useQuery({
        queryKey: ['searchedFoods'],
        queryFn: async () => {
            return await axios.get(`http://localhost:5000/api/v1/foods/${searchQuery}`)
        }
    })

    console.log(data)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
           <h2 className='text-3xl text-center'>SearchedFood</h2>
        </div>
    );
};

export default SearchedFood;