import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 via-indigo-600 to-blue-800 font-sans text-white py-20">
      
      {/* Coaching Name and Introductory Text Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl font-poppins font-extrabold text-white mb-4"
        >
          Data_Scholars
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-inter">
          Decode The Future With Data...!
        </p>
      </section>

      <hr className="border-t-2 border-gray-300 mb-24" />

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.img
            src="/src/img/story.gif"
            alt="Vision GIF"
            className="w-full sm:w-80 mx-auto rounded-lg shadow-2xl hover:scale-105 transform transition duration-300"
          />
          <div>
            <h2 className="text-4xl font-poppins font-bold mb-4"> Our Story</h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-inter">
              Driven by a passion for data and a commitment to education, we aim to make data science accessible to all.
              With extensive industry experience, we understand the challenges of mastering this evolving field. Our
              carefully crafted courses combine practical projects, real-world applications, and expert mentorship,
              ensuring your learning journey is both impactful and rewarding. Whether you're beginning or advancing your
              career, we're here to guide you towards mastering data science and innovation.
            </p>
          </div>
        </div>
      </motion.section>

      <hr className="border-t-2 border-gray-300 mb-24" />

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-4xl font-poppins font-bold mb-4">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-inter">
              At <span className="font-bold text-teal-300">Data_Scholars</span>, our mission is to empower individuals
              with the technical expertise and practical skills needed to excel in data engineering, paving the way for
              successful careers in this rapidly evolving field.
            </p>
          </div>
          <motion.img
            src="/src/img/mission1.gif"
            alt="Mission GIF"
            className="w-full sm:w-80 mx-auto rounded-lg shadow-2xl hover:scale-105 transform transition duration-300"
          />
        </div>
      </motion.section>

      <hr className="border-t-2 border-gray-300 mb-24" />

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.img
            src="/src/img/vission.gif"
            alt="Vision GIF"
            className="w-full sm:w-80 mx-auto rounded-lg shadow-2xl hover:scale-105 transform transition duration-300"
          />
          <div>
            <h2 className="text-4xl font-poppins font-bold mb-4">Our Vision</h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-inter">
              Our vision at <span className="font-bold text-teal-300">Data_Scholars</span> is to be a leading platform
              that shapes the future of data engineering by providing accessible, cutting-edge education that empowers
              individuals to drive innovation and solve real-world challenges through data.
            </p>
          </div>
        </div>
      </motion.section>

      <hr className="border-t-2 border-gray-300 mb-24" />

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-white">Why Choose Us?</h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-inter">
            Join us at <span className="font-bold text-teal-300">Data_Scholars</span> and unlock your potential in the
            ever-growing field of data engineering.
          </p>
        </div>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <div style={{
            display: 'flex', 
            gap: '2rem', 
            overflowX: 'scroll', 
            scrollSnapType: 'x mandatory', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          }}>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Expert Instructors</h3>
              <p style={{ color: '#4A5568' }}>
                Learn from industry professionals with years of experience in data engineering.
              </p>
            </div>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hands-On Learning</h3>
              <p style={{ color: '#4A5568' }}>
                Gain practical experience through real-world projects and case studies.
              </p>
            </div>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Personalized Approach</h3>
              <p style={{ color: '#4A5568' }}>
                Our courses are designed to cater to learners at all levels, ensuring a tailored path for each individual.
              </p>
            </div>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Up-to-Date Content</h3>
              <p style={{ color: '#4A5568' }}>
                Stay ahead with training on the latest tools, technologies, and trends in data engineering.
              </p>
            </div>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Career Support</h3>
              <p style={{ color: '#4A5568' }}>
                We not only teach but help you build a successful career with job placement assistance and guidance.
              </p>
            </div>
            <div style={{
              flexShrink: '0', 
              width: '20rem', 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              color: '#004D4D', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              transition: 'box-shadow 0.3s', 
              scrollSnapAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Advanced Tools</h3>
              <p style={{ color: '#4A5568' }}>
                We provide you with the tools and resources necessary for mastering complex data engineering skills.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
