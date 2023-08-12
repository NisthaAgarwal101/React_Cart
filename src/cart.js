import { useState } from "react";
import Items from "./Items";
const fruits = [
  { id: 1, name: "Apple", Apple: { price: 15, qty: 5 } },
  { id: 2, name: "Guava", Guava: { price: 8, qty: 10 } },
  { id: 2, name: "cherry", cherry: { price: 4, qty: 13 } }
];

function Cart() {
  const [total, setTotal] = useState(0);
  let onchange = (val) => {
    setTotal(total + val);
  };
  return (
    <div>
      <h1>Cart</h1>
      <table>
        <th>Name</th>
        <th>Qty</th>
        <th>Price</th>
      </table>
      <ol>
        {fruits.map((item) => {
          return (
            <Items
              id={item.id}
              name={item.name}
              qty={item[item.name]["qty"]}
              price={item[item.name]["price"]}
              onchange={onchange}
            />
          );
        })}
      </ol>
      <p>Total $ {total}</p>
    </div>
  );
}
export default Cart;
