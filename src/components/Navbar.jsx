import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Trash2,
  Heart,
} from "lucide-react";

const Navbar = ({
  cartCount,
  wishlistCount = 0,
  wishlistItems = [],
  cartItems = [],
  onRemoveItem,
  onRemoveWishlistItem,
}) => {
  // States
  const [isOpen, setIsOpen] = useState(false); 
  const [clothingOpen, setClothingOpen] = useState(false);
  const [jewelryOpen, setJewelryOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart total price logic
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <header className="sticky top-0 w-full bg-[#f5f0ea] border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[70px]">
          
          {/* Logo */}
          <Link to="/">
            <div className="relative flex flex-col cursor-pointer">
              <h1
                className="text-[22px] text-[#5b2c1d] leading-none"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Kanchan Luxe
              </h1>
              <span className="w-full h-[0.5px] bg-[#5b2c1d] rounded-full"></span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:text-[#5b2c1d]">Home</Link>

            {/* Clothing */}
            <div className="relative group">
              <Link to="/clothing" className="flex items-center gap-1 hover:text-[#5b2c1d]">
                Clothing
                <ChevronDown size={14} className="group-hover:rotate-180 transition duration-300" />
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <Link to="/women" className="block px-4 py-3 hover:bg-gray-100">Women</Link>
                <Link to="/men" className="block px-4 py-3 hover:bg-gray-100">Men</Link>
                <Link to="/accessories" className="block px-4 py-3 hover:bg-gray-100">Accessories</Link>
              </div>
            </div>

            {/* Jewelry */}
            <div className="relative group">
              <Link to="/jewelry" className="flex items-center gap-1 hover:text-[#5b2c1d]">
                Jewelry
                <ChevronDown size={14} className="group-hover:rotate-180 transition duration-300" />
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
                <Link to="/rings" className="block px-4 py-3 hover:bg-gray-100">Rings</Link>
                <Link to="/necklaces" className="block px-4 py-3 hover:bg-gray-100">Necklaces</Link>
              </div>
            </div>

            <Link to="/about" className="hover:text-[#5b2c1d]">About Us</Link>
            <Link to="/contact" className="hover:text-[#5b2c1d]">Contact Us</Link>

            {/* Icons Section (Desktop) */}
            <div className="flex items-center gap-5 ml-4">
              {/* Wishlist Icon */}
              <div
                className="relative cursor-pointer select-none p-1 transition-transform active:scale-95"
                onClick={() => {
                  setIsWishlistOpen(!isWishlistOpen);
                  setIsCartOpen(false);
                }}
              >
                <Heart className="w-[20px] h-[20px] text-gray-700 hover:text-red-500 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </div>

              {/* Cart Icon */}
              <div 
                className="relative cursor-pointer select-none p-1 transition-transform active:scale-95"
                onClick={() => {
                  setIsCartOpen(!isCartOpen);
                  setIsWishlistOpen(false);
                }}
              >
                <ShoppingCart className="w-[20px] h-[20px] text-gray-700 hover:text-[#5b2c1d] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </nav>

          {/* Mobile Actions Header */}
          <div className="flex md:hidden items-center gap-4">
            {/* Wishlist Icon (Mobile) */}
            <div
              className="relative cursor-pointer select-none p-1 transition-transform active:scale-95"
              onClick={() => {
                setIsWishlistOpen(!isWishlistOpen);
                setIsCartOpen(false);
                setIsOpen(false);
              }}
            >
              <Heart className="w-[20px] h-[20px] text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </div>

            {/* Cart Icon (Mobile) */}
            <div 
              className="relative cursor-pointer select-none p-1 transition-transform active:scale-95"
              onClick={() => {
                setIsCartOpen(!isCartOpen);
                setIsWishlistOpen(false);
                setIsOpen(false);
              }}
            >
              <ShoppingCart className="w-[20px] h-[20px] text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Burger Menu Button */}
            <button 
              onClick={() => {
                setIsOpen(!isOpen);
                setIsCartOpen(false);
                setIsWishlistOpen(false);
              }}
              className="text-gray-700 p-1 active:scale-95 transition-transform"
            >
              {isOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col border-t border-gray-300 py-4 bg-[#f5f0ea]">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-3">
              Home
            </Link>

            {/* Clothing Dropdown */}
            <button
              onClick={() => setClothingOpen(!clothingOpen)}
              className="flex justify-between items-center py-3"
            >
              <span>Clothing</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${clothingOpen ? "rotate-180" : ""}`}
              />
            </button>

            {clothingOpen && (
              <div className="pl-5 flex flex-col gap-3 pb-3">
                <Link to="/women" onClick={() => setIsOpen(false)}>Women</Link>
                <Link to="/men" onClick={() => setIsOpen(false)}>Men</Link>
                <Link to="/accessories" onClick={() => setIsOpen(false)}>Accessories</Link>
              </div>
            )}

            {/* Jewelry Dropdown */}
            <button
              onClick={() => setJewelryOpen(!jewelryOpen)}
              className="flex justify-between items-center py-3"
            >
              <span>Jewelry</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${jewelryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {jewelryOpen && (
              <div className="pl-5 flex flex-col gap-3 pb-3">
                <Link to="/rings" onClick={() => setIsOpen(false)}>Rings</Link>
                <Link to="/necklaces" onClick={() => setIsOpen(false)}>Necklaces</Link>
              </div>
            )}

            <Link to="/about" onClick={() => setIsOpen(false)} className="py-3">
              About Us
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="py-3">
              Contact Us
            </Link>
          </div>
        )}

        {/* --- DYNAMIC WISHLIST DROPDOWN --- */}
        {isWishlistOpen && (
          <div className="absolute right-4 md:right-20 top-[75px] bg-white w-[320px] sm:w-[350px] shadow-2xl border border-gray-100 rounded-lg z-50 overflow-hidden">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-gray-800">
                ❤️ Wishlist ({wishlistCount})
              </h3>
              <button onClick={() => setIsWishlistOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[320px] overflow-y-auto">
              {wishlistItems.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-xs">
                  Wishlist is empty
                </div>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border-b border-gray-50 last:border-0"
                  >
                    <Link 
                      to={`/product/${item.id}`} 
                      onClick={() => setIsWishlistOpen(false)}
                      className="flex gap-3 items-center flex-1 hover:opacity-80 transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-medium text-gray-800 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                        </p>
                      </div>
                    </Link>

                    <button
                      onClick={() => onRemoveWishlistItem && onRemoveWishlistItem(item.id)}
                      className="text-gray-300 hover:text-red-500 font-medium text-base px-2 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* --- DYNAMIC CART DROPDOWN --- */}
        {isCartOpen && (
          <div className="absolute right-4 md:right-10 top-[75px] bg-white w-[320px] sm:w-[360px] shadow-2xl border border-gray-100 rounded-lg z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-semibold text-sm text-gray-800 flex items-center gap-2">
                <ShoppingCart size={16} /> My Bucket ({cartCount})
              </h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[280px] overflow-y-auto p-4 flex flex-col gap-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-400 text-xs">
                  Your bucket is empty!
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={item.id || index} className="flex items-center justify-between gap-3 pb-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-[44px] h-[44px] bg-gray-100 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                        {item.image && (
                          <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-gray-800 line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          ${item.price} x {item.quantity || 1}
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-gray-600">Subtotal:</span>
                  <span className="text-base font-bold text-[#5b2c1d]">${totalPrice.toFixed(2)}</span>
                </div>
                <Link 
                  to="/cart" 
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center w-full bg-[#5b2c1d] text-white py-2 rounded-md hover:bg-[#452015] transition font-medium text-xs"
                >
                  View Cart & Checkout
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;