import { useState, useEffect } from "react";

function UsersNew() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        setError(true);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h3>New Users are:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersNew;
