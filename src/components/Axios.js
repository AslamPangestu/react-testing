import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async() => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data);
      } catch (error) {
        console.error('ERR: ',error);  
      }
  };

  return (
    <div>
      <p>List member kabayan coding:</p>
      <button onClick={getUserData} data-testid="get-user">
        get user
      </button>
      {users.map((user) => {
        return (
          <p data-testid="user-name" key={user.id}>
            {user.name}
          </p>
        );
      })}
    </div>
  );
};

export default Axios;