import {motion} from 'framer-motion';
import {styles} from '../styles';
import {staggerContainer} from '../utils/motion';

const StarWrapper = (Component, path) => {
  return function WrappedComponent () {
    return (
      <motion.section
        variants={staggerContainer ()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="slash-span" id={path}>
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default StarWrapper;
