import React from 'react';
import {BallCanvas} from './canvas';
import {technologies} from '../constants';
import {SectionWrapper} from '../hoc';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {textVariant} from '../utils/motion';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I've Explored So Far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Discover the Technologies I've Learned
        </h2>
      </motion.div>

      {technologies.map (technology => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper (Tech, 'tech');
