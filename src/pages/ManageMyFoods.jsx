import axios from "axios";
import Spinner from "../components/Spinner";
import Container from "../components/ui/Container";
import { Link } from "react-router-dom";
import useMyFood from "../hooks/useMyFoods";
import Swal from 'sweetalert2'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import PageDynamicTitle from "../components/PageDynamicTitle";


const ManageMyFoods = () => {

    const columns = [
        {
            header: "Food Name",
            accessorKey: "foodName",
        },
        {
            header: "Food Image",
            accessorKey: "foodImage",
            cell: row => {
                // console.log(row)
                return <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={row.getValue("foodImage")} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            },

        },
        {
            header: "Food Quantity",
            accessorKey: "foodQuantity",
        },
        {
            header: "Donor Name",
            accessorKey: "donorName",
        },
        {
            header: "Pickup Location",
            accessorKey: "pickupLocation",
        },
        {
            header: "Expire Date",
            accessorKey: "expireDate",
        },
        {
            header: "Donor Photo",
            accessorKey: "donorImage",
            cell: row => {
                // console.log(row)

                return <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={row.getValue("donorImage")} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            },
        },
        {
            header: "Additional Notes",
            accessorKey: "additionalNote",
        },
        {
            header: "Food Status",
            accessorKey: "foodStatus",
        },
        {
            header: "Manage",
            accessorKey: "_id",
            cell: row => {
                // console.log("from value", row)

                return <Link to={`/manage-single-food/${row.getValue("_id")}`} className="btn btn-info btn-xs mb-1">Mange</Link>
            }

        },
        {
            header: "Action",
            accessorKey: "_id",
            cell: row => {
                // console.log("from value", row)                
                return <th>
                    <button onClick={() => handleDeleteById(row.getValue("_id"))} className="btn btn-error btn-xs mb-1">Delete</button>
                    <Link to={`/update-food/${row.getValue("_id")}`} className="btn btn-primary btn-xs">Update</Link>
                </th>
            }
        },
    ]




    const { data, isLoading, refetch } = useMyFood()
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel()
    });
    // console.log(table)


    if (isLoading) {
        return <Spinner></Spinner>
    }

    // console.log("from manage my food",data)


    const handleDeleteById = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://b8a11-server-side-sifurr.vercel.app/api/v1/user/cancel-food/${id}`)
                    .then(res => {
                        console.log("res from project", res);
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
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

        <Container>
            <PageDynamicTitle pageTitle="Manage My Food" ></PageDynamicTitle>
            <h2 className='text-3xl text-center'>ManageMyFoods</h2>

            <div>
                <table className="table">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="text-[12px]">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





            {/* <div className="overflow-x-auto">
                <table className="table">
                   
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Image</th>
                            <th>Food Quantity</th>
                            <th>Donor Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Additional Notes</th>
                            <th>Food Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    

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
                                    <td>{foodItem.donorName}</td>
                                    <td>{foodItem.pickupLocation}</td>
                                    <td>{foodItem.expireDate}</td>
                                    <td>{foodItem.additionalNote}</td>
                                    <td>{foodItem.foodStatus}</td>
                                    <th>
                                        <Link to={`/manage-single-food/${foodItem._id}`} className="btn btn-info btn-xs mb-1">Mange</Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteById(foodItem._id)} className="btn btn-error btn-xs mb-1">Delete</button>
                                        <Link to={`/update-food/${foodItem._id}`} className="btn btn-primary btn-xs">Update</Link>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div> */}
        </Container>
    );
};

export default ManageMyFoods;