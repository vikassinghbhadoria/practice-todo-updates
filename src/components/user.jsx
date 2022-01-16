import React from "react";
// import "./user.css";
// import './users.css';

const User = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{user.id}</li>
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">{user.username}</li>
          <li className="list-group-item">{user.email}</li>
          
        </ul>
      </div>
    </>
  );
};

export default User;
