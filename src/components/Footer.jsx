import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-[#0f0f0f] text-[#a3a3a3] pt-16 pb-6 px-4 md:px-12 font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* ================= UPPER SECTION: Newsletter ================= */}
      <div className="max-w-7xl mx-auto text-center border-b border-neutral-800 pb-16 mb-16">
        <h2 className="text-[#c5a059] text-2xl md:text-3xl font-serif tracking-wide mb-2">
          Get Exclusive Offers
        </h2>
        <p className="text-sm md:text-base text-gray-300 font-light mb-8">
          Subscribe for latest arrivals & discounts
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-stretch max-w-xl mx-auto w-full gap-0">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-black px-4 py-3 w-full outline-none text-sm md:text-base transition-all placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="bg-[#c5a059] hover:bg-[#b08e49] text-black font-medium px-8 py-3 text-sm md:text-base transition-colors duration-300 whitespace-nowrap mt-3 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* ================= MIDDLE SECTION: Footer Content ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:gap-16 pb-12">
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col gap-4">
  {/* Wrapper taaki line sirf text ki width jitni hi bane */}
  <div className="inline-block max-w-max">
    {/* Custom Cursive Font Look via inline tailwind styling / serif text */}
    <h1 className="text-[#c5a059] text-3xl md:text-4xl italic font-serif tracking-wide select-none pb-1">
      Kanchan Luxe
    </h1>
    {/* EXACT IMAGE MATCH LINE: Gold color aur halke gap ke saath */}
    <span className="block h-[1px] w-full bg-[#c5a059] opacity-40"></span>
  </div>
     
  <p className="text-sm md:text-base font-light leading-relaxed max-w-sm mt-1">
    Luxury jewelry and fashion crafted to bring elegance, beauty, and timeless style into your wardrobe.
  </p>
</div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#c5a059] text-lg font-serif tracking-wide">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm md:text-base font-light">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#clothing" className="hover:text-white transition-colors">Clothing</a></li>
            <li><a href="#jewelry" className="hover:text-white transition-colors">Jewelry</a></li>
            <li><a href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Us & Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#c5a059] text-lg font-serif tracking-wide">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3.5 text-sm md:text-base font-light">
            <p>
              <span className="font-normal text-neutral-400">Email:</span>{' '}
              <a href="mailto:info@kanchanluxe.com" className="hover:text-white transition-colors">info@kanchanluxe.com</a>
            </p>
            <p>
              <span className="font-normal text-neutral-400">Phone:</span>{' '}
              <a href="tel:+918802628093" className="hover:text-white transition-colors">+91 8802628093</a>
            </p>
            <p>
              Mayur Vihar Phase-1 New Delhi, India
            </p>
          </div>

          {/* Social Icons (Instagram, Facebook, YouTube) */}
          <div className="flex items-center gap-5 mt-3 text-white">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#c5a059] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#c5a059] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#c5a059] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* ================= LOWER SECTION: Copyright ================= */}
      <div className="max-w-7xl mx-auto text-center border-t border-neutral-900 pt-6">
        <p className="text-xs md:text-sm text-neutral-600 font-light tracking-wide">
          &copy; 2026 Kanchan Luxe. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;