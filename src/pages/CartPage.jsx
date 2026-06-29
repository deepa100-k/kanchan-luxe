import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

const CartPage = ({ cartItems, onRemoveItem, setCartItems }) => {
  
  // FIXED: Pure state modification logic for increasing quantity safely
  const increaseQuantity = (item) => {
    setCartItems((prev) =>
      prev.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      )
    );
  };

  // Quantity ko 1 kam karne ke liye function
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems((prev) =>
        prev.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantity: prevItem.quantity - 1 }
            : prevItem
        )
      );
    } else {
      onRemoveItem(item.id); // 1 se kam hone par automatic remove ho jaye
    }
  };

  // 1. Subtotal Calculate (Sirf selected items ke price * quantity ka sum)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 2. Tax Calculation (Example: 5% GST/Tax)
  const taxRate = 0.05; 
  const totalTax = subtotal * taxRate;

  // 3. Delivery Charge Logic (For India Layout)
  // Agar cart khali hai to 0, agar ₹1000 se kam hai to ₹150, warna FREE
  const deliveryThreshold = 1000;
  const deliveryCharge = subtotal > deliveryThreshold || subtotal === 0 ? 0 : 150;

  // 4. Final Grand Total Amount
  const grandTotal = subtotal + totalTax + deliveryCharge;

  // Total items ki total quantity count karne ke liye
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full bg-[#fcfbfa] min-h-screen py-10 antialiased font-sans">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-serif text-[#5b2c1d] mb-8 border-b pb-4 tracking-tight">
          Shopping Bag ({totalItemsCount} Items)
        </h1>

        {cartItems.length === 0 ? (
          // Empty State
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-6 font-medium">Your shopping bag is empty!</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#5b2c1d] text-white px-6 py-3 rounded-xl hover:bg-[#452015] transition shadow-sm text-sm font-medium"
            >
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>
        ) : (
          // Cart Content Grid
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side: Items List */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-200"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <ShoppingBag className="text-gray-400 w-8 h-8" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-800 text-base line-clamp-1 sm:line-clamp-2">{item.name}</h3>
                      <p className="text-sm font-semibold text-[#5b2c1d] mt-1">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Actions & Price */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                    
                    {/* Counter Buttons */}
                    <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-0.5">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item)}
                        className="p-2 text-gray-600 hover:bg-white hover:shadow-xs rounded-lg transition active:scale-95"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 font-semibold text-gray-800 text-sm select-none min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increaseQuantity(item)} // FIXED: Triggers safe incremental update
                        className="p-2 text-gray-600 hover:bg-white hover:shadow-xs rounded-lg transition active:scale-95"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Total Item Price */}
                    <div className="text-right min-w-[90px]">
                      <p className="font-bold text-gray-800">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Remove Trash Button */}
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition p-1.5 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Order Summary Box with Tax & Delivery */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit">
              <h2 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b pb-2">Order Summary</h2>
              
              <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
                
                {/* Items Subtotal */}
                <div className="flex justify-between">
                  <span>Subtotal ({totalItemsCount} items)</span>
                  <span className="font-semibold text-gray-800">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>

                {/* Estimated Tax (5% GST) */}
                <div className="flex justify-between">
                  <span>Estimated Tax (GST 5%)</span>
                  <span className="font-semibold text-gray-800">₹{totalTax.toLocaleString("en-IN")}</span>
                </div>

                {/* Delivery Charges */}
                <div className="flex justify-between items-center">
                  <span>Delivery Charges</span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded text-xs">FREE</span>
                  ) : (
                    <span className="font-semibold text-gray-800">₹{deliveryCharge.toLocaleString("en-IN")}</span>
                  )}
                </div>

                {/* Free Delivery Target Indicator */}
                {deliveryCharge > 0 && (
                  <div className="text-xs text-amber-700 bg-amber-50 p-2.5 rounded-xl mt-1 leading-relaxed">
                    Add <b>₹{(deliveryThreshold - subtotal).toLocaleString("en-IN")}</b> more to get <b>FREE Delivery</b>!
                  </div>
                )}

                {/* Final Grand Total */}
                <div className="border-t pt-3 mt-2 flex justify-between items-center text-base font-bold text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-xl text-[#5b2c1d]">₹{grandTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => alert(`Proceeding to Checkout! Total Payment: ₹${grandTotal.toLocaleString("en-IN")}`)}
                className="w-full bg-[#5b2c1d] text-white py-3.5 rounded-xl font-semibold hover:bg-[#452015] transition shadow-md text-center block text-sm tracking-wide active:scale-[0.99]"
              >
                Proceed to Checkout
              </button>
              
              <Link
                to="/"
                className="text-center block text-sm text-gray-400 hover:text-[#5b2c1d] mt-4 underline transition"
              >
                Continue Shopping
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;