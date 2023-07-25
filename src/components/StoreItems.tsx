import Data from "@/data/store.json"
import ItemCard from "./ItemCard";

export default function StoreItems() {
  return <div className="container">{Data.map(item => (<ItemCard key={item.id} item={item} />))}</div>;
}