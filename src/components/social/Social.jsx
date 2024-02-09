import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './social.scss';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

function Social() {
  const location = useLocation();
  const [scrollText, setScrollText] = useState('WELCOME');

  useEffect(() => {
    const routeToScrollText = {
      '/about': 'SOBRE',
      '/projects': 'PROJETOS',
      '/contact': 'CONTATOS',
    };

    setScrollText(routeToScrollText[location.pathname] || 'WELCOME');
  }, [location.pathname]);

  return (
    <div className='socialMediaContainer'>
      <div className='footerContent'>
        <div className='socialContent'>
          <motion.a whileHover={{ scale: 1.1 }} href='#' className='btn-flip'>
            <FaLinkedinIn />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#' className='btn-flip'>
            <FiGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href='#' className='btn-flip'>
            <FaWhatsapp />
          </motion.a>
        </div>
        <div className='scroll-indicator'>
          <span className='scroll-text'>{scrollText}</span>
          <div className='scroll-line'></div>
        </div>
      </div>
    </div>
  );
}

export default Social;
