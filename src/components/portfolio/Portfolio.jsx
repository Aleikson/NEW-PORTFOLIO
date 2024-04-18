import { useRef, useState, useEffect } from 'react';
import './portfolio.scss';
import { motion, useScroll } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
import project1Img from '../../assets/1.png';
import project2Img from '../../assets/buildingProject.png';
import project3Img from '../../assets/buildingProject.png';

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Portfolio = () => {
  const ref = useRef();
  const modalRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = scrollYProgress;
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (selectedItem !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedItem]);

  const projects = [
    {
      imgSrc: project1Img,
      title: t('projects.0.title'),
      description: t('projects.0.desc'),
      objective: t('projects.0.objective'),
      linkGit: 'https://github.com/Aleikson/HOTEL-FRONT',
      link: 'https://house-bay.onrender.com/',
    },
    {
      imgSrc: project2Img,
      title: t('projects.1.title'),
      description: t('projects.1.desc'),
      objective: t('projects.1.objective'),
      linkGit: '',
      link: '',
    },
    {
      imgSrc: project3Img,
      title: t('projects.2.title'),
      description: t('projects.2.desc'),
      objective: t('projects.2.objective'),
      linkGit: '',
      link: '',
    },
  ];

  const openModal = (index) => {
    setSelectedItem(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className='portfolio' ref={ref}>
      {projects.map((item, index) => (
        <section className='secProject' key={index}>
          <motion.div
            initial='initial'
            animate='animate'
            variants={variants}
            className='container'
          >
            <div className='wrapper'>
              <div className='imageContainer'>
                <img src={item.imgSrc} alt='' />
              </div>
              <div className='textContainer' style={{ y: scrollYProgress }}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button onClick={() => openModal(index)}>
                  {t('portfolio.readMore')}
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
      <div className='progress'>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {selectedItem !== null && (
        <div className='modal' ref={modalRef}>
          <div className='modal-content'>
            <div className='divImg'>
              <div className='imgTitle'>
                <img
                  src={projects[selectedItem].imgSrc}
                  alt={`Portfolio Item ${selectedItem + 1}`}
                />
              </div>
            </div>
            <div className='infoProject'>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>{projects[selectedItem].title}</h2>
                <div className='btnLinks'>
                  <a
                    href={projects[selectedItem].linkGit}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGithub />
                    Github
                  </a>
                  <a
                    href={projects[selectedItem].link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <CiGlobe />
                    Site
                  </a>
                </div>
              </div>
              <p>{projects[selectedItem].description}</p>
              <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>
                {t('portfolio.objective')}
              </h2>
              <p>{projects[selectedItem].objective}</p>
            </div>
            <button className='closeBtn' onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
