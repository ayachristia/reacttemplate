import { useAuth } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router"

export default function RequireAuth({children}) {
    const { token } = useAuth();
    const location = useLocation()


    if(!token){
        return <Navigate to="/login" state={{from: location}}/>
    }
    
    return children
}