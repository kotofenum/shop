import "./ShopList.css";

interface IShopListProps {
  children: React.ReactElement[];
}

export function ShopList(props: IShopListProps) {
  return <div className="shopList">{props.children}</div>;
}
