import React, { useState, useEffect } from 'react';

const TrendingCustomerReviews = () => {
  const reviews = [
    { id: 1, text: 'Amazing luxury attire and extraordinarily fast delivery.', name: 'Neha S.', stars: 5 },
    { id: 2, text: 'Premium craftsmanship, elegant collection. Exceeded expectations.', name: 'Aanya K.', stars: 5 },
    { id: 3, text: 'Exquisite designs paired with marvelous custom services.', name: 'Sneha M.', stars: 5 },
    { id: 4, text: 'Beautiful rich fabrics and unparalleled pristine fitting.', name: 'Riya P.', stars: 5 },
    { id: 5, text: 'Deeply satisfied with the royal high-end luxury quality.', name: 'Kriti R.', stars: 5 },
  ];

  // Dynamic window width hook state logic fallback to handle hydration safely
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Screen size dynamically update karne aur handle karne ke liye resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FIXED: Dynamic calculation to prevent extra blank dots/white spaces on slide end
  const visibleSlides = isDesktop ? 3 : 1;
  const totalDots = Math.max(1, reviews.length - visibleSlides + 1);
  const maxIndex = reviews.length - visibleSlides;

  // Smooth Auto Slider Engine
  useEffect(() => {
    if (reviews.length <= visibleSlides) return; // Slider stop checks if items are less than view capacity

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isDesktop, reviews.length, maxIndex, visibleSlides]);

  return (
    <div className="bg-[#fcfaf7] py-24 px-6 md:px-12 overflow-hidden border-t border-gray-100 antialiased">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-[#bfa16f] tracking-[0.2em] text-xs uppercase block mb-3">Testimonials</span>
        <h2 className="text-[#2a241e] text-3xl md:text-4xl font-serif tracking-wide">
          What Our Patrons Say
        </h2>
        <div className="h-[1px] w-16 bg-[#bfa16f] mx-auto mt-5"></div>
      </div>

      {/* Slider Core Container */}
      <div className="max-w-7xl mx-auto overflow-hidden relative">
        <div 
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="w-full md:w-1/3 flex-shrink-0 px-4"
            >
              {/* Premium Card Structure */}
              <div className="bg-white p-10 border border-gray-100 flex flex-col items-center justify-center text-center h-[260px] transition-all duration-300 hover:shadow-lg rounded-sm">
                
                {/* Gold Stars */}
                <div className="flex gap-1 text-[#bfa16f] text-sm mb-5">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Review Narrative */}
                <p className="text-gray-600 text-sm md:text-base font-light font-serif italic mb-6 leading-relaxed line-clamp-3">
                  "{review.text}"
                </p>

                {/* Author Identity */}
                <div className="text-gray-900 tracking-widest uppercase font-medium text-[11px] flex items-center gap-2 mt-auto">
                  <span className="text-gray-300">—</span> {review.name}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Control Indicators */}
      {reviews.length > visibleSlides && (
        <div className="flex justify-center gap-2.5 mt-10">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                currentIndex === index ? 'w-8 bg-[#bfa16f]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default TrendingCustomerReviews;