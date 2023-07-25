"use client";
import Data from "@/data/store.json";
import { CartProps, StoreContextProps } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

const StoreContext = createContext({} as StoreContextProps);

export const useStoreContext = () => {
  return useContext(StoreContext);
};

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getCartQty = () => {
    return cart.reduce((el, value) => el + value.quantity, 0);
  };

  const increaseCartQty = (id: number) => {
    // check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (!cartItem) {
      setCart((prev) => [
        ...prev,
        {
          id,
          quantity: 1,
          image: Data[id - 1].image,
          price: Data[id - 1].price,
          title: Data[id - 1].title,
        },
      ]);
    } else {
      setCart((prev) =>
        [...prev].map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      );
    }
  };

  const decreaseCartQty = (id: number) => {
    setCart((items) => {
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    // check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (!cartItem) {
      return;
    } else {
      setCart((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemQuantity = (id: number) => {
    // check if the item is already in the cart
    const cartQty = cart.find((item) => item.id === id)?.quantity;
    if (!cartQty) {
      return 0;
    } else {
      return cartQty;
    }
  };

  return (
    <StoreContext.Provider
      value={{
        getCartQty,
        increaseCartQty,
        decreaseCartQty,
        clearCart,
        removeFromCart,
        itemQuantity,
        cart,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
