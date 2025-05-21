import { useLoaderData } from "react-router"

export default function Detail(){

    const user = useLoaderData();
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

    return(
        <>
        <h2>{user.name}</h2>
        </>
        // <p>user details</p>
    )
}

