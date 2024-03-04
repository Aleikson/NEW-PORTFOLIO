import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './social.scss';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function Social() {
  const location = useLocation();
  const [scrollText, setScrollText] = useState('WELCOME');
  const { t } = useTranslation();

  useEffect(() => {
    const routeToScrollText = {
      '/about': t('routes.ABOUT'),
      '/projects': t('routes.PROJECTS'),
      '/contact': t('routes.CONTACT'),
    };

    setScrollText(routeToScrollText[location.pathname] || t('routes.WELCOME'));
  }, [location.pathname, t]);

  return (
    <div className='socialMediaContainer'>
      <div className='footerContent'>
        <div className='socialContent'>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='https://www.linkedin.com/in/aleikson-frontend/'
            className='btn-flip'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='https://github.com/Aleikson'
            className='btn-flip'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href='https://wa.me/+559984557469'
            className='btn-flip'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <FaWhatsapp />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 1, duration: 1 }}
          className='scroll-indicator'
        >
          <span className='scroll-text'>{scrollText}</span>
          <div className='scroll-line'></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Social;
