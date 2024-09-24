import { useEffect, useState } from "react";
import Counter from "./Counter";
function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  //   const clickHandler = async () => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     const json = await response.json();
  //     console.log(json);
  //   };

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`,
          { signal: controller.signal }
        );
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.log(error.message);
        setError(true);
      }
    };
    fetchData();
    return () => {
      controller.abort();
      console.log("first");
    };
  }, [id]);
  return (
    <div>
      {/* {id > 20 && <Counter />} */}
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      {/* <button onClick={clickHandler}>Search</button> */}
      {!users.length && !error && <h3>Loading.... Please Wait !</h3>}
      <h1>photos are:</h1>
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
