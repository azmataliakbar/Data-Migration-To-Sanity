// src/components/CartIcon.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const CartIcon = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.401 2M7 13h10l4-8H5.401m1.225 8h9.748m2.934 4a2 2 0 11-4 0m4 0a2 2 0 11-4 0m-5-2a2 2 0 11-4 0m4 0a2 2 0 11-4 0"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
