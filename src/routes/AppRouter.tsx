import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import CoachLayout from "@layouts/CoachLayout";
import InvitationManagement from "@pages/client-pages/InvitationManagement";
import Projects from "@pages/coach-pages/Projects";
import ProfileCoach from "@pages/coach-pages/ProfileCoach";
import ForgetPassword from "@pages/ForgetPassword";
import ResetPassword from "@pages/ResetPassword";
import FeedBack from "@pages/coach-pages/FeedBack";

const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <CoachLayout/>,
        children : [
             {index : true, element : <App/>},
             {path: "InvitationManagement", element: <InvitationManagement/>},
             {path : "projects", element : <Projects/>},
             {path : "ProfileCoach", element : <ProfileCoach/>},

        ],
        
    },
    {
        path : "/ForgetPassword",
        element : <ForgetPassword />,
        children : [
 
        ]
    },  {
        path : "/ResetPassword",
        element : <ResetPassword />,
        children : [
 
        ]
    },
    {
        path : "/feedback",
        element : <FeedBack />,
        children : [
 
        ]
    }

]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;