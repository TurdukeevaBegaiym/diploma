import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Nav.css";


export default function Nav () {
  return (
    <nav className="Nav">
      <ul> 
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  )
}