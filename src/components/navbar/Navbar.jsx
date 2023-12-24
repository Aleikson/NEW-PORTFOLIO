import { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      {windowWidth <= 768 && <Sidebar />}

      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt; / &gt;
        </motion.span>

        <motion.div
          className='social'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className='nav'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.title.toLowerCase()}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
