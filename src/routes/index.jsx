import { createBrowserRouter } from "react-router-dom";
import App from "../App";


const index = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    }
])

export default index;