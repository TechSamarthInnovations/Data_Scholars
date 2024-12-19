import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SupportCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const SupportCard: React.FC<SupportCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
    >
      {/* Colorful Icon with gradient */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <motion.div
          className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-2 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }} // Slight scale on hover
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>
      </div>

      {/* Title with Animated Color */}
      <motion.h3
        className="text-xl font-extrabold text-gray-800 mb-2 transition-colors hover:text-teal-500"
        whileHover={{ color: '#1abc9c' }} // Changes color on hover
      >
        {title}
      </motion.h3>

      {/* Description with subtle animation */}
      <motion.p
        className="text-gray-600 text-base transition-all"
        whileHover={{ opacity: 0.8, scale: 1.05 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SupportCard;
