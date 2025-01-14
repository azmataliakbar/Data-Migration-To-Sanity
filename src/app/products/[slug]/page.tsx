// src/app/products/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from "next/navigation";
import ProductClient from './ProductClient';
import { Product } from "@/app/types/product";
//import { fetchProduct } from '../../'; // Adjust path as needed



// Mock Product Data
const mockProducts: Product[] = [
  {
    _id: "P7X5GnakD2Kl12A70EJA52",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    slug: "fjallraven-foldsack-no-1-backpack",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/a3adcaff608bad2cf518f2a9d26a0c6d123c75a7-1049x1500.jpg",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    rating: 3.9,
    ratingCount: 120,
    tags: ["backpack", "travel"],
    sizes: ["One Size"],
    priceWithoutDiscount: 109.95,
    discountPercentage: 0,
  },
  {
    _id: "P7X5GnakD2Kl12A70EJAS4",
    name: "Mens Casual Slim Fit",
    price: 15.99,
    slug: "Mens Casual Slim Fit",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/40305f45f0abc12b5a0b24c39fef6f3f0baf4830-692x879.jpg",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    rating: 2.1,
    ratingCount: 430,
    tags: ["men's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 15.99,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJAWS",
    name: "Solid Gold Petite Micropave",
    price: 168.00,
    slug: "Solid Gold Petite Micropave",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/74256ec87298d5e8303a2e92358c893738977af7-640x333.jpg",
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    rating: 3.9,
    ratingCount: 70,
    tags: ["jewelery"],
    sizes: ["All Sizes"],
    priceWithoutDiscount: 168.00,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJBJo",
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    slug: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/e085a7a29cbc4f47eee4b2b8ce6660e9c028e100-640x369.jpg",
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    rating: 1.9,
    ratingCount: 100,
    tags: ["jewelery"],
    sizes: ["All Sizes"],
    priceWithoutDiscount: 10.99,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJCCe",
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    slug: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/d2afe3bc2979160431fd4e958e86d567bdbd8924-679x900.jpg",
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    rating: 2.6,
    ratingCount: 235,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 56.99,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJCI8",
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    slug: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/8634285cb4786a6eb7f7916fda55bbd89000227c-601x879.jpg",
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    rating: 2.9,
    ratingCount: 340,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 29.95,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJCNc",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 29.95,
    slug: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/06b62b86d47fc42bb56defdecb8bcbbce77a4883-526x879.jpg",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    rating: 3.8,
    ratingCount: 679,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 29.95,
    discountPercentage: 0,
    
  },
  {
    _id: "P7X5GnakD2Kl12A70EJCgG",
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    slug: "Opna Women's Short Sleeve Moisture",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/a370f2f21adfb4949ca87d9e71f646ba27e8872f-679x888.jpg",
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    rating: 4.5,
    ratingCount: 146,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 7.95,
    discountPercentage: 0,
    
  },
  {
    _id: "XxPo3w1ULx3OwS1IkXEDI6",
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.30,
    slug: "Mens Casual Premium Slim Fit T-Shirts",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/e1d220cc41c863e93dff756780aefc931799ac1a-663x879.jpg",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    rating: 4.1,
    ratingCount: 259,
    tags: ["men's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 22.30,
    discountPercentage: 0,
    
  },
  {
    _id: "XxPo3w1ULx3OwS1IkXEDaI",
    name: "Mens Cotton Jacket",
    price: 55.99,
    slug: "Mens Cotton Jacket",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/5519a5fa0fee4d3f36f7c3e3b9e4c81e501c8c61-679x755.jpg",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    rating: 4.7,
    ratingCount: 500,
    tags: ["men's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 55.99,
    discountPercentage: 0,
    
  },
  {
    _id: "XxPo3w1ULx3OwS1IkXEGZG",
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64.00,
    slug: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/44c629d778597d3fa5fbbb61eee516a0cf1b1624-653x879.jpg",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    rating: 3.3,
    ratingCount: 203,
    tags: ["electronics"],
    sizes: ["2TB - USB 3.0"],
    priceWithoutDiscount: 64.00,
    discountPercentage: 0,
    
  },
  {
    _id: "XxPo3w1ULx3OwS1IkXEGoQ",
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109.00,
    slug: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/1d94456df41077202c9c57615aa07ed28436fc34-679x475.jpg",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    rating: 2.9,
    ratingCount: 470,
    tags: ["electronics"],
    sizes: ["1TB - SATA III 6 Gb/s"],
    priceWithoutDiscount: 109.00,
    discountPercentage: 0,
    
  },
  {
    _id: "XxPo3w1ULx3OwS1IkXEdDC",
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114.00,
    slug: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/756c50b71dd3ce867ab5f212b1f7ba1694c20c0a-644x988.jpg",
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    rating: 4.8,
    ratingCount: 400,
    tags: ["electronics"],
    sizes: ["4TB - USB 3.0"],
    priceWithoutDiscount: 114.00,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7faSn",
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695.00,
    slug: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/910a44e944bf99fcd7c73c85c89d8bbd5d609104-370x640.jpg",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    rating: 4.6,
    ratingCount: 400,
    tags: ["jewelery"],
    sizes: ["All Sizes"],
    priceWithoutDiscount: 695.00,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fbo9",
    name: "White Gold Plated Princess",
    price: 9.99,
    slug: "White Gold Plated Princess",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/d47de256189cf2cf23d2093674a881889b36a704-540x640.jpg",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    rating: 3.0,
    ratingCount: 400,
    tags: ["jewelery"],
    sizes: ["All Sizes"],
    priceWithoutDiscount: 9.99,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fiWv",
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109.00,
    slug: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/179e2d51a3e0341a0ceab9f51b0a2d184fe02bcc-679x461.jpg",
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    rating: 4.8,
    ratingCount: 319,
    tags: ["electronics"],
    sizes: ["256GB - SATA III 2.5"],
    priceWithoutDiscount: 109.00,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fk13",
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599.00,
    slug: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/b03c0230ab8a5afd5e6208be8560e4ded88aea05-679x513.jpg",
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    rating: 2.9,
    ratingCount: 250,
    tags: ["electronics"],
    sizes: ["21.5 inches - Full HD (1920 x 1080)"],
    priceWithoutDiscount: 599.00,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fkVl",
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED",
    price: 999.99,
    slug: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) - Super Ultrawide Screen QLED",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/1b6d9cedd11a2a1ad78408d48efaa1b637e546bb-679x480.jpg",
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    rating: 2.2,
    ratingCount: 140,
    tags: ["electronics"],
    sizes: ["49 inches - Super Ultrawide Screen QLED"],
    priceWithoutDiscount: 999.99,
    discountPercentage: 0,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fmQD",
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    slug: "MBJ Women's Solid Short Sleeve Boat Neck V",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/63ff8bdeced8300931b8eb767d6494d7db7a48bd-692x879.jpg",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    rating: 4.7,
    ratingCount: 130,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 9.85,
    discountPercentage: 3,
    
  },
  {
    _id: "zK1VoWIcb6YAfR4Fi7fmuv",
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 10.39,
    slug: "DANVOUY Womens T Shirt Casual Cotton Short",
    imageURL:
      "https://cdn.sanity.io/images/z5x7q5qb/production/833db4d824cd2772361ebfe16f4d739dcaae42ca-679x761.jpg",
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    rating: 3.6,
    ratingCount: 145,
    tags: ["women's clothing"],
    sizes: ["S , M , L , XL , XXL"],
    priceWithoutDiscount: 12.99,
    discountPercentage: 20,
    
  },
];



// async function fetchProduct(slug: string): Promise<Product | null> {
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   return mockProducts.find((product) => product.slug === slug || product._id === slug) || null;
  

// }

// interface PageProps {
//   params: {slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
//  // searchParams?: Record<string, string | string[] | undefined>;

// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const product = await fetchProduct(params.slug);
  
//   if (!product) {
//     return {
//       title: 'Product Not Found',
//     };
//   }

//   return {
//     title: product.name,
//     description: product.description,
//   };
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await fetchProduct(params.slug);
  
//   if (!product) {
//     return null;
//   }

//   return <ProductClient product={product} />;
// }

// async function fetchProduct(slug: string): Promise<Product | null> {
//   await new Promise((resolve) => setTimeout(resolve, 100));
//   return mockProducts.find((product) => product.slug === slug || product._id === slug) || null;
// }

//----------------------------------------------------------------------------------working good
// interface PageProps {
//   params: Promise<{ slug: string }>;
//   searchParams: { [key: string]: string | string[] | undefined };
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const resolvedParams = await params;
//   const product = await fetchProduct(resolvedParams.slug);
  
//   if (!product) {
//     return {
//       title: 'Product Not Found',
//     };
//   }

//   return {
//     title: product.name,
//     description: product.description,
//   };
// }

// export default async function ProductPage({ params }: PageProps) {
//   const resolvedParams = await params;
//   const product = await fetchProduct(resolvedParams.slug);
  
//   if (!product) {
//     notFound();
//   }

//   return <ProductClient product={product} />;
// }

//------------------------------------------------------------

async function fetchProduct(slug: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulating API delay
  return mockProducts.find((product) => product.slug === slug || product._id === slug) || null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = await fetchProduct(resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}


