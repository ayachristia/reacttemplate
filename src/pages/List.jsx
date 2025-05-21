import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

export default function List() {
    const users = useLoaderData();
//   const [isLoading, setIsLoading] = useState(true);


//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          < Link to={`/list/${user.id}`}>{user.name}</Link>
          </li> // Added 'key' for unique identification of list items
      ))}
    </ul>
  );
}

