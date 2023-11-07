import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import Food from "../components/Food";
import { useEffect, useState } from "react";
import useFoods from "../hooks/useFoods";
import toast from "react-hot-toast";




const AvailableFoods = () => {
   
    const { data, isLoading} = useFoods()
    const [searchedFoods, setSearchedFoods] = useState([])
    const [isSortBtnClicked, setIsSortBtnClicked] = useState(false)
    // console.log("from search string: ", searchQuery);
    // console.log("sort: ", isSortBtnClicked);  


    if (isLoading) {
        return <Spinner></Spinner>
    }   
    

    const handleSearchButton = event => {
        event.preventDefault();
        const form = event.target;
        const searchText = form.search.value; 
        if(searchText === ''){
            toast.error("You did not provide any text")
            return;
        }
        const filteredData = data.filter(foodInfo => foodInfo.foodName.toLowerCase().includes(searchText.toLowerCase()))
        setSearchedFoods(filteredData);
        // console.log("Filtered data: ", filteredData);
        setIsSortBtnClicked(false)


    }


    return (
        <div>
            <Container>
                <h2 className='text-3xl text-center'>Available Foods</h2>

                <div className="my-4 flex justify-center gap-4">
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
                    <button onClick={() => setIsSortBtnClicked(!isSortBtnClicked)} className="btn btn-primary">Sort by expire date</button>
                </div>


                {/* Sort, searching, and default available foods */}

                <div className="grid grid-cols-3 gap-4">
                    {
                        isSortBtnClicked ? data?.sort((a, b) => new Date(a.expireDate) - new Date(b.expireDate)).map(food => <Food key={food._id} food={food}> </Food>)

                            :                           

                            searchedFoods?.length === 0 ? data?.map(food => <Food key={food._id} food={food}> </Food>)

                                : searchedFoods?.map(food => <Food key={food._id} food={food}> </Food>)

                    }
                </div>               

                <div>
                </div>
            </Container>
        </div>
    );
};

export default AvailableFoods;