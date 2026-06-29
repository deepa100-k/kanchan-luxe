import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="">

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tight">
              About Us
            </h1>

            <p className="text-base md:text-lg font-light text-gray-200 tracking-wide max-w-xl">
              Fashion Crafted With Elegance & Passion
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8">
              Welcome to Kanchan Luxe. We believe fashion is more
              than clothing and jewelry—it is a reflection of your
              personality. Our mission is to provide premium,
              stylish, and timeless collections that make every
              customer feel confident and beautiful.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              From carefully selected fabrics to elegant jewelry
              pieces, every product is chosen with quality and
              sophistication in mind.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f8f5f2] py-20 px-5">

        <h2 className="text-4xl font-bold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-3">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully selected products crafted with quality
              materials.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-3">
              Modern Designs
            </h3>

            <p className="text-gray-600">
              Trendy and elegant collections for every occasion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold mb-3">
              Customer First
            </h3>

            <p className="text-gray-600">
              Dedicated support and a seamless shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-5">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Our vision is to become a trusted fashion and jewelry
            destination where style meets confidence. We strive to
            inspire customers with collections that blend elegance,
            comfort, and affordability.
          </p>

        </div>

      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-3xl p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            Discover Your Style
          </h2>

          <p className="text-gray-300 mb-8">
            Explore our latest fashion and jewelry collections.
          </p>

    <Link
  to="/"
  className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
>
  Shop Now
</Link>
        </div>
      </section>

    </div>
  );
};

export default About;