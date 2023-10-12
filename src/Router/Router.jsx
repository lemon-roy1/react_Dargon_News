import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";

const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [{
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    }
    ]
}])
export default router;