import React from 'react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, duration, level, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden transform transition-transform h-[400px] flex flex-col justify-between"
    >
      {/* Image Section */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 relative">
            {title}
            {/* Underline Effect */}
            <span className="absolute left-0 bottom-0 w-12 h-1 bg-blue-600 rounded-md"></span>
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <span className="mr-2 text-blue-600">⏱</span>
            {duration}
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-blue-600">📘</span>
            {level}
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="px-4 py-2 bg-gray-50 border-t">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
