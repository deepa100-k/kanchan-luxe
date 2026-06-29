import React from "react";
import { Link } from "react-router-dom";

import clothspromo from "../assets/clothspromo.avif";
import jewlerypromo from "../assets/jewlerypromo.jpg";

const PromoSection = () => {
  return (
    <section className="w-full bg-[#f5f0ea] py-4 sm:py-6 px-3 sm:px-4">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

        {/* Left Card */}
        <div className="relative overflow-hidden group h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">

          <img
            src={clothspromo}
            alt="Women's Fashion"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center px-4">

            <h2
              className="
                text-white
                font-serif
                font-medium
                leading-tight
                mb-4 sm:mb-5 md:mb-6
                text-[28px]
                sm:text-[30px]
                md:text-[35px]
                lg:text-[40px]
              "
            >
              Women's Fashion
            </h2>

            <Link to="/clothing">
              <button
                className="
                  bg-[#d9a441]
                  hover:bg-[#c7922f]
                  text-black
                  font-semibold
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300
                  px-5 py-2
                  sm:px-6 sm:py-3
                  md:px-7 md:py-3
                  text-xs
                  sm:text-sm
                "
              >
                SHOP NOW
              </button>
            </Link>

          </div>
        </div>

        {/* Right Card */}
        <div className="relative overflow-hidden group h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">

          <img
            src={jewlerypromo}
            alt="Jewelry Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 flex flex-col items-center justify-center text-center px-4">

            <h2
              className="
                text-white
                font-serif
                font-medium
                leading-tight
                mb-4 sm:mb-5 md:mb-6
                text-[28px]
                sm:text-[30px]
                md:text-[35px]
                lg:text-[40px]
              "
            >
              Jewelry Collection
            </h2>

            <Link to="/jewelry">
              <button
                className="
                  bg-[#d9a441]
                  hover:bg-[#c7922f]
                  text-black
                  font-semibold
                  uppercase
                  tracking-wide
                  transition-all
                  duration-300
                  px-5 py-2
                  sm:px-6 sm:py-3
                  md:px-7 md:py-3
                  text-xs
                  sm:text-sm
                "
              >
                SHOP NOW
              </button>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;