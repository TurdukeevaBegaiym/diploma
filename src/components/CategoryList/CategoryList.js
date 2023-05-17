import "./CategoryList.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import DeleteCategory from "../DeleteCategory/DeleteCategory";

export default function CategoryList() {
  const { categories } = useContext(AppContext);
  
  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>{category.name}</NavLink>
      <DeleteCategory category={category} />

    </li>
  ));

  return (
    <nav className="CategoryList">
      <ul>{output}</ul>
    </nav>
  );
}
