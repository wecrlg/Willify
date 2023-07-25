import Navbar from "@/components/Navbar";
import Data from "@/data/store.json";
import styles from "./page.module.css";
import StoreItems from "@/components/StoreItems";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <StoreItems />
    </div>
  );
}
