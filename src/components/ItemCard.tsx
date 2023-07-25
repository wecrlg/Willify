"use client";
import { useStoreContext } from "@/context/StoreContext";
import { DataType } from "@/types";
import FormatCurrency from "@/utils/FormatCurrency";
import Image from "next/image";

export default function ItemCard({ item }: { item: DataType }) {
  const { image, title, price, id } = item;
  

  const { itemQuantity, increaseCartQty, decreaseCartQty } = useStoreContext();

  const itemQty = itemQuantity(id);
  return (
    <div className="item_card">
      <div className="image_container">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <h4 className="capitalize">{title}</h4>
      <p>{FormatCurrency(price)}</p>
      {itemQty ? (
        <div className="button_group">
          <button className="btn_sm" onClick={() => decreaseCartQty(id)}>-</button>
          <span>{itemQty}</span>
          <button className="btn_sm" onClick={() => increaseCartQty(id)}>+</button>
        </div>
      ) : (
        <button className="btn_lg" onClick={() => increaseCartQty(id)}>Add to Cart</button>
      )}
    </div>
  );
}
