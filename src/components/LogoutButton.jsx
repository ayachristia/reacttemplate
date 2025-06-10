import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"
import { Link } from "react-router"

export default function LogoutButton() {
    const { logout, token }= useAuth()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout()
        setTimeout(() => {
            navigate("/")
        }, 0);
    }

    return token ? (
        <>
        
        <button className="logout" onClick={handleLogout}>Logout</button>
        </>
    ) : <Link to="/login">Login</Link>
}