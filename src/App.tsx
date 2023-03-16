import React from "react";
import axios from "axios";
import "./App.css";
import { Cart } from "./components/cart/Cart";
import { ShopItem } from "./components/shop-item/ShopItem";
import { ShopList } from "./components/shop-list/ShopList";

export interface IItem {
  label: string;
  price: number;
  imageURL: string;
}

export interface ICart {
  [key: number]: number;
}

function App() {
  const [items, setItems] = React.useState<IItem[]>([]);

  const generateCartObject = React.useCallback(
    () => items.reduce((acc, _, idx) => ({ ...acc, [idx]: 0 }), {}),
    [items]
  );

  const [cart, setCart] = React.useState<ICart>(generateCartObject());

  const fetch = async () => {
    const response = await axios.get<IItem[]>(
      "https://6413544bc469cff60d6059c6.mockapi.io/api/v1/items"
    );

    setItems(response.data);
  };

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    setCart(generateCartObject());
  }, [generateCartObject]);

  return (
    <div className="App">
      <ShopList>
        {items.map((item, idx) => (
          <ShopItem
            key={idx}
            name={item.label}
            price={item.price}
            image={item.imageURL}
            quantity={cart[idx]}
            onIncrease={() => {
              const newCart: ICart = JSON.parse(JSON.stringify(cart));
              newCart[idx] += 1;
              setCart(newCart);
            }}
            onDecrease={() => {
              const newCart: ICart = JSON.parse(JSON.stringify(cart));
              newCart[idx] = newCart[idx] > 0 ? newCart[idx] - 1 : 0;
              setCart(newCart);
            }}
          />
        ))}
      </ShopList>
      <Cart cart={cart} items={items} />
    </div>
  );
}

export default App;
