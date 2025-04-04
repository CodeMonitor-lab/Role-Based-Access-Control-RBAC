import React, { Children, useState } from "react";
import { createContext,useContext } from "react";

const AuthContext = createContext();


export const AuthProvider = ({Children})=>{
    const [admin,setAdmin] = useState(null)
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isAdminLoggedIn,setIsAdminLoggedIn] = useState(false);

    const AuthValue = {
        admin,setAdmin,
        user,setUser,
        loading,setLoading,
        isAdminLoggedIn,setIsAdminLoggedIn,
    }
    return(
        <AuthContext.Provider value={AuthValue} >
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;