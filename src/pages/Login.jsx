import { Form } from "react-router"
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const {login} = useAuth()

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
        console.log(userData)
        login(userData.accessToken)
    }

    return (
        <>
        
        <Form onSubmit={handlelogin}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </div>
        <button type="submit"></button>

        </Form>
        </>
    )
}