import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils/slugify";

import TrendingCollection1 from "../assets/TrendingCollection1.jpg";
import TrendingCollection2 from "../assets/TrendingCollection2.jpg";
import TrendingCollection3 from "../assets/TrendingCollection3.webp";

const collections = [
  {
    id: 1,
    img: TrendingCollection1,
    title: "Wedding Wear",
    subtitle: "Luxury Bridal Masterpieces",
  },
  {
    id: 2,
    img: TrendingCollection2,
    title: "Jewelry Luxe",
    subtitle: "Premium Diamond Collections",
  },
  {
    id: 3,
    img: TrendingCollection3,
    title: "Festive Luxury",
    subtitle: "Elite Heritage Silhouettes",
  },
];

const TrendingCollection = () => {
  return (
    <section className="bg-[#0f0e0c] py-24 px-6 md:px-12 antialiased">
      
      {/* Premium Header Alignment */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
        <span className="h-[1px] w-12 md:w-28 bg-[#bfa16f]/60"></span>
        <h2 className="text-[#bfa16f] text-2xl md:text-3xl font-serif tracking-wide text-center uppercase">
          Trending Collection
        </h2>
        <span className="h-[1px] w-12 md:w-28 bg-[#bfa16f]/60"></span>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((item) => (
          <Link
            key={item.id}
            to={`/collection/${slugify(item.title)}`}
            className="relative h-[420px] md:h-[500px] overflow-hidden rounded-xl group block shadow-2xl bg-[#171614] outline-none focus-within:ring-1 focus-within:ring-[#bfa16f] transition-all duration-300"
          >
            {/* Soft Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/40 transition-all duration-500 z-10" />

            {/* Thumbnail Asset */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />

            {/* Typography Content Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 text-white">
              <span className="text-[#bfa16f] text-[10px] uppercase tracking-[0.25em] mb-2 font-medium">
                {item.subtitle}
              </span>

              <h3 className="text-2xl font-serif tracking-wide mb-4 text-gray-100">
                {item.title}
              </h3>

              <div className="w-fit border-b border-white/20 pb-1 text-[11px] tracking-[0.18em] uppercase text-gray-300 group-hover:border-[#bfa16f] group-hover:text-[#bfa16f] transition-all duration-300 font-medium">
                Explore Collection
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingCollection;