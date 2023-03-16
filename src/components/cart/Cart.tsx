import { ICart, IItem } from "../../App";
import "./Cart.css";

interface ICartProps {
  cart: ICart;
  items: IItem[];
}

export function Cart(props: ICartProps) {
  const quantities: number[] = Object.values(props.cart);

  const getLabelByIdx = (idx: number) => props.items[idx].label;

  return (
    <div className="cart">
      <div className="cartHeading">Cart</div>
      <div className="cartList">
        {quantities.map((quantity, idx) => (
          <div
            key={idx}
            className="cartItem"
            style={{ display: quantity > 0 ? "flex" : "none" }}
          >
            <span className="cartItemName">{getLabelByIdx(idx)}</span>
            <span>x{quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
