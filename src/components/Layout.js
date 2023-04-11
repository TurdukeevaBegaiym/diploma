import Nav from "./Nav";
import "./Layout.css";
import Logo from "./Logo";
import CategoryList from "./CategoryList/CategoryList";

export default function Layout (props) {
  return (
    <div className="Layout">
      <header>
        <div className="nav-container">
        <Logo/>
        <Nav/>
        </div>
      </header>
      <aside>
        <CategoryList/>
      </aside>
      <main>
        {props.children}
        CONTENT
      </main>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}