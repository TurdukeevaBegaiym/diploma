import { useMatch } from "react-router";
import NotFound from "./NotFound";

export default function Category () {
  const params = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Season Flower", slug:"season-flower"},
    { id: 2, name: "Bouquets", slug:"bouquets"},
    { id: 3, name: "Symbolism:", slug:"symbolism:"},
    { id: 4, name: "Type:", slug:"type:"},
    { id: 4, name: "Baskets:", slug:"baskets:"},
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