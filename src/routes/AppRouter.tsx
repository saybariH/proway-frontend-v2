
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import React from "react";
import CoachLayout from "@layouts/CoachLayout";
import Projects from "@pages/coach-pages/Projects";
const AppRouter : React.FC = () => {

const  router = createBrowserRouter([
    {
        path : "/",
        element : <CoachLayout/>,
        children : [
             {index : true, element : <App/>},
             {path : "projects", element : <Projects/>}
        ],
    }
]);

return (
    <RouterProvider router={router} />
)}

export default AppRouter;