import { useStoreContext } from "@/context/StoreContext";
import FormatCurrency from "@/utils/FormatCurrency";

export default function CartTotalCard() {
  const { getCartQty, cart, setIsModalVisible } = useStoreContext();

  const cartQty = getCartQty();
  const totalAmount = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  // The VAT is just 2.5% of the taoal amout if TotalAmount > $4000, else its 1.5%
  const vat = totalAmount > 4000 ? 0.025 * totalAmount : 0.015 * totalAmount;

  const handleCheckOut = () => {
    if (cart.length) {
      setIsModalVisible(true)
    }
  }

  return (
    <div className="cart_total_card">
      <span>
        Total Items: <p>{cartQty}</p>
      </span>
      <span>
        Total Amount: <p>{FormatCurrency(totalAmount)}</p>
      </span>
      <span>
        VAT: <p>{FormatCurrency(vat)}</p>
      </span>
      <button className="btn_lg" onClick={handleCheckOut}>
        Proceed to checkout
      </button>
    </div>
  );
}
