import { useState, useEffect, useRef } from 'react';
import './tabMenu.scss';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaCode } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';

const Menu = ({ isVisible }) => {
  const { t } = useTranslation();

  const navLinks = [
    {
      id: '1',
      title: t('navlinks.home'),
      link: '/',
      icon: <FaHome />,
    },
    {
      id: '2',
      title: t('navlinks.about'),
      link: '/about',
      icon: <FaInfo />,
    },
    {
      id: '3',
      title: t('navlinks.projects'),
      link: '/projects',
      icon: <FaCode />,
    },
    {
      id: '4',
      title: t('navlinks.contact'),
      link: '/contact',
      icon: <GrContact />,
    },
  ];

  const [activeItem, setActiveItem] = useState(
    parseInt(localStorage.getItem('activeItem')) || 0
  );
  const [scrollDirection, setScrollDirection] = useState('none');
  const [menuPosition, setMenuPosition] = useState(0);
  const menuRef = useRef(null);
  const prevScrollY = useRef(0);

  const clickItem = (index) => {
    setActiveItem(index);
    localStorage.setItem('activeItem', index);
  };

  useEffect(() => {
    const body = document.body;
    if (navLinks[activeItem]) {
      body.style.backgroundColor = navLinks[activeItem].color;
    }
  }, [activeItem]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < prevScrollY.current) {
      setScrollDirection('up');
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setMenuPosition(100);
    } else if (scrollDirection === 'up') {
      setMenuPosition(0);
    }
  }, [scrollDirection]);

  return (
    <>
      {isVisible && (
        <div
          className='menu'
          style={{ transform: `translateY(${menuPosition}%)` }}
          ref={menuRef}
        >
          {navLinks.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              link={item.link}
              icon={item.icon}
              active={activeItem === index}
              onClick={() => clickItem(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};

const MenuItem = ({ title, link, icon, active, onClick }) => {

  return (
    <Link
      to={link}
      className={`menu__item ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default Menu;
