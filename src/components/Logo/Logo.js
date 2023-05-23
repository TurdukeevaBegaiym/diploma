import { NavLink } from "react-router-dom";
import logo from "../../assets/logos.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
     </NavLink>
    </div>
  )
}