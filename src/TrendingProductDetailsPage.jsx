import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { trendingProducts } from "./data/trendingProducts.js";

const TrendingProductDetailsPage = ({ addToCart }) => {
  const { id } = useParams();
  
  // Find current product from array
  const product = trendingProducts.find((p) => p.id === parseInt(id));

  // State management for multiple images, video gallery, and local quantity
  const [activeMedia, setActiveMedia] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Fix: Sync local states accurately when routing/navigating between different products
  useEffect(() => {
    if (product) {
      setActiveMedia({ type: 'image', url: product.images?.[0] || "" });
      setSelectedImageIndex(0);
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf8f5]">
        <p className="text-gray-600 font-serif text-xl mb-4">Product not found</p>
        <Link to="/" className="text-[#bfa16f] underline text-sm tracking-wider">Return to Home</Link>
      </div>
    );
  }

  // Handle Add To Cart action safely
  const handleAddToCartClick = () => {
    if (!addToCart || !product) return;
  
    addToCart({
      ...product,
      // FIXED: Agar activeMedia ek image hai, toh wahi select hogi warna falls back to first image
      image: activeMedia?.type === 'image' ? activeMedia.url : (product.images?.[0] || ""),
      quantity: quantity,
    });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] py-20 px-4 md:px-12 flex items-center antialiased">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center w-full">
        
        {/* LEFT COLUMN: MULTI-ANGLE MEDIA BOX */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 h-auto md:h-[520px] max-h-[520px]">
          
          {/* Thumbnails Sidebar (Front, Back, Side Angles) */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20 flex-shrink-0 pr-1 style-scrollbar max-h-[120px] md:max-h-full">
            {product.images?.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveMedia({ type: 'image', url: imgUrl });
                  setSelectedImageIndex(idx);
                }}
                className={`aspect-[3/4] w-16 md:w-full overflow-hidden border rounded-sm bg-white transition-all flex-shrink-0 ${
                  activeMedia?.type === 'image' && selectedImageIndex === idx 
                    ? 'border-[#bfa16f] ring-1 ring-[#bfa16f]' 
                    : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`angle view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}

            {/* Premium Video Selector Box */}
            {product.video && (
              <button
                type="button"
                onClick={() => setActiveMedia({ type: 'video', url: product.video })}
                className={`aspect-[3/4] w-16 md:w-full overflow-hidden border rounded-sm bg-black relative flex items-center justify-center transition-all flex-shrink-0 ${
                  activeMedia?.type === 'video' ? 'border-[#bfa16f] ring-1 ring-[#bfa16f]' : 'border-gray-200 opacity-80'
                }`}
              >
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-0.5">
                  <span className="text-white text-sm">▶</span>
                  <span className="text-white text-[8px] tracking-wider uppercase font-medium">Video</span>
                </div>
              </button>
            )}
          </div>

          {/* Main Display Canvas Display Screen */}
          <div className="w-full bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm h-[400px] md:h-full relative flex items-center justify-center">
            {activeMedia?.type === 'video' ? (
              <video 
                src={activeMedia.url} 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
              />
            ) : (
              activeMedia?.url && (
                <img 
                  src={activeMedia.url} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-all duration-300"
                />
              )
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: BRAND PRODUCT DETAILS INFO */}
        <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-gray-100 rounded-sm shadow-sm flex flex-col justify-center h-auto md:min-h-[520px]">
          <span className="text-[#bfa16f] tracking-[0.2em] text-xs uppercase font-medium block mb-2">
            {product.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-serif text-[#2a241e] tracking-wide mb-3 leading-tight">
            {product.name}
          </h1>

          {/* Price Layout - Secure Indian Rupee Format */}
          <div className="flex items-baseline gap-4 mb-4 pb-4 border-b border-gray-100">
            <span className="text-xl font-serif text-[#bfa16f]">₹{product.price?.toLocaleString("en-IN")}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-xs">₹{product.originalPrice?.toLocaleString("en-IN")}</span>
            )}
            {product.discount && (
              <span className="text-emerald-600 font-medium text-[10px] tracking-wider uppercase bg-emerald-50 px-2 py-0.5 rounded">
                {product.discount}
              </span>
            )}
          </div>

          {/* Text Description */}
          <p className="text-gray-600 font-light leading-relaxed mb-6 text-xs md:text-sm">
            {product.description}
          </p>

          {/* Premium Bullet Highlights */}
          {product.details && (
            <div className="mb-6">
              <h3 className="text-[10px] uppercase tracking-widest font-semibold text-gray-900 mb-2">Product Highlights</h3>
              <ul className="space-y-1.5">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-600 font-light gap-2">
                    <span className="text-[#bfa16f]">✦</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity & Actions Box */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest font-medium text-gray-500">Quantity:</span>
              <div className="flex items-center border border-gray-200 bg-gray-50 rounded-sm">
                <button 
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1.5 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-600"
                >
                  −
                </button>
                <span className="px-4 text-xs font-medium text-gray-800 bg-white h-full py-1.5 min-w-[32px] text-center flex items-center justify-center select-none">
                  {quantity}
                </span>
                <button 
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-1.5 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button 
                type="button"
                onClick={handleAddToCartClick}
                className="w-full bg-[#1c1a17] hover:bg-[#2d2924] text-white text-xs uppercase tracking-widest py-4 px-4 transition-colors duration-300 shadow-md rounded-sm font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrendingProductDetailsPage;