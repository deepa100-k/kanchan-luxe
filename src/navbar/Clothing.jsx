import React from "react";
import { Link } from "react-router-dom";
import clothswomen from "../assets/clothswomen.webp";
import clothsmen from "../assets/clothsmen.avif";
import clothsaccessories from "../assets/clothsaccessories.webp";

const Clothing = () => {
  return (
    <div className="bg-[#fcfbfa] min-h-screen antialiased font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
          alt="Fashion"
          className="w-full h-full object-cover scale-101"
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
   <p className="uppercase tracking-[6px] text-[#d4af37] text-xs sm:text-sm font-semibold mb-3">
            Luxury Collection
          </p>
  
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight ">
            Fashion Collection
          </h1>

          <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">
            Discover Premium Clothing & Tailored Essentials For Every Occasion
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Shop By Category
          </h2>
          <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Women Category */}
          <Link to="/women" className="block relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[500px]">
            <div className="w-full h-full bg-gray-50">
              <img
                src={clothswomen}
                alt="Women"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                loading="lazy"
              />
            </div>
            {/* Always visible dynamic black shade for absolute cross-platform touch device visibility */}
            <div className="absolute inset-0 bg-black/30 md:bg-black/25 md:opacity-90 group-hover:bg-black/40 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wide">
                Women
              </h3>
              <button 
                type="button"
                className="bg-white text-black text-sm px-7 py-3 rounded-xl font-medium hover:bg-[#d4af37] hover:text-white md:transform md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
              >
                Shop Now
              </button>
            </div>
          </Link>

          {/* Men Category */}
          <Link to="/men" className="block relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[500px]">
            <div className="w-full h-full bg-gray-50">
              <img
                src={clothsmen}
                alt="Men"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 md:bg-black/25 md:opacity-90 group-hover:bg-black/40 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wide">
                Men
              </h3>
              <button 
                type="button"
                className="bg-white text-black text-sm px-7 py-3 rounded-xl font-medium hover:bg-[#d4af37] hover:text-white md:transform md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
              >
                Shop Now
              </button>
            </div>
          </Link>

          {/* Accessories Category */}
          <Link to="/accessories" className="block relative group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[500px]">
            <div className="w-full h-full bg-gray-50">
              <img
                src={clothsaccessories}
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 md:bg-black/25 md:opacity-90 group-hover:bg-black/40 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wide">
                Accessories
              </h3>
              <button 
                type="button"
                className="bg-white text-black text-sm px-7 py-3 rounded-xl font-medium hover:bg-[#d4af37] hover:text-white md:transform md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
              >
                Shop Now
              </button>
            </div>
          </Link>

        </div>
      </section>

      {/* Fashion Quote */}
      <section className="bg-[#f5f0ea] py-24 text-center px-4 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">
            “Style Is A Way To Say Who You Are Without Having To Speak.”
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-base md:text-lg leading-relaxed">
            Explore the latest trends, premium fabrics and timeless
            designs crafted to elevate your everyday look.
          </p>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden relative shadow-lg h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600"
            alt="Fashion Promo"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
              New Season Arrivals
            </h2>

            <p className="mb-8 text-base md:text-lg text-gray-200 font-light tracking-wide">
              Fresh Styles. Premium Quality Tailoring.
            </p>

            <Link
              to="/new-arrivals"
              className="inline-block bg-white text-black text-sm px-8 py-3.5 rounded-xl font-medium hover:bg-gray-100 active:scale-[0.98] transition-all shadow-md"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clothing;