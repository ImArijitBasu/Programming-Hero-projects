import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './users.css'
const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>Users section</h1>
      <div className="">
        <p>{users.length}</p>
        <div className="grid">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
