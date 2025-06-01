import { Form, useActionData } from "react-router";

export default function Contact() {
    const errors = useActionData();

    return (
        <>
        
        <h1>Contact</h1>

        <Form method="post" >
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