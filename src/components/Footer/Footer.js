
import React from 'react';
import insta from "../../assets/insta.png";
import linke from "../../assets/linke.png";
import face from "../../assets/facebook.png";
import git from "../../assets/git.png";
import logo from "../../assets/logos.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h4>About Us</h4>
            <p>We are your reliable partner in the world of flowers. We offer a wide range of beautiful and fresh floral compositions for any occasion.</p>
          </div>
          <div className="col-4">
            <h4>Contact</h4>
            <p>Phone: +996708026312</p>
            <p>Email: info@flowershop.com</p>
            <p>Address: Flower Street, 123, City</p>
          </div>
          <div className="col-4">
            <h4 className="follow">Follow Us</h4>
            <div className="social-media">
               <img src={insta} alt="instagram" className="insta" />    
               <img src={linke} alt="linkedin" className="linke" />    
               <img src={face} alt="face" className="face" />   
               <img src={git} alt="git" className="git" />  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">&copy; 2023 Flower Shop. All rights reserved.</p>
            <img src={logo} alt="logo" className="logo two" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;