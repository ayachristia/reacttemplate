import queryClient from "../QueryClient";

export async function getUsers() {
    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    }); // <- Missing closing parenthesis and semicolon
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