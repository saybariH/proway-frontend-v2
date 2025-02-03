
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import ResetPassword from "@pages/ResetPassword";
import ForgetPassword from "@pages/ForgetPassword";
import ProfileCoach from "@pages/coach-pages/ProfileCoach";
// import ProfileCoach from "@pages/coach-pages/ProfileCoach";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
 
        ]
    },
    {
        path : "/ForgetPassword",
        element : <ForgetPassword />,
        children : [
 
        ]
    },
    {
        path : "/ResetPassword",
        element : <ResetPassword/>,
        children : [
 
        ]
    },
            {
                path : "/ProfileCoach",
                element : <ProfileCoach/>,
                children : [
        
                ]
            }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;