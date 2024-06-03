
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import BuildingsForSale from '../components/BuildingsForSale';


const Home = () => {
  return (
    <div>

      <div className="pt-1">
        <Hero />
        
        <main>
          <Services />
          <Projects />
          <BuildingsForSale />
          <Contact />
          <About />
        </main>
      </div>
    </div>
  );
}

export default Home;
