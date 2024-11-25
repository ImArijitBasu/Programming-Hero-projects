import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            header component
            <NavLink to="/">home</NavLink>
            <NavLink to="/phones">phones</NavLink>
        </div>
    );
};

export default Header;