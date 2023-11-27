import {links} from "./links"
import {Navigate} from "react-router-dom"
import { AddPost, FullPost, Home, Login, Registration } from '../pages';


export const publicRoutes = [
    {
        path: links.base,
        element: <Home/>
    },
    {
        path: links.post + '/:id/',
        element: <FullPost/>
    },
    {
        path: links.addPost,
        element: <AddPost/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.register,
        element: <Registration/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },

]