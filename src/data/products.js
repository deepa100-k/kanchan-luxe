import newArrivals1 from "../assets/newarrivalscollection1.jpg";
import newArrivals2 from "../assets/newarrivalscollection2.jpg";
import newArrivals3 from "../assets/newarrivalscollection3.webp";
import newArrivals4 from "../assets/newarrivalscollection4.jpg";
import newArrivals5 from "../assets/newarrivalscollection5.webp";
import newArrivals6 from "../assets/newarrivalscollection6.jpg";
import newArrivals7 from "../assets/newarrivalscollection7.jpg";
import newArrivals8 from "../assets/newarrivalscollection8.jpg";

export const products = [
  {
    id: 1,
    category: "New Arrivals",
    name: "Elegant Summer Dress",
    price: 2499,
    originalPrice: 3299, // FIXED: Changed from string to pure number
    discount: "24% OFF",
    image: newArrivals1,
    images: [newArrivals1],
    video: "",
    description: "A breezy, premium cotton summer dress featuring a relaxed silhouette and delicate floral accents.",
    details: ["100% Breathable Cotton", "Lightweight Lining", "Perfect For Daytime Luxury"]
  },
  {
    id: 2,
    category: "New Arrivals",
    name: "Elegant Classy Summer Outfit",
    price: 3999,
    originalPrice: 5199,
    discount: "23% OFF",
    image: newArrivals2,
    images: [newArrivals2],
    video: "",
    description: "A coordinated premium two-piece summer set designed for effortless sophisticated styling.",
    details: ["Premium Linen Blend", "Tailored Contemporary Fit", "Includes Styled Coordinates"]
  },
  {
    id: 3,
    category: "New Arrivals",
    name: "Luxury Women's Coat",
    price: 4599,
    originalPrice: 5999,
    discount: "23% OFF",
    image: newArrivals3,
    images: [newArrivals3],
    video: "",
    description: "An iconic tailored outerwear piece structured with clean silhouettes and premium fall fabrics.",
    details: ["Premium Structured Fit", "Satin Interior Lining", "Insulated Winter Comfort"]
  },
  {
    id: 4,
    category: "New Arrivals",
    name: "Premium Denim Jacket",
    price: 2999,
    originalPrice: 4299,
    discount: "30% OFF",
    image: newArrivals4,
    images: [newArrivals4],
    video: "",
    description: "A vintage-washed premium heavy cotton denim jacket styled with custom metallic hardware customisations.",
    details: ["100% Heavyweight Cotton Denim", "Artisan Vintage Wash Effect", "Dual Chest Utility Pockets"]
  },
  {
    id: 5,
    category: "New Arrivals",
    name: "Casual Oversized Shirt",
    price: 1799,
    originalPrice: 2499,
    discount: "28% OFF",
    image: newArrivals5,
    images: [newArrivals5],
    video: "",
    description: "An ultra-soft casual oversized poplin shirt that seamlessly bridges luxury lounge and high street look.",
    details: ["Soft Premium Poplin Texture", "Dropped Shoulder Layout", "Easy-iron Finish Material"]
  },
  {
    id: 6,
    category: "New Arrivals",
    name: "Designer Handbag",
    price: 3499,
    originalPrice: 4799,
    discount: "27% OFF",
    image: newArrivals6,
    images: [newArrivals6],
    video: "",
    description: "A sleek vegan leather statement handbag featuring reinforced luxury handles and gold-toned brand accents.",
    details: ["Premium Grain Cruelty-Free Leather", "Polished Metallic Accents", "Multi-compartment Interior Space"]
  },
  {
    id: 7,
    category: "New Arrivals",
    name: "Premium Women Knitted Wear",
    price: 1299,
    originalPrice: 1999,
    discount: "35% OFF",
    image: newArrivals7,
    images: [newArrivals7],
    video: "",
    description: "A versatile fine-knit everyday essentials top delivering unparalleled comfort and modern sleek alignment.",
    details: ["Ultra-soft Ribbed Knit Material", "Stretch Retention Profile", "Minimalist Casual Geometry"]
  },
  {
    id: 8,
    category: "New Arrivals",
    name: "Premium Collection Ensemble",
    price: 4299,
    originalPrice: 5999,
    discount: "28% OFF",
    image: newArrivals8,
    images: [newArrivals8],
    video: "",
    description: "An exclusive limited-edition designer apparel layout highlighting high-tier handcrafted finesse.",
    details: ["Limited-Run Collection Exclusive", "High-Thread Count Architecture", "Signature Luxe Branding Marks"]
  }
];