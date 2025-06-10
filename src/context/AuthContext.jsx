import { useState, createContext, useContext } from "react";

export const AuthContext = createContext()


export function useAuth () {
    return useContext(AuthContext)
}



export default function AuthProvider({ children }) {
    const [token, setToken] = useState(sessionStorage.getItem("tokenLogin"));

    function login(newToken){
        setToken(newToken)
        sessionStorage.setItem("tokenLogin", newToken)
    }

    function logout(){
        setToken(null)
        sessionStorage.removeItem("tokenLogin")
    }

    return (
        <AuthContext.Provider value={{ token, setToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


