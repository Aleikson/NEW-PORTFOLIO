import { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
            `,
      });
    };

    if (window.innerWidth > 900) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className='layers'>
      <div className='layers__container'>
        <div
          className='layers__item layer-1'
          style={{
            backgroundImage: 'url(/background.webp)',
          }}
        ></div>

        <motion.div
          className='slidingTextContainer'
          variants={sliderVariants}
          initial='initial'
          animate='animate'
        >
          Frontend & UI Designer
        </motion.div>

        <div className='layers__item layer-3'>
          <div className='hero-content'>
            <motion.h2 variants={textVariants}>Aleikson Silva</motion.h2>
            <motion.h1 variants={textVariants}>
              Desenvolvedor Frontend
            </motion.h1>
            <div className='hero-content__p'>
              dedicado a proporcionar excelência e qualidade em cada projeto.
            </div>
            <motion.div variants={textVariants} className='buttons'>
              <motion.img
                variants={textVariants}
                animate='scrollButton'
                src='/scroll.png'
                alt=''
              />
            </motion.div>
          </div>
        </div>

        <div className='layer-4'>
          <Navbar />
        </div>
      </div>

      {/*       <div
        className='layers__item layer-6'
        style={{ backgroundImage: 'url(../public/front-layer.png)' }}
      ></div> */}
    </section>
  );
};

export default Home;
