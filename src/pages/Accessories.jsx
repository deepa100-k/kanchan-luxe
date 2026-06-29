import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"; 

const accessories = [
  {
    id: 1,
    name: "Luxury Watch",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
  },
  {
    id: 2,
    name: "Classic Sunglasses",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
  },
  {
    id: 4,
    name: "Premium Perfume",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600",
  },
  {
    id: 5,
    name: "Fashion Bracelet",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca5?w=600",
  },
  {
    id: 6,
    name: "Designer Wallet",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
  },
];

const Accessories = ({ addToCart, toggleWishlist, wishlistItems = [] }) => {
  return (
    <div className="bg-[#f8f5f0] min-h-screen antialiased font-sans">

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
            Accessories
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl">
            Complete your look with our premium accessories collection.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {accessories.map((item) => {
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100 relative group"
              >
                {/* --- WISHLIST HEART BUTTON --- */}
                <button
                  type="button"
                  onClick={() => {
                    if (typeof toggleWishlist === "function") {
                      toggleWishlist({
                        ...item,
                        category: "accessories"
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

                {/* Safe Navigation Routing Bound Box */}
                <Link to={`/accessories-product/${item.id}`} className="block flex-grow">
                  {/* Product Image Wrapper */}
                  <div className="overflow-hidden aspect-[3/4] w-full bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 pb-2 text-center">
                    <h3 className="text-lg font-serif font-semibold text-gray-800 line-clamp-1 group-hover:text-[#8B5E3C] transition-colors duration-200">
                      {item.name}
                    </h3>

                    <p className="text-[#8B5E3C] font-bold text-lg mt-1.5">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </Link>

                {/* Independent Add to Cart Execution */}
                <div className="p-5 pt-2">
                  <button 
                    type="button"
                    onClick={() => {
                      if (typeof addToCart === "function") {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                          category: "accessories",
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

      {/* SHOP BY STYLE (CLICKABLE) */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-gray-400 text-xs font-semibold">
              Curated Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-3 text-gray-900">
              Shop By Style
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* WATCHES */}
            <Link
              to="/accessories/watches"
              className="relative group overflow-hidden rounded-3xl block h-[506px]"
            >
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000"
                alt="Watches Category"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 transition duration-300 group-hover:bg-black/50">
                <h3 className="text-white text-3xl md:text-4xl font-serif font-bold">Watches</h3>
                <p className="text-gray-200 mt-2 font-light max-w-sm">
                  Timeless elegance for every occasion.
                </p>
              </div>
            </Link>

            <div className="grid gap-6">

              {/* BAGS */}
              <Link
                to="/accessories/bags"
                className="relative group overflow-hidden rounded-3xl block h-[240px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1000"
                  alt="Bags Category"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-black/40 flex items-end p-6 transition duration-300 group-hover:bg-black/50">
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-bold">
                    Bags
                  </h3>
                </div>
              </Link>

              <div className="grid grid-cols-2 gap-6">

                {/* SUNGLASSES */}
                <Link
                  to="/accessories/sunglasses"
                  className="relative group overflow-hidden rounded-3xl block h-[240px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000"
                    alt="Sunglasses Category"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition duration-300 group-hover:bg-black/50">
                    <h3 className="text-white text-lg md:text-xl font-serif font-bold">
                      Sunglasses
                    </h3>
                  </div>
                </Link>

                {/* PERFUMES */}
                <Link
                  to="/accessories/perfumes"
                  className="relative group overflow-hidden rounded-3xl block h-[240px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1000"
                    alt="Perfumes Category"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition duration-300 group-hover:bg-black/50">
                    <h3 className="text-white text-lg md:text-xl font-serif font-bold">
                      Perfumes
                    </h3>
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;