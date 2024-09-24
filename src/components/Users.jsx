import { useEffect, useState } from "react";
function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        setError(true);
      }
    };
    console.log("heyyyy");
    fetchData();
  }, [id]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h1></h1>
      {!users.length && !error && <h3>Loading.... Please Wait !</h3>}
      <h1>Users are:</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      {error && <h4>There is something wrong, please wait a little more!</h4>}
    </div>
  );
}

export default Users;
