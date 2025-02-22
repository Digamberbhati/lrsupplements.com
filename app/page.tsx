"use client"; 
import Image from "next/image";
import Link from "next/link"; 

const banners = [
  { id: 1, image: "/images/banner1.jpg" },
  { id: 2, image: "/images/banner1.jpg" },
  { id: 3, image: "/images/banner1.jpg" },
];

const products = [
  {
    id: 1,
    name: "Nutrabay Gold 100% Whey Protein Concentrate",
    price: "₹1,229",
    originalPrice: "₹1,849",
    image: "/images/protein1.jpg",
    discount: "37% OFF",
  },
  {
    id: 2,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein2.jpg",
    discount: "34% OFF",
  },
  {
    id: 3,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein3.jpg",
    discount: "34% OFF",
  },
  {
    id: 4,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein4.jpg",
    discount: "34% OFF",
  },
  {
    id: 5,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein5.jpg",
    discount: "34% OFF",
  },
  {
    id: 6,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein6.jpg",
    discount: "34% OFF",
  },
  {
    id: 7,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein7.jpg",
    discount: "34% OFF",
  },
  {
    id: 8,
    name: "Nutrabay Pure Whey Protein Isolate",
    price: "₹1,595",
    originalPrice: "₹2,399",
    image: "/images/protein8.jpg",
    discount: "34% OFF",
  },
];

const Home = () => {
  return (
    <main>
      {/* HERO_SECTION */}
      <section className="flex items-center justify-center bg-white min-h-[50vh] px-4 sm:px-6 lg:px-16 mt-1 p-5">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 border rounded-3xl">
          <div className="md:w-2/5 text-center md:text-left max-w-lg px-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#333333] leading-tight">
              Fuel Your Body, Build Your Strength
            </h1>
            <p className="text-sm sm:text-base italic mt-4 text-[#444444]">
              Powerful protein powders and supplements to help you achieve peak performance and muscle growth.
            </p>
            <div className="mt-6 py-5">
              <Link href="/products">
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-800 transition font-bold">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-3/5 flex items-center justify-center">
            <Image
              src="/images/protein2.jpg"
              alt="Protein Powder"
              width={500} 
              height={500} 
              className="w-full max-w-md md:max-w-2xl h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Bestseller Product Section */}
      <section className="w-full py-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Best Product</h2>
        
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide ">
          {products.map((product) => (
            <div key={product.id} className="w-60 bg-white rounded-lg shadow-md p-4 flex-shrink-0">
              <div className="bg-yellow-700 text-white text-xs font-bold px-2 py-1 rounded-md inline-block mb-2">
                Upto {product.discount}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                width={200} 
                height={150} 
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-md font-bold text-gray-900">
                {product.price} <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full py-8 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {banners.map((banner) => (
            <div key={banner.id} className="w-full h-64  overflow-hidden py-5">
              <Image
                src={banner.image}
                alt="Banner"
                width={500}
                height={300} 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;