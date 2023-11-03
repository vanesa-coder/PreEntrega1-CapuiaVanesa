
import { useState } from "react";

export const CardWidget = () => {
    const [count, setCount] = useState(5);

  return (
    <>
    <i  class="bi bi-cart4 carrito "></i>
    <button className="boton" type="button">
        <span>{count}</span>
    </button>
    </>
  )
}
