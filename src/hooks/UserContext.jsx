// ler UseContext react library 

import { createContext, useContext, useState, useEffect } from "react";


const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ id: 1, name: 'Yan' })
    const putUserData = (userInfo) => {
        setUserInfo(userInfo)
        localStorage.setItem('devburguer:userData', JSON.stringify(userInfo))
    }
    return (
        <UserContext.Provider value={{ userInfo, putUserData }}>
            {children}
        </UserContext.Provider>
    )
}


const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be a valid context')
    }

}