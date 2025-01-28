
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [

        ]
    }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;