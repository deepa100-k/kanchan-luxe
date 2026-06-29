import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { ringsData } from "../data/ringsData";

const Rings = ({ toggleWishlist, wishlistItems = [] }) => {
  const handleWishlistToggle = (e, ring) => {
    e.preventDefault();

    if (typeof toggleWishlist === "function") {
      toggleWishlist({
        ...ring,
        image:
          ring.images && ring.images[0]
            ? ring.images[0]
            : "https://via.placeholder.com/600x600",
        category: "jewelry",
      });
    }
  };

  return (
    <div className="antialiased font-sans">
      {/* Header */}

<section className="relative h-[80vh] overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600"
    alt="Ring Collection"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
    <p className="tracking-[6px] text-[#d4af37] text-xs font-semibold">
     Luxury Jewelry
    </p>

    <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4 tracking-tight">
      Ring Collection
    </h1>

    <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-200 font-light leading-relaxed">
      Discover handcrafted rings designed to celebrate love, elegance,
      and timeless beauty. Find the perfect piece for every occasion.
    </p>
  </div>
</section>


      <div className="text-center my-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
          Rings Collection
        </h1>

        <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto font-light tracking-wide">
          Exquisite handcrafted rings tailored for your special moments.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ringsData.map((ring) => {
          const isSaved = wishlistItems.some(
            (wishlistItem) => wishlistItem.id === ring.id
          );

          return (
            <div
              key={ring.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Wishlist Button */}
              <button
                type="button"
                onClick={(e) => handleWishlistToggle(e, ring)}
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

              {/* Product Link */}
              <Link to={`/ring/${ring.id}`} className="block">
                {/* Image */}
                <div className="overflow-hidden aspect-square w-full bg-gray-50">
                  <img
                    src={
                      ring.images && ring.images[0]
                        ? ring.images[0]
                        : "https://via.placeholder.com/600x600"
                    }
                    alt={ring.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Product Name */}
                <div className="p-5 text-center">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-800 line-clamp-1 group-hover:text-[#b8860b] transition-colors duration-300">
                    {ring.name}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rings;