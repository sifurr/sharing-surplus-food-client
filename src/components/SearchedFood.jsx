import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Spinner";

        
        
const SearchedFood = ({searchedFoods}) => {

    console.log("From searched,",searchedFoods)





    return (
        <div>
           <h2 className='text-3xl text-center'>SearchedFood</h2>
           {
            searchedFoods.map(f => <div key={f._id}>
                <p>{f.foodName}</p>
            </div>)
           }
        </div>
    );
};

export default SearchedFood;