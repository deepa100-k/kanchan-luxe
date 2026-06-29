import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Fashion that Shines with You",
  },
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Timeless Heritage Silhouettes",
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop",
    subtitle: "Handcrafted Luxury Just For You",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Auto-slide trigger handler loop pattern setup
  const startSlider = () => {
    stopSlider(); // Kisi bhi existing active timer ko safely clear karein
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Luxury brands ke text animations ke liye 5 seconds interval optimum hai
  };

  const stopSlider = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider(); // Component unmount hone par Memory leak safe cleanup
  }, []);

  // Indicator dot navigation handler function
  const handleDotClick = (index) => {
    setCurrent(index);
    startSlider(); // Reset automatic countdown timing clock cycle on click
  };

  return (
    <section className="relative w-full h-[65vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden bg-[#0f0e0c]">
      
      {/* Slides Wrapper */}
      {slides.map((slide, index) => {
        const isActive = current === index;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Asset Media Background Layer */}
            <img
              src={slide.image}
              alt={`Kanchan Luxe Fashion Collection ${index + 1}`}
              className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${
                isActive ? "scale-100" : "scale-105"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Premium Multi-gradient Cinema Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

            {/* Content Display Panel */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="px-6 sm:px-12 lg:px-24 max-w-[800px] w-full text-left">
                
                {/* Brand Header Welcome Segment */}
                <div 
                  className={`flex items-center gap-4 mb-2 transition-all duration-700 delay-300 transform ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <p 
                    className="text-[#e0b04f] text-base sm:text-lg italic tracking-widest"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Welcome to
                  </p>
                  <span className="w-16 sm:w-24 h-[1px] bg-[#e0b04f]/60"></span>
                </div>

                {/* Primary Core Logomark Title */}
                <h1
                  className={`text-[#e0b04f] text-[48px] sm:text-[72px] lg:text-[96px] leading-none drop-shadow-xl my-1 select-none transition-all duration-700 delay-500 transform ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ fontFamily: "'Allura', cursive" }}
                >
                  Kanchan Luxe
                </h1>

                {/* Geometric Accent Border Divider */}
                <div 
                  className={`h-[1px] bg-[#e0b04f]/40 my-4 transition-all duration-1000 delay-700 transform origin-left ${
                    isActive ? "w-36 sm:w-56 opacity-100 scale-x-100" : "w-0 opacity-0 scale-x-0"
                  }`}
                ></div>

                {/* Contextual Descriptive Subtitle Text */}
                <p
                  className={`text-gray-100 text-xl sm:text-3xl lg:text-4xl font-light leading-snug tracking-wide transition-all duration-700 delay-[900ms] transform ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {slide.subtitle}
                </p>

                {/* Luxury Interactive Call to Action Element */}
                <div
                  className={`transition-all duration-700 delay-[1100ms] transform ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <button className="mt-8 px-8 py-3 border border-[#e0b04f] text-[#e0b04f] bg-transparent hover:bg-[#e0b04f] hover:text-black transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold rounded-xs active:scale-[0.98]">
                    Explore Collection
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Dynamic Screen Overlay Pagination Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 outline-none ${
              current === index
                ? "bg-[#e0b04f] scale-125 shadow-xs"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Maps to slide banner index item ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;