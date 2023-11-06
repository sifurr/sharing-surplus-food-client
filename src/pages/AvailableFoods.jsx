import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import Food from "../components/Food";
import { useState } from "react";
import SearchedFood from "../components/SearchedFood";



const AvailableFoods = () => {

    const [searchQuery, setSearchQuery] = useState('')



    const { data, isLoading } = useQuery({
        queryKey: ['featuredFoods'],
        queryFn: async () => {
            return await axios.get(`http://localhost:5000/api/v1/foods`)
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleSearchButton = event => {
        event.preventDefault();
        setSearchQuery(event.target.search.value);
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
                                <input name="search" className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {
                        data?.data?.map(food => <Food key={food._id} food={food}> </Food>)
                    }
                </div>
                {/* searched and filtered section */}
                <div>
                    {
                      <SearchedFood searchQuery={searchQuery}></SearchedFood>
                    }
                </div>
            </Container>
        </div>
    );
};

export default AvailableFoods;