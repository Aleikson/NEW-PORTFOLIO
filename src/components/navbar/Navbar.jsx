import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import './navbar.scss';

const navbar = [
  {
    id: '1',
    title: [
      {
        txt: 'Sobre',
        color: '#CCCCCD',
      },
    ],
    link: '/about',
  },
  {
    id: '2',
    title: [
      {
        txt: 'Projetos',
        color: '#CCCCCD',
      },
    ],
    link: '/projects',
  },
  {
    id: '3',
    title: [
      {
        txt: 'Contatos',
        color: '#ffc93c',
      },
    ],
    link: '/contact',
  },
];

const delayMap = {
  1: 2,
  2: 1.5,
  3: 1,
};

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isProjectRoute = location.pathname === '/projects';
  const navbarClass = isProjectRoute ? 'navbar navbar-fixed' : 'navbar';

  return (
    <motion.div className={navbarClass}>
      <div className='wrapper'>
        <Link className='home' to='/'>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 1, duration: 1 }}
          >
            AS
          </motion.span>
        </Link>
        <motion.div className='social'>
          <ul className='nav'>
            {navbar.map((link) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: delayMap[link.id], duration: 1 }}
                href={link.link}
              >
                <span>
                  <Link
                    to={link.link}
                    style={{ color: link.title[0].color || 'inherit' }}
                  >
                    {t(`navbar.${link.title[0].txt.toLowerCase()}`)}
                  </Link>
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
