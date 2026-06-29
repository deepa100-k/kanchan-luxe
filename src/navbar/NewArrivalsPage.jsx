import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"; 
import { arrivals } from "../data/arrivals";

const NewArrivalsPage = ({ addToCart, toggleWishlist, wishlistItems = [] }) => {
  return (
    <div className="bg-[#fcfbfa] min-h-screen antialiased font-sans">
      {/* Hero Section */}
      <section className="relative h-[65vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600"
          alt="New Arrivals"
          className="w-full h-full object-cover scale-101"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight uppercase">
            New Arrivals
          </h1>
          <p className="mt-4 text-base md:text-lg font-light text-gray-200 tracking-wide max-w-md">
            Discover The Latest Trends & Masterpieces
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Latest Collection
          </h2>
          <div className="w-12 h-[2px] bg-[#5b2c1d] mx-auto mt-4"></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {arrivals.map((item) => {
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

            // Price cleaner helper to eliminate strings during math executions inside Cart Page
            const cleanNumericPrice = typeof item.price === "string" 
              ? Number(item.price.replace(/[^0-9]/g, "")) 
              : item.price;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* --- WISHLIST HEART BUTTON --- */}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof toggleWishlist === "function") {
                      toggleWishlist({
                        ...item,
                        name: item.title,
                        price: cleanNumericPrice,
                        category: item.category || "new-arrivals"
                      });
                    }
                  }}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white active:scale-90 transition"
                >
                  <Heart
                    size={16}
                    className={`transition-colors duration-200 ${
                      isSaved 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>

                {/* Safe Bound Redirection Context */}
                <Link to={`/product/${item.id}`} className="block flex-grow">
                  {/* Product Image Link */}
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Info Meta Block Wrapper */}
                  <div className="p-4 pb-2 text-center">
                    <h3 className="font-serif font-semibold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-[#5b2c1d] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[#5b2c1d] font-bold mt-1 text-sm sm:text-base">
                      ₹{cleanNumericPrice.toLocaleString("en-IN")}
                    </p>
                  </div>
                </Link>

                {/* Independent CTA Action Trigger */}
                <div className="p-4 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof addToCart === "function") {
                        addToCart({
                          ...item,
                          id: item.id,
                          name: item.title,
                          price: cleanNumericPrice,
                          category: item.category || "new-arrivals",
                          quantity: 1
                        });
                      }
                    }}
                    className="w-full bg-[#5b2c1d] text-white py-2.5 rounded-xl hover:bg-[#452015] active:scale-[0.98] transition-all text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingCart size={14} />
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

export default NewArrivalsPage;