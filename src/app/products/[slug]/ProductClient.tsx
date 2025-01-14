"use client";

import Header1 from '../../components/Header1';
import OurPromise from '../../components/OurPromise';
import Last from '../../components/Footer';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types/product";

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({ product }: ProductClientProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    const notification = window.confirm(
      "Item added to cart! Would you like to view your cart?"
    );
    if (notification) {
      router.push('/cart');
    }
  };

  return (
    <div>
      <Header1 />
      <div className="p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-[300px] sm:h-[500px] w-full sm:w-[500px]">
              <Image
                src={product.imageURL}
                alt={product.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl text-yellow-300 font-bold">{product.name}</h2>
              <p className="text-white text-sm sm:text-base">{product.description}</p>
              <p className="text-fuchsia-400 text-sm sm:text-base">ID: {product._id}</p>
              <p className="text-2xl text-green-400 font-semibold">
                Price: ${product.price.toFixed(2)}
              </p>

              {/* Available Sizes */}
              {product.sizes && (
                <div className="mt-4">
                  <h3 className="text-lg text-blue-400 font-semibold mb-2">Available Sizes:</h3>
                  <p className="text-blue-400 text-sm sm:text-base">{product.sizes.join(", ")}</p>
                </div>
              )}

              {/* Ratings */}
              <div className="flex items-center space-x-2 mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="ml-1 text-purple-400">{product.rating}</span>
                </div>
                <span className="ml-1 text-pink-400 text-sm sm:text-base">
                  ({product.ratingCount} reviews)
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full font-bold bg-green-500 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition duration-300 mt-6 sm:mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurPromise />
      <Last />
    </div>
  );
}
