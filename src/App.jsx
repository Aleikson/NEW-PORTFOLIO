import './app.scss';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      {/* testing Navbar */}
      <section>
        <Navbar />
      </section>
      <section>Home</section>
      <section>About</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
