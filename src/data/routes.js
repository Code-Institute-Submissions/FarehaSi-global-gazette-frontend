import SingleArticle from "../pages/Articles/SingleArticle";
import Community from "../pages/Community";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Followers from "../pages/Profile/Followers";
import Index from "../pages/Profile/Index";
import LikedPosts from "../pages/Profile/LikedPosts";
import MyPosts from "../pages/Profile/MyPosts";
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
        path: '/our_mission',
        element: Community,
        isProtected: false
    },
    {
        id: 3, 
        path: '/register',
        element: Register,
        isProtected: false
    },
    {
        id: 4, 
        path: '/login',
        element: Login,
        isProtected: false
    },
    {
        id: 5, 
        path: '/profile',
        element: Index,
        isProtected: true
    },
    
    {
        id: 5, 
        path: '/profile/followers',
        element: Followers,
        isProtected: true
    },
    
    {
        id: 6, 
        path: '/profile/my-posts',
        element: MyPosts,
        isProtected: true
    },
    
    {
        id: 7, 
        path: '/profile/liked-posts',
        element: LikedPosts,
        isProtected: true
    },
    
    {
        id: 8, 
        path: '/articles/:articleId',
        element: SingleArticle,
        isProtected: true
    },
];

export default routes;