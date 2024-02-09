import { FaHome, FaInfo, FaCode } from 'react-icons/fa';
import { CiGlobe, CiLinkedin } from 'react-icons/ci';
import { GrContact } from "react-icons/gr";
import { AiOutlineMail } from 'react-icons/ai';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

import webIcon from '/web.png';
import mobileIcon from '/mobile.png';
import creatorIcon from '/creator.png';
import project1Img from '/1.jpg';
import project2Img from '/2.jpg';
import project3Img from '/3.jpg';
import perfilImg from '/perfil.jpg';

export const navbar = [
  {
    id: '1',
    title: [
      {
        txt: 'Sobre',
        color: '#CCCCCD',
      },
    ],
    link: '/about',
  },
  {
    id: '2',
    title: [
      {
        txt: 'Projetos',
        color: '#CCCCCD',
      },
    ],
    link: '/projects',
  },
  {
    id: '3',
    title: [
      {
        txt: 'Contatos',
        color: '#ffc93c',
      },
    ],
    link: '/contact',
  },
];

export const navLinks = [
  {
    id: '1',
    title: 'Home',
    link: '/',
    icon: <FaHome />,
  },
  {
    id: '2',
    title: 'Sobre',
    link: '/about',
    icon: <FaInfo />,
  },
  {
    id: '3',
    title: 'Projetos',
    link: '/projects',
    icon: <FaCode />,
  },
  {
    id: '4',
    title: 'Contatos',
    link: '/contact',
    icon: <GrContact />,
  },
];

