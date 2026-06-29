import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"; 

const menProducts = [
  {
    id: 1,
    name: "Classic Black Jacket",
    price: 2999,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  },
  {
    id: 2,
    name: "Premium White Shirt",
    price: 1499,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
  },
  {
    id: 3,
    name: "Modern Casual Outfit",
    price: 2199,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    id: 4,
    name: "Luxury Brown Coat",
    price: 3499,
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
  },
  {
    id: 5,
    name: "Stylish Denim Jacket",
    price: 2799,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600",
  },
  {
    id: 6,
    name: "Elegant Formal Wear",
    price: 4299,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
  },
];

const Men = ({ addToCart, toggleWishlist, wishlistItems = [] }) => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen antialiased font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight">
            Men Collection
          </h1>
          <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">
            Discover premium fashion designed for modern gentlemen.
          </p>
        </div>
      </section>

      {/* Heading */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-500 mt-3 text-sm tracking-wide">
          Elevate your style with our latest collection
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menProducts.map((product) => {
            // Check karein ki product wishlist array mein saved hai ya nahi
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 relative group"
              >
                {/* --- WISHLIST HEART BUTTON --- */}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof toggleWishlist === "function") {
                      toggleWishlist({
                        ...product,
                        category: "mens" // Changed to 'mens' plural for global system synchronization
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

                {/* Navigation details triggers bounded tightly on product graphics/prose elements */}
                <Link to={`/men-product/${product.id}`} className="block flex-grow">
                  {/* Product Image Wrapper */}
                  <div className="overflow-hidden aspect-[3/4] w-full bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Details info wrapper */}
                  <div className="p-5 pb-2 text-center">
                    <h3 className="text-lg font-serif font-semibold text-gray-800 line-clamp-1 group-hover:text-[#8B5E3C] transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-[#8B5E3C] font-bold text-lg mt-1.5">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </Link>

                {/* Action CTA Block Wrapper outside the dynamic link router context */}
                <div className="p-5 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof addToCart === "function") {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: "mens", // Plural standard matching
                          quantity: 1
                        });
                      }
                    }}
                    className="w-full bg-black text-white py-3.5 rounded-xl hover:bg-[#8B5E3C] transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
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

export default Men;