import "./Logo.css";
import logo from "../assets/logotwo.png";
import { NavLink } from "react-router-dom";

export default function Logo () {
  return (
    <div className="Logo">
      <NavLink to="logo">
      <img src={logo} alt="logo" className="logo"></img>
      </NavLink>


    </div>
  )
}