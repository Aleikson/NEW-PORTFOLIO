/* import Sidebar from '../sidebar/Sidebar';
 */import './navbar.scss';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/*       <Sidebar />
       */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aleikson Silva
        </motion.span>
        <motion.div
          className='social'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className='nav'>
            <li>
              <a href='#'>Sobre</a>
            </li>
            <li>
              <a href='#'>Projetos</a>
            </li>
            <li>
              <a href='#'>Habilidades</a>
            </li>
            <li>
              <a href='#' className='contact'>
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
