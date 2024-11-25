import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            this is header
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;