
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import InvitationManagement from "@pages/client-pages/InvitationManagement";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [

        ]
    },
    {
        path : "/invitationManagement",
        element : <InvitationManagement />,
        children : [

        ]
    }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;