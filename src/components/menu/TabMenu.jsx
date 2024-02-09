import { useState, useEffect, useRef } from 'react';
import './tabMenu.scss';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Menu = ({ isVisible }) => {
  const [activeItem, setActiveItem] = useState(() => {
    const savedItem = parseInt(localStorage.getItem('activeItem'));
    return isNaN(savedItem) ? 0 : savedItem;
  });
  const menuBorderRef = useRef(null);

  const clickItem = (index) => {
    setActiveItem(index);
    localStorage.setItem('activeItem', index);
  };

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = activeItem;
  }, [activeItem]);

  const updateMenuBorderPosition = (index) => {
    const activeMenuItem = document.querySelector(
      `.menu__item:nth-child(${index + 1})`
    );
    const border = menuBorderRef.current;
    if (activeMenuItem && border) {
      const menuItemRect = activeMenuItem.getBoundingClientRect();
      border.style.transform = `translateX(${menuItemRect.left}px)`;
    }
  };

  useEffect(() => {
    updateMenuBorderPosition(activeItem);
  }, [activeItem]);

  return (
    <>
      {isVisible && (
        <menu className='menu'>
          {navLinks.map((item, index) => (
            <MenuItem
              key={item.id}
              index={index}
              link={item.link}
              icon={item.icon}
              active={activeItem === index}
              onClick={clickItem}
            />
          ))}
        </menu>
      )}
    </>
  );
};

const MenuItem = ({ index, link, icon, active, onClick }) => {
  return (
    <Link
      to={link}
      className={`menu__item ${active ? 'active' : ''}`}
      onClick={() => onClick(index)}
    >
      {icon}
    </Link>
  );
};

export default Menu;
