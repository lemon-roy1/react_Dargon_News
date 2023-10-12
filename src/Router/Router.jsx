import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

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
    },{
        path:'/register',
        element:<Register/>
    }
    ]
}])
export default router;