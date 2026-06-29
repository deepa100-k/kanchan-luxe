import React from "react";
import { Link, useParams } from "react-router-dom";
import { trendingProducts } from "../data/trendingProducts.js";
import { slugify } from "../utils/slugify.js";

const TrendingCollectionPage = () => {
  const { category } = useParams();

  // Route slugification logic to filter active variants safely
  const filteredProducts = trendingProducts.filter(
    (item) => item.category && slugify(item.category) === category
  );

  // डॉलर या किसी अन्य अनचाहे सिंबल को हटाकर हमेशा भारतीय रुपया (₹) में दिखाने का हेल्पर फंक्शन
  const formatToRupee = (priceValue) => {
    if (priceValue === undefined || priceValue === null) return "";
    // स्ट्रिंग या नंबर से सिर्फ डिजिट्स और डॉट बाहर निकालता है
    const cleanNumber = Number(String(priceValue).replace(/[^0-9.-]+/g, "")) || 0;
    return `₹${cleanNumber.toLocaleString("en-IN")}`;
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] py-24 px-6 md:px-12 antialiased">
      
      {/* Dynamic Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-[#2a241e] capitalize mb-4">
          {category ? category.replace(/-/g, " ") : ""}
        </h1>
        <p className="text-gray-500 font-light text-sm tracking-widest uppercase">Handcrafted Elegance Tailored For You</p>
        <div className="h-[1px] w-16 bg-[#bfa16f] mx-auto mt-6"></div>
      </div>

      {/* Main Grid Wrapper */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-400 font-light py-20 tracking-wide">
          No items found in this collection.
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/trending-product/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Product Thumbnail Container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* FIXED: Conditional rendering tag validation check */}
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-[#bfa16f] text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-semibold rounded-md shadow-xs">
                    {product.discount}
                  </span>
                )}
              </div>
              
              {/* Product Content Details */}
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl text-[#2a241e] tracking-wide mb-2 group-hover:text-[#bfa16f] transition-colors line-clamp-2">
                    {product.name}
                  </h2>
                </div>
                
                {/* Price Display Box */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm font-light">
                      {formatToRupee(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-[#bfa16f] font-semibold text-lg tracking-wide">
                    {formatToRupee(product.price)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingCollectionPage;