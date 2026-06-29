import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { bestSellersData } from "../data/bestsellers";

const SellerDetail = ({ addToCart }) => {
  const { id } = useParams();

  const product = bestSellersData.find(
    (item) => String(item.id) === String(id)
  );

  const [qty, setQty] = useState(1);
  const [success, setSuccess] = useState(false);

  // डॉलर या किसी अन्य अनचाहे सिंबल को हटाकर हमेशा भारतीय रुपया (₹) में दिखाने का हेल्पर फंक्शन
  const formatToRupee = (priceValue) => {
    if (!priceValue) return "";
    const cleanNumber = Number(String(priceValue).replace(/[^0-9.-]+/g, "")) || 0;
    return `₹${cleanNumber.toLocaleString("en-IN")}`;
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f5f1] px-4 text-center">
        <h1 className="text-2xl font-serif text-gray-800 mb-4">Product Not Found</h1>
        <Link to="/" className="text-xs uppercase tracking-widest border-b border-gray-800 pb-1 text-gray-600 hover:text-[#bfa16f]">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({
        ...product,
        quantity: qty,
      });
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="bg-[#f8f5f1] min-h-screen py-16 px-4 md:px-10 antialiased font-sans">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-8 text-xs tracking-wide text-gray-500 uppercase">
        <Link to="/" className="hover:text-[#bfa16f] transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Best Sellers</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">
          {product.name}
        </span>
      </div>

      {/* Product Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xs p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Product Image */}
          <div className="flex justify-center w-full sticky top-6">
            <div className="overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 max-w-md w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[480px] object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="pt-2">
            <span className="uppercase tracking-[0.2em] text-[11px] text-[#bfa16f] font-bold block mb-2">
              Best Seller
            </span>

            <h1 className="text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-semibold text-[#bfa16f]">
                {formatToRupee(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-light">
                  {formatToRupee(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-xl">
              {product.description ||
                "Crafted with premium materials and elegant finishing, this bestseller is designed to elevate your style with timeless luxury and comfort."}
            </p>

            {/* Features */}
            {product.features && (
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-bold text-gray-800 mb-3">
                  Product Highlights
                </h3>
                <ul className="space-y-2 text-sm text-gray-500 font-light">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#bfa16f]">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider font-bold text-gray-800 mb-3">
                Quantity
              </h3>
              <div className="flex items-center border border-gray-200 rounded-xl bg-white w-fit text-sm h-11">
                <button
                  type="button"
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-black transition font-semibold select-none"
                >
                  -
                </button>
                <span className="px-2 font-medium w-8 text-center text-xs select-none">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((prev) => prev + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-black transition font-semibold select-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart Button */}
            <div className="max-w-xs w-full">
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#3a2a18] hover:bg-[#bfa16f] text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-md active:scale-[0.99]"
              >
                Add To Cart ({qty})
              </button>

              {success && (
                <p className="text-green-600 text-xs mt-3 font-medium flex items-center animate-pulse">
                  ✓ Added successfully to your bag.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetail;