
import { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import insta from "../../assets/insta.png";
import linke from "../../assets/linke.png";
export default function Layout (props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <div className="navmonth">
        <Logo/>
        <Nav/> 
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />
        <div className="icon">
          <CartLink />
          <Auth />
        </div>
        </div>
      </header>
      <div className="content-wrapper">
      <aside>
        <CategoryList/>
      </aside>
      <main>
        {props.children}
      </main>
      </div>
      <footer>
      <div class="container">
    <div class="row">
      <div class="col-4">
        <h4>About Us</h4>
        <p>We are your reliable partner in the world of flowers. We offer a wide range of beautiful and fresh floral compositions for any occasion.</p>
      </div>
      <div class="col-4">
        <h4>Contact</h4>
        <p>Phone: +123456789</p>
        <p>Email: info@flowershop.com</p>
        <p>Address: Flower Street, 123, City</p>
      </div>
      <div class="col-4">
        <h4>Follow Us</h4>
        <div class="social-media">
           <img src={insta} alt="instagram" className="insta" />    
           <img src={linke} alt="linkedin" className="linke" />            
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="text-center">&copy; 2023 Flower Shop. All rights reserved.</p>
      </div>
    </div>
  </div>
      </footer>
    </div>
  )
}