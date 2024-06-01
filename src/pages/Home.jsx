
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <div>

      <div className="pt-24"> {/* Add padding to avoid overlap with fixed header */}
        <Hero />
        
        <main>
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default Home;
