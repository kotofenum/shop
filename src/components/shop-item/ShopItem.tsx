import React from "react";
import "./ShopItem.css";

interface IShopItemProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function ShopItem(props: IShopItemProps) {
  return (
    <div className="shopItem">
      <div
        className="image"
        style={{ backgroundImage: `url("${props.image}?govno=${props.name}")` }}
      />
      <span className="name">{props.name}</span>
      <div className="info">
        <span className="price">${props.price}</span>
        <div className="actions">
          <button className="button" onClick={props.onDecrease}>
            -
          </button>
          <span className="quantity">{props.quantity}</span>
          <button className="button" onClick={props.onIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
