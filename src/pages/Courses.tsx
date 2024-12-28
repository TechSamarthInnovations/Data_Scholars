import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import TechnologyGrid from '../components/TechnologyGrid';
import pythonImg from '../img/python.png';
import cloudDataImg from '../img/cloudData.png';
import dataAnalysisImg from '../img/dataAnalysis.png';
import bigDataImg from '../img/BigData.png';

const courses = [
  {
    title: 'Data Engineering & Analytics',
    description: 'Master the complete data engineering pipeline with hands-on projects',
    duration: '8 Months',
    level: 'Advanced',
    icon: dataAnalysisImg,
  },
  {
    title: 'Big Data Development',
    description: 'Learn to build and maintain large-scale data processing systems',
    duration: '6 Months',
    level: 'Intermediate',
    icon: bigDataImg,
  },
  {
    title: 'Cloud Data Engineering',
    description: 'Specialize in cloud-based data solutions and architectures',
    duration: '4 Months',
    level: 'Advanced',
    icon: cloudDataImg,
  },
  {
    title: 'Python Development',
    description: 'Learn Python for data manipulation and analysis',
    duration: '3 Months',
    level: 'Beginner',
    icon: pythonImg,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Our Courses
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Unlock your future with our comprehensive Data Science courses.
        </p>
      </motion.div>

      {/* Course Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-6"
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <section className="bg-gradient-to-b from-gray-800 via-blue-800 to-gray-900 py-20 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Technologies You'll Master</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hands-on experience with industry-demanded technologies in Data Science and Engineering.
            </p>
          </motion.div>
          <TechnologyGrid />
        </div>
      </section>

      
    </div>
  );
};

export default Courses;
