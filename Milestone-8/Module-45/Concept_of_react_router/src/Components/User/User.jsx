import { Link, useNavigate } from "react-router-dom";
import "./user.css";
const User = ({ user }) => {
  const navGo = useNavigate();
const handleGo = () => {
    navGo(`/user/${id}`)
}
  const { id, title, body } = user;
  return (
    <div className="user">
      <h2>{title}</h2>
      <p>{body}</p>
      <button>
        <Link to={`/user/${id}`}>Details(Link)</Link>
      </button>
      <button onClick={handleGo}>DETAILS(Navigate)</button>
    </div>
  );
};

export default User;
