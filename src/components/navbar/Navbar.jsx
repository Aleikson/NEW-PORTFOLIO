import { Link } from 'react-router-dom';
import './navbar.scss';
import { motion } from 'framer-motion';
import { navbar } from '../constants';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <Link className='home' to='/'>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            AS
          </motion.span>
        </Link>
        <motion.div
          className='social'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className='nav'>
            {navbar.map((link) => (
              <li href={link.link} key={link.id}>
                <span>
                  <Link
                    to={link.link}
                    style={{ color: link.title[0].color || 'inherit' }}
                  >
                    {link.title[0].txt}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
