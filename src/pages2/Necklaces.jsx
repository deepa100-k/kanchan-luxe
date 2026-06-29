import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { necklacesData } from "../data/necklacesData";
import NecklaceCollectionSignatureCollection from "../assets/NecklaceCollectionSignatureCollection.jpg";

const Necklaces = ({ toggleWishlist, wishlistItems = [] }) => {
  const handleWishlistToggle = (e, item) => {
    e.preventDefault();

    if (typeof toggleWishlist === "function") {
      toggleWishlist({
        ...item,
        image:
          item.images && item.images[0]
            ? item.images[0]
            : "https://via.placeholder.com/600x600",
        category: "necklaces",
      });
    }
  };

  return (
    <div className="antialiased font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1600"
          alt="Necklace Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <p className=" tracking-[6px] text-[#d4af37] text-xs font-semibold">
           Luxury Jewelry
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mt-4 tracking-tight">
            Necklace Collection
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-2xl text-gray-200 font-light leading-relaxed">
            Discover handcrafted necklaces designed to elevate your style
            with timeless elegance.
          </p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 px-5 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            Signature Necklaces
          </h2>
          <p className="text-gray-500 mt-3 text-sm tracking-wide">
            Elegant pieces crafted for every special occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {necklacesData.map((item) => {
            const isSaved = wishlistItems.some(
              (wishlistItem) => wishlistItem.id === item.id
            );

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 relative"
              >
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={(e) => handleWishlistToggle(e, item)}
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
                <Link to={`/necklace/${item.id}`} className="block">
                  <div className="overflow-hidden aspect-square w-full bg-gray-50 relative">
                    <img
                      src={
                        item.images && item.images[0]
                          ? item.images[0]
                          : "https://via.placeholder.com/600x600"
                      }
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 text-center bg-white">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-800 line-clamp-1 group-hover:text-[#b8860b] transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Luxury Story Section */}
      <section className="py-24 px-5 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl aspect-[4/3] md:aspect-auto md:h-[500px] bg-gray-100">
            <img
              src={NecklaceCollectionSignatureCollection}
              alt="Signature Collection"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-6">
            <span className="text-[#b8860b] uppercase tracking-[5px] text-xs font-semibold">
              Signature Collection
            </span>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4 leading-tight text-gray-900">
              Beauty Around Your Neck
            </h2>

            <p className="text-gray-600 text-sm md:text-base mt-6 leading-relaxed font-light">
              Every necklace is carefully crafted to enhance your beauty and
              confidence. Designed with premium materials and timeless elegance
              for every unforgettable moment.
            </p>

            <div className="flex gap-8 lg:gap-12 mt-10 border-t border-gray-200/60 pt-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#b8860b]">
                  300+
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                  Designs
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#b8860b]">
                  8K+
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                  Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#b8860b]">
                  100%
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                  Premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Ending Banner */}
      <section className="bg-gradient-to-r from-[#111] to-[#26170f] text-white py-24 text-center px-5">
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
          Elegance Never Goes Out Of Style
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          Discover necklaces that reflect sophistication, luxury and timeless
          beauty.
        </p>
      </section>
    </div>
  );
};

export default Necklaces;