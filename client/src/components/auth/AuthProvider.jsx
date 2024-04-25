import React, { createContext, useState } from 'react'

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        console.log("Logging in")
        setIsLoggedIn(true);
    };

    const logout = () => {
        console.log("Loggin out")
        setIsLoggedIn(false);
    };

    return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
    </AuthContext.Provider>
    )
}

export { AuthContext }