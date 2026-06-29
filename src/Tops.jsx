import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Heart } from "lucide-react"; 
import womentopcasual from "./assets/womentopcasual.webp";
import womentopcasual01 from "./assets/womentopcasual01.avif";
import womentopcasual02 from "./assets/womentopcasual02.avif";
import womentopcasual03 from "./assets/womentopcasual03.jpg";
import womentopcrop from "./assets/womentopcrop.webp";
import womentopcrop01 from "./assets/womentopcrop01.webp";
import womentopcrop02 from "./assets/womentopcrop02.jpg";
import womentopcrop03 from "./assets/womentopcrop03.jpg";
import womentoppremium from "./assets/womentoppremium.jpg";
import womentoppremium01 from "./assets/womentoppremium01.png";
import womentoppremium02 from "./assets/womentoppremium02.webp";
import womentopfashion from "./assets/womentopfashion.avif";
import womentopfashion01 from "./assets/womentopfashion01.webp";
import womentopfashion02 from "./assets/womentopfashion02.webp";
import womentopfashion03 from "./assets/womentopfashion03.webp";
import womentopsummer from "./assets/womentopsummer.jpg";
import womentopsummer01 from "./assets/womentopsummer01.webp";
import womentopsummer02 from "./assets/womentopsummer02.jpg";
import womentopsummer03 from "./assets/womentopsummer03.jpg";
import womentopdesigner from "./assets/womentopdesigner.webp";
import womentopdesigner01 from "./assets/womentopdesigner01.jpg";
import womentopdesigner02 from "./assets/womentopdesigner02.jpeg";
import womentopdesigner03 from "./assets/womentopdesigner03.jpg";
import womentopdesigner04 from "./assets/womentopdesigner04.webp";
import womentopelegant from "./assets/womentopelegant.webp";
import womentopelegant01 from "./assets/womentopelegant01.jpg";
import womentopelegant02 from "./assets/womentopelegant02.jpg";
import womentopelegant03 from "./assets/womentopelegant03.webp";
import womentopclassic from "./assets/womentopclassic.webp";
import womentopclassic01 from "./assets/womentopclassic01.webp";
import womentopclassic02 from "./assets/womentopclassic02.webp";
import womentopclassic03 from "./assets/womentopclassic03.jpg";

const products = [
  {
    id: 1,
    name: "Casual Top",
    price: 999,
    images: [
      womentopcasual,
      womentopcasual01,
      womentopcasual02,
      womentopcasual03,
    ],
  },
  {
    id: 2,
    name: "Stylish Crop Top",
    price: 1199,
    images: [
      womentopcrop,
      womentopcrop01,
      womentopcrop02,
      womentopcrop03,
    ],
  },
  {
    id: 3,
    name: "Premium Top",
    price: 1499,
    images: [
      womentoppremium,
      womentoppremium01,
      womentoppremium02,
    ],
  },
  {
    id: 4,
    name: "Fashion Top",
    price: 1299,
    images: [
      womentopfashion,
      womentopfashion01,
      womentopfashion02,
      womentopfashion03,
    ],
  },
  {
    id: 5,
    name: "Summer Top",
    price: 1099,
    images: [
      womentopsummer,
      womentopsummer01,
      womentopsummer02,
      womentopsummer03,
    ],
  },
  {
    id: 6,
    name: "Designer Top",
    price: 1899,
    images: [
      womentopdesigner,
      womentopdesigner01,
      womentopdesigner02,
      womentopdesigner03,
      womentopdesigner04,
    ],
  },
  {
    id: 7,
    name: "Elegant Top",
    price: 1399,
    images: [
      womentopelegant,
      womentopelegant01,
      womentopelegant02,
      womentopelegant03,
    ],
  },
  {
    id: 8,
    name: "Classic Top",
    price: 1249,
    images: [
      womentopclassic,
      womentopclassic01,
      womentopclassic02,
      womentopclassic03,
    ],
  },
];

function Tops({ addToCart, toggleWishlist, wishlistItems = [] }) {
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

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart({
        ...product,
        image: product.images[0],
        category: "tops"
      });
    } else {
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="bg-[#faf7f3] min-h-screen antialiased font-sans">
      {/* Hero Banner Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
            Tops Collection
          </h1>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Tops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const activeIndex = currentImage[product.id] || 0;
            const isSaved = wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative group"
              >
                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist && toggleWishlist({
                      ...product,
                      image: product.images[0],
                      category: "tops"
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

                {/* Image Slider */}
                <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-[340px]">
                  <img
                    src={product.images[activeIndex]}
                    alt={`${product.name} view`}
                    className="h-full w-full object-cover"
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={() => prevImage(product.id, product.images.length)}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-white/95 p-1.5 rounded-full shadow-md hover:bg-white transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} className="text-gray-700" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={() => nextImage(product.id, product.images.length)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-white/95 p-1.5 rounded-full shadow-md hover:bg-white transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} className="text-gray-700" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {product.images.map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === activeIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
                      {product.name}
                    </h3>
                    {/* Yahan par ₹ symbol add kiya hai */}
                    <p className="text-[#a47148] font-bold text-xl mt-1">
                      ₹{product.price}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
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

export default Tops;