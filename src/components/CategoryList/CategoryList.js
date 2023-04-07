import { NavLink } from "react-router-dom";

export default function CategoryList () {
  const categories = [
    { id: 1, name: " IN containers", slug:"in-containers"},
    { id: 2, name: " IN cones", slug:"in-cones"},
    { id: 3, name: " Classic", slug:"classic"},
    { id: 4, name: " Fruity", slug:"fruity"},
  ];

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink> 
    </li>
  ));

  return (
    <div className="CategoryList"> 
      <h3>Categories</h3>
    </div>
  );
}