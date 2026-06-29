import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { necklacesData } from "../data/necklacesData";

const NecklaceDetails = ({ addToCart }) => {
  const { id } = useParams();

  const necklace = necklacesData.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [cartSuccess, setCartSuccess] = useState(false);

  // Fix: Reset local states when navigating to a different product page
  useEffect(() => {
    setSelectedImage(0);
    setQty(1);
    setCartSuccess(false);
  }, [id]);

  if (!necklace) {
    return (
      <div className="text-center py-20 min-h-[50vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-serif text-gray-800">Product Not Found</h1>
        <Link to="/necklaces" className="text-[#B8860B] underline font-medium">
          Back to Necklaces Collection
        </Link>
      </div>
    );
  }

  // हेल्पर फ़ंक्शन: हर थंबनेल इमेज के लिए अलग-अलग सटीक कीमत दिखाने के लिए
  const getThumbnailPrice = (index) => {
    if (necklace.variantPrices && necklace.variantPrices[index]) {
      return Number(necklace.variantPrices[index]);
    }
    // Safeguard pricing numeric parsing conversion
    const fallbackBase = Number(String(necklace.price).replace(/[^0-9.-]+/g, "")) || 0;
    return fallbackBase + index * 2500;
  };

  // इस समय एक्टिव थंबनेल की लाइव कीमत
  const currentActivePrice = getThumbnailPrice(selectedImage);
  const currentMainImage = necklace.images?.[selectedImage] || necklace.images?.[0] || "";

  const handleAddToCartClick = () => {
    if (addToCart) {
      // Extract exact filename to use as a structural token differentiator
      const imageName = currentMainImage ? currentMainImage.substring(currentMainImage.lastIndexOf("/") + 1) : "default";
      
      // FIXED: System configuration fallback token tracking for item entry differentiation
      const variantUniqueId = `${necklace.id}-${imageName}`;

      addToCart({
        ...necklace,
        id: variantUniqueId, // Overrides static numeric id with unique variant string key
        price: currentActivePrice, // कार्ट में वही प्राइस जाएगी जो थंबनेल सिलेक्टेड है
        quantity: qty,
        image: currentMainImage,
        category: "necklaces", // FIXED: Changed 'necklace' to plural 'necklaces' to avoid image routing crash
      });

      setCartSuccess(true);
      setTimeout(() => setCartSuccess(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-12 antialiased font-sans">
      
      {/* BACK TO NECKLACES NAVIGATION LINK */}
      <div className="mb-6 md:mb-8">
        <Link 
          to="/necklaces" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200 gap-2 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
          Back to Necklaces
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        
        {/* LEFT SIDE: Media Gallery (Fully Responsive) */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Main Image Viewport */}
          <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-50 aspect-square h-auto max-h-[400px] md:max-h-[500px] border border-gray-100">
            {currentMainImage && (
              <img
                src={currentMainImage}
                alt={necklace.name}
                className="w-full h-full object-cover sm:hover:scale-105 transition duration-700 ease-out"
              />
            )}
          </div>

          {/* Thumbnail Images Area - Bottom Responsive Slider */}
          {necklace.images && necklace.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x justify-start">
              {necklace.images.map((img, index) => {
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
                        alt={`${necklace.name} view ${index + 1}`}
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

        {/* RIGHT SIDE: Product Info & Actions */}
        <div className="flex flex-col justify-center w-full">
          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[#B8860B] text-[11px] sm:text-xs font-semibold block mb-1.5 sm:mb-2">
            Luxury Collection
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            {necklace.name}
          </h1>

          {/* मुख्य प्राइस डिस्प्ले - यह थंबनेल चेंज होने पर लाइव अपडेट होगी */}
          <h2 className="text-xl sm:text-2xl md:text-4xl font-sans font-semibold text-[#B8860B] mt-3 sm:mt-4">
            ₹{currentActivePrice.toLocaleString("en-IN")}
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm md:text-base font-light">
            {necklace.description || "Crafted to trace fine geometric patterns around the neck contours. This signature piece offers fluid drape configurations and mirror finish surfaces."}
          </p>

          <hr className="border-gray-100 my-5 sm:my-6" />

          {/* Quantity Selector */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-gray-400 mb-2.5">
              Quantity
            </h3>
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl w-fit border border-gray-200">
              <button
                type="button"
                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
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
                onClick={() => setQty((prev) => prev + 1)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-base sm:text-lg font-medium text-gray-600 hover:bg-white hover:shadow-sm transition active:scale-95"
              >
                +
              </button>
            </div>
          </div>

          {/* Checkout Buttons Block */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={handleAddToCartClick}
              className="w-full bg-black text-white py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-neutral-800 transition active:scale-[0.99] text-sm md:text-base shadow-sm tracking-wide"
            >
              Add To Cart ({qty})
            </button>
          </div>

          {/* Success Notification Feedback */}
          {cartSuccess && (
            <p className="text-green-600 text-xs font-semibold mt-3 animate-fade-in flex items-center gap-1.5">
              ✓ {necklace.name} added successfully to cart!
            </p>
          )}

          {/* Trust Badges */}
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

export default NecklaceDetails;