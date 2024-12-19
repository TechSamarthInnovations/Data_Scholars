import React from 'react';
import { motion } from 'framer-motion';
import SupportCard from '../components/SupportCard';
import TestimonialCard from '../components/TestimonialCard';
import DataScienceAnime from '../img/guarantee.png'; // Updated image

import {
  BookOpen,
  Users,
  FileEdit,
  UserCheck,
  MessageSquare,
  Target,
  Library,
  Headphones,
} from 'lucide-react';

// Support services data
const supportServices = [
  {
    title: 'Placement Support',
    description: 'Get personalized guidance for job placements and career opportunities.',
    Icon: Target,
  },
  {
    title: 'Profile Building',
    description: 'Expert assistance in creating compelling LinkedIn and job portal profiles.',
    Icon: UserCheck,
  },
  {
    title: 'Resume Building',
    description: 'One-on-one sessions to craft an impressive resume that stands out.',
    Icon: FileEdit,
  },
  {
    title: 'Mock Interviews',
    description: 'Practice with industry-standard interview questions and get feedback.',
    Icon: Users,
  },
  {
    title: 'Soft Skills Training',
    description: 'Enhance your communication, leadership, and teamwork skills for career success.',
    Icon: Headphones,
  },
  {
    title: 'Doubt Sessions',
    description: 'Regular sessions to clarify concepts and strengthen your understanding.',
    Icon: MessageSquare,
  },
  {
    title: 'Library Access',
    description: 'Access to comprehensive study materials, notes, and resources.',
    Icon: Library,
  },
  {
    title: 'Live Project Experience',
    description: 'Work on real-world projects to gain practical experience and boost your portfolio.',
    Icon: FileEdit,
  },
  {
    title: 'Certification',
    description: 'Resources and support to help you earn industry-recognized certifications.',
    Icon: BookOpen,
  },
];

// Testimonials data
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Data Engineer',
    company: 'Tech Solutions Inc.',
    testimonial:
      'The career support team helped me land my dream job. Their mock interviews and resume building sessions were invaluable.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Big Data Developer',
    company: 'DataCorp',
    testimonial:
      'The mentorship program and placement support were game-changers in my career transition.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80',
  },
];

const CareerSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 py-20">
      
      {/* Career Support Section with Enhanced Anime Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left side text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-6">
            Elevate Your Career with Our Support
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Get personalized guidance, hands-on mentoring, and access to resources that will supercharge your career in data engineering.
          </p>
          <a href="/courses" className="bg-teal-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-teal-700 transition duration-300 ease-in-out">
  Get Started
</a>

        </div>

        {/* Right side anime image with added animations */}
        <div className="flex justify-center md:justify-end md:w-1/2">
          <motion.img
            src={DataScienceAnime}
            alt="Data Science Anime"
            className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-3xl shadow-lg opacity-90"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 5, -5, 0], // Subtle rotation for professionalism
            }}
            transition={{
              duration: 1.2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </div>

      {/* Support Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <SupportCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear how our students transitioned into successful careers with our support.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-20 mt-20 rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Now</h2>
          <p className="text-xl mb-8">
            Ready to take the next step? Join our career support program and start your journey today.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium shadow-lg transition duration-300 ease-in-out">
            <a href="/contact">Contact Us</a>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default CareerSupport;
