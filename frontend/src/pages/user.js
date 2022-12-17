// import React from 'react'
  import React, { useEffect, useState } from "react";



function Users() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://localhost:3000")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  );
}


export default Users;
