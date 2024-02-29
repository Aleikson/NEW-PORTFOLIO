import { useState, useEffect, useRef } from 'react';
import './tabMenu.scss';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Menu = ({ isVisible }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [menuPosition, setMenuPosition] = useState(0);
  const menuRef = useRef(null);
  const prevScrollY = useRef(0);

  const clickItem = (index, event) => {
    event.preventDefault();
    setActiveItem(index);
  };

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
              key={item.id}
              index={index}
              title={item.title}
              link={item.link}
              icon={item.icon}
              active={activeItem === index}
              onClick={clickItem}
            />
          ))}
        </div>
      )}
    </>
  );
};

const MenuItem = ({ title, link, icon, active, onClick, index }) => {
  return (
    <Link
      to={link}
      className={`menu__item ${active ? 'active' : ''}`}
      onClick={(event) => onClick(index, event)}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default Menu;
