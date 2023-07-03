import React from "react";
import "./UserList.css";
function UserList({ users, handleDelete }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img src={user.img} alt={user.nama} width={150} height={150} />
                <h3>
                  {user.firstName},{user.lastName},{user.age}
                </h3>
                <p>{user.from}</p>
                <p>{user.job}</p>
                <p>{user.gender}</p>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
