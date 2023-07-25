import { useStoreContext } from "@/context/StoreContext";
import { CartProps } from "@/types";
import FormatCurrency from "@/utils/FormatCurrency";

export default function CartCard({ item }: { item: CartProps }) {
  const { image, price, quantity, id, title } = item;
  const { increaseCartQty, decreaseCartQty, removeFromCart } = useStoreContext();

  return (
    <div className="cart_card">
      <img src={image} alt={title} />
      <div>
        <h4 className="capitalize">{title}</h4>
        <p>Each: {FormatCurrency(price)}</p>
        <p>Total: {FormatCurrency(price * quantity)}</p>
      </div>
      <p className="qty">QTY: {quantity}</p>
      <div className="btn_group">
        <button className="btn_sm" onClick={() => increaseCartQty(id)}>
          +
        </button>
        <button className="btn_sm" onClick={() => decreaseCartQty(id)}>
          -
        </button>
      </div>
      <button className="remove_btn" onClick={() => removeFromCart(id)}>
        x
      </button>
    </div>
  );
}
