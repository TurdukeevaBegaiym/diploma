import {Link, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Link to="/">Home</Link>
      <Link to= "/phones">Phones</Link>

    <Routes>
      <Route path ="/" element={<h2>Home page</h2>} exact>

      </Route>
    </Routes>
    </div>
  );
}

export default App;
