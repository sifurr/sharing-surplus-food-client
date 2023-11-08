import axios from "axios";
import Spinner from "../components/Spinner";
import useMyFoodRequests from "../hooks/useMyFoodRequests";
import Swal from "sweetalert2";
import PageDynamicTitle from "../components/PageDynamicTitle";



const MyFoodRequests = () => {

    const { data, isLoading, refetch } = useMyFoodRequests()

    // console.log("from my request: ", data)

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleCancelRequest = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/api/v1/user/cancel-food-request/${id}`)
                    .then(res => {
                        console.log("res from project", res);
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancelled!",
                                text: "Your request has been cancelled.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });

        // console.log(id)
    }

    return (
        <div>
            <PageDynamicTitle pageTitle="My Food Requests" ></PageDynamicTitle>
            <h2 className='text-3xl text-center'>My Food Requests </h2>

            {
                data.length == 0 && <h2 className='text-2xl text-center my-4'>You do not have any food requests today!</h2>
            }


            <div className="grid grid-cols-3 gap-4 my-5">
                {             
                    
                     data.length > 0 && data.map(requestedFood =>
                            <div key={requestedFood?._id} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Donor Name: {requestedFood?.donorName} </h2>
                                    <p><b>Pickup Location:</b> {requestedFood?._id} </p>
                                    <p><b>Pickup Location:</b> {requestedFood?.pickupLocation} </p>
                                    <p><strong>Expire Date:</strong> {requestedFood?.expireDate} </p>
                                    <p><b>Request Date:</b> {requestedFood?.requestDate} </p>
                                    <p><b>Donation Money:</b> {requestedFood?.donationMoney === '' ? <p>You haven't donated yet.</p> : requestedFood.donationMoney} </p>
                                    <p><strong>Food Status:</strong> {requestedFood?.foodStatus} </p>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleCancelRequest(requestedFood?._id)} className="btn btn-error">Cancel Request</button>
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