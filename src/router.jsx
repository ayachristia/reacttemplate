import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import List from "./pages/List";    
import Details from "./pages/Details";
import Contact from "./pages/Contact"; 
import NotFound from "./pages/NotFound";
import { getUsers, getUser } from "./utilities/typicode";
import Loading from "./components/loading";
import { ErrorBoundary } from "./components/Error";
import { handleSubmit } from "./utilities/actions";
import Login from "./pages/Login";



const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: < Loading/>,
    errorElement: < ErrorBoundary />,
    children: [{
        index: true,
        element: <Home />   
    },
    {
        path: "list",
        element: <List /> ,
        loader: getUsers,
    },
    {   
        path: "list/:id",
        element: <Details />,
        loader: getUser
    },  
    {
        path: "contact",
        element: <Contact />,
        action: handleSubmit,
    },
    {   
        path: "login",
        element: < Login />
    },
    {   
        path: "*",
        element: < NotFound />
    }
    ]
}

]);

export default router