import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Teams" className="links">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
