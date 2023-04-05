import Nav from "./Nav";
import logo from "../assets/logo.png"
import "./Layout.css";

export default function Layout (props) {
  return (
    <div className="Layout">
      <header>
        <img src={logo} alt="logo" />
        <Nav/>
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
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