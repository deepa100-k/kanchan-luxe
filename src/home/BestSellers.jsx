import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { bestSellersData } from "../data/bestsellers";

const BestSellers = ({ toggleWishlist, wishlistItems = [] }) => {

  // प्राइस में से डॉलर या अन्य सिंबल हटाकर भारतीय रुपया (₹) फॉर्मेट में बदलने का हेल्पर फंक्शन
  const formatToRupee = (priceValue) => {
    if (priceValue === undefined || priceValue === null) return "";
    const cleanNumber = Number(String(priceValue).replace(/[^0-9.-]+/g, "")) || 0;
    return `₹${cleanNumber.toLocaleString("en-IN")}`;
  };

  return (
    <div className="bg-[#fcf8f4] py-20 px-6 md:px-12 font-sans antialiased">
      
      {/* Header Section */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
        <span className="h-[1px] w-12 md:w-28 bg-[#bfa16f]/60"></span>
        <h2 className="text-[#3a2a18] text-2xl md:text-3xl font-serif tracking-wider uppercase text-center">
          Best Sellers
        </h2>
        <span className="h-[1px] w-12 md:w-28 bg-[#bfa16f]/60"></span>
      </div>

      {/* Grid Layout - Optimized Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {bestSellersData?.map((product) => {
          const isWishlisted = wishlistItems.some((item) => item.id === product.id);
          
          return (
            <div key={product.id} className="relative flex flex-col gap-4 group">
              
              {/* FIXED: Wishlist Button is now outside <Link> to maintain clean DOM semantic tree */}
              <button
                type="button"
                onClick={() => toggleWishlist && toggleWishlist(product)}
                className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-xs rounded-full p-2.5 shadow-md hover:bg-white active:scale-90 transition-all duration-300"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  size={16}
                  className={`transition-colors duration-300 ${
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400 group-hover:text-red-500"
                  }`}
                />
              </button>

              {/* Card Image Wrapper Link - Changed to aspect-[3/4] for premium product showcase */}
              <Link
                to={`/bestseller/${product.id}`}
                className="relative overflow-hidden aspect-[3/4] bg-gray-50 block rounded-2xl border border-gray-100/40 shadow-xs"
              >
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <span className="text-white text-[11px] tracking-[0.2em] font-medium border border-white/40 px-5 py-3 uppercase bg-black/10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-xs">
                    Explore Collection
                  </span>
                </div>
              </Link>

              {/* Product Typography Info */}
              <div className="flex flex-col gap-1.5 text-left px-1">
                <Link 
                  to={`/bestseller/${product.id}`} 
                  className="group/title inline-block"
                >
                  <h3 className="text-[#1a1a1a] font-serif text-base md:text-lg tracking-wide leading-snug group-hover/title:text-[#bfa16f] transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Price Container (Always forced to Rupees Layout) */}
                <div className="flex items-center gap-2.5 text-sm md:text-base font-semibold tracking-wide">
                  <span className="text-[#bfa16f]">
                    {formatToRupee(product.price)}
                  </span>
                  
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through font-light text-xs md:text-sm">
                      {formatToRupee(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default BestSellers;