import Nav from "./Nav";
import "./Layout.css";
import Logo from "./Logo";
import CategoryList from "./CategoryList";

export default function Layout (props) {
  return (
    <div className="Layout">
      <header>
        <div className="navmonth">
        <Logo/>
        <Nav/> 
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