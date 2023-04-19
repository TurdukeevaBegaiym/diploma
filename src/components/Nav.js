import { NavLink } from "react-router-dom";
import logo from "../assets/retinaflower.png";
import "./Nav.css";
import "./Logo.css";


export default function Nav () {
  return (
    <nav>
      <ul> 
        <li className="NavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <NavLink to="logo">
          <img src={logo} alt="logo" className="logo"></img>
        </NavLink>
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