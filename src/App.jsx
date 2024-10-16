//TODO List
// import React from 'react'
// import Todolist from "./Todolist"
// const App = () => {
//   return (
//     <div>
//       <Todolist></Todolist>
//     </div>
//   )
// }

// export default App
//!Fetching the data as a table from the api:
import React, { useEffect, useState } from "react";

function App() {
 
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); 
      })
      .catch((error) => console.error("Error fetching data:", error)); 
  }, []);

  return (
    <div>
      <h1>User List</h1>
     
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
      
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;