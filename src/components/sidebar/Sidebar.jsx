import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import './sidebar.scss';
import ToggleButton from './toggleBtn/ToggleBtn';
import { useLocation } from 'react-router-dom';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(0px at 0px 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const [scrollText, setScrollText] = useState('Welcome');

  useEffect(() => {
    const routeToScrollText = {
      '/about': 'Sobre',
      '/projects': 'Projetos',
      '/contact': 'Contatos',
    };

    setScrollText(routeToScrollText[location.pathname] || 'Welcome');
  }, [location.pathname]);

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <div className='sideNav'>
        <h2>{scrollText}</h2>
        <ToggleButton setOpen={setOpen} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
