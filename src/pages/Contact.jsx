import { useState } from "react";
import { Form, useNavigate } from "react-router";
import { z } from "zod/v4";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email(),
    message: z.string().min(1, "Message is required")
})

// const input = {  }

export default function Contact() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();
        
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        console.log("Form submitted:", data);

        //fetch... method post
        const result = contactSchema.safeParse(data);
        if(!result.success){
            const errors = z.treeifyError(result.error)
            console.log(errors)
            setErrors(errors.properties)
        } else{
            setErrors({})

        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result.data)
        })
        if(!response.ok){
                throw new Error("Could not save data")
        } 
            navigate("/tak")
            
        } 
        
    }

    
    return (
        <>
        
        <h1>Contact</h1>

        <Form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <p>{errors && errors?.name?.errors[0]}</p>

                <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <p>{errors && errors?.email?.errors[0]}</p>

                <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <p>{errors && errors?.message?.errors[0]}</p>
                <textarea type="message" name="message" placeholder="Email" />
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}