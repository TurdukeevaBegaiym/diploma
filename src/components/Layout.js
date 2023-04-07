import Nav from "./Nav";
import "./Layout.css";
import Logo from "./Logo";

export default function Layout (props) {
  return (
    <div className="Layout">
      <header>
        <Logo/>
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