import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Phone, Mail } from 'lucide-react'; // Importing Phone and Mail icons from lucide-react

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-10 py-2"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Copyright in the Center */}
          <div className="text-center text-gray-400 text-sm font-mono">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              &copy; {new Date().getFullYear()} Data Scholars. All rights reserved.
            </motion.p>
          </div>

          {/* Social Media and Contact Info on the Right */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://www.facebook.com/profile.php?id=61570051424469&mibextid=ZbWKwL"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1], color: ['#FFF', '#Facc15', '#FFF'] }} // Color wave effect on hover
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Facebook size={24} className="text-gray-200 hover:text-yellow-400" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1], color: ['#FFF', '#0A66C2', '#FFF'] }} // Color wave effect on hover
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Linkedin size={24} className="text-gray-200 hover:text-blue-600" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/datascholars?igsh=MWRvZHZuN3Rwc25qZw=="
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1], color: ['#FFF', '#E4405F', '#FFF'] }} // Color wave effect on hover
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Instagram size={24} className="text-gray-200 hover:text-pink-600" />
            </motion.a>
            {/* Phone Icon with Color Wave and Animation */}
            <motion.a
              href="tel:+917709662008"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1], color: ['#FFF', '#34D399', '#FFF'] }} // Color wave effect on hover
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Phone size={24} className="text-gray-200 hover:text-teal-500" />
            </motion.a>
            {/* Email Icon with Color Wave and Animation */}
            <motion.a
              href="mailto:ssdatascholars@gmail.com"
              whileHover={{ scale: 1.2 }}
              animate={{ opacity: [1, 0.5, 1], color: ['#FFF', '#FBBF24', '#FFF'] }} // Color wave effect on hover
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <Mail size={24} className="text-gray-200 hover:text-yellow-500" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
