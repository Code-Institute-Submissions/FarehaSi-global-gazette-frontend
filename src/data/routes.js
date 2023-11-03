import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const routes = [
    {
        id: 1, 
        path: '/',
        element: Home,
        isProtected: false
    },
    {
        id: 2, 
        path: '/register',
        element: Register,
        isProtected: false
    },
    {
        id: 3, 
        path: '/login',
        element: Login,
        isProtected: false
    },
];

export default routes;