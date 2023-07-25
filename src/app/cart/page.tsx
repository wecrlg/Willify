"use client";
import CartCard from "@/components/CartCard";
import CartTotalCard from "@/components/CartTotalCard";
import Navbar from "@/components/Navbar";
import StoreItems from "@/components/StoreItems";
import SuccessModal from "@/components/SuccessModal";
import { useStoreContext } from "@/context/StoreContext";

export default function Cart() {
  const { cart, isModalVisible } = useStoreContext();

  return (
    <div>
      <Navbar />

      <div className="cart_container">
        {cart.length ? (
          cart.map((item) => <CartCard key={item.id} item={item} />)
        ) : (
          <p style={{ textAlign: "center" }}>There are no items in the cart</p>
        )}
      </div>

      <div className="cart_container">
        <CartTotalCard />
      </div>

      {isModalVisible && <SuccessModal />}
    </div>
  );
}
