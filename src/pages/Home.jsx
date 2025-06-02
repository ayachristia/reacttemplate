import { Link, NavLink } from "react-router"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Home(){
    const {token, setToken} = useContext(AuthContext)
    console.log(token)


    return(
        <>
        <h1>Home</h1>
        </>
    )
}