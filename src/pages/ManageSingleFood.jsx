import { Link, useParams } from "react-router-dom";
import useFoodRequestByOthers from "../hooks/useFoodRequestByOthers";
import Spinner from "../components/Spinner";
import { useState } from "react";



const ManageSingleFood = () => {
    const { id } = useParams()
    const [statusToggler, setStatusToggler] = useState(false);
    console.log(id)
    const { data, isLoading } = useFoodRequestByOthers(id);
    console.log("data from Manage single food", data)
    // console.log("data from Manage single food", requesterName, requesterEmail, requesterImage)

    if (isLoading) {
        return <Spinner></Spinner>
    }
    // const {requesterName, requesterEmail, requesterImage, requestDate} = data || {}    

    const toggleFoodStatus = () => {
        setStatusToggler(!statusToggler)
    }


    return (
        <div>
            <h2 className='text-3xl text-center'>Manage Single Food</h2>
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

                                        <p>Status: {request.foodStatus}
                                            <span className="mt-2">
                                                <Link                                                  to={`/update-food-status/${id}`}
                                                    className="btn btn-sm">Change Status
                                                </Link>
                                            </span> </p>
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