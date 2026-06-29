import React from "react";
import { Link } from "react-router-dom";
import JewelryRings from "../assets/JewelryRings.webp";
import Jewelrynacklace from "../assets/Jewelrynacklace.jpg";

const Jewelry = () => {
  return (
    <div className="bg-[#fcfbfa] min-h-screen antialiased font-sans">

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600"
          alt="Jewelry"
          className="w-full h-full object-cover scale-101"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="uppercase tracking-[6px] text-[#d4af37] text-xs sm:text-sm font-semibold mb-3">
            Luxury Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
            Jewelry Collection
          </h1>

          <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">
            Timeless elegance crafted to celebrate your beauty,
            confidence and unforgettable moments.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10">
            <Link to="/rings">
              <button 
                type="button" 
                className="w-full sm:w-auto bg-[#d4af37] text-black px-8 py-3.5 rounded-full font-semibold hover:bg-[#c19e31] hover:shadow-lg transition-all active:scale-98"
              >
                Shop Rings
              </button>
            </Link>

            <Link to="/necklaces">
              <button 
                type="button" 
                className="w-full sm:w-auto border border-white/80 bg-white/5 backdrop-blur-xs px-8 py-3.5 rounded-full font-medium hover:bg-white hover:text-black transition-all active:scale-98"
              >
                Explore Necklaces
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="text-gray-400 mt-3 text-sm tracking-wide">
            Discover our most loved jewelry collections
          </p>
          <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Rings Category */}
          <Link to="/rings" className="block relative group overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 h-[480px]">
            <img
              src={JewelryRings}
              alt="Rings"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              loading="lazy"
            />
            {/* Overlay Gradient context shifts deeper on hover element layers */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-wide">
                Rings
              </h3>
            </div>
          </Link>

          {/* Necklaces Category */}
          <Link to="/necklaces" className="block relative group overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 h-[480px]">
            <img
              src={Jewelrynacklace}
              alt="Necklaces"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-4xl md:text-5xl font-serif font-bold tracking-wide">
                Necklaces
              </h3>
            </div>
          </Link>

        </div>
      </section>

      {/* Signature Collection */}
      <section className="py-24 px-5 bg-[#f9f7f4] border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[4px] text-gray-400 text-xs font-semibold">
            Signature Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-4 text-gray-900">
            Crafted For Every Special Moment
          </h2>

          <p className="mt-6 text-gray-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether it's an engagement, anniversary, wedding or a
            personal celebration, our handcrafted jewelry is designed
            to make every moment unforgettable.
          </p>

        </div>
      </section>

      {/* Luxury Stats */}
      <section className="py-24 bg-gradient-to-r from-[#111] to-[#2c1a12] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-[#d4af37] text-xs font-semibold">
              Luxury Craftsmanship
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">
              Designed To Shine Forever
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37]">
                15+
              </h3>
              <p className="mt-3 text-sm text-gray-400 tracking-wide font-light">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37]">
                10K+
              </h3>
              <p className="mt-3 text-sm text-gray-400 tracking-wide font-light">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37]">
                500+
              </h3>
              <p className="mt-3 text-sm text-gray-400 tracking-wide font-light">
                Unique Designs
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#d4af37]">
                100%
              </h3>
              <p className="mt-3 text-sm text-gray-400 tracking-wide font-light">
                Premium Quality
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Luxury Quote */}
      <section className="py-24 bg-black text-center text-white px-5">
        <p className="uppercase tracking-[6px] text-[#d4af37] text-xs font-semibold">
          Fine Jewelry
        </p>

        <h2 className="text-3xl md:text-5xl font-serif font-bold mt-5 max-w-3xl mx-auto leading-tight tracking-tight">
          Every Piece Tells A Story Of Elegance
        </h2>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-base font-light leading-relaxed">
          Discover handcrafted jewelry that reflects beauty,
          sophistication and timeless luxury.
        </p>
      </section>

    </div>
  );
};

export default Jewelry;