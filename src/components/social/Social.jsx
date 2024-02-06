import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './social.scss';
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
          <a href='#' className='btn-flip'>
            <FaLinkedinIn />
          </a>
          <a href='#' className='btn-flip'>
            <FiGithub />
          </a>
          <a href='#' className='btn-flip'>
            <FaWhatsapp />
          </a>
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
