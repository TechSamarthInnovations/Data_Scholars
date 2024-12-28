import React, { useState, useEffect } from 'react';
import c1 from '../img/c11 (1).jpg';
import c2 from '../img/c11 (2).jpg';
import c3 from '../img/c11 (3).jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const images = [c1, c2, c3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="hero-section text-white py-10">
      <div className="carousel-container relative w-full h-[400px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="carousel-slide"
          className="w-full h-full object-contain transition-all duration-1000 ease-in-out"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black opacity-50 p-3 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black opacity-50 p-3 rounded-full"
        >
          &#62;
        </button>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Your Journey to Becoming Expert Begins Here!
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        Whether you're a graduate or looking to upskill, our 8-month PG Program...        </p>
        <div className="flex justify-center gap-6">
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold">
            <a href="/Courses">Explore Courses</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

