
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-24"> {/* Add padding to avoid overlap with fixed header */}
        <Hero />
        <main>
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
