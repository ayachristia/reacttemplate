import queryClient from "../QueryClient";
import { redirect } from "react-router";

export async function getUsers() {
    // const token = sessionStorage.getItem("tokenLogin")
    // if (!token) redirect("/login")

    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}


export async function getUser({ params }) {
    console.log(params);
    const { id } = params;

    return queryClient.fetchQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}