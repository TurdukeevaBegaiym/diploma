
import "./CartLink.css";
import cartIcon from '../../assets/carttss.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const CartLink = ({ total }) => {
  return (
    <React.Fragment>
      <NavLink to="/cart">
        <img src={cartIcon} alt="Cart" />
      </NavLink>
    </React.Fragment>
  );
};

export default CartLink;
