import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import CoachLayout from "@layouts/Layout";
import InvitationManagement from "@pages/client-pages/InvitationManagement";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <CoachLayout/>,
        children : [
             {index : true, element : <App/>},
             {path: "InvitationManagement", element: <InvitationManagement/>}
        ]
    },
    {
        path : "/invt",
        element : <InvitationManagement/>,
        children : [
            
        ]
    }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;