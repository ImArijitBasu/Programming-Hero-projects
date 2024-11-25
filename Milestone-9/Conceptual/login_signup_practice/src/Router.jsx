import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./MainLayout/Mainlayout";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router