export const services = [
  {
    title: 'Design',
    icon: webIcon,
    description:
      'Priorizo criar estruturas de conteúdo simples, utilizando padrões de design limpos e interações cuidadosamente planejadas.',
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

export const projects = [
  {
    id: 1,
    title: 'LandScapeLens - Fullstack',
    img: project1Img,
    desc: 'desenvolvida para profissionais de fotografia de paisagens compartilharem e explorarem suas experiências visuais. O projeto oferece uma experiência envolvente e interativa, proporcionando aos usuários a capacidade de compartilhar suas fotos de paisagens favoritas, explorar novos locais através de um mapa interativo e conectar-se com outros entusiastas da fotografia.',
  },
  {
    id: 2,
    title: 'BackpackerStay',
    img: project2Img,
    desc: 'desenvolvida para viajantes e mochileiros encontrarem acomodações acessíveis e acolhedoras em suas jornadas. Este projeto tem como objetivo oferecer uma experiência simplificada e conveniente para os usuários encontrarem hospedagens adequadas às suas necessidades enquanto exploram novos destinos ao redor do mundo.',
  },
  {
    id: 3,
    title: 'Taskify',
    img: project3Img,
    desc: ' aplicação Full-Stack desenvolvida com React e Firebase, projetada para ajudar os usuários a organizarem suas tarefas diárias e melhorarem sua produtividade. Esta plataforma oferece uma abordagem simplificada e eficiente para gerenciar listas de afazeres e rotinas, permitindo que os usuários se concentrem em suas prioridades e alcancem seus objetivos com mais facilidade.',
  },
];

export const portfolioData = [
  {
    imgSrc: project1Img,
    title: 'LandScapeLens - Fullstack',
    description:
      'desenvolvida para profissionais de fotografia de paisagens compartilharem e explorarem suas experiências visuais. O projeto oferece uma experiência envolvente e interativa, proporcionando aos usuários a capacidade de compartilhar suas fotos de paisagens favoritas, explorar novos locais através de um mapa interativo e conectar-se com outros entusiastas da fotografia.',
    technologies: [
      {
        name: 'Frontend',
        description:
          'React.js para uma interface de usuário dinâmica e responsiva, oferecendo uma experiência de usuário intuitiva e atraente.',
        color: '#61DAFB',
      },
      {
        name: 'Backend',
        description:
          'Node.js e Express.js para o desenvolvimento de uma API robusta, gerenciamento de autenticação de usuários e interação com o banco de dados MongoDB.',
        color: '#339933',
      },
      {
        name: 'Banco de dados',
        description:
          'MongoDB é utilizado para armazenar informações sobre usuários, postagens, locais e rotas, proporcionando escalabilidade e flexibilidade para o crescimento da plataforma.',
        color: '#47A248',
      },
    ],
    //gallery: [project1Img, project1Img, project1Img],
    socialIcons: [<FaGithub key='i' />, <CiGlobe key='i' />],
  },
  {
    imgSrc: project2Img,
    title: 'BackpackerStay',
    description:
      'desenvolvida para viajantes e mochileiros encontrarem acomodações acessíveis e acolhedoras em suas jornadas. Este projeto tem como objetivo oferecer uma experiência simplificada e conveniente para os usuários encontrarem hospedagens adequadas às suas necessidades enquanto exploram novos destinos ao redor do mundo.',
    technologies: [
      {
        name: 'Frontend',
        description:
          'React.js para uma interface de usuário dinâmica e responsiva, oferecendo uma experiência de usuário intuitiva e atraente.',
        color: '#61DAFB',
      },
      {
        name: 'Backend',
        description:
          'Node.js e Express.js para o desenvolvimento de uma API robusta, gerenciamento de autenticação de usuários e interação com o banco de dados MongoDB.',
        color: '#339933',
      },
      {
        name: 'Banco de dados',
        description:
          'MongoDB é utilizado para armazenar informações sobre usuários, postagens, locais e rotas, proporcionando escalabilidade e flexibilidade para o crescimento da plataforma.',
        color: '#47A248',
      },
    ],
    //gallery: [project1Img, project1Img, project1Img],
    socialIcons: [<FaGithub key='i' />, <CiGlobe key='i' />],
  },
  {
    imgSrc: project3Img,
    title: 'Taskify',
    description:
      'aplicação Full-Stack desenvolvida com React e Firebase, projetada para ajudar os usuários a organizarem suas tarefas diárias e melhorarem sua produtividade. Esta plataforma oferece uma abordagem simplificada e eficiente para gerenciar listas de afazeres e rotinas, permitindo que os usuários se concentrem em suas prioridades e alcancem seus objetivos com mais facilidade.',
    technologies: [
      {
        name: 'Frontend',
        description:
          'React.js para uma interface de usuário dinâmica e responsiva, oferecendo uma experiência de usuário intuitiva e atraente.',
        color: '#61DAFB',
      },
      {
        name: 'Banco de dados',
        description:
          'Firebase: uma plataforma de desenvolvimento de aplicativos móveis e da web da Google. Oferece diversos serviços, incluindo autenticação de usuários, armazenamento em nuvem, banco de dados em tempo real, hospedagem, análise de dados e mensagens.',
        color: '#FFCA28',
      },
    ],
    //gallery: [project1Img, project1Img, project1Img, project1Img],
    socialIcons: [<FaGithub key='i' />, <CiGlobe key='i' />],
  },
];

export const modalInfo = [
  {
    img: perfilImg,
    description:
      'Sou um desenvolvedor frontend experiente com habilidades em TypeScript e JavaScript, além de expertise em frameworks como React e Node.js. Sou um aprendiz rápido em criar soluções eficientes, escaláveis e amigáveis ao usuário, que resolvem problemas do mundo real.',
    links: [
      {
        icon: <CiLinkedin />,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/seu_perfil_linkedin/',
      },
      {
        icon: <AiOutlineMail />,
        name: 'E-mail',
        url: 'mailto:seu_email@example.com',
      },
      {
        icon: <FaGithub />,
        name: 'Github',
        url: 'https://github.com/seu_username',
      },
      { icon: <FaWhatsapp />, name: '1234567890', url: 'tel:+1234567890' },
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
