import { useLocation } from "react-router"
import LogoutButton from "./LogoutButton"
import Navigation from './Navigation'
import { Link } from "react-router"


export default function Header() {

    const location = useLocation()

    return location.pathname !== "/login" ?(
        <>
        
        <h1>My App</h1>
        <Navigation />
        <LogoutButton/>
        </>
    ) : null
    // return (
    //     <>
        
    //     <Link to="/">
    //     <h1>My App</h1>
    //     </Link>
    //     { location.pathname !== "/login" && (
    //         <>
    //         <Navigation />
    //         <LogoutButton/> 
    //         </>
           
    //     )}
    //     </>

    // )
        
}