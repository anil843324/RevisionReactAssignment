import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false);
    const [userData,setUserData]=useState({})
    const [data,setData]=useState([])

    return <AuthContext.Provider value={
        {
            isAuth,
            setIsAuth,
            userData,
            setUserData,
            data,
            setData
        }
    }>
        {children}
    </AuthContext.Provider>
}