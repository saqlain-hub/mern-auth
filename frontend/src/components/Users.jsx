import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <ul>
        {users &&
          users.map((user) => {
            <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Users;
