import React from "react";
import { NavLink } from "react-router-dom";

export const Home = ()=>{

    return(
        <>
        <h1>Home page</h1>
        <NavLink to='/' >Home</NavLink>
        </>
    )
}

export default Home