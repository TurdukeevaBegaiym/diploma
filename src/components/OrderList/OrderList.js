import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";


export default function OrderList() {
  const {orders, products} = useContext(AppContext);

  if (!orders.length ||!products.length) {
    return "No orders found";
  }
  const output = orders.map(order => {
    const cartOutput = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId)
      
      if (!product) {
        return "Product not found";
      }

      return (
        <div key={product.id}>
          <img src={product.picture} alt={product.name} />
           {product.name}: {order.cart[productId]} X {product.price} som = {order.cart[productId] * product.price} som
        </div>
      );
    })

    return (
      <div key={order.id} className="Order">
      <div><strong>Name</strong>: {order.name}</div>
      <div><strong>Phone</strong>: {order.phone}</div>
      <div><strong>Address</strong>: {order.address}</div>
      <div><strong>Cart</strong>: {cartOutput}</div>
    </div>
    );
  })

  return (
    <div className="OrderList">
      {output}
    </div>

  )
}