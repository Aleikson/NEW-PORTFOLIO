import { useState, useEffect, useRef } from 'react';
import './tabMenu.scss';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Menu = ({ isVisible }) => {
  const [activeItem, setActiveItem] = useState(0); // Estado local para el elemento activo
  const menuBorderRef = useRef(null);

  const clickItem = (index) => {
    setActiveItem(index);
  };

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
              title={item.title}
              link={item.link}
              icon={item.icon}
              active={activeItem === index}
              onClick={clickItem} // Pasar la función clickItem como prop
            />
          ))}
        </menu>
      )}
    </>
  );
};

const MenuItem = ({ title, link, icon, active, onClick, index }) => { // Se agrega index como prop
  return (
    <Link
      to={link}
      className={`menu__item ${active ? 'active' : ''}`}
      onClick={() => onClick(index)} // Llamar a la función onClick pasando el índice
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

export default Menu;
