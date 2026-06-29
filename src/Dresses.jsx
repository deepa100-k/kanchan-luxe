import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react";
import womenourdresssummer from "./assets/womenourdresssummer.webp";
import womenourdresssummer01 from "./assets/womenourdresssummer01.jpg";
import womenourdresssummer02 from "./assets/womenourdresssummer02.jpg";
import womenourdresssummer03 from "./assets/womenourdresssummer03.avif";
import womenourdressparty01 from "./assets/womenourdressparty01.webp";
import womenourdressparty02 from "./assets/womenourdressparty02.webp";
import womenourdressparty03 from "./assets/womenourdressparty03.webp";
import womenourdresscasual from "./assets/womenourdresscasual.webp";
import womenourdresscasual01 from "./assets/womenourdresscasual01.avif";
import womenourdresscasual02 from "./assets/womenourdresscasual02.webp";
import womenourdresscasual03 from "./assets/womenourdresscasual03.jpg";
import womenourdressluxury from "./assets/womenourdressluxury.jpg";
import womenourdressluxury01 from "./assets/womenourdressluxury01.webp";
import womenourdressluxury02 from "./assets/womenourdressluxury02.webp";
import womenourdressluxury03 from "./assets/womenourdressluxury03.jpg";
import womenourdressEvening from "./assets/womenourdressEvening.jpg";
import womenourdressEvening01 from "./assets/womenourdressEvening01.webp";
import womenourdressEvening02 from "./assets/womenourdressEvening02.webp";
import womenourdressEvening03 from "./assets/womenourdressEvening03.jpg";
import womenourdressmodernfashion from "./assets/womenourdressmodernfashion.webp";
import womenourdressmodernfashion01 from "./assets/womenourdressmodernfashion01.jpg";
import womenourdressmodernfashion02 from "./assets/womenourdressmodernfashion02.jpg";
import womenourdressmodernfashion03 from "./assets/womenourdressmodernfashion03.jpg";

const products = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    price: 1999,
    images: [
      womenourdresssummer,
      womenourdresssummer01,
      womenourdresssummer02,
      womenourdresssummer03,
    ],
  },
  {
    id: 2,
    name: "Party Dress",
    price: 2499,
    images: [
      womenourdressparty01,
      womenourdressparty02,
      womenourdressparty03,
    ],
  },
  {
    id: 3,
    name: "Casual Dress",
    price: 1699,
    images: [
      womenourdresscasual,
      womenourdresscasual01,
      womenourdresscasual02,
      womenourdresscasual03,
    ],
  },
  {
    id: 4,
    name: "Luxury Dress",
    price: 3499,
    images: [
      womenourdressluxury,
      womenourdressluxury01,
      womenourdressluxury02,
      womenourdressluxury03,
    ],
  },
  {
    id: 5,
    name: "Evening Dress",
    price: 3999,
    images: [
      womenourdressEvening,
      womenourdressEvening01,
      womenourdressEvening02,
      womenourdressEvening03,
    ],
  },
  {
    id: 6,
    name: "Modern Fashion Dress",
    price: 2299,
    images: [
      womenourdressmodernfashion,
      womenourdressmodernfashion01,
      womenourdressmodernfashion02,
      womenourdressmodernfashion03,
    ],
  },
];

function Dresses({ addToCart, toggleWishlist, wishlistItems = [] }) {
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

  const handleAddToCart = (product, activeIndex) => {
    if (addToCart) {
      addToCart({
        ...product,
        image: product.images[activeIndex], 
        category: "dresses"
      });
    } else {
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="bg-[#faf7f3] min-h-screen antialiased font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
            Dresses Collection
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Dresses
        </h2>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => {
            const activeImageIndex = currentImage[product.id] || 0;
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative group border border-gray-50"
              >
                {/* Wishlist Heart Button */}
                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist && toggleWishlist({
                      ...product,
                      image: product.images[0],
                      category: "dresses"
                    });
                  }}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white active:scale-90 transition"
                >
                  <Heart
                    size={14}
                    className={`transition-colors duration-200 ${
                      isSaved 
                        ? "fill-red-500 text-red-500" 
                        : "text-gray-600 hover:text-red-500"
                    }`}
                  />
                </button>

                {/* Image Slider Wrapper */}
                <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[420px] bg-gray-50">
                  <img
                    src={product.images[activeImageIndex]}
                    alt={`${product.name} display`}
                    className="h-full w-full object-cover"
                  />

                  {/* Left Navigation Arrow */}
                  <button
                    type="button"
                    onClick={() => prevImage(product.id, product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10 active:scale-95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} className="text-gray-700" />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button
                    type="button"
                    onClick={() => nextImage(product.id, product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10 active:scale-95"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} className="text-gray-700" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {product.images.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    {/* Rupee standard format applied safely */}
                    <p className="text-[#a47148] text-2xl font-bold mt-2">
                      ₹{product.price?.toLocaleString("en-IN")}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product, activeImageIndex)}
                    className="w-full mt-5 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-[#a47148] transition-colors duration-300 font-medium text-sm shadow-sm"
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

export default Dresses;