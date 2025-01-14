'use client';
import Link from 'next/link';
import Image from 'next/image';
import Header1 from '../components/Header1';
import OurPromise from '../components/OurPromise';
import Last from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Header1 />
    <main className="min-h-screen bg-black px-6 md:px-12 lg:px-24 py-12">
      <section className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-extrabold text-white tracking-tight mb-6 hover:scale-125">
          ABOUT <span className="text-blue-500">GLOBAL ONLINE SHOPPING STORE</span>
        </h2>
        <p className="text-lg text-green-400 max-w-2xl mx-auto hover:scale-125">
          Welcome to the Global Online Shopping Store, your ultimate destination for a wide range of products. From
          <span className="font-semibold"> jackets, coats, TVs, monitors, hard disks, and memory cards</span> to exquisite 
          <span className="font-semibold"> jewelry for women</span> and stylish
          <span className="font-semibold"> dresses for men and women</span> we have it all and more!
        </p>
      </section>

      {/* About Us Content */}
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
      
        <div className="relative group ">
        <div className="flex justify-center items-center">
          <Image
            src="/jak1.jpeg" // Replace with actual paths
            alt="Jackets and Coats"
            width={800}
            height={600}
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
          />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <p className="text-white text-lg font-semibold">Jackets & Coats</p>
          </div>
        </div>

        <div className="relative group">
        <div className="flex justify-center items-center">
          <Image
            src="/tv1.jpeg" // Replace with actual paths
            alt="TVs and Monitors"
            width={800}
            height={600}
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
          />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <p className="text-white text-lg font-semibold">TVs & Monitors</p>
          </div>
        </div>
        
        <div className="relative group">
        <div className="flex justify-center items-center">
          <Image
            src="/jwl1.jpeg" // Replace with actual paths
            alt="Jewelry"
            width={800}
            height={600}
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
          />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <p className="text-white text-lg font-semibold">Jewelry for Women</p>
          </div>
        </div>

        <div className="relative group">
        <div className="flex justify-center items-center">
          <Image
            src="/drs1.jpeg" // Replace with actual paths
            alt="Dresses"
            width={800}
            height={600}
            className="rounded-lg object-cover transition-transform transform group-hover:scale-105"
          />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
            <p className="text-white text-lg font-semibold">Dresses</p>
          </div>
        </div>
        
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">
          Experience Convenience Like Never Before
        </h2>
        <p className="text-lg text-white mt-4">
          At Global Online Shopping Store, we bring you the best products, competitive prices, and a seamless shopping experience. Shop now and discover the joy of global shopping!
        </p>
        <Link href="/" >
        <button className="mt-6 px-16 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-400 transition">
          Shop Now
        </button>
        </Link>
      </section>
      
    </main>
    <OurPromise />
      <Last />
    </>
  );
}
