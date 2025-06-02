import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

export default function List() {
  const {token, login} = useAuth()
  console.log(token)


  // const users = useLoaderData();
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: ()=> fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    }
  )


  return isLoading ? (<p>Loading...</p>) : (
    <>
    <ul>
      {data.map(user => (
        <li key={user.id}>
          < Link to={`/list/${user.id}`}>{user.name}</Link>
          </li> // Added 'key' for unique identification of list items
      ))}
    </ul>
    </>
  );
}

