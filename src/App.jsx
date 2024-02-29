import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Social from './components/social/Social';
import Portfolio from './components/portfolio/Portfolio';
import Cursor from './components/cursor/Cursor';
import { Load } from './components/load/Load';
import TabMenu from './components/menu/TabMenu';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import translationEN from './components/locales/en.json';
import translationPT from './components/locales/pt.json';
import Switches from './components/switch';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showIntroduction ? (
        <>
          <Load />
        </>
      ) : (
        <>
          <Navbar />
          <Switches />
          <Cursor />
          <Routes>
            <Route
              path='/'
              element={
                <div className='sectionWrapper'>
                  <section>
                    <Home />
                  </section>
                </div>
              }
            />
            <Route
              path='about'
              element={
                <div className='sectionWrapper'>
                  <section
                    className='aboutSection'
                    style={{ height: windowWidth <= 768 ? 'auto' : '90vh' }}
                  >
                    <About />
                  </section>
                </div>
              }
            />
            <Route
              path='projects'
              element={
                <div className='sectionWrapper'>
                  <section style={{ height: '100vh' }}>
                    <Portfolio />
                  </section>
                </div>
              }
            />
            <Route
              path='contact'
              element={
                <div className='sectionWrapper'>
                  <section
                    style={{ height: windowWidth <= 768 ? 'auto' : '90vh' }}
                  >
                    <Contact />
                  </section>
                </div>
              }
            />
          </Routes>
          <Social />
          <TabMenu isVisible={windowWidth <= 568} />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
