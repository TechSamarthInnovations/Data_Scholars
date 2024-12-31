import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Home, Send, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data saved successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        // Handle non-2xx status codes
        const errorData = await response.json();
        console.error('Error response:', errorData);
        alert(`Failed to save form data: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      // Network or server errors
      console.error('Error:', error);
      alert('An error occurred while saving the form data. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 text-white flex items-center justify-center py-12 px-6">
      <div className="flex flex-col lg:flex-row lg:space-x-16 max-w-7xl w-full">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-4xl font-bold text-center lg:text-left">Contact Us</h1>
          <p className="text-gray-300 text-center lg:text-left">
            Have questions? We're here to help. Reach out to us, and we'll get back to you as soon as possible.
          </p>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center">
              <div className="bg-white text-black p-3 rounded-full shadow-md mr-4">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-400">Address</h3>
                <p className="text-gray-300">
                  Under Ground Floor, ICICI Bank,<br />Near Bhoj Hotel, INOX Tapadia, <br />Town Center, Aurangabad.
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center">
              <div className="bg-white text-black p-3 rounded-full shadow-md mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-400">Phone</h3>
                <a href="tel:+917709662008" className="text-gray-300 hover:underline">
                  +91 7709662008
                </a>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center">
              <div className="bg-white text-black p-3 rounded-full shadow-md mr-4">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-400">Email</h3>
                <a href="mailto:ssdatascholars@gmail.com" className="text-gray-300 hover:underline">
                  ssdatascholars@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-teal-400">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/datascholars" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-300 hover:text-pink-600" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61570051424469" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Contact Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 mt-12 lg:mt-0"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 focus:outline-none focus:border-teal-400 text-gray-900 py-2"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 focus:outline-none focus:border-teal-400 text-gray-900 py-2"
                  placeholder="Your Email Address"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 focus:outline-none focus:border-teal-400 text-gray-900 py-2"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b-2 focus:outline-none focus:border-teal-400 text-gray-900 py-2"
                  placeholder="Your Message"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-teal-400 text-white py-2 px-4 rounded-full w-full hover:bg-teal-500 transition"
              >
                Send Message
                <Send className="inline-block ml-2" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
