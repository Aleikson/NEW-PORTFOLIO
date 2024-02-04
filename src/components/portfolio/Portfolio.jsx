import { useState } from 'react';
import './portfolio.scss';
import { portfolioData } from '../constants';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedItem(index);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleGalleryImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className='portfolio'>
      {portfolioData.map((item, index) => (
        <div className='container' key={index} onClick={() => openModal(index)}>
          <img src={item.imgSrc} alt={`Portfolio Item ${index + 1}`} />
          <div className='text'>{item.title}</div>
          <ul>
            {item.socialIcons.map((icon, i) => (
              <li key={i}>{icon}</li>
            ))}
          </ul>
          <div className='skewd'></div>
        </div>
      ))}
      {selectedItem !== null && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='divImg'>
              <img
                src={portfolioData[selectedItem].imgSrc}
                alt={`Portfolio Item ${selectedItem + 1}`}
              />
            </div>
            <h2>{portfolioData[selectedItem].title}</h2>
            <p>{portfolioData[selectedItem].description}</p>
            <p>
              Technologies:{' '}
              {portfolioData[selectedItem].technologies.map((tech, index) => (
                <span key={index} style={{ color: tech.color }}>
                  {tech.name}
                  {index <
                    portfolioData[selectedItem].technologies.length - 1 && ', '}
                </span>
              ))}
            </p>
            <div className='image-gallery'>
              {portfolioData[selectedItem].gallery.map((image, index) => (
                <div
                  key={index}
                  className={`image-wrapper image-wrapper-${index}`}
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className={index === selectedImageIndex ? 'active' : ''}
                    onClick={() => handleGalleryImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <button onClick={closeModal}>X</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;