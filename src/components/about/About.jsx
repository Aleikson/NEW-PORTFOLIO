import { useRef, useState, useEffect } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import webIcon from '../../assets/web.png';
import mobileIcon from '../../assets/mobile.png';
import creatorIcon from '../../assets/creator.png';
import perfilImg from '../../assets/perfil.jpg';
import { IoMdArrowDropright } from 'react-icons/io';
import { CiLinkedin } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const services = [
  {
    title: 'Design',
    icon: webIcon,
    description:
      'Priorizo criar estruturas de conteúdo simples, utilizando padrões de design limpos e interações planejadas.',
    skill: [
      { name: 'UX', color: '#56ccf2' },
      { name: 'UI', color: '#11998e' },
      { name: 'Web', color: '#ec008c' },
      { name: 'Apps', color: '#56ccf2' },
    ],
  },
  {
    title: 'FrontEnd',
    icon: mobileIcon,
    description:
      'Habilidade em desenvolver código do zero e transformar conceitos em realidade diretamente no navegador.',
    skill: [
      { name: 'JS', color: '#F7DF1E' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Typescript', color: '#3178C6' },
      { name: 'Tailwind', color: '#38B2AC' },
    ],
  },
  {
    title: 'BackEnd',
    icon: creatorIcon,
    description:
      'Estou me desenvolvendo na área do back-end, criando soluções para a parte "back" de sistemas web.',
    skill: [
      { name: 'Node', color: '#339933' },
      { name: 'Insomnia', color: '#5849BE' },
      { name: 'MongoDB', color: '#47A248' },
    ],
  },
];

const modalInfo = [
  {
    img: perfilImg,
    description:
      'Sou um desenvolvedor frontend experiente com habilidades em TypeScript e JavaScript, além de expertise em frameworks como React e Node.js. Sou um aprendiz rápido em criar soluções eficientes, escaláveis e amigáveis ao usuário, que resolvem problemas do mundo real.',
    links: [
      {
        icon: <CiLinkedin />,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/aleikson-frontend/',
      },
      {
        icon: <AiOutlineMail />,
        name: 'E-mail',
        url: 'mailto:aleiksonsilva@hotmail.com',
      },
      {
        icon: <FaGithub />,
        name: 'Github',
        url: 'https://github.com/Aleikson',
      },
      {
        icon: <FaWhatsapp />,
        name: '+55 99 98455-7469',
        url: 'tel:+5599984557469',
      },
    ],
    skill: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'Typescript' },
      { name: 'Node' },
      { name: 'Express' },
      { name: 'MongoDB' },
    ],
  },
];

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

const ServiceCard = ({ title, icon, skill }) => {
  const { t } = useTranslation();

  return (
    <Tilt className='tiltContainerr' transition={{ duration: 0.5 }}>
      <motion.div className='tiltContent'>
        <div className='description'>
          <img src={icon} alt='web-development' className='img' />
          <h3 className='text'>{t(`services.${title}.title`)}</h3>
          <p>{t(`services.${title}.description`)}</p>
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
};

const About = () => {
  const modalRef = useRef();
  const [selectedService, setSelectedService] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      animate='animate'
    >
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        className='ssd'
      >
        <p className='sectionSubText'>{t('about.introduction')}</p>
        <h2 className='sectionHeadText'>{t('about.overview')}</h2>
        <motion.p className='text-p'>{t('about.description')}</motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => openModal(modalInfo)}
        >
          {t('about.moreInfo')}
        </motion.button>
      </motion.div>

      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        className='cardss'
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </motion.div>

      {selectedService && (
        <div className='modal'>
          <div className='modal-content' ref={modalRef}>
            <div className='divImg'>
              <div className='author'>
                <img
                  src={selectedService[0].img}
                  alt={selectedService[0].title}
                />
                <h2>
                  ALEIKSON <span>SILVA</span>
                </h2>
                <p>{t('about.frontendDeveloper')}</p>
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
                <a
                  href='/Aleikson.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <motion.button className='btnCv' whileHover={{ scale: 1.1 }}>
                    {t('about.resume')}
                  </motion.button>
                </a>
              </div>
            </div>
            <div className='rightSide'>
              <div className='infoContent'>
                <h1>{t('about.aboutMe')}</h1>
                <p> {t('about.description')}</p>
              </div>
              <div className='infoContent'>
                <h1>{t('about.skills')}</h1>
                <div className='list'>
                  <ul>
                    {selectedService[0].skill &&
                      selectedService[0].skill.map((tech, index) => (
                        <li key={index} style={{ color: tech.color }}>
                          <span className='icon'>
                            <IoMdArrowDropright />
                          </span>
                          {tech.name}
                          {index < selectedService[0].skill.length - 1}
                        </li>
                      ))}
                  </ul>
                </div>
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
