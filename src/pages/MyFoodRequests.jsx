import Spinner from "../components/Spinner";
import useMyFoodRequests from "../hooks/useMyFoodRequests";



const MyFoodRequests = () => {

    const { data, isLoading, isFetching, refetch } = useMyFoodRequests()

    console.log("from my request: ", data)


    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-3xl text-center'>MyFoodRequests {data.length} </h2>


            <div className="grid grid-cols-3 gap-4 my-5">
                {
                    data.length == 0 ? <h2>You do not have any food requests today!</h2>
                        :
                        data.map(requestedFood =>
                            <div key={requestedFood._id} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Donor Name: {requestedFood.donorName} </h2>
                                    <p><b>Pickup Location:</b> {requestedFood.pickupLocation} </p>
                                    <p><strong>Expire Date:</strong> {requestedFood.expireDate} </p>
                                    <p><b>Request Date:</b> {requestedFood.requestDate} </p>
                                    <p><b>Donation Money:</b> {requestedFood.donationMoney} </p>
                                    <p><strong>Food Status:</strong> {requestedFood.foodStatus} </p>                                    
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-error">Cancel Request</button>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>

        </div>
    );
};

export default MyFoodRequests;