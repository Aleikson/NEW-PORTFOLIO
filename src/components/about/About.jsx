import { useRef, useState } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { modalInfo, services } from '../constants';
import { Tilt } from 'react-tilt';

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ServiceCard = ({ title, icon, description, skill }) => (
  <Tilt className='tiltContainerr' transition={{ duration: 0.5 }}>
    <motion.div className='tiltContent'>
      <div className='description'>
        <img src={icon} alt='web-development' className='img' />
        <h3 className='text'>{title}</h3>
        <p>{description}</p>
        <div className='spanColor'>
          {skill.map((skill, index) => (
            <span key={index} style={{ color: skill.color }}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const ref = useRef();
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (modalInfo) => {
    setSelectedService(modalInfo);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.div
      className='aboutContainer'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={'animate'}
    >
      <motion.div className='titleContainer' variants={variants}>
        <div className='ssd'>
          <motion.div>
            <p className='sectionSubText'>Introdução</p>
            <h2 className='sectionHeadText'>Visão Geral.</h2>
          </motion.div>
          <motion.p className='text-p'>
            Sou um desenvolvedor fronend experiente com habilidades em
            TypeScript e JavaScript, além de expertise em frameworks como React
            e Node.js. Sou um aprendiz rápido em criar soluções eficientes,
            escaláveis e amigáveis ao usuário, que resolvem problemas do mundo
            real.
          </motion.p>
          <motion.button
            style={{ alignSelf: 'flex-end' }}
            whileHover={{ scale: 1.1 }}
            onClick={() => openModal(modalInfo)}
          >
            Mais informações
          </motion.button>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        <div className='cardss'>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </motion.div>
      {selectedService && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='divImg'>
              <div className='author'>
                <img
                  src={selectedService[0].img}
                  alt={selectedService[0].title}
                />
                <h2>
                  ALEIKSON <span>SILVA</span>
                </h2>
                <p>Desenvolvedor Frontend</p>
              </div>
              <div className='list'>
                <ul>
                  {selectedService[0].links &&
                    selectedService[0].links.map((link, index) => (
                      <li key={index}>
                        <span>{link.icon}</span>
                        <a
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                </ul>
                <motion.button whileHover={{ scale: 1.1 }} className='btnCv'>
                  Curriculo
                </motion.button>
              </div>
            </div>
            <div className='rightSide'>
              <div className='infoContent'>
                <h1>Sobre Mim</h1>
                <p>{selectedService[0].description}</p>
              </div>

              <div className='infoContent'>
                <h1>Habilidades</h1>
                <ul>
                  {selectedService[0].skill &&
                    selectedService[0].skill.map((tech, index) => (
                      <li key={index} style={{ color: tech.color }}>
                        {tech.name}
                        {index < selectedService[0].skill.length - 1}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <button className='closeBtn' onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default About;
