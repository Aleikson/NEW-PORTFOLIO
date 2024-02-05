import { motion } from 'framer-motion';
import React from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaCode,
  FaEnvelope,
} from 'react-icons/fa';
import { contactMedia, navLinks } from '../../constants';
import { Link } from 'react-router-dom';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const iconComponents = [FaHome, FaInfoCircle, FaTools, FaCode, FaEnvelope];

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
      <div className='linksWrapper'>
        {navLinks.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.link}
              style={{ color: item.title[0].color || 'inherit' }}
            >
              {React.createElement(iconComponents[index])}
              {item.title[0].txt}
            </Link>
          </motion.div>
        ))}
      </div>
      {/* <div className='social'>
              <ul>
                {contactMedia.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.icon}</a>
                  </li>
                ))}
              </ul>
            </div> */}
    </motion.div>
  );
};

export default Links;
