import { useTranslation } from 'react-i18next';
import './home.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  MainAnimate: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { delay: 1, duration: 1 },
  },
  secAnimate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h1 variants={textVariants}>{t('home.title')}</motion.h1>
          <div className='subtitle'>
            <motion.h2 variants={textVariants}>{t('home.subtitle')}</motion.h2>
          </div>
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate={['mainAnimation', 'secAnimate']}
      >
        {t('home.aniText')} & UI Designer
      </motion.div>
    </div>
  );
};

export default Home;
