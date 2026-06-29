import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react"; 
import womenaccessoriehandbag from "./assets/womenaccessoriehandbag.avif";
import womenaccessoriehandbag01 from "./assets/womenaccessoriehandbag01.webp";
import womenaccessoriehandbag02 from "./assets/womenaccessoriehandbag02.avif";
import womenaccessoriesunglasses from "./assets/womenaccessoriesunglasses.webp";
import womenaccessoriesunglasses01 from "./assets/womenaccessoriesunglasses01.webp";
import womenaccessoriesunglasses02 from "./assets/womenaccessoriesunglasses02.webp";
import womenaccessoriesunglasses03 from "./assets/womenaccessoriesunglasses03.jpg";
import womenaccessoriegoldwatch from "./assets/womenaccessoriegoldwatch.jpg";
import womenaccessoriegoldwatch01 from "./assets/womenaccessoriegoldwatch01.jpg";
import womenaccessoriegoldwatch02 from "./assets/womenaccessoriegoldwatch02.webp";
import womenaccessorieshoe from "./assets/womenaccessorieshoe.avif";
import womenaccessorieshoe01 from "./assets/womenaccessorieshoe01.jpg";
import womenaccessorieshoe02 from "./assets/womenaccessorieshoe02.webp";
import womenaccessorieshoe03 from "./assets/womenaccessorieshoe03.webp";
import womenaccessoriesummerhat from "./assets/womenaccessoriesummerhat.webp";
import womenaccessoriesummerhat01 from "./assets/womenaccessoriesummerhat01.avif";
import womenaccessoriesummerhat02 from "./assets/womenaccessoriesummerhat02.jpg";
import womenaccessoriescarf from "./assets/womenaccessoriescarf.jpg";
import womenaccessoriescarf01 from "./assets/womenaccessoriescarf01.jpg";
import womenaccessoriescarf02 from "./assets/womenaccessoriescarf02.webp";
import womenaccessoriescarf03 from "./assets/womenaccessoriescarf03.jpg";
import womenaccessoriescarf04 from "./assets/womenaccessoriescarf04.avif";
import womenaccessoriesilverring from "./assets/womenaccessoriesilverring.webp";
import womenaccessoriesilverring01 from "./assets/womenaccessoriesilverring01.webp";
import womenaccessoriesilverring02 from "./assets/womenaccessoriesilverring02.webp";
import womenaccessoriesilverring03 from "./assets/womenaccessoriesilverring03.webp";
import womenaccessoriesilverring04 from "./assets/womenaccessoriesilverring04.webp";
import womenaccessorienacklace from "./assets/womenaccessorienacklace.webp";
import womenaccessorienacklace01 from "./assets/womenaccessorienacklace01.webp";
import womenaccessorienacklace02 from "./assets/womenaccessorienacklace02.jpg";
import womenaccessorienacklace03 from "./assets/womenaccessorienacklace03.webp";
import womenaccessoriebelt from "./assets/womenaccessoriebelt.jpg";
import womenaccessoriebelt01 from "./assets/womenaccessoriebelt01.webp";
import womenaccessoriebelt02 from "./assets/womenaccessoriebelt02.jpg";
import womenaccessoriecuffbracelet from "./assets/womenaccessoriecuffbracelet.webp";
import womenaccessoriecuffbracelet01 from "./assets/womenaccessoriecuffbracelet01.webp";
import womenaccessoriecuffbracelet02 from "./assets/womenaccessoriecuffbracelet02.webp";
import womenaccessoriecuffbracelet03 from "./assets/womenaccessoriecuffbracelet03.webp";
import womenaccessoriecuffbracelet04 from "./assets/womenaccessoriecuffbracelet04.webp";
import womenaccessoriecuffbracelet05 from "./assets/womenaccessoriecuffbracelet05.webp";
import womenaccessoriepearlearring from "./assets/womenaccessoriepearlearring.jpg";
import womenaccessoriepearlearring01 from "./assets/womenaccessoriepearlearring01.webp";
import womenaccessoriepearlearring02 from "./assets/womenaccessoriepearlearring02.jpg";
import womenaccessoriepearlearring03 from "./assets/womenaccessoriepearlearring03.jpg";
import womenaccessorietravelpouch from "./assets/womenaccessorietravelpouch.jpg";
import womenaccessorietravelpouch01 from "./assets/womenaccessorietravelpouch01.jpg";
import womenaccessorietravelpouch02 from "./assets/womenaccessorietravelpouch02.jpg";
import womenaccessorietravelpouch03 from "./assets/womenaccessorietravelpouch03.jpg";

