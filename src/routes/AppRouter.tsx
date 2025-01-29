
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import Projects from "@pages/coach-pages/Projects";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [

        ]
    },
    {
        path : "/projects",
        element : <Projects />,
        children : [

        ]
    }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;