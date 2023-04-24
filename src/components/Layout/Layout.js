import Nav from "../Nav/Nav";
import "./Layout.css";
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";

export default function Layout (props) {
  return (
    <div className="Layout">
      <header>
        <div className="navmonth">
        <Logo/>
        <Nav/> 
        <CartLink/>
        <Auth />
        </div>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>
        {props.children}
        
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}