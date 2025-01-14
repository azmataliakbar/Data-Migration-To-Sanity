import { client } from "@/sanity/lib/client";
import ProductGrid from "@/app/components/ProductGrid";
import Header1 from './components/Header1';
import OurPromise from './components/OurPromise';
import Last from './components/Footer'

export default async function Home() {
  let products = [];
  try {
    products = await client.fetch(`
      *[_type == "product"] {
        name, description, price, discountPercentage, priceWithoutDiscount,
        rating, ratingCount, tags, sizes,
        "imageURL": image.asset->url,
        _id, 
        "slug": slug.current
      }
    `);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
      <Header1 />
      <h1 className="ml-1 lg:ml-80 lg:text-5xl font-bold mt-6">AMAZING PRODUCTS</h1>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-center text-white mt-10">No products found.</p>
      )}
      <OurPromise />
      <Last />
    </div>
  );
}





