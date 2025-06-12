import { useParams } from "react-router"

export default function Detail(){

    const {id}= useParams();

 

    return  (
        <>
        <h2>DETAILS</h2>
        </>
    )
}

