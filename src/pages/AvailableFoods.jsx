import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import Food from "../components/Food";
import { useEffect, useState } from "react";
import SearchedFood from "../components/SearchedFood";
import useFoods from "../hooks/useFoods";
import useSearchedFoods from "../hooks/useSearchedFoods";



const AvailableFoods = () => {

    const [searchQuery, setSearchQuery] = useState(' ')
    const { data, isLoading } = useFoods()
    const [searchedFoods, setSearchedFoods] = useState([])
    console.log("from search string: ", searchQuery);


    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleSearchButton = event => {
        event.preventDefault();
        const form = event.target;
        const searchText = form.search.value
        setSearchQuery(searchText);

        const filteredData = data.filter(foodInfo => foodInfo.foodName.toLowerCase().includes(searchText.toLowerCase()))
        setSearchedFoods(filteredData);
        console.log("Filtered data: ",filteredData);


    }

    return (
        <div>
            <Container>
                <h2 className='text-3xl text-center'>Available Foods</h2>

                <div className="my-4 flex justify-center">
                    {/* Search */}
                    <form onSubmit={handleSearchButton} className="join">
                        <div>
                            <div>
                                <input type="text" name="search" className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </form>
                </div>
               

                <div className="grid grid-cols-3 gap-4">
                    {
                       searchedFoods?.length === 0 ? data?.map(food => <Food key={food._id} food={food}> </Food>)
                     : searchedFoods?.map(food => <Food key={food._id} food={food}> </Food>)
                      
                    } 

                </div>
            </Container>
        </div>
    );
};

export default AvailableFoods;