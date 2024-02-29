import { FaHome, FaInfo, FaCode } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';


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






