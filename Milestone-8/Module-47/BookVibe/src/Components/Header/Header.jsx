import { NavLink } from "react-router-dom";

const Header = () => {
  const home = (
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "text-blue-500 font-bold border-2 border-blue-500" : "text-gray-500"
      }
    >
      Home
    </NavLink>
  );
  const bookList = (
    <NavLink
      to="/booklist"
      className={({ isActive }) =>
        isActive ? "text-blue-500 font-bol border-2 border-blue-500" : "text-gray-500"
      }
    >
      Book List
    </NavLink>
  );
  const Pages_to_read = (
    <NavLink
      to="/error"
      className={({ isActive }) =>
        isActive ? "text-blue-500 font-bol border-2 border-blue-500" : "text-gray-500"
      }
    >
      Pages to Read
    </NavLink>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>{home}</li>
              <li>{bookList}</li>
              <li>{Pages_to_read}</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-sans font-extrabold">BOOKVIBE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>{home}</li>
            <li>{bookList}</li>
            <li>{Pages_to_read}</li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
