import './app.scss';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <div>
      {/* testing Navbar */}
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>About</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
