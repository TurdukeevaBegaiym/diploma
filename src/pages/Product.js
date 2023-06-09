import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);
  
  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="ProduContainer">
      <h1>{product.name}</h1>
      <img className="product-picture" src={product.picture} alt={product.name} />
      <span>{product.price} $</span>
      <p>{product.description}</p>
    </div>
  );
}
