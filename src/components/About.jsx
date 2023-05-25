import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// ServiceCard component
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Introduction */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      {/* Description */}
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        "I am Vinod Kumar, a dedicated MERN stack developer with a passion for crafting exceptional web experiences. With a strong academic background in Bachelor of Computer Applications from Hindustan College of Arts and Science, Chennai, I proudly graduated in 2022 with an outstanding 74% score.

Complementing my academic achievements, I have relentlessly pursued certifications from Udemy and actively participated in bootcamps. These experiences have allowed me to expand my skills and stay at the forefront of web development.

My skill set encompasses a wide range of technologies, including HTML, CSS, JavaScript, MEAN stack, Next.js, REST API, Chat GPT, Vite, JSON, and Redux.js. I am proficient in leveraging these tools to create innovative and robust web applications that leave a lasting impression.

To further enhance my expertise, I have successfully completed several real-world projects, gaining valuable practical experience and refining my problem-solving abilities. These projects have equipped me with the necessary skills to excel in my career and deliver high-quality solutions to clients.

I am deeply passionate about web development and committed to staying up-to-date with the latest industry trends and advancements. Continual learning is at the core of my professional journey, empowering me to embrace new challenges and push boundaries in web development.

Thank you for visiting my about page, and I am excited to collaborate with you on exciting projects! Let's transform ideas into reality and create remarkable digital experiences together."

      </motion.p>
      
      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(About, 'about');
