import Sellers1 from "../assets/Sellers1.webp";
import Sellers2 from "../assets/Sellers2.webp";
import Sellers3 from "../assets/Sellers3.webp";
import Sellers4 from "../assets/Sellers4.webp";

export const bestSellersData = [
  {
    id: 1, // FIXED: Changed string "1" to number 1 to match global schema
    category: "Best Sellers",
    name: "Classic Premium Perfume",
    price: 1499,
    originalPrice: 1999, // FIXED: Changed from string to pure number
    discount: "25% OFF",
    image: Sellers1,
    images: [Sellers1],
    video: "",
    description: "An iconic, long-lasting signature scent blending delicate floral top notes with a warm woody base.",
    details: ["Long-lasting 8+ Hours Wear", "Premium French Oil Blend", "Elegant Glass Spray Bottle"]
  },
  {
    id: 2,
    category: "Best Sellers",
    name: "Luxury Oud Edition",
    price: 2499,
    originalPrice: 3499, // FIXED: Changed from string to pure number
    discount: "28% OFF",
    image: Sellers2,
    images: [Sellers2],
    video: "",
    description: "An opulent, deep oriental fragrance showcasing rich notes of rare Cambodian oud, amber, and dark spices.",
    details: ["Intense Eau de Parfum Concentration", "Authentic Exotic Oud Base", "Luxury Velvet-lined Packaging"]
  },
  {
    id: 3,
    category: "Best Sellers",
    name: "Summer Fresh Cologne",
    price: 999,
    originalPrice: 1299, // FIXED: Replaced null with calculated regular price baseline
    discount: "23% OFF", // FIXED: Adjusted to maintain dynamic template uniformity
    image: Sellers3,
    images: [Sellers3],
    video: "",
    description: "A crisp, revitalizing daylight cologne packed with zesty Mediterranean citrus and clean aquatic accords.",
    details: ["Ultra-refreshing Citrus Accords", "Perfect for Daily Warm Weather", "Light & Non-staining Formula"]
  },
  {
    id: 4,
    category: "Best Sellers",
    name: "Midnight Royal Fragrance",
    price: 1899,
    originalPrice: 2299, // FIXED: Changed from string to pure number
    discount: "17% OFF",
    image: Sellers4,
    images: [Sellers4],
    video: "",
    description: "A magnetic evening fragrance weaving together sensual vanilla, rich tobacco undertones, and crisp cardamom.",
    details: ["Sophisticated Evening Profile", "High Sillage Performance", "Magnetic Cap Premium Design"]
  }
];