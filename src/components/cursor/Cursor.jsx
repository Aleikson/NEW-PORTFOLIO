import { useEffect, useState } from 'react';
import './cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => {
      setIsClicked(true);
    };

    const mouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  const offsetX = 25;
  const offsetY = 50;

  return (
    <div>
      <div
        className={`cursor ${isClicked ? 'clicked' : ''}`}
        style={{ left: position.x + offsetX, top: position.y + offsetY }}
      ></div>
    </div>
  );
};

export default Cursor;
