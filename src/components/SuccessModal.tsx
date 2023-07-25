import { useStoreContext } from "@/context/StoreContext";
import { useRouter } from "next/navigation";

export default function SuccessModal() {
  const { clearCart, setIsModalVisible } = useStoreContext();
  const router = useRouter();

  const continueShopping = () => {
    clearCart();
    setIsModalVisible(false);
    router.push("/");
  };

  return (
    <div className="modal">
      <div className="modal_card">
        <span>✔</span>
        <h3>Order received</h3>
        <p>Your order is being processed...</p>
        <p>We will get back to you soon.</p>
        <small>Thanks for shopping with us.</small>
        <button className="btn_lg" onClick={continueShopping}>
          Continue
        </button>
      </div>
    </div>
  );
}
