import React from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag as BagIcon, Plus, Minus } from "lucide-react"; // Icons import kiye

const ShoppingBag = ({ cartItems = [], updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  // कीमत से सिंबल हटाकर केवल नंबर निकालने और टोटल कैलकुलेट करने का सटीक लॉजिक
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = Number(String(item.price).replace(/[^0-9.-]+/g, "")) || 0;
      return total + priceNum * (item.quantity || 1);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const gstTax = subtotal * 0.05; // 5% GST
  const totalAmount = subtotal + gstTax;

  // आइटम की यूनिक की (Unique Key) जनरेट करने का हेल्पर फंक्शन (ID + Size + Image Name)
  const getUniqueKey = (item, index) => {
    const imageName = item.image ? item.image.substring(item.image.lastIndexOf("/") + 1) : "default";
    return `${item.id || index}-${item.selectedSize || "no-size"}-${imageName}`;
  };

  return (
    <div className="bg-[#f8f5f0] min-h-screen py-8 md:py-16 px-4 sm:px-6 antialiased font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
          Shopping Bag ({cartItems.length} {cartItems.length === 1 ? "Item" : "Items"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE: Distinct Products List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white p-12 rounded-2xl text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                <BagIcon className="text-gray-400 mb-3" size={40} />
                <p className="text-gray-500 font-medium">Your shopping bag is empty.</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-4 text-sm font-semibold text-[#5b2c1d] hover:underline"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => {
                const itemPrice = Number(String(item.price).replace(/[^0-9.-]+/g, "")) || 0;
                const uniqueRowKey = getUniqueKey(item, index);

                return (
                  <div
                    key={uniqueRowKey}
                    className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 transition hover:shadow-md"
                  >
                    {/* Product Details Section */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-xl border border-gray-100 bg-gray-50 shrink-0"
                        />
                      )}
                      <div className="space-y-1">
                        <h3 className="font-semibold text-gray-800 text-base md:text-lg leading-snug">
                          {item.name}
                        </h3>
                        
                        {/* वेरिएंट साइज (अगर उपलब्ध हो) */}
                        {item.selectedSize && (
                          <span className="inline-block text-xs text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-md font-medium">
                            Size: {item.selectedSize} (US)
                          </span>
                        )}
                        
                        {/* सिंगल आइटम की बेस प्राइस (हमेशा ₹ में) */}
                        <p className="text-sm font-medium text-gray-500">
                          ₹{itemPrice.toLocaleString("en-IN")} प्रत्येक
                        </p>
                      </div>
                    </div>

                    {/* Quantity Selector & Price Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200">
                        <button
                          onClick={() => {
                            if (item.quantity > 1 && updateQuantity) {
                              updateQuantity(uniqueRowKey, item.quantity - 1);
                            }
                          }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition disabled:opacity-40"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold min-w-[32px] text-center select-none text-gray-800">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity && updateQuantity(uniqueRowKey, (item.quantity || 1) + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* वेरिएंट की कुल कीमत (क्वांटिटी के गुणा के साथ ₹ में) */}
                      <span className="font-bold text-gray-900 text-base md:text-lg min-w-[100px] text-right">
                        ₹{(itemPrice * (item.quantity || 1)).toLocaleString("en-IN")}
                      </span>

                      {/* Delete Button with Lucide Icon */}
                      <button
                        onClick={() => removeFromCart && removeFromCart(uniqueRowKey)}
                        className="text-gray-400 hover:text-red-500 transition p-2 rounded-lg hover:bg-red-50"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT SIDE: Order Summary */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 font-serif">
              Order Summary
            </h2>
            
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between items-center">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Estimated Tax (GST 5%)</span>
                <span className="font-semibold text-gray-900">₹{gstTax.toLocaleString("en-IN")}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Delivery Charges</span>
                <span className="text-green-600 font-bold bg-green-50 px-2.5 py-0.5 rounded-lg text-xs tracking-wider">
                  FREE
                </span>
              </div>

              <div className="flex justify-between items-center text-lg font-bold text-gray-900 border-t pt-4 mt-2">
                <span>Total Amount</span>
                <span className="text-[#B8860B] text-xl">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigate("/checkout")}
              disabled={cartItems.length === 0}
              className="w-full mt-6 bg-[#5b2c1d] hover:bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold transition shadow-md text-center block text-base tracking-wide"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-4 text-center text-sm font-medium text-gray-500 hover:text-black transition"
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;