// FIXED: String price formatted to clean Number data type values
const products = [
  {
    id: 1,
    name: "Luxury Handbag",
    price: 2999,
    image: womenaccessoriehandbag,
    allImages: [
      womenaccessoriehandbag,
      womenaccessoriehandbag01,
      womenaccessoriehandbag02,
    ],
  },
  {
    id: 2,
    name: "Classic Sunglasses",
    price: 999,
    image: womenaccessoriesunglasses,
    allImages: [
      womenaccessoriesunglasses,
      womenaccessoriesunglasses01,
      womenaccessoriesunglasses02,
      womenaccessoriesunglasses03,
    ],
  },
  {
    id: 3,
    name: "Women Premium Gold Watch",
    price: 3499,
    image: womenaccessoriegoldwatch,
    allImages: [
      womenaccessoriegoldwatch,
      womenaccessoriegoldwatch01,
      womenaccessoriegoldwatch02,
    ],
  },
  {
    id: 4,
    name: "Fashion Leather Shoes",
    price: 2499,
    image: womenaccessorieshoe,
    allImages: [
      womenaccessorieshoe,
      womenaccessorieshoe01,
      womenaccessorieshoe02,
      womenaccessorieshoe03,
    ],
  },
  {
    id: 5,
    name: "Summer Straw Hat",
    price: 699,
    image: womenaccessoriesummerhat,
    allImages: [
      womenaccessoriesummerhat,
      womenaccessoriesummerhat01,
      womenaccessoriesummerhat02,
    ],
  },
  {
    id: 6,
    name: "Designer Silk Scarf",
    price: 599,
    image: womenaccessoriescarf,
    allImages: [
      womenaccessoriescarf,
      womenaccessoriescarf01,
      womenaccessoriescarf02,
      womenaccessoriescarf03,
      womenaccessoriescarf04,
    ],
  },
  {
    id: 7,
    name: "Minimalist Silver Ring",
    price: 799,
    image: womenaccessoriesilverring,
    allImages: [
      womenaccessoriesilverring,
      womenaccessoriesilverring01,
      womenaccessoriesilverring02,
      womenaccessoriesilverring03,
      womenaccessoriesilverring04,
    ],
  },
  {
    id: 8,
    name: "Elegant Crystal Necklace",
    price: 1299,
    image: womenaccessorienacklace,
    allImages: [
      womenaccessorienacklace,
      womenaccessorienacklace01,
      womenaccessorienacklace02,
      womenaccessorienacklace03,
    ],
  },
  {
    id: 9,
    name: "Classic Leather Belt",
    price: 699,
    image: womenaccessoriebelt,
    allImages: [
      womenaccessoriebelt,
      womenaccessoriebelt01,
      womenaccessoriebelt02,
    ],
  },
  {
    id: 10,
    name: "Women Boho Cuff Bracelet",
    price: 599,
    image: womenaccessoriecuffbracelet,
    allImages: [
      womenaccessoriecuffbracelet,
      womenaccessoriecuffbracelet01,
      womenaccessoriecuffbracelet02,
      womenaccessoriecuffbracelet03,
      womenaccessoriecuffbracelet04,
      womenaccessoriecuffbracelet05,
    ],
  },
  {
    id: 11,
    name: "Modern Pearl Earrings",
    price: 749,
    image: womenaccessoriepearlearring,
    allImages: [
      womenaccessoriepearlearring,
      womenaccessoriepearlearring01,
      womenaccessoriepearlearring02,
      womenaccessoriepearlearring03,
    ],
  },
  {
    id: 12,
    name: "Luxury Travel Pouch",
    price: 899,
    image: womenaccessorietravelpouch,
    allImages: [
      womenaccessorietravelpouch,
      womenaccessorietravelpouch01,
      womenaccessorietravelpouch02,
      womenaccessorietravelpouch03,
    ],
  },
];

function AccessoriesPage({ addToCart, toggleWishlist, wishlistItems = [] }) {
  const [currentImage, setCurrentImage] = useState({});

  const nextImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % total,
    }));
  };

  const prevImage = (id, total) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + total) % total,
    }));
  };

  const handleAddToCart = useCallback((product, activeIndex) => {
    if (typeof addToCart === "function") {
      addToCart({
        ...product,
        image: product.allImages[activeIndex], // Added indexed variant dynamic image path passing
        category: "accessories"
      });
    } else {
      console.warn("addToCart function pass nahi kiya gaya hai parent component se!");
    }
  }, [addToCart]);

  return (
    <div className="bg-[#faf7f3] min-h-screen antialiased font-sans">
      {/* Hero Banner Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-serif font-bold mb-4 tracking-tight">
            Accessories Collection
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-serif font-bold text-center mb-10 text-gray-900">
          Our Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const activeIndex = currentImage[product.id] || 0;
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative group border border-gray-50"
              >
                {/* --- SMALL WISHLIST HEART BUTTON --- */}
                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist && toggleWishlist({
                      ...product,
                      image: product.allImages[0],
                      category: "accessories"
                    });
                  }}
                  className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white active:scale-90 transition"
                >
                  <Heart
                    size={16}
                    className={`transition-colors duration-200 ${
                      isSaved 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>

                {/* Image Slider Wrapper */}
                <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[340px] bg-gray-50">
                  <img
                    src={product.allImages[activeIndex]}
                    alt={`${product.name} display view`} // FIXED: Template syntax fixed
                    className="h-full w-full object-cover"
                  />

                  {/* Slider Control Arrows */}
                  <button
                    type="button"
                    onClick={() => prevImage(product.id, product.allImages.length)}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-white/95 p-1.5 rounded-full shadow-md hover:bg-white transition-colors z-10 active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} className="text-gray-700" />
                  </button>

                  <button
                    type="button"
                    onClick={() => nextImage(product.id, product.allImages.length)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-white/95 p-1.5 rounded-full shadow-md hover:bg-white transition-colors z-10 active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} className="text-gray-700" />
                  </button>

                  {/* Progress Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {product.allImages.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Card Body */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                      {product.name}
                    </h3>
                    {/* Fixed dynamic presentation rendering for Rupee */}
                    <p className="text-[#a47148] font-bold text-xl mt-1">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product, activeIndex)}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-[#a47148] transition-colors duration-300 font-medium text-sm"
                  >
                    <ShoppingCart size={18} />
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AccessoriesPage;