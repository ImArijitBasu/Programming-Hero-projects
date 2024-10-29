import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="border-2 bg-red-500" style={{
        border : '2px solid tomato',
        margin : '10px 50px',
        padding : '20px 30px',
        display : "flex" ,
        justifyContent : "space-between",
        backgroundColor : "tomato",
        color : " white",
      }}>
        Welcome to my webpage
        <Link to="/game">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Header;
