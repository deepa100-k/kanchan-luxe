import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"; 
import womencollectiondress from "../assets/womencollectiondress.webp";
import womencollectiontops from "../assets/womencollectiontops.jpg";
import womencollectionAccessories from "../assets/womencollectionAccessories.webp";
import womenElegantSummerDress from "../assets/womenElegantSummerDress.webp";
import womenStylishWomensTop from "../assets/womenStylishWomen'sTop.jpg";
import womenLuxuryHandbag from "../assets/womenLuxuryHandbag.webp";
import womenPremiumFashionSet from "../assets/womenPremiumFashionSet.jpg";

const Women = ({ addToCart, toggleWishlist, wishlistItems = [] }) => {
  const categories = [
    {
      id: 1,
      title: "Dresses",
      image: womencollectiondress,
    },
    {
      id: 2,
      title: "Tops",
      image: womencollectiontops,
    },
    {
      id: 3,
      title: "Accessories",
      image: womencollectionAccessories,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: 699,
      image: womenElegantSummerDress,
    },
    {
      id: 2,
      name: "Stylish Women's Top",
      price: 399,
      image: womenStylishWomensTop,
    },
    {
      id: 3,
      name: "Luxury Handbag",
      price: 1599,
      image: womenLuxuryHandbag,
    },
    {
      id: 4,
      name: "Premium Fashion Set",
      price: 999,
      image: womenPremiumFashionSet,
    },
  ];

  return (
    <div className="bg-[#faf7f3] min-h-screen antialiased font-sans">
      
      {/* Hero Section */}
      <section
        className="relative h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
              Women's Collection
            </h1>
            <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">
              Discover timeless fashion crafted for modern women
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-gray-900">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={`/${item.title.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block h-[350px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-bold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-gray-900">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 relative group"
              >
                {/* --- WISHLIST HEART BUTTON (Safely Separated) --- */}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof toggleWishlist === "function") {
                      toggleWishlist({
                        ...product,
                        category: "women"
                      });
                    }
                  }}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white active:scale-90 transition"
                >
                  <Heart
                    size={18}
                    className={`transition-colors duration-200 ${
                      isSaved 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>

                {/* Navigation triggers only on visual content */}
                <Link to={`/women-product/${product.id}`} className="block flex-grow">
                  {/* Product Image */}
                  <div className="overflow-hidden aspect-[3/4] w-full bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-103 transition duration-500"
                    />
                  </div>

                  {/* Product Info Description */}
                  <div className="p-5 pb-2 text-center">
                    <h3 className="font-semibold text-base text-gray-800 line-clamp-1 group-hover:text-[#a47148] transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-[#a47148] font-bold text-lg mt-1.5">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </p>
                  </div>
                </Link>

                {/* Actions Block Area Inside Card Canvas Container */}
                <div className="p-5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof addToCart === "function") {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: Number(product.price), 
                          image: product.image,
                          category: "women",
                          quantity: 1
                        });
                      }
                    }}
                    className="w-full bg-black text-white py-3 rounded-xl hover:bg-[#a47148] transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
                  >
                    <ShoppingCart size={15} />
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Women;