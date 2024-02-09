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
import { useEffect, useState } from 'react';
import { modalInfo } from './components/constants';
import TabMenu from './components/menu/TabMenu';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntroduction(false);
    }, 2000);

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
          <Cursor />
          <Routes>
            <Route
              path='/'
              element={
                <section>
                  <Home />
                </section>
              }
            />
            <Route
              path='/about'
              element={
                <section
                  style={{ height: windowWidth <= 768 ? 'auto' : '90vh' }}
                >
                  <About modalInfo={modalInfo} />
                </section>
              }
            />
            <Route
              path='/projects'
              element={
                <section>
                  <Portfolio />
                </section>
              }
            />
            <Route
              path='/contact'
              element={
                <section
                  style={{ height: windowWidth <= 768 ? 'auto' : '90vh' }}
                >
                  <Contact />
                </section>
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
