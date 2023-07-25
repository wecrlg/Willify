"use client"
import { useStoreContext } from "@/context/StoreContext";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/vercel.svg";

export default function Navbar() {
  const { getCartQty } = useStoreContext();
  const count = getCartQty();
  return (
    <nav>
      <Link href="/">
        <Image src={Logo} alt="logo"></Image>
      </Link>

      <ul className="navbar">
        <Link href="/">Home</Link>
        <Link href="/cart">
          Cart <span>{count}</span>
        </Link>
      </ul>
    </nav>
  );
}
