import { useLoaderData, useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Detail(){
    const {token} = useContext(AuthContext)
    console.log(token)

    const {id}= useParams();

    const { data, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
    })

    // const user = useLoaderData();
    // const {id} = useParams()

    // const [user, setUser] = useState();
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res=>res.json())
    //     .then(result=> setUser(result))
    //     .finally(()=>
    //         setIsLoading(false)
    //     )
    // },[])

    return isLoading ? (<p>Loading...</p>): (
        <>
        <h2>{data.name}</h2>
        </>
        // <p>user details</p>
    )
}

