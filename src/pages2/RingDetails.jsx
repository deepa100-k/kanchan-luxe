import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ringsData } from "../data/ringsData";

const RingDetails = ({ addToCart }) => {
  const { id } = useParams();

  const ring = ringsData.find((item) => item.id === Number(id));

  // States
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("7"); // Default standard ring size
  const [cartSuccess, setCartSuccess] = useState(false);

  // Available luxury sizes available for rings catalog configuration
  const ringSizes = ["5", "6", "7", "8", "9"];

  // Core Fix: Reset options cleanly when user changes routing to another item
  useEffect(() => {
    setSelectedImage(0);
    setQty(1);
    setSelectedSize("7");
    setCartSuccess(false);
  }, [id]);

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (!ring) {
    return (
      <div className="text-center py-20 min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-serif text-gray-800">Product Not Found</h1>
        <Link to="/rings" className="text-[#B8860B] underline font-medium">
          Back to Rings Collection
        </Link>
      </div>
    );
  }

  // हेल्पर फ़ंक्शन: हर थंबनेल इमेज के लिए अलग-अलग सटीक कीमत दिखाने के लिए
  const getThumbnailPrice = (index) => {
    if (ring.variantPrices && ring.variantPrices[index]) {
      return Number(ring.variantPrices[index]);
    }
    // Safeguard conversion if base price comes as a string format from legacy files
    const fallbackBase = Number(String(ring.price).replace(/[^0-9.-]+/g, "")) || 0;
    return fallbackBase + index * 1500;
  };

  // इस समय एक्टिव थंबनेल की कीमत
  const currentActivePrice = getThumbnailPrice(selectedImage);

  const handleAddToCartClick = () => {
    if (addToCart) {
      const activeImg = ring.images?.[selectedImage] || ring.images?.[0] || "";
      const imageName = activeImg ? activeImg.substring(activeImg.lastIndexOf("/") + 1) : "default";
      
      // FIXED: Generates system matching structural tokens for split size tracking inside shopping bag
      const variantUniqueId = `${ring.id}-${selectedSize}-${imageName}`;

      addToCart({
        ...ring,
        id: variantUniqueId, // Overrides pure numeric id with variant key token
        price: currentActivePrice, // कार्ट में वही प्राइस जाएगी जो थंबनेल सिलेक्टेड है
        quantity: qty,
        selectedSize,
        image: activeImg,
        category: "jewelry" // Explicit category specification sync matching App routing structure
      });

      setCartSuccess(true);
      setTimeout(() => setCartSuccess(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 antialiased font-sans">
      
      {/* BACK TO RINGS NAVIGATION LINK */}
      <div className="mb-6 md:mb-8">
        <Link 
          to="/rings" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200 gap-2 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
          Back to Rings
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE: MEDIA GALLERY (FULLY RESPONSIVE) */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Main Display Box Viewport */}
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-50 aspect-square h-auto max-h-[400px] md:max-h-[500px] border border-gray-100">
            {ring.images?.[selectedImage] && (
              <img
                src={ring.images[selectedImage]}
                alt={ring.name}
                className="w-full h-full object-cover sm:hover:scale-105 transition duration-700 ease-out"
              />
            )}
          </div>

          {/* Thumbnail Images Area - Bottom Responsive Slider */}
          {ring.images && ring.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x justify-start">
              {ring.images.map((img, index) => {
                const thumbnailPrice = getThumbnailPrice(index);
                return (
                  <div key={index} className="flex flex-col items-center shrink-0 snap-center">
                    <button
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-xl border-2 transition-all duration-300 p-0.5 ${
                        selectedImage === index
                          ? "border-black scale-95 shadow-sm"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${ring.name} view ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </button>
                    
                    {/* थंबनेल के ठीक नीचे दिखने वाली अलग-अलग कीमत */}
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#B8860B] mt-1">
                      ₹{thumbnailPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT SIDE: SPECIFICATIONS & CHECKOUT */}
        <div className="flex flex-col justify-center w-full">
          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[#B8860B] text-[11px] sm:text-xs font-semibold block mb-1.5 sm:mb-2">
            Luxury Collection
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            {ring.name}
          </h1>

          {/* मुख्य प्राइस डिस्प्ले - यह थंबनेल चेंज होने पर लाइव अपडेट होगी */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-semibold text-[#B8860B] mt-3 sm:mt-4">
            ₹{currentActivePrice.toLocaleString("en-IN")}
          </h2>
          
          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm md:text-base font-light">
            {ring.description || "Indulge in absolute luxury with this carefully crafted masterpiece. Designed to showcase pristine geometry and hand-finished gloss surfaces."}
          </p>

          <hr className="border-gray-100 my-5 sm:my-6" />

          {/* LUXURY RING SIZE SELECTOR */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2.5">
              Select Ring Size (US)
            </h3>
            <div className="flex flex-wrap gap-2">
              {ringSizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 text-xs font-medium rounded-xl border transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white border-black shadow-sm scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY FIELD */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2.5">
              Quantity
            </h3>
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl w-fit border border-gray-200">
              <button
                type="button"
                onClick={decreaseQty}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-base sm:text-lg font-medium text-gray-600 hover:bg-white hover:shadow-sm transition active:scale-95 disabled:opacity-50"
                disabled={qty <= 1}
              >
                −
              </button>
              <span className="text-sm sm:text-base font-semibold min-w-[35px] sm:min-w-[40px] text-center select-none">
                {qty}
              </span>
              <button
                type="button"
                onClick={increaseQty}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-base sm:text-lg font-medium text-gray-600 hover:bg-white hover:shadow-sm transition active:scale-95"
              >
                +
              </button>
            </div>
          </div>

          {/* ACTION CONTEXT BUTTONS BLOCK */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={handleAddToCartClick}
              className="w-full bg-black text-white py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-neutral-800 transition active:scale-[0.99] text-sm md:text-base shadow-sm tracking-wide"
            >
              Add To Cart
            </button>
          </div>

          {/* SUCCESS MESSAGE FEEDBACK BANNER */}
          {cartSuccess && (
            <p className="text-green-600 text-xs font-semibold mt-3 animate-fade-in flex items-center gap-1.5">
              ✓ Ring configurations added successfully to cart collection!
            </p>
          )}

          {/* FEATURES GRID */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 text-center">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">100%</h3>
              <p className="text-gray-400 text-[9px] sm:text-[11px] tracking-wider uppercase mt-1">Certified</p>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">Free</h3>
              <p className="text-gray-400 text-[9px] sm:text-[11px] tracking-wider uppercase mt-1">Shipping</p>
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-gray-900">7 Days</h3>
              <p className="text-gray-400 text-[9px] sm:text-[11px] tracking-wider uppercase mt-1">Return</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RingDetails;