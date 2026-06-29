import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react"; 

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSlider from "./home/HeroSlider";
import PromoSection from "./home/PromoSection";
import NewArrivals from "./home/NewArrivals";
import BestSellers from "./home/BestSellers";
import TrendingCollection from "./home/TrendingCollection";

import TrendingCustomerReviews from "./TrendingCustomerReviews";
import TrendingProductDetailsPage from "./TrendingProductDetailsPage";

import Clothing from "./navbar/Clothing";
import Jewelry from "./navbar/Jewelry";
import NewArrivalsPage from "./navbar/NewArrivalsPage";
import About from "./navbar/About";
import Contact from "./navbar/Contact";

import Women from "./pages/Women";
import Men from "./pages/Men";

import Rings from "./pages2/Rings";
import RingDetails from "./pages2/RingDetails";
import Necklaces from "./pages2/Necklaces";
import NecklaceDetails from "./pages2/NecklaceDetails";

import CollectionPage from "./home/TrendingCollectionPage";
import ArrivalDetails from "./navbar/ArrivalDetails";
import WomenProductDetails  from "./WomenProductDetails";

import Dresses from "./Dresses";
import Tops from "./Tops";
import AccessoriesPage from "./AccessoriesPage";
import AccessoriesCategory from "./AccessoriesCategory";

import SellerDetail from "./home/SellerDetail";
import CartPage from "./pages/CartPage"; 
import Checkout from "./Checkout"; 

function HomePage({
  addToCart,
  toggleWishlist,
  wishlistItems,
}) {
  return (
    <>
      <HeroSlider />
      <PromoSection />
      <NewArrivals />
      <BestSellers
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        wishlistItems={wishlistItems}
      />
      <TrendingCollection />
      <TrendingCustomerReviews />
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // UNIVERSAL SAFE ADD TO CART FUNCTION (Handles numbers safely regardless of symbol)
  const addToCart = (product) => {
    let uniqueId = product.id;

    if (product.id && !isNaN(product.id)) {
      uniqueId = `${product.category || 'prod'}-${product.id}`;
    } else if (!product.id) {
      uniqueId = product.name 
        ? product.name.replace(/\s+/g, '-').toLowerCase() 
        : Math.random().toString();
    }

    let cleanPrice = product.price;
    if (typeof cleanPrice === "string") {
      cleanPrice = cleanPrice.replace(/[^\d.]/g, ""); 
    }
    const productPrice = Number(cleanPrice) || 0;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === uniqueId);

      if (existing) {
        return prev.map((item) =>
          item.id === uniqueId
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [
        ...prev, 
        { 
          ...product, 
          id: uniqueId, 
          price: productPrice,
          quantity: product.quantity || 1 
        }
      ];
    });
  };

  const toggleWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
  
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
  
      return [...prev, product];
    });
  };

  // Unique Dynamic item identity deletion handler helper 
  const handleRemoveItem = (idOrKey) => {
    setCartItems((prev) => prev.filter((item, index) => {
      const imageName = item.image ? item.image.substring(item.image.lastIndexOf("/") + 1) : "default";
      const itemKey = `${item.id || index}-${item.selectedSize || "no-size"}-${imageName}`;
      return item.id !== idOrKey && itemKey !== idOrKey;
    }));
  };
  
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Handles dynamic item quantities inside the shopping bag
  const handleUpdateQuantity = (uniqueKey, newQuantity) => {
    setCartItems((prev) => prev.map((item, index) => {
      const imageName = item.image ? item.image.substring(item.image.lastIndexOf("/") + 1) : "default";
      const itemKey = `${item.id || index}-${item.selectedSize || "no-size"}-${imageName}`;
      if (itemKey === uniqueKey || item.id === uniqueKey) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  return (
    <BrowserRouter>
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        wishlistCount={wishlistItems.length}
        wishlistItems={wishlistItems}
        onRemoveWishlistItem={removeFromWishlist} 
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />
      
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              wishlistItems={wishlistItems}
            />
          }
        />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        
        <Route 
          path="/new-arrivals" 
          element={<NewArrivalsPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/product/:id" 
          element={<ArrivalDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/trending-product/:id" 
          element={<TrendingProductDetailsPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route 
          path="/women" 
          element={<Women addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/men" 
          element={<Men addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/dresses" 
          element={<Dresses addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/tops" 
          element={<Tops addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/accessories" 
          element={<AccessoriesPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/accessories/:category" 
          element={<AccessoriesCategory addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/rings" 
          element={<Rings addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/ring/:id" 
          element={<RingDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/necklaces" 
          element={<Necklaces addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/necklace/:id" 
          element={<NecklaceDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/women-product/:id" 
          element={<WomenProductDetails addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/bestseller/:id" 
          element={<SellerDetail addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        <Route 
          path="/collection/:category" 
          element={<CollectionPage addToCart={addToCart} toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} />} 
        />
        
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems} 
              addToCart={addToCart} 
              onRemoveItem={handleRemoveItem}
              updateQuantity={handleUpdateQuantity}
              setCartItems={setCartItems} 
            />
          }
        />

        <Route 
          path="/checkout" 
          element={<Checkout cartItems={cartItems} />} 
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;