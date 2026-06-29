import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

import newArrivals1 from "../assets/newarrivalscollection1.jpg";
import newArrivals2 from "../assets/newarrivalscollection2.jpg";
import newArrivals3 from "../assets/newarrivalscollection3.webp";
import newArrivals4 from "../assets/newarrivalscollection4.jpg";
import newArrivals5 from "../assets/newarrivalscollection5.webp";
import newArrivals6 from "../assets/newarrivalscollection6.jpg";
import newArrivals7 from "../assets/newarrivalscollection7.jpg";
import newArrivals8 from "../assets/newarrivalscollection8.jpg";

const arrivalImages = [
  newArrivals1,
  newArrivals2,
  newArrivals3,
  newArrivals4,
  newArrivals5,
  newArrivals6,
  newArrivals7,
  newArrivals8,
];

function NewArrivals() {
  // CRITICAL FIX: Array length exceed hone par layout ya rendering crash na ho, isliye bounds limit kiya gaya hai
  const safeProducts = products ? products.slice(0, arrivalImages.length) : [];

  return (
    <div className="bg-[#FAF7F2] py-20 px-6 md:px-12 font-serif antialiased">
      <div className="max-w-7xl mx-auto">

        {/* Section Title Grid Line Arrangement */}
        <div className="flex items-center justify-center space-x-6 mb-16">
          <div className="h-[1px] w-12 md:w-24 bg-[#B09E80]/60"></div>
          <h2 className="text-2xl md:text-3xl text-[#3D3123] font-normal tracking-wider uppercase text-center">
            New Arrivals
          </h2>
          <div className="h-[1px] w-12 md:w-24 bg-[#B09E80]/60"></div>
        </div>

        {/* Products Premium Grid Wrap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {safeProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-[#FAF7F2] rounded-2xl overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Thumbnail Container */}
              <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden rounded-xl border border-gray-100/50 shadow-xs">
                <img
                  src={arrivalImages[index] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Soft Hover Contrast Action Filter Layer Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-[#1A1A1A]/95 hover:bg-[#3D3123] text-white text-[11px] tracking-[0.2em] uppercase font-sans font-semibold py-3.5 px-6 border border-[#B09E80]/30 shadow-2xl scale-95 group-hover:scale-100 transition-all duration-300 rounded-xs"
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>

              {/* Product Info Block - FIXED: Pure box layout clickable framework for improved UX */}
              <Link 
                to={`/product/${product.id}`} 
                className="pt-4 pb-2 px-1 text-left block hover:opacity-80 transition-opacity"
              >
                <h3 className="text-[#3D3123] font-normal text-base md:text-lg mb-1 tracking-wide line-clamp-1 group-hover:text-[#B09E80] transition-colors">
                  {product.name}
                </h3>
                <span className="text-[10px] font-sans font-bold text-[#B09E80] uppercase tracking-widest block mt-0.5">
                  Exclusive Design
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default NewArrivals;