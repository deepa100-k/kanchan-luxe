import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart } from "lucide-react"; // Heart icon import kiya gaya hai

const products = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    price: 2499, // Updated to typical Rupee values for realism
    description: "Beautiful summer dress for women. Perfect for parties and casual outings. Crafted from premium breathable fabric.",
    variants: [
      { colorName: "Pinkish", colorCode: "#E5C1CD", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop" },
      { colorName: "Elegant Black", colorCode: "#222222", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop" },
      { colorName: "Pure White", colorCode: "#FFFFFF", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop" }
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Stylish Women's Top",
    price: 1499,
    description: "Premium stylish top with modern design and comfortable fabric. A versatile piece for your everyday wardrobe.",
    variants: [
      { colorName: "Sage Green", colorCode: "#A3B19B", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop" },
      { colorName: "Midnight Black", colorCode: "#222222", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop" }
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Luxury Handbag",
    price: 3999,
    description: "Luxury handbag collection made with premium quality materials. Features elegant gold-toned hardware.",
    variants: [
      { colorName: "Tan Brown", colorCode: "#8B5A2B", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop" },
      { colorName: "Classic Black", colorCode: "#000000", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&auto=format&fit=crop" }
    ],
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "Premium Fashion Set",
    price: 4599,
    description: "Premium fashion set designed for elegant and modern women. Includes coordinated top and trousers.",
    variants: [
      { colorName: "Beige", colorCode: "#E6D7C3", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop" },
      { colorName: "Dark Charcoal", colorCode: "#111111", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop" }
    ],
    sizes: ["S", "M", "L"],
  },
];

function WomenProductDetails({ addToCart, toggleWishlist, wishlistItems = [] }) {
  const { id } = useParams();

  // States
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <h1 className="text-2xl font-serif text-gray-900 mb-2">Product Not Found</h1>
        <Link to="/women" className="border-b border-black text-xs uppercase tracking-widest text-gray-600 transition">
          Return to Collection
        </Link>
      </div>
    );
  }

  const currentVariant = product.variants[selectedColorIndex];
  const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      setErrorMessage("Please select a size first.");
      setSuccessMessage("");
      return;
    }
    
    setErrorMessage("");
    
    if (addToCart) {
      addToCart({
        ...product,
        selectedColor: currentVariant.colorName,
        selectedSize: selectedSize || "One Size",
        quantity: quantity,
        price: product.price,
        image: currentVariant.img
      });
    }

    setSuccessMessage(`Added ${quantity} item(s) to your cart!`);

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-gray-900 antialiased">
      
      {/* BREADCRUMB */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <Link
          to="/women"
          className="inline-flex items-center text-[11px] tracking-widest uppercase text-gray-400 hover:text-black transition group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">←</span>
          Back to Women Collection
        </Link>
      </div>

      {/* MAIN COMPACT SECTION */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm max-w-[420px] mx-auto w-full">
          <img
            src={currentVariant.img}
            alt={product.name}
            className="w-full h-[480px] object-cover object-top hover:scale-103 transition-transform duration-500 ease-out"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a47148] mb-1">
            Women Collection
          </span>
          <h1 className="text-3xl font-serif font-normal tracking-tight text-gray-900 mb-2">
            {product.name}
          </h1>

          {/* FIXED: Changed from $ to ₹ with Indian local formatting */}
          <p className="text-xl font-medium text-gray-900 mb-4">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-md">
            {product.description}
          </p>

          <hr className="border-gray-200 mb-5" />

          {/* COLOR SELECTOR */}
          <div className="mb-4">
            <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-2">
              Color: <span className="text-gray-900 font-medium normal-case ml-1">{currentVariant.colorName}</span>
            </span>
            <div className="flex space-x-2.5">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setSelectedColorIndex(index);
                    setSuccessMessage("");
                  }}
                  style={{ backgroundColor: variant.colorCode }}
                  className={`w-6 h-6 rounded-full border shadow-sm transition-all ${
                    selectedColorIndex === index
                      ? "ring-2 ring-offset-2 ring-black scale-105"
                      : "border-gray-300 hover:scale-105"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SIZE SELECTOR */}
          {product.sizes[0] !== "One Size" && (
            <div className="mb-5">
              <span className="text-[11px] font-bold tracking-wider uppercase text-gray-400 block mb-2">Select Size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => {
                      setSelectedSize(size);
                      setErrorMessage("");
                    }}
                    className={`px-4 py-1.5 border text-xs font-medium rounded transition-all ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY, ADD TO CART & WISHLIST */}
          <div className="flex items-center space-x-3 max-w-md">
            <div className="flex items-center border border-gray-200 rounded bg-white text-sm">
              <button
                type="button"
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-3 py-2 text-gray-400 hover:text-black transition"
              >
                -
              </button>
              <span className="px-2 font-medium w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-gray-400 hover:text-black transition"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white text-[11px] font-bold tracking-widest uppercase py-3 rounded hover:bg-[#a47148] transition-all duration-300 shadow-sm"
            >
              Add To Cart
            </button>

            {/* WISHLIST BUTTON */}
            <button
              type="button"
              onClick={() => {
                toggleWishlist && toggleWishlist({
                  ...product,
                  image: currentVariant.img,
                  selectedColor: currentVariant.colorName
                });
              }}
              className="p-3 bg-white border border-gray-200 rounded hover:border-black active:scale-95 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Toggle Wishlist"
            >
              <Heart
                size={14}
                className={`transition-colors duration-200 ${
                  isSaved 
                    ? "fill-red-500 text-red-500" 
                    : "text-gray-500 hover:text-red-500"
                }`}
              />
            </button>
          </div>

          {/* MESSAGES */}
          {errorMessage && (
            <p className="text-red-600 text-xs mt-3 font-medium flex items-center">
              ⚠️ {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-green-600 text-xs mt-3 font-medium flex items-center">
              ✓ {successMessage}
            </p>
          )}

          <div className="mt-6 pt-4 border-t border-gray-100 flex space-x-6 text-[11px] text-gray-400">
            <div>✨ Premium Fabric</div>
            <div>🚚 Free Shipping</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WomenProductDetails;