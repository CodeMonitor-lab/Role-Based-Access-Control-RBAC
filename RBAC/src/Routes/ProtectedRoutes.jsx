import { Navigate, Outlet} from "react-router-dom"

const PrivateRoutes =()=>{
    return (
        <>
        <Outlet/>
        <h1>Protectd Routes</h1>
        </>
    )
}

export default PrivateRoutes