
import { useState } from "react";
import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
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
        <Footer/>
      </footer>
    </div>
  )
}