
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import CoachLayout from "@layouts/Layout";
import ForgetPassword from "@pages/ForgetPassword";
import ResetPassword from "@pages/ResetPassword";
import ProfileCoach from "@pages/coach-pages/ProfileCoach";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <CoachLayout/>,
        children : [
             {index : true, element : <App/>},
             {     path : "/ProfileCoach", element : <ProfileCoach/>,}
        ],
        
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
 
        ]    },
            //  {
            //      path : "/ProfileCoach",
            //     element : <ProfileCoach/>,
            // children : [
        
            //    ]
            // }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;