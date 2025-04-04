import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Layoute
import PrivateRoutes from "./ProtectedRoutes";
import {AppLayout,AdminLayout} from '../Layouts/index'
import {Home,About,SignUp,Login,Admin,Catagory,Dashboard,Editor,NotAutharize,PageNotFound} from '../pages/index'
import { Roles } from "../utils/Role";

const AppRoutes =()=>{
    const router = createBrowserRouter([
        {
            index:'/',
            element:<AppLayout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'/About',
                    element:<About/>
                },
                {
                    path:'/Login',
                    element:<Login/>
                },
                {
                    path:'/SignUp',
                    element:<SignUp/>
                },
                {
                    path:'NotAutharize',
                    element:<NotAutharize/>
                },
                {
                    path:'*',
                    element:<PageNotFound/>
                },
            ]
        },
        // Protected Routes
        {
            path:'/Admin',
            element:<Admin/>
        },
        {
            path:'/Admin/Dashboard',
            // element:<AdminLayout/>,
            element:<PrivateRoutes><AdminLayout/></PrivateRoutes>,
            // element:<PrivateRoutes allowedRoles={[Roles.ADMIN,Roles.USER]} element={<AdminLayout/>} />,
            children:[
                {
                    path:'Admin/Editor',
                    element:<Editor/>
                },
                {
                    path:'Catagory',
                    element:<Catagory/>
                },
            ]
        }
         
    ])
    return(
        <RouterProvider router={router} />
    )
}

export default AppRoutes