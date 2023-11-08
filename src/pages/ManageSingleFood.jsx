import { Link, useParams } from "react-router-dom";
import useFoodRequestByOthers from "../hooks/useFoodRequestByOthers";
import Spinner from "../components/Spinner";
import useSingleFood from "../hooks/useSingleFood";
import PageDynamicTitle from "../components/PageDynamicTitle";



const ManageSingleFood = () => {
    const { id } = useParams()
    console.log(id)
    const { data: foodMain } = useSingleFood(id);
    const { data, isLoading } = useFoodRequestByOthers(id);    

    console.log("data from Manage single food", data)
    // console.log("data from Manage single food", requesterName, requesterEmail, requesterImage)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <PageDynamicTitle pageTitle="Manage Single Food" ></PageDynamicTitle>
            <h2 className='text-3xl text-center'>Manage Single Food</h2>
            <div className="text-center my-4 space-y-2">
                <img className="w-40 mx-auto border-8 rounded-lg border-orange-400" src={foodMain?.foodImage} alt="" />
                <h2 className="text-2xl font-bold">{foodMain?.foodName}</h2>
                <h3 className="text-xl font-bold capitalize">Food Status: {foodMain?.foodStatus}</h3>
                <Link to={`/update-food-status/${id}`}
                    className="btn btn-sm btn-warning">Change Food Status
                </Link>
            </div>
            <div>
                {
                    data.length == 0 ? <h2 className="text-center text-1xl font-bold">No requests for this food at present!</h2>
                        :
                        data?.map(request =>
                            <div key={request._id} className="grid grid-cols-3">
                                <div className="drop-shadow-lg p-2 w-52 m-2 text-center border ">
                                    <h2 className="text-1xl font-bold text-center">Requester Information</h2>
                                    <div>
                                        <p>Request by: {request.requesterName}</p>
                                        <div>
                                            <img className="w-40 mx-auto" src={request.requesterImage} alt="" />
                                        </div>
                                        <p>Requester Email: {request.requesterEmail}</p>

                                        <p>Request Date:</p>
                                        <small>{request.requestDate}</small>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>

        </div>
    );
};

export default ManageSingleFood;