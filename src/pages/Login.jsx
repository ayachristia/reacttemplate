import { Form } from "react-router"
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
    const [error, setError] = useState(null);
    
    const {login} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    // console.log(location)
    const from = location.state?.from?.pathname || "/"
    // console.log(from)

    async function handlelogin (event){
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        console.log("Form submitted:", data)

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const userData = await response.json()
        console.log(userData.message)

        if(!response.ok){
            setError(userData.message || userData.error)
            return
        }
        login(userData.accessToken)
        navigate(from, {replace:true})
    }

    return (
        <>
        <Form onSubmit={handlelogin}>
        <div className="formgroup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
        </div>
        <div className="formgroup">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>

        </Form>
        </>
    )
}