import { useRef } from 'react';
import './about.scss';
import { motion } from 'framer-motion';
import { services } from '../constants';

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

const About = () => {
  const ref = useRef();

  return (
    <motion.div
      className='services'
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
            Sou um desenvolvedor de software experiente com habilidades em
            TypeScript e JavaScript, além de expertise em frameworks como React,
            Node.js e Three.js. Sou um aprendiz rápido e colaboro de perto com
            os clientes para criar soluções eficientes, escaláveis e amigáveis
            ao usuário, que resolvem problemas do mundo real. Vamos trabalhar
            juntos para dar vida às suas ideias!
          </motion.p>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        {services.map((service, index) => (
          <motion.div key={index} className='box' variants={variants}>
            <div className='card'>
              <div
                className='card-image'
                style={{ backgroundImage: `url(${service.bgCard})` }}
              ></div>
              <div className='card-text'>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <p>{service.skill}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
