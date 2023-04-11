import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category () {
  const params = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: " IN containers", slug:"in-containers"},
    { id: 2, name: " IN cones", slug:"in-cones"},
    { id: 3, name: " Classic", slug:"classic"},
    { id: 4, name: " Fruity", slug:"fruity"},
  ];

  const category = categories.find (
    (category) => category.slug === params.slug
  );

  if (!category) {
    return<NotFound/>
  }

  return (
    <div className="Category">
      <h1>{Category.name}</h1>
    </div>
  )
}