'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: string;
  imageURL: string;
  description: string;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  priceWithoutDiscount: number;
  discountPercentage: number;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-10 px-4">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const shortDescription = product.description.slice(0, 50);
  const fullDescription = product.description;
  const productSlug = product.slug || product._id;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      
      <Link href={`/products/${productSlug}`}>
        <div className="relative flex justify-center items-center">
          <Image
            src={product.imageURL}
            alt={product.name}
            height={300}
            width={300}
            className="object-contain rounded-md max-h-[300px] max-w-full"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-base font-semibold text-gray-800">{product.name}</h2>

        <p className="text-gray-400 text-sm mt-2">
          {isExpanded ? fullDescription : `${shortDescription}...`}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-500 text-sm mt-2 mb-4"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

        <div className="text-sm text-gray-600 mt-auto mb-4">
          <p className="text-orange-500 font-bold">
            Rating: {product.rating} ({product.ratingCount} reviews)
          </p>
          <p className="text-green-500 font-bold">
            Tags: {product.tags.join(", ") || "N/A"}
          </p>
          <p className="text-purple-600 font-bold">
            Sizes: {product.sizes.length > 0 ? product.sizes.join(", ") : "Check Details"}
          </p>
          <p className="text-orange-300 font-bold">ID: {product._id}</p>
          <p className="text-blue-500 font-bold">
            Discount:{" "}
            {product.discountPercentage > 0
              ? `${product.discountPercentage}%`
              : "Check Details"}
          </p>
          <p className="text-red-500 font-bold">
            Original Price: ${product.priceWithoutDiscount.toFixed(2)}
          </p>
          <p className="text-xl font-bold text-gray-800 mt-2">
            Final Price: ${product.price.toFixed(2)}
          </p>


        </div>
        
        <Link href={`/products/${productSlug}`}>
          <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded-md w-full hover:bg-orange-400">
            Order Now
          </button>
        </Link>
      </div>
      
    </div>
  );
}


