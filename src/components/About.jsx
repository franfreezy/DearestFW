import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full sm:w-[250px] md:w-[300px]">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-4"
          loading="lazy"
        />
        <h3 className="text-white text-lg md:text-xl font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-base sm:text-[17px] max-w-3xl leading-7 sm:leading-[30px]"
      >
        I am an Electronic and Computer Engineering Graduate from The Jomo Kenyatta University of Agriculture and Technology and a multilingual speaker with strong passion
        for machine learning, artificial intelligence, climate action, space science, data science and embedded systems. I am interested in exploring the intersection of
        technology and sustainability, particularly in how emerging technologies can be harnessed to address climate change and promote environmental conservation.
        I am eager to join an organisation that values innovation, collaboration, fairness and quality delivery and I am 
        confident that my accountability ethic and drive will help me succeed in any role that takes advantage of my skills and
        passion for Engineering.
      </motion.p>

      {/* Responsive Card Container */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
