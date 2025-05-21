import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function List() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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

