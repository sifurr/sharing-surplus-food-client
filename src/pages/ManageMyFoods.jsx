import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useQuery } from '@tanstack/react-query'
import Spinner from "../components/Spinner";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useFoods from "../hooks/useFoods";
import useMyFood from "../hooks/useMyFoods";
import Swal from 'sweetalert2'


// const columns = [
//     {
//         accessorKey: "foodName",
//         header: "Food Name",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "foodImage",
//         header: "Food Image",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "foodQuantity",
//         header: "Food Quantity",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "pickupLocation",
//         header: "Pickup Location",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "expireDate",
//         header: "Expire Date",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "donorName",
//         header: "Donor Name",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "donorImage",
//         header: "Donor Photo",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "donorEmail",
//         header: "Donor Email",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "additionalNote",
//         header: "Additional Notes",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "foodStatus",
//         header: "Food Status",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
//     {
//         accessorKey: "createdDate",
//         header: "Create Date",
//         cell: (props) => <p>{props.getValue()}</p>
//     },
// ]


const ManageMyFoods = () => {
    
    const { data, isLoading, refetch } = useMyFood()


    if (isLoading) {
        return <Spinner></Spinner>
    }


    const handleDeleteById = id =>{
       
        axios.delete(`http://localhost:5000/api/v1/user/cancel-food/${id}`)
        .then(res => {
            console.log("res from project", res);
            if(res?.data?.deletedCount > 0){
                toast.success("Deleted successfully");
                refetch();
            }
        })

        console.log(id)
    }






    // const table = useReactTable({
    //     data,
    //     columns,
    //     getCoreRowModel: getCoreRowModel()
    // })


    // const handleDelete = (id) =>{
    //     axios.delete(`http://localhost:5000/api/v1/user/cancel-food/${id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         if(res.data.deletedCount > 0){
    //             toast.success("Deleted successfully")
    //         }
    //     })
    // }



    // console.log("from manage my food",data)
    
    
    
    return (
        <Container>
            <h2 className='text-3xl text-center'>ManageMyFoods</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Image</th>
                            <th>Food Quantity</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Additional Notes</th>
                            <th>Food Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            data.map(foodItem =>
                                <tr key={foodItem._id}>
                                    <td>{foodItem.foodName}</td>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={foodItem.foodImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{foodItem.foodQuantity}</td>
                                    <td>{foodItem.pickupLocation}</td>
                                    <td>{foodItem.expiredDate}</td>
                                    <td>{foodItem.additionalNote}</td>
                                    <td>{foodItem.foodStatus}</td>
                                    <th>
                                        <Link to={'/'} className="btn btn-info btn-xs mb-1">Mange</Link>

                                    </th>
                                    <th>
                                        <button onClick={()=>handleDeleteById(foodItem._id)} className="btn btn-error btn-xs mb-1">Delete</button>
                                        <Link to={`/update-food/${foodItem._id}`} className="btn btn-primary btn-xs">Update</Link>
                                    </th>
                                </tr>
                            )
                        }




                    </tbody>


                </table>
            </div>
        </Container>
    );
};

export default ManageMyFoods;