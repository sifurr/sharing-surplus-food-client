import axios from "axios";
import useAuth from "../hooks/useAuth";
// import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddFood = () => {

    const {user} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const donorName = user?.displayName;
        const donorImage = user?.photoURL;
        const donorEmail = user?.email;
        const additionalNote = form.additionalNote.value;
        const foodStatus = form.foodStatus.value;
        const createdDate = new Date();
        const updatedDate = new Date();
       

        const food = {foodName, foodImage, foodQuantity, pickupLocation, expireDate, donorName, donorImage, donorEmail, additionalNote,foodStatus, createdDate, updatedDate};

        // console.log(food)

        axios.post(`http://localhost:5000/api/v1/user/create-food`, food)
        .then(res => {
            // console.log(res.data)
            if(res.data.insertedId){                
                // toast.success("Food added successfully")
                form.reset();
                navigate('/available-foods')
            }
        })


    }
    return (
        <div>
            <h2 className='text-3xl text-center'>AddFood</h2>
            <div className="w-2/3 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Name</span>
                            <input type="text" name="foodName" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Image</span>
                            <input type="text" name="foodImage" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span>Food Quantity</span>
                            <input type="text" name="foodQuantity" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Pickup Location</span>
                            <input type="text" name="pickupLocation" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Expire Date</span>
                            <input type="date" name="expireDate" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Name</span>
                            <input type="text" defaultValue={user?.displayName} name="donorName" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Photo</span>
                            <input type="text" defaultValue={user?.photoURL} name="donorImage" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Donor Email</span>
                            <input type="text" defaultValue={user?.email} name="donorEmail" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Additional Notes</span>
                            <input type="text" name="additionalNote" placeholder="Type here" className="input input-bordered input-md w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group ">
                            <span>Food Status</span>
                            <select name="foodStatus" className="select select-bordered w-full max-w-xs">                                
                                <option selected value={"available"}>Available</option>
                                <option value={"pending"}>Pending</option>
                                <option value={"delivered"}>Delivered</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group">
                            <input type="submit" className="input input-bordered w-full btn" value="Add Food"
                            />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;