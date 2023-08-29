import { Link } from "react-router-dom";
import img from "../images/jesus.jpeg";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={img} alt="" />
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/careers"}>Careers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
