import { useState } from "react";

export default function Items(props) {
  const [addedQty, setAddedQty] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const handleChange = (type) => {
    let newQty = addedQty;
    let val = 0;
    if (type === "add" && props.qty > addedQty) {
      newQty++;
      val = 1;
      setAddedQty(newQty);
    } else if (type === "sub" && addedQty > 0) {
      newQty--;
      val = -1;
      setAddedQty(newQty);
    }
    setSubTotal(newQty * props.price);
    props.onchange(val * props.price);
  };

  return (
    <li key={props.id}>
      <h5>{props.name}</h5>
      <p>
        ( {addedQty}/{props.qty} )
      </p>
      <p>$ {props.price}</p>
      <button onClick={() => handleChange("sub")}>-</button>
      <h6>{addedQty}</h6>
      <button onClick={() => handleChange("add")}>+</button>
      <span>SubTotal $ {subTotal}</span>
    </li>
  );
}
