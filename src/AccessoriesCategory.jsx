import React from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react"; 

// FIXED: String prices formatted to clean Number data type values
const data = {
  watches: [
    {
      id: 1,
      name: "Luxury Watch",
      price: 3999,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
    },
  ],
  bags: [
    {
      id: 2,
      name: "Leather Bag",
      price: 2999,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    },
  ],
  sunglasses: [
    {
      id: 3,
      name: "Classic Sunglasses",
      price: 1499,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    },
  ],
  perfumes: [
    {
      id: 4,
      name: "Premium Perfume",
      price: 2499,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
    },
  ],
};

function AccessoriesCategory({ addToCart, toggleWishlist, wishlistItems = [] }) {
  const { category } = useParams();
  const products = data[category] || [];

  // क्लिक होने पर पैरेंट के फंक्शन को सेफली कॉल करने के लिए हेल्पर फंक्शन
  const handleAddToCart = (item) => {
    if (typeof addToCart === "function") {
      addToCart({
        ...item,
        category: category // Universal sync ke liye explicit category binding
      });
    } else {
      console.warn("addToCart function parent component se pass nahi hua hai!");
    }
  };

  // Wishlist click ko safely check karne ke liye helper function
  const handleWishlistToggle = (item) => {
    if (typeof toggleWishlist === "function") {
      toggleWishlist({
        ...item,
        category: category
      });
    } else {
      console.warn("toggleWishlist function parent component se pass nahi hua hai!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 font-sans antialiased">

      <h1 className="text-4xl font-bold text-center mb-10 capitalize font-serif text-gray-900">
        {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => {
          // Check karein ki current item wishlist state array mein exist karta hai ya nahi
          const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between relative group border border-gray-100 transition-all duration-300"
            >
              
              {/* --- WISHLIST HEART BUTTON --- */}
              <button
                type="button"
                onClick={() => handleWishlistToggle(item)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white active:scale-90 transition"
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

              <div>
                <div className="overflow-hidden h-72 bg-gray-50">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    alt={item.name}
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </h3>

                  {/* FIXED: Formatted dynamic layout presentation for Indian Rupee */}
                  <p className="text-[#8B5E3C] font-bold mt-1 text-xl">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* --- बटन को नीचे फिक्स रखने के लिए और onClick ट्रिगर करने के लिए --- */}
              <div className="p-5 pt-0">
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-black text-white py-3.5 rounded-xl hover:bg-[#8B5E3C] transition-colors duration-300 font-medium text-sm tracking-wide shadow-sm"
                >
                  Add To Cart
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AccessoriesCategory;