import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import AvailableFoods from "../pages/AvailableFoods";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<div>404</div> ,
        children: [
            {
                index:true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'available-foods',
                element: <AvailableFoods></AvailableFoods>
            }
        ]
    },
    {
        path: '/user',
        element: <PrivateRoute><AdminLayout></AdminLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'add-food',
                element: <PrivateRoute></PrivateRoute>
            }
        ]
    }
])

export default routes;