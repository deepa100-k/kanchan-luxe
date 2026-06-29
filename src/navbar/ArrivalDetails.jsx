import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { arrivals } from "../data/arrivals";

// Professional color palette jinki distinct clothing images map kiye hain
const DESIGN_COLORS = [
  { name: "Charcoal Black", code: "#222222", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop" },
  { name: "Nordic Cream", code: "#E6D7C3", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop" },
  { name: "Crimson Red", code: "#991B1B", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop" },
];

function ArrivalDetails({ addToCart, toggleWishlist, wishlistItems = [] }) {
  const { id } = useParams();

  // Sahi product match karna (id ko Number me convert karke)
  const product = arrivals.find((item) => item.id === Number(id));

  // States
  const [selectedColor, setSelectedColor] = useState({ name: "Original Design", code: "#3D3123", img: "" });
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  // CRITICAL FIX: Jab bhi ID change hogi, toh Main Product ki image reset hogi aur page top par scroll ho jayega.
  useEffect(() => {
    if (product) {
      setSelectedColor({
        name: "Original Design",
        code: "#3D3123",
        img: product.image
      });
      setSelectedSize(""); 
      setQuantity(1); 
      setSizeError(false);
      
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 bg-[#FAF9F6]">
        <h1 className="text-xl font-serif text-[#3D3123] mb-2">Product Not Found</h1>
        <Link to="/clothing" className="text-xs uppercase tracking-widest border-b border-[#3D3123] text-gray-500 pb-1">
          Back to Clothing
        </Link>
      </div>
    );
  }

  // --- SAFE SIMILAR PRODUCTS LOGIC (Fallback Protected) ---
  const similarProducts = arrivals
    .filter((item) => item.category && product.category ? item.category === product.category && item.id !== product.id : item.id !== product.id)
    .slice(0, 4);

  const finalSimilarProducts = similarProducts.length > 0 
    ? similarProducts 
    : arrivals.filter((item) => item.id !== product.id).slice(0, 4);

  const handleCartClick = () => {
    // Force validation for size option selecting before final dynamic checkout
    if (!selectedSize) {
      setSizeError(true);
      return;
    }

    setSizeError(false);
    if (addToCart) {
      addToCart({
        ...product,
        name: product.title, 
        quantity,
        color: selectedColor.name,
        size: selectedSize,
        image: selectedColor.img 
      });
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    if (sizeError) setSizeError(false);
  };

  const isMainProductSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-900 antialiased">
      
      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link
          to="/clothing"
          className="inline-flex items-center text-[10px] tracking-widest uppercase text-gray-400 hover:text-black transition group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
          Back to Clothing
        </Link>
      </div>

      {/* MAIN COMPACT PRODUCT GRID */}
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: MAIN IMAGE */}
        <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm max-w-[420px] mx-auto w-full relative">
          
          {/* MAIN PRODUCT WISHLIST BUTTON */}
          <button
            type="button"
            onClick={() => {
              toggleWishlist && toggleWishlist({
                ...product,
                name: product.title
              });
            }}
            className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-xs rounded-full shadow-md hover:bg-white active:scale-90 transition"
          >
            <Heart
              size={18}
              className={`transition-colors duration-200 ${
                isMainProductSaved 
                  ? "fill-red-500 text-red-500" 
                  : "text-gray-600 hover:text-red-500"
              }`}
            />
          </button>

          <img
            src={selectedColor.img || product.image}
            alt={product.title}
            className="w-full h-[480px] object-cover object-top hover:scale-[1.02] transition-all duration-500 ease-out"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col justify-center text-left pt-2">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#b5945b] mb-2 block">
            New Arrival
          </span>
          
          <h1 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-[#3D3123] mb-2 leading-tight">
            {product.title}
          </h1>

          <p className="text-2xl font-medium text-[#b5945b] mb-4">
            ₹{product.price?.toLocaleString("en-IN")}
          </p>

          <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 max-w-md">
            {product.description}
          </p>

          <hr className="border-gray-200/80 mb-6" />

          {/* COLOR PALETTE */}
          <div className="mb-5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400 block mb-2.5">
              Color: <span className="text-gray-800 font-medium normal-case ml-1">{selectedColor.name}</span>
            </span>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setSelectedColor({ name: "Original Design", code: "#3D3123", img: product.image })}
                style={{ backgroundColor: "#3D3123" }}
                className={`w-6 h-6 rounded-full border shadow-xs transition-all ${
                  selectedColor.img === product.image ? "ring-2 ring-offset-2 ring-black scale-105" : "border-gray-300 hover:scale-105"
                }`}
                title="Original"
              />
              {DESIGN_COLORS.map((color, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color.code }}
                  className={`w-6 h-6 rounded-full border shadow-xs transition-all ${
                    selectedColor.name === color.name && selectedColor.img !== product.image
                      ? "ring-2 ring-offset-2 ring-black scale-105"
                      : "border-gray-300 hover:scale-105"
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* SIZE CHIPS */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2 max-w-xs">
              <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Select Size</span>
              {sizeError && <span className="text-red-500 text-[10px] font-semibold tracking-wide animate-bounce">Please select a size</span>}
            </div>
            
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-11 h-9 text-xs font-medium border rounded-xl transition-all ${
                    selectedSize === size
                      ? "bg-[#3D3123] text-white border-[#3D3123] shadow-sm"
                      : sizeError 
                        ? "bg-white text-red-600 border-red-300 hover:border-red-500"
                        : "bg-white text-gray-600 border-gray-200 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY & ACTIONS */}
          <div className="flex items-center space-x-4 max-w-md w-full">
            <div className="flex items-center border border-gray-200 rounded-xl bg-white text-sm h-12">
              <button type="button" onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))} className="px-4 py-2 text-gray-400 hover:text-black transition font-semibold">-</button>
              <span className="px-1 font-medium w-6 text-center text-xs select-none">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2 text-gray-400 hover:text-black transition font-semibold">+</button>
            </div>

            <button
              type="button"
              onClick={handleCartClick}
              className="flex-1 bg-[#3D3123] text-white text-[11px] font-bold tracking-widest uppercase h-12 rounded-xl hover:bg-[#b5945b] active:scale-[0.99] transition-all duration-300 shadow-xs"
            >
              Add To Cart
            </button>
          </div>

          {success && (
            <p className="text-green-600 text-xs mt-4 font-medium flex items-center animate-fade-in">
              ✓ Added successfully to your bag.
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 my-8">
        <div className="border-t border-gray-200/60"></div>
      </div>

      {/* COMPACT SIMILAR PRODUCTS SECTION */}
      <section className="max-w-5xl mx-auto px-4 py-6 pb-24">
        <div className="text-center mb-8">
          <h2 className="text-xl font-serif text-[#3D3123] tracking-wide">Similar Products</h2>
          <div className="w-10 h-[1px] bg-[#b5945b] mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {finalSimilarProducts.map((item) => {
            const isItemSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === item.id);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* SIMILAR PRODUCT WISHLIST HEART BUTTON */}
                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist && toggleWishlist({
                      ...item,
                      name: item.title
                    });
                  }}
                  className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-xs rounded-full shadow-xs hover:bg-white active:scale-90 transition"
                >
                  <Heart
                    size={14}
                    className={`transition-colors duration-200 ${
                      isItemSaved 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-500 hover:text-red-500"
                    }`}
                  />
                </button>

                <Link to={`/product/${item.id}`} className="block overflow-hidden h-[240px] bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-103 transition duration-500 ease-out"
                    loading="lazy"
                  />
                </Link>

                <div className="p-4 flex-grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-medium text-xs text-[#3D3123] line-clamp-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#b5945b] font-bold text-xs">
                      ₹{item.price?.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <Link
                    to={`/product/${item.id}`}
                    className="mt-4 block w-full text-center bg-gray-50 text-gray-700 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-xl border border-gray-100 hover:bg-[#3D3123] hover:text-white transition duration-200"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default ArrivalDetails;