import { useRef } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { Tilt } from 'react-tilt';

const variants = {
  initial: {
    x: -500,
    y: 100,
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
  <Tilt className='tiltContainerr'>
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

  return (
    <motion.div
      className='aboutContainer'
      variants={variants}
      initial='initial'
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          Eu foco em ajudar a sua marca a crescer
          <br /> e avançar.
        </p>
        <hr />
      </motion.div>

      <motion.div className='titleContainer' variants={variants}>
        <div className='ssd'>
          <motion.div>
            <p className='sectionSubText'>Introdução</p>
            <h2 className='sectionHeadText'>Visão Geral.</h2>
          </motion.div>

          <motion.p className='text-p'>
            Sou um desenvolvedor fronend experiente com habilidades em
            TypeScript e JavaScript, além de expertise em frameworks como React
            e Node.js. Sou um aprendiz rápido e colaboro de perto com os
            clientes para criar soluções eficientes, escaláveis e amigáveis ao
            usuário, que resolvem problemas do mundo real.
          </motion.p>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        {/* <div className='listContent'> */}

        <div className='cardss'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* </div> */}
      </motion.div>
    </motion.div>
  );
};

export default About;
