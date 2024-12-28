import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Trophy, Database, Code as CodeIcon, PhoneIcon } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AP1 from '../img/AP1.png';
import AP2 from '../img/AP2.png';
import AP3 from '../img/AP3.png';
import AP4 from '../img/AP4.png';
import Consultant from '../img/consulatnt.png';
import { useState, useEffect } from 'react';

// Counter Component to animate numbers from 0 to target value
const Counter: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 3; // Duration in seconds
    const increment = end / (duration * 100); // Increment per frame

    // Animation logic using setInterval
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start)); // Updating count value
      }
    }, 10); // Update every 10ms

    return () => clearInterval(counter); // Cleanup on unmount
  }, [value]);

  return <h3 className="text-2xl font-semibold">{count}+</h3>;
};

// Stats data for key metrics
const statsData = [
  { icon: Users, label: 'Live Sessions', value: 250 },
  { icon: BookOpen, label: 'Industry Projects', value: 5 },
  { icon: Trophy, label: 'Expert Coaching', value: 10 },
  { icon: Award, label: 'Success Rate', value: 95 },
];

const roles = [
  { title: 'Data Scientist', salary: '14.4 LPA', icon: Users },
  { title: 'AI Engineer', salary: '11.1 LPA', icon: Award },
  { title: 'AI Specialist', salary: '720.3 LPA', icon: Trophy },
  { title: 'AI Consultant', salary: '11.6 LPA', icon: Database },
  { title: 'Data Science Experts', salary: 'Varies', icon: CodeIcon },
];

const Home = () => {
    // Function to handle contact button click and confirmation
    const handleConsultantClick = () => {
      const userConfirmed = window.confirm('Do you want to call the consultant?');
      if (userConfirmed) {
        window.location.href = 'tel:+917709662008'; // Initiates a call
      }
    };
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About The Program Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-100 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-extrabold mb-12 text-gray-800 font-sans">
            About The Program
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Item 1 */}
            <motion.div
              className="flex flex-col justify-center items-center p-8 backdrop-blur-md shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, backgroundColor: '#ffffff' }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: ['#ffffff', '#b3e0ff', '#ffffff'], // color change cycle
              }}
              transition={{
                delay: 0.1,
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <img
                src={AP1}
                alt="Job Assistance"
                className="w-48 h-48 mb-6 object-contain" // Increased size
              />
              <p className="text-xl font-semibold text-gray-700">
                Guaranteed Job Placement in MNC's
              </p>
            </motion.div>
            {/* Item 2 */}
            <motion.div
              className="flex flex-col justify-center items-center p-8 backdrop-blur-md shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, backgroundColor: '#ffffff' }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: ['#ffffff', '#cce7ff', '#ffffff'],
              }}
              transition={{
                delay: 0.2,
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <img
                src={AP2}
                alt="Learn AI"
                className="w-48 h-48 mb-6 object-contain" // Increased size
              />
              <p className="text-xl font-semibold text-gray-700">
                Master Python and Generative AI
              </p>
            </motion.div>
            {/* Item 3 */}
            <motion.div
              className="flex flex-col justify-center items-center p-8 backdrop-blur-md shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, backgroundColor: '#ffffff' }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: ['#ffffff', '#b3e0ff', '#ffffff'],
              }}
              transition={{
                delay: 0.3,
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <img
                src={AP3}
                alt="Build Projects"
                className="w-48 h-48 mb-6 object-contain" // Increased size
              />
              <p className="text-xl font-semibold text-gray-700">
                Build Real-life Projects From Scratch
              </p>
            </motion.div>
            {/* Item 4 */}
            <motion.div
              className="flex flex-col justify-center items-center p-8 backdrop-blur-md shadow-lg rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20, backgroundColor: '#ffffff' }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: ['#ffffff', '#cce7ff', '#ffffff'],
              }}
              transition={{
                delay: 0.4,
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <img
                src={AP4}
                alt="Flexible Learning"
                className="w-48 h-48 mb-6 object-contain" // Increased size
              />
              <p className="text-xl font-semibold text-gray-700">
                Complete the Course Online at Your Own Pace
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600"
>
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-4xl font-semibold text-white mb-8">
      Accelerate Your Data Science Journey
    </h2>
    <p className="text-lg text-white mb-12">
      Unlock unparalleled career growth by mastering data science and AI skills.
    </p>

    {/* Stats Container */}
    <div className="relative">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1501594907352-d3d08700b3ae?fit=crop&w=500&h=500&q=80')] bg-cover bg-center opacity-30" />
      
      <div className="relative z-10 flex flex-wrap justify-around space-x-8">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}  // Hover scale effect
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="flex flex-col items-center space-y-4 mb-12 transform transition-all duration-300 ease-in-out"
          >
            {/* Icon */}
            <motion.div
              className="p-6 rounded-full bg-white hover:bg-indigo-600 shadow-lg transform transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <stat.icon className="h-10 w-10 text-indigo-600 hover:text-white" />
            </motion.div>

            {/* Counter */}
            <div className="text-5xl font-semibold text-white">
              <Counter value={stat.value} />
            </div>

            {/* Label */}
            <p className="text-lg font-semibold text-white">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.section>


      {/* Data Science & AI Roles Section */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-5xl font-semibold mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore Data Science & AI Roles</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {roles.map((role, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: index * 0.1 }}
          className="p-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500 shadow-lg transform transition flex flex-col items-center justify-center"
        >
          <h4 className="text-xl font-bold text-black">{role.title}</h4>
          <p className="text-lg font-semibold text-white">{role.salary}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="py-12 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
  <div className="absolute inset-0 bg-cover bg-center opacity-30" 
    style={{ backgroundImage: `url(${Consultant})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }} />
  
  <div className="relative z-10 flex items-center justify-between w-full max-w-screen-xl px-6">
    <div className="text-left max-w-lg space-y-8">
      <h3 className="text-5xl font-extrabold text-gray-800 leading-tight mb-6">
        Unlock Your Data Science Potential with Expert Consultation
      </h3>
      <p className="text-xl text-gray-700 mb-8">
        Our consultants are here to guide you through every stage of your data science journey. Whether you're starting or advancing, let's make progress together.
      </p>
      <button
        className="bg-indigo-600 text-white py-4 px-12 rounded-full text-xl font-semibold relative overflow-hidden group"
        onClick={handleConsultantClick}
      >
        <span className="flex items-center justify-center z-10">
          <PhoneIcon className="mr-3 h-6 w-6" />
          Call to Consultant
        </span>
        <span className="absolute inset-0 w-full h-full bg-indigo-800 opacity-0 group-hover:opacity-50 transition-all duration-500 transform group-hover:translate-x-full"></span>
      </button>
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;