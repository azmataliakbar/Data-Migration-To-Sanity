"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Header1 from '../components/Header1';
import OurPromise from '../components/OurPromise';
import Last from '../components/Footer';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Header1 />
      <div className="p-4 bg-black">
        <h2 className="text-3xl  lg:text-5xl text-orange-400 lg:underline font-bold mb-4 text-center sm:text-left">Summary Of Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-white">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between border-b border-t py-4"
              >
                <div className="flex items-center justify-between w-full sm:w-auto gap-4 px-2">
                  <div className="flex flex-col gap-2 w-full sm:w-2/3">
                    <p className="text-blue-400 text-lg font-bold">{item.name}</p>
                    <p className="text-green-400 font-bold">ID: {item._id}</p>
                    <span className="text-yellow-300 text-2xl">★★★★★</span>
                    <p className="text-red-500 font-bold text-2xl">Price: $ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="relative h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]">
                    <Image
                      src={item.imageURL}
                      alt={item.name}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
                  <p className="text-fuchsia-400 text-2xl font-bold">Quantity</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="bg-gray-200 font-bold text-2xl text-black px-4 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-yellow-300 font-bold text-2xl">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="bg-gray-200 font-bold text-2xl text-black px-3 rounded-md"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-3xl text-yellow-300 font-bold">Total: $ {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10 mt-6">
              <Link href="/">
                <button className="text-2xl font-bold bg-green-500 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition duration-300 w-full sm:w-auto">
                  All Products
                </button>
              </Link>
              <Link href="/Message">
                <button className="text-2xl font-bold bg-green-500 text-white py-3 px-10 rounded-md hover:bg-orange-400 transition duration-300 w-full sm:w-auto">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <OurPromise />
      <Last />
    </>
  );
};

export default CartPage;








