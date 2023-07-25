export interface DataType {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface StoreContextProps {
  getCartQty: () => number;
  increaseCartQty: (id: number) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  itemQuantity: (id: number) => number;
  cart: CartProps[];
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<SetStateAction<boolean>>;
}

export interface CartProps {
  id: number;
  quantity: number;
  title: string;
  image: string;
  price: number;
